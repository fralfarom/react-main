import { useEffect, useRef, useState } from "react"
import { OnChangeArgs, Product } from "../interfaces/interfaces"

interface Props {
    product: Product
    onChange?: (args: OnChangeArgs) => void
    value?: number
}

export const useProducts = ({ product, onChange, value = 0 }: Props) => {
    const [counter, setCounter] = useState(value)
    const isControlled = useRef(!!onChange)

    const increaseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0)

        if (isControlled.current && onChange) return onChange({ count: value, product })

        setCounter(newValue)

        onChange && onChange({ count: newValue, product })
    }

    useEffect(() => {
        setCounter(value)
    }, [value])

    return {
        counter,
        increaseBy
    }
}