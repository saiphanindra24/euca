import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Failure() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const reason = queryParams.get("reason");
    const navigate = useNavigate();

    return (
        <div className="p-6 text-center">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Payment Failed ❌</h2>
            <p className="text-lg">Oops! Your payment could not be completed.</p>
            <p className="mt-2 text-gray-700">Reason: {reason}</p>
            <button
                className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => navigate("/cart")}
            >
                Try Again
            </button>
        </div>
    );
}

export default Failure;
