// src/EucalyptusSlider.js
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Button } from "@mui/material";
import dried_eucalyptus from '../assets/dried_eucalyptus.jpg'
import eucalyptus_leaves from '../assets/eucalyptus_leaves.jpg'
import eucalyptus_products from '../assets/eucalyptus_products.jpg'
import nature_tresure from '../assets/nature_tresure.jpg'
import organic_collection from '../assets/organic_collection.jpg'
import premium_products from '../assets/premium_products.jpg'
const slides = [
  {
    title: "Dried Eucalyptus",
    image: eucalyptus_leaves,
    link: "#",
  },
  {
    title: "Eucalyptus Leaves",
    image: dried_eucalyptus,
    link: "#",
  },
  {
    title: "eucalyptus Products",
    image: eucalyptus_products,
    link: "#",
  },
  {
    title: "Premium Products",
    image: premium_products,
    link: "#",
  },
  {
    title: "Nature Treasure",
    image: nature_tresure,
    link: "#",
  },
  {
    title: "Organic Collection",
    image: organic_collection,
    link: "#",
  },
];

const groupedSlides = [];
for (let i = 0; i < slides.length; i += 2) {
  groupedSlides.push(slides.slice(i, i + 2));
}

const Slider = () => {
  return (
    <div className="max-w-[90%] mx-auto p-6">
      <Carousel
        navButtonsAlwaysVisible
        indicators={false}
        animation="slide"
        autoPlay={true}
        interval={3000}
        className="rounded-lg"
      >
        {groupedSlides.map((group, index) => (
          <div
            key={index}
            className="grid grid-cols-2 gap-6"
            style={{
              height: "500px", // Increased height
            }}
          >
            {group.map((item, idx) => (
              <div
                key={idx}
                className="relative h-full flex items-center justify-center bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: `url(${item.image})`,
                  height: "500px", // Increased height
                  width: "100%", // Full width
                }}
              >
                <div className="bg-black bg-opacity-50 w-full h-full absolute rounded-lg"></div>
                <div className="text-center z-10">
                  <h2 className="text-4xl font-bold text-white mb-6">
                    {item.title}
                  </h2>
                  <Button
                    variant="contained"
                    className="bg-white text-black hover:bg-gray-200 px-6 py-3 text-lg"
                    href={item.link}
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
