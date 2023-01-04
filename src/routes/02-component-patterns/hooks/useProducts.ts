import { useEffect, useRef, useState } from "react"
import { InitialValues, OnChangeArgs, Product } from "../interfaces/interfaces"

interface Props {
    product: Product
    onChange?: (args: OnChangeArgs) => void
    value?: number
    initialValues?: InitialValues
}

export const useProducts = ({ product, onChange, value = 0, initialValues }: Props) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value)
    const isMounted = useRef(false)

    const increaseBy = (value: number) => {
        let newValue = Math.max(counter + value, 0)

        newValue = initialValues?.maxCount ? Math.min(newValue, initialValues.maxCount) : newValue

        setCounter(newValue)

        onChange && onChange({ count: newValue, product })
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }


    useEffect(() => {
        if (!isMounted.current) return

        setCounter(value)
    }, [value])

    useEffect(() => {
        isMounted.current = true
    }, [])


    return {
        counter,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,

        reset,
        increaseBy,
    }
}