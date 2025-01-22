import React from "react";

const ProductCard = ({ image, name, price, onAddToCart }) => {
  return (
    <div className="border border-black rounded-md shadow-md p-4 text-center">
      <img src={image} alt={name} className="h-40 w-full object-cover mb-4" />
      <div className="flex justify-around">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-xl font-bold text-gray-700">${price}</p></div>
      <button
        onClick={onAddToCart}
        className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
