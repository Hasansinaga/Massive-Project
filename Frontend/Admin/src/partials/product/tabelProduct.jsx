import React, { useState } from "react";
import { FiFilter, FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";

// Data contoh produk
const products = [
  { image: "product1.jpg", name: "Produk A", category: "Kategori 1", price: "Rp 10.000", store: "Toko A", stock: 20 },
  { image: "product2.jpg", name: "Produk B", category: "Kategori 2", price: "Rp 20.000", store: "Toko B", stock: 15 },
  { image: "product3.jpg", name: "Produk C", category: "Kategori 3", price: "Rp 30.000", store: "Toko C", stock: 10 },
  { image: "product4.jpg", name: "Produk D", category: "Kategori 4", price: "Rp 40.000", store: "Toko D", stock: 5 },
  { image: "product5.jpg", name: "Produk E", category: "Kategori 5", price: "Rp 50.000", store: "Toko E", stock: 8 },
  // Tambahkan lebih banyak produk sesuai kebutuhan
];

const ITEMS_PER_PAGE = 5;

const ProductTable = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter data berdasarkan pencarian
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="p-4">
      {/* Search Bar */}
      <div className="mb-4 flex justify-end items-center">
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FiSearch className="absolute top-3 left-3 text-gray-400" />
        </div>
      </div>

      {/* Tabel */}
      <table className="w-full bg-white dark:bg-gray-900 border rounded-lg shadow-sm">
        <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400">
          <tr>
            <th className="p-3 text-left">Gambar</th>
            <th className="p-3 text-left">
              Nama Produk <FiFilter className="inline ml-1 text-gray-500" />
            </th>
            <th className="p-3 text-left">
              Kategori <FiFilter className="inline ml-1 text-gray-500" />
            </th>
            <th className="p-3 text-left">
              Harga <FiFilter className="inline ml-1 text-gray-500" />
            </th>
            <th className="p-3 text-left">
              Nama Toko <FiFilter className="inline ml-1 text-gray-500" />
            </th>
            <th className="p-3 text-left">
              Stok <FiFilter className="inline ml-1 text-gray-500" />
            </th>
            <th className="p-3 text-left">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {paginatedProducts.map((product, index) => (
            <tr
              key={index}
              className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
            >
              <td className="p-3">
                <img
                  src="/images/pupuk1.png"
                  alt={product.name}
                  className="w-12 h-12 rounded"
                />
              </td>
              <td className="p-3">{product.name}</td>
              <td className="p-3">{product.category}</td>
              <td className="p-3">{product.price}</td>
              <td className="p-3">{product.store}</td>
              <td className="p-3">{product.stock}</td>
              <td className="p-3">
                <NavLink
                  to={`/produk/detail`}
                  className="bg-[#7AB434] text-white px-3 py-1 rounded-lg shadow-md hover:bg-green-600 transition-colors"
                >
                  Detail
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <div>
          Items per page: {ITEMS_PER_PAGE}
        </div>
        <div>
          <button
            className="px-3 py-1 border rounded-l-md"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="px-4">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="px-3 py-1 border rounded-r-md"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
