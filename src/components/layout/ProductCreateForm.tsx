import React, { useState, useEffect } from "react";
import axiosInstance from "../../config/api";
import { useNavigate } from "react-router-dom";

interface Category {
  id: number;
  name: string;
}

const CreateProductForm: React.FC = () => {
  const [category, setCategory] = useState<Category[]>([]);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [category_id, setCategoryId] = useState<string>("");
  const navigate = useNavigate();

  const getCategory = async () => {
    try {
      const result = await axiosInstance.get("/categories");
      setCategory(result.data.data);
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const handleCreateProduct = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axiosInstance.post("/products", {
        name,
        description,
        price,
        quantity,
        category_id,
      }, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`
        }
      });
      if (response.status === 201) {
        alert("Produk berhasil ditambahkan");
        navigate("/");
      }
      console.log(response.data);
    } catch (error) {
      console.error("Error creating product", error);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
          Tambahkan Produk
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
        <form className="space-y-6" onSubmit={handleCreateProduct}>
          <div>
            <label
              htmlFor="name"
              className="block text-base font-medium leading-6 text-gray-900"
            >
              Nama
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full rounded-md border-0 py-2.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="price"
              className="block text-base font-medium leading-6 text-gray-900"
            >
              Harga
            </label>
            <div className="mt-2">
              <input
                id="price"
                name="price"
                type="number"
                autoComplete="price"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="block w-full rounded-md border-0 py-2.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="quantity"
              className="block text-base font-medium leading-6 text-gray-900"
            >
              Jumlah
            </label>
            <div className="mt-2">
              <input
                id="quantity"
                name="quantity"
                type="number"
                autoComplete="quantity"
                required
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="block w-full rounded-md border-0 py-2.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="category"
              className="block text-base font-medium leading-6 text-gray-900"
            >
              Kategori
            </label>
            <div className="mt-2">
              <select
                id="category"
                name="category"
                autoComplete="category"
                required
                value={category_id}
                onChange={(e) => setCategoryId(e.target.value)}
                className="block w-full rounded-md border-0 py-2.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
              >
                <option value="" disabled>Pilih Kategori</option>
                {category.map((item: Category) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-base font-medium leading-6 text-gray-900"
            >
              Deskripsi
            </label>
            <div className="mt-2">
              <textarea
                id="description"
                name="description"
                autoComplete="description"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="block w-full rounded-md border-0 py-2.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="bg-gray-900 text-white rounded-md w-full py-2.5 text-base font-medium hover:bg-gray-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProductForm;