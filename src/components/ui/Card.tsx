import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  id: number;
  name: string;
  description: string;
  price: string;
  quantity: number;
  category: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ id, name, description, price, quantity, category, image }) => {
  return (
    <div key={id} className="relative bg-gradient-to-r from-indigo-50 shadow-md rounded-lg hover:transform hover:scale-105 transition duration-400">
      <Link 
        to={`/product/${id}`}
        >
        <div className="flex flex-col items-center justify-center">
          <img src={image} alt={name} className="w-full h-auto rounded-lg" />
        </div>
        <div className="flex flex-col px-4 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-red-600 font-semibold">{price}</p>
          </div>
          <div className="mt-2">
            <p className="font-medium text-md text-gray-800">{description}</p>
            <p className="font-medium  text-gray-800">Jumlah: {quantity}</p>
            <div className="bg-gray-900 w-fit px-4 py-1 rounded-3xl my-2">
              <p className="font-medium text-white">{category}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;