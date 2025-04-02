import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

function Payment() {
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();

    const totalAmount = Object.values(cart).reduce(
        (total, item) => total + item.quantity * 10, 0 // Update with actual price
    );

    const handlePayment = async () => {
        const options = {
            key: "rzp_test_Cc7dvUP7yoPp2V", // Replace with your Razorpay key
            amount: totalAmount * 100, // Convert to paise
            currency: "INR",
            name: "EucaMart",
            description: "Order Payment",
            handler: function (response) {
                console.log("Payment successful:", response);
                clearCart(); // Empty the cart after payment success
                const sucessURL = `/success?order_id=${response.razorpay_payment_id}&amount=${totalAmount}`;
                navigate(sucessURL)

            },
            prefill: {
                name: "Sai Phanindra",
                email: "saiphanindra.gampala@gmail.com",
                contact: "7330922154",
            },
            theme: {
                color: "#3399cc",
            },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();

        razorpay.on("payment.failed", function (response) {
            console.log("Payment failed:", response);
            navigate(`/failure?reason=${response.error.description}`);
        });
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Complete Your Payment</h2>
            <p className="text-lg mb-4">Total Amount: ₹{totalAmount}</p>
            <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={handlePayment}
            >
                Pay Now
            </button>
        </div>
    );
}

export default Payment;
