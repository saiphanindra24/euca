// src/components/ProductCarousel.jsx
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { assets } from "../assets/assets";
// Sample image data (can be dynamically extended)
const productData = [
  {
    id: 1,
    name: "Silver Eucalyptus Leaves – 150g",
    price: "$14.99",
    imgSrc: assets.euca1,
  },
  {
    id: 2,
    name: "Blue Eucalyptus Leaves – 200g",
    price: "$11.62",
    salePrice: "$15.49",
    imgSrc: assets.euca3,
  },
  {
    id: 3,
    name: "Fresh Eucalyptus Leaves – 100g",
    price: "$9.99",
    salePrice: "$12.99",
    imgSrc: assets.euca1,
  },
  {
    id: 4,
    name: "Dried Eucalyptus Leaves – 50g",
    price: "$8.99",
    imgSrc: assets.euca3,
  },
  {
    id: 5,
    name: "Silver Eucalyptus Leaves – 150g",
    price: "$14.99",
    imgSrc: assets.euca1,
  },
  {
    id: 6,
    name: "Blue Eucalyptus Leaves – 200g",
    price: "$11.62",
    salePrice: "$15.49",
    imgSrc: assets.euca3,
  },
  {
    id: 7,
    name: "Fresh Eucalyptus Leaves – 100g",
    price: "$9.99",
    salePrice: "$12.99",
    imgSrc: assets.euca1,
  },
  {
    id: 8,
    name: "Dried Eucalyptus Leaves – 50g",
    price: "$8.99",
    imgSrc: assets.euca3,
  },
  {
    id: 9,
    name: "Dried Eucalyptus Leaves – 50g",
    price: "$8.99",
    imgSrc: assets.euca3,
  },
  {
    id: 10,
    name: "Dried Eucalyptus Leaves – 50g",
    price: "$8.99",
    imgSrc: assets.euca3,
  },
  {
    id: 11,
    name: "Dried Eucalyptus Leaves – 50g",
    price: "$8.99",
    imgSrc: assets.euca3,
  },
  {
    id: 12,
    name: "Dried Eucalyptus Leaves – 50g",
    price: "$8.99",
    imgSrc: assets.euca3,
  },
  {
    id: 13,
    name: "Dried Eucalyptus Leaves – 50g",
    price: "$8.99",
    imgSrc: assets.euca3,
  },
  {
    id: 14,
    name: "Dried Eucalyptus Leaves – 50g",
    price: "$8.99",
    imgSrc: assets.euca3,
  },
  {
    id: 15,
    name: "Dried Eucalyptus Leaves – 50g",
    price: "$8.99",
    imgSrc: assets.euca3,
  },
  {
    id: 16,
    name: "Dried Eucalyptus Leaves – 50g",
    price: "$8.99",
    imgSrc: assets.euca3,
  },
  // Add more product objects here
];

const Product= () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 4;

  // Go to next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerSlide >= productData.length
        ? 0
        : prevIndex + itemsPerSlide
    );
  };

  // Go to previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerSlide < 0
        ? productData.length - itemsPerSlide
        : prevIndex - itemsPerSlide
    );
  };

  return (
    <div className="relative w-full max-w-screen-2xl mx-auto px-4 py-12">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${(currentIndex / productData.length) * 100}%)`,
          }}
        >
          {productData.map((product) => (
            <div
              key={product.id}
              className="w-1/4 min-w-[25%] px-3 flex-shrink-0"
            >
              <Card className="bg-white shadow-md rounded-lg overflow-hidden">
                <CardMedia
                  component="img"
                  height="200" // Decreased height
                  image={product.imgSrc}
                  alt={product.name}
                  className="object-cover w-full"
                />
                <CardContent className="text-center">
                  <Typography
                    variant="h6"
                    component="div"
                    className="font-bold text-base"
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-gray-700 text-sm mt-1"
                  >
                    {product.salePrice ? (
                      <span>
                        <span className="line-through text-gray-500 mr-2">
                          {product.salePrice}
                        </span>
                        {product.price}
                      </span>
                    ) : (
                      product.price
                    )}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    className="mt-2"
                  >
                    Add to cart
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-800"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-800"
      >
        <FaChevronRight />
      </button>

      {/* Dots Indicator - moved to the left */}
      <div className="flex justify-start mt-4">
        {Array.from({
          length: Math.ceil(productData.length / itemsPerSlide),
        }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i * itemsPerSlide)}
            className={`h-2 w-2 mx-1 rounded-full ${
              currentIndex / itemsPerSlide === i
                ? "bg-black"
                : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Product;
