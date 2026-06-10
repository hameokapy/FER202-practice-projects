import { useState } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import { data } from '../data/data';

const HomePage = () => {
    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = () => {
        setCartCount((prevCount) => prevCount + 1);
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header cartCount={cartCount} />
            <main className="flex-grow-1">
                <Banner slideshowData={data.slideshow} />
                <ProductList 
                    productsData={data.products} 
                    onAddToCart={handleAddToCart} 
                />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;