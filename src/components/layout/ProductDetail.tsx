import React, { useEffect, useState } from "react";
import { Product } from "../../types/Product";
import axiosInstance from "../../config/api";
import { Link, useNavigate } from "react-router-dom";

interface ProductDetailProps {
  id: string | undefined;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ id }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const navigate = useNavigate();

  const getProductById = async () => {
    try {
      const response = await axiosInstance.get(`/products/${id}`);
      setProduct(response.data.data);
    } catch (error) {
      console.error("Error fetching product by ID", error);
    }
  };

  const handleOnDelete = async () => {
    const accessToken = sessionStorage.getItem("accessToken");
    try {
      await axiosInstance.delete(`/products/${id}`,{
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
      );
      alert ("Produk berhasil dihapus");
      navigate("/");
    } catch (error) {
      alert ("Produk gagal dihapus");
      console.error("Error deleting product", error);
    }
  };

  useEffect(() => {
    if (id) getProductById();

  }, [id]);

  if (!product) return <div>Loading...</div>

  return (
    <div className="relative px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
      <div className="bg-gradient-to-r from-indigo-50 p-12 shadow-md rounded-lg">
        <div className="grid md:grid-cols-2 items-center">
          <img src={product.image} alt={product.name} className="min-w-80 h-auto rounded-lg" />
          <div className="flex flex-col justify-center p-12 space-y-4">
            <h2 className="text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl">{product.name}</h2>
            <h2 className="text-2xl font-bold leading-none tracking-tight text-red-600 md:text-3xl">{product.price}</h2>
            <p className="mt-2 text-lg font-medium text-gray-800">{product.description}</p>
            <p className="mt-2 text-lg font-medium text-gray-800">Jumlah: {product.quantity}</p>
            <div className="bg-gray-900 w-fit px-6 py-2 rounded-3xl my-2">
              <p className="font-medium text-white">{product.category}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <Link 
            to={`/product/update/${product.id}`}
            className="bg-green-600 text-white rounded-md px-8 py-2.5 text-base font-medium hover:bg-green-500"
          >
            Ubah
          </Link>
          <button 
            onClick={handleOnDelete}
            className="bg-red-600 text-white rounded-md px-8 py-2.5 text-base font-medium hover:bg-red-500 ml-4"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;