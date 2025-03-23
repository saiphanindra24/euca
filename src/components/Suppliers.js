// src/components/Suppliers.jsx
import React from "react";

const suppliers = [
  { id: 1, name: "EucaBrand", font: "font-cursive" },
  { id: 2, name: "LeafyGoods", font: "font-serif italic" },
  { id: 3, name: "EcoEucalyptus", font: "font-mono" },
  { id: 4, name: "GreenLeaf", font: "font-bold italic" },
  { id: 5, name: "PureEuca", font: "font-cursive italic" },
];

const Suppliers = () => {
  return (
    <div className="bg-white py-6 w-full max-w-screen-2xl mx-auto rounded-lg h-[60vh] flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-center mb-8">
        Trusted Eucalyptus Suppliers
      </h2>
      <div className="flex justify-center items-center space-x-12">
        <div className="text-5xl font-bold">E</div> {/* E logo */}
        {suppliers.map((supplier) => (
          <div
            key={supplier.id}
            className={`text-2xl sm:text-3xl ${supplier.font} text-gray-800`}
          >
            {supplier.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suppliers;
