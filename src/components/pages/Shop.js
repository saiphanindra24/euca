import React, { useEffect, useState } from 'react'

function Shop() {
    const[products, setProducts]=useState([])
    const[category, setCategory]=useState('Eucalyptus Leaves')

    useEffect(()=>{
        fetch('/public/eucalyptus_image_data.json')
        .then ( (response)=> response.json())
        .then((date)=>{
            setProducts(category);
        })
        .catch((error)=> console.error("eeor loading data", error))
    },[category])
    const handleCategoryChange = (newCategory)=>{
        setCategory(newCategory)
    }
  return (
    <div className='p-4'>
      <div className='flex space-x-4 mb-4'>
        {[
            'Eucalyptus Leaves',
            "Dried Eucalyptus",
            "Eucalyptus Products",
            "Premium Products",
            "Nature Treasures",
            "Organic Collection",
        ].map((item)=>(
            <button key={item}
            className={`px-4 py-2 ${
                category === item
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-black"
              } rounded`}
              onClick={() => handleCategoryChange(item)}
            >
                 {item}
                 </button>
        ))}
      </div>
      {/* products section */}
      <div className="grid grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="border p-4 rounded shadow-lg">
            <img
              src={product.url}
              alt={product.name}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop
