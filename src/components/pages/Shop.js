import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Shop() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('Eucalyptus Leaves');
    const { cart, addToCart, increaseQuantity, decreaseQuantity } = useCart(); // Get cart and functions
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/eucalyptus_image_data.json')
            .then(response => response.json())
            .then(data => setProducts(data[category] || []))
            .catch(error => console.error("Error loading data", error));
    }, [category]);

    return (
        <div className="flex">
            {/* Sidebar for Categories */}
            <div className="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-3">Categories</h3>
                {[
                    'Eucalyptus Leaves',
                    'Dried Eucalyptus',
                    'Eucalyptus Products',
                    'Premium Products',
                    'Nature Treasures',
                    'Organic Collection',
                ].map((item) => (
                    <button
                        key={item}
                        className={`block w-full px-4 py-2 my-1 rounded-md text-left ${
                            category === item ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'
                        }`}
                        onClick={() => setCategory(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* Products List */}
            <div className="w-3/4 p-4">
                <div className="grid grid-cols-3 gap-4">
                    {products.map((product, index) => {
                        const isInCart = cart[product.name];

                        return (
                            <div key={index} className="border p-4 rounded shadow-lg">
                                <img
                                    src={product.url}
                                    alt={product.name}
                                    className="w-full h-48 object-cover rounded"
                                />
                                <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>

                                {isInCart ? (
                                    // Show quantity controls if the product is already in the cart
                                    <div className="flex items-center mt-2">
                                        <button
                                            className="bg-gray-300 px-3 py-1 rounded"
                                            onClick={() => decreaseQuantity(product.name)}
                                        >
                                            -
                                        </button>
                                        <span className="mx-3">{cart[product.name]?.quantity}</span>
                                        <button
                                            className="bg-gray-300 px-3 py-1 rounded"
                                            onClick={() => increaseQuantity(product.name)}
                                        >
                                            +
                                        </button>
                                    </div>
                                ) : (
                                    // Show "Add to Cart" button initially
                                    <button
                                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                                        onClick={() => addToCart(product)}
                                    >
                                        Add to Cart
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Checkout Button */}
                <div className="mt-6 flex justify-center">
                    <button
                        className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg"
                        onClick={() => navigate('/cart')}
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Shop;
