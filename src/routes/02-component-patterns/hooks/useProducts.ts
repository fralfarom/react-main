import { useEffect, useState } from "react"
import { OnChangeArgs, Product } from "../interfaces/interfaces"

interface Props {
    product: Product
    onChange?: (args: OnChangeArgs) => void
    value?: number
}

export const useProducts = ({ product, onChange, value = 0 }: Props) => {
    const [counter, setCounter] = useState(value)

    const increaseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0)

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