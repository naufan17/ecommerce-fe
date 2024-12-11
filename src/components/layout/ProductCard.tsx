import React, { useEffect, useState } from "react";
import Card from "../ui/Card";
import axiosInstance from "../../config/api";
import { Product } from "../../types/Product";
import Loading from "../ui/Loading";

const ProductCard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getProducts = async () => {
    const result = await axiosInstance.get("/products");
    setProducts(result.data.data);
    setLoading(false);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="relative px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
      {loading && <Loading/>}
      <div className="grid gap-6 mb-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            quantity={product.quantity}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCard;