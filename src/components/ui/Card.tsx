import React from "react";

interface CardProps {
  id: number;
  name: string;
  description: string;
  price: string;
  quantity: number;
  image: string;
}

const Card: React.FC<CardProps> = ({ id, name, description, price, quantity, image }) => {
  return (
    <div key={id} className="relative bg-gradient-to-r from-indigo-50 shadow-md rounded-lg hover:transform hover:scale-105 transition duration-400">
      <div className="flex flex-col items-center justify-center">
        <img src={image} alt={name} className="w-full h-auto rounded-lg" />
      </div>
      <div className="flex flex-col px-4 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-red-600 font-semibold">{price}</p>
        </div>
        <div className="mt-2">
          <p className="font-medium text-gray-800">{description}</p>
          <p className="font-medium text-gray-800">Jumlah: {quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;