import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({});

    // Function to add items to the cart
    const addToCart = (product) => {
        setCart((prevCart) => {
            const newCart = { ...prevCart };
            if (newCart[product.name]) {
                newCart[product.name].quantity += 1;
            } else {
                newCart[product.name] = { ...product, quantity: 1 };
            }
            return newCart;
        });
    };

    // Function to increase quantity
    const increaseQuantity = (productName) => {
        setCart((prevCart) => {
            const newCart = { ...prevCart };
            if (newCart[productName]) {
                newCart[productName].quantity += 1;
            }
            return newCart;
        });
    };

    // Function to decrease quantity
    const decreaseQuantity = (productName) => {
        setCart((prevCart) => {
            const newCart = { ...prevCart };
            if (newCart[productName]) {
                newCart[productName].quantity -= 1;
                if (newCart[productName].quantity <= 0) {
                    delete newCart[productName]; // Remove item if quantity reaches 0
                }
            }
            return newCart;
        });
    };

    // Function to remove an item from the cart
    const removeFromCart = (productName) => {
        setCart((prevCart) => {
            const newCart = { ...prevCart };
            delete newCart[productName]; // Remove the item completely
            return newCart;
        });
    };

    const clearCart = () => {
        setCart({}); // Clears the cart after successful payment
    };


    return (
        <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
