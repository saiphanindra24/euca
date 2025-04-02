import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Success() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const orderId = queryParams.get("order_id");
    const amount = queryParams.get("amount");
    const navigate = useNavigate();

    const estimatedDelivery = new Date();
    estimatedDelivery.setDate(estimatedDelivery.getDate() + 5); // Estimated 5 days delivery

    return (
        <div className="p-6 text-center">
            <h2 className="text-2xl font-bold text-green-500 mb-4">Payment Successful! 🎉</h2>
            <p className="text-lg">Your order has been placed successfully.</p>
            <p className="mt-2">🆔 Order ID: <strong>{orderId}</strong></p>
            <p className="mt-2">💰 Amount Paid: ₹{amount}</p>
            <p className="mt-4">📦 Estimated Delivery Date: {estimatedDelivery.toDateString()}</p>
            <button
                className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => navigate("/shop")}
            >
                Continue Shopping
            </button>
        </div>
    );
}

export default Success;
