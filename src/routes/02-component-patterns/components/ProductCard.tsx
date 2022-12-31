import styles from '../styles/styles.module.css'
import { useProducts } from '../hooks/useProducts'
import { createContext } from 'react'
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces'
import { ProductImage } from './ProductImage'
import { ProductTitle } from './ProductTitle'
import { ProductButtons } from './ProductButtons'


export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext



export const ProductCard = ({ product, children }: ProductCardProps) => {
    const { counter, increaseBy } = useProducts()

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={styles.productCard}>
                {children}
            </div>
        </Provider>
    )
}

ProductCard.Title = ProductTitle
ProductCard.Image = ProductImage
ProductCard.Buttons = ProductButtons

