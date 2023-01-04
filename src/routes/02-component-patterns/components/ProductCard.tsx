import { createContext } from 'react';

import { useProducts } from '../hooks/useProducts';
import { ProductContextProps, Product, OnChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children: (args: ProductCardHandlers) => JSX.Element
    className?: string;
    style?: React.CSSProperties
    onChange?: (args: OnChangeArgs) => void
    value?: number
    initialValues?: InitialValues
}


export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProducts({ onChange, product, value, initialValues })

    return (
        <Provider value={{
            counter,
            product,
            maxCount,
            increaseBy
        }}>
            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {children({
                    count: counter,
                    product,
                    maxCount,
                    isMaxCountReached,
                    reset,
                    increaseBy: increaseBy,
                })}
            </div>
        </Provider>
    )
}