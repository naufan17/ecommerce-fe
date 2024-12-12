import React from "react";
import ProductUpdateForm from "../../components/layout/ProductUpdateForm";
import { useParams } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";

const ProductUpdate: React.FC = () => {
  const {id} = useParams();

  return (
    <div className="bg-gradient-to-r from-indigo-100 min-h-screen">
      <Navbar />
      <ProductUpdateForm id={id}/>
    </div>
  )
};

export default ProductUpdate;