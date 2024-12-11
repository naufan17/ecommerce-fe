import React from "react";

const CreateProductForm: React.FC = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
          Tambahkan Produk
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
        <form className="space-y-6" action="#" method="POST">
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
                className="block w-full rounded-md border-0 py-2.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="quantitiy"
              className="block text-base font-medium leading-6 text-gray-900"
            >
              Jumlah
            </label>
            <div className="mt-2">
              <input
                id="quantitiy"
                name="quantitiy"
                type="number"
                autoComplete="quantitiy"
                required
                className="block w-full rounded-md border-0 py-2.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
              />
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