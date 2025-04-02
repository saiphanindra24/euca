import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
    const navigate = useNavigate();

    // Calculate total price (Assuming each product has a price of $10 for now)
    const totalPrice = Object.values(cart).reduce(
        (total, item) => total + item.quantity * 10, 0 // Change 10 to actual product price if available
    );

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

            {Object.keys(cart).length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {Object.entries(cart).map(([productName, product]) => (
                        <div key={productName} className="flex items-center border-b pb-4 mb-4">
                            <img
                                src={product.imageUrl}
                                alt={productName}
                                className="w-20 h-20 object-cover rounded mr-4"
                            />
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold">{productName}</h3>
                                <div className="flex items-center mt-2">
                                    <button
                                        className="bg-gray-300 px-3 py-1 rounded"
                                        onClick={() => decreaseQuantity(productName)}
                                    >-</button>
                                    <span className="mx-3">{product.quantity}</span>
                                    <button
                                        className="bg-gray-300 px-3 py-1 rounded"
                                        onClick={() => increaseQuantity(productName)}
                                    >+</button>
                                </div>
                            </div>
                            <p className="text-lg font-semibold">₹{product.quantity * 10}</p>
                            <button
                                className="ml-4 bg-red-500 text-white px-3 py-1 rounded"
                                onClick={() => removeFromCart(productName)}
                            >
                                Delete
                            </button>
                        </div>
                    ))}

                    <div className="mt-6 text-lg font-bold">
                        Total: ₹{totalPrice}
                    </div>

                    <div className="mt-4 flex space-x-4">
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                            onClick={() => navigate("/shop")}
                        >
                            Continue Shopping
                        </button>
                        <button  onClick={()=> navigate('/payment')} className="bg-green-500 text-white px-4 py-2 rounded">
                            Proceed to Payment
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
