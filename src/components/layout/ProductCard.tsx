import React, { useEffect, useState, ChangeEvent } from "react";
import Card from "../ui/Card";
import axiosInstance from "../../config/api";
import { Product } from "../../types/Product";
import Loading from "../ui/Loading";
import { Link } from "react-router-dom";

const ProductCard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getProducts = async () => {
    try {
      const result = await axiosInstance.get("/products");
      setProducts(result.data.data);
    } catch (error) {
      console.error("Error fetching products", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSorting = (e: ChangeEvent<HTMLSelectElement>) => {
    const property = e.target.value;

    switch (property) {
      case "all":
        getProducts();
        break;
      case "priceHigh":
        setProducts((prevProducts) => [...prevProducts].sort((a, b) => b.price - a.price));
        break;
      case "priceLow":
        setProducts((prevProducts) => [...prevProducts].sort((a, b) => a.price - b.price));
        break;
      case "Large":
        setProducts((prevProducts) => [...prevProducts].sort((a, b) => b.quantity - a.quantity));
        break;
      case "Small":
        setProducts((prevProducts) => [...prevProducts].sort((a, b) => a.quantity - b.quantity));
        break;
      default:
        getProducts();
        break;
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="relative px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
      <div className="flex items-center justify-between mb-4">
        <select
          className="bg-gray-900 text-white rounded-md px-4 py-2.5 text-base font-medium hover:bg-gray-700"
          onChange={handleSorting}
        >
          <option value="all">Semua</option>
          <option value="priceHigh">Harga Mahal</option>
          <option value="priceLow">Harga Murah</option>
          <option value="Large">Stok Banyak</option>
          <option value="Small">Stok Sedikit</option>
        </select>
        <Link 
          to="/product/create"
          className="bg-gray-900 text-white rounded-md px-8 py-2.5 text-base font-medium hover:bg-gray-700"
        >
          Tambah Produk
        </Link>
      </div>
      {loading && <Loading />}
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
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
