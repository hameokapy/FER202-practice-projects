import { useState } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import { data } from '../data/data';

const HomePage = () => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState(data.products);

    const handleAddToCart = (selectedProduct) => {
        alert(`Added to cart: ${selectedProduct.name}`);

        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.id === selectedProduct.id);
            
            if (existingItem) {
                return prevCart.map(item => 
                    item.id === selectedProduct.id 
                        ? { ...item, quantityInCart: item.quantityInCart + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...selectedProduct, quantityInCart: 1 }];
            }
        });

        setProducts((prevProducts) => {
            return prevProducts.map(item => 
                item.id === selectedProduct.id 
                    ? { ...item, quantity: item.quantity - 1 } 
                    : item
            );
        });
    };

    const totalItemsInCart = cart.reduce((total, item) => total + item.quantityInCart, 0);

    return (
        <div className="d-flex flex-column min-vh-100 bg-light">
            <Header cartCount={totalItemsInCart} cartData={cart} />
            <main className="flex-grow-1">
                <Banner slideshowData={data.slideshow} />
                <ProductList 
                    productsData={products} 
                    onAddToCart={handleAddToCart} 
                />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;