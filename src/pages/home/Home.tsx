import React from "react";
import Navbar from "../../components/layout/Navbar";
import ProductCard from "../../components/layout/ProductCard";

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-100 min-h-screen">
      <Navbar/>
      <ProductCard/>
    </div>
  );
};

export default Home;