import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { products } from '../data/data';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';



export const ShoppingPage = () => {
    const { shoppingCart, onProductCartChange } = useShoppingCart()
    
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {
                    products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            className="bg-dark text-white"
                            onChange={onProductCartChange}
                            value={shoppingCart[product.id]?.count || 0}
                        >
                            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>

            <div className='shopping-cart'>
                {Object.keys(shoppingCart).map(productId => {
                    const product = shoppingCart[productId]

                    return (
                        <ProductCard key={productId}
                            product={product}
                            className="bg-dark text-white"
                            onChange={onProductCartChange}
                            value={product.count}
                            style={{
                                width: '100px'
                            }}
                        >
                            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                            <ProductButtons className="custom-buttons"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }} />
                        </ProductCard>
                    )
                })}
            </div>
        </div>
    )
}