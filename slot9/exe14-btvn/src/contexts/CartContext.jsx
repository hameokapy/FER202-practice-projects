import { useState } from 'react';
import { createContext } from "react";
import { useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart(prevList => [...prevList, item]);
    }

    const deleteFromCart = (selectedItem) => {
        setCart(prevList => prevList.filter((item) => item.id !== selectedItem.id));
    }

    const clearCart = () => {
        setCart([]);
    }
    
    const totalPrice = cart.reduce((sum, item) => sum + parseFloat(item.price || 0), 0).toFixed(2); //toFixed biến number thành string, nên phải để ở ngoài ntn
    const totalItems = cart.length;

    return (
        <CartContext.Provider value={{cart, totalItems, totalPrice, addToCart, deleteFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);