import React from "react";
import Main from "../../components/layout/ProductDetail";
import Navbar from "../../components/layout/Navbar";
import { useParams } from "react-router-dom";

const ProductDetail: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="bg-gradient-to-r from-indigo-100 min-h-screen">
      <Navbar />
      <Main 
        id={id}
      />
    </div>
  );
};

export default ProductDetail;