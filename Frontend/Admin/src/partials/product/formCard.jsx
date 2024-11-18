import React, { useState } from 'react';

const ProductFormCard = () => {
  const [discountEnabled, setDiscountEnabled] = useState(false);
  const [expiryDateEnabled, setExpiryDateEnabled] = useState(false);

  return (
    <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="space-y-4">
        {/* Nama Produk */}
        <input
          type="text"
          placeholder="Nama Produk"
          className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none"
        />

        {/* Nama Toko */}
        <input
          type="text"
          placeholder="Nama Toko"
          className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none"
        />

        {/* Pilih Kategori */}
        <select
          className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none"
        >
          <option value="">Pilih Kategori</option>
          <option value="kategori1">Kategori 1</option>
          <option value="kategori2">Kategori 2</option>
          <option value="kategori3">Kategori 3</option>
        </select>

        {/* Harga */}
        <div className="flex items-center">
          <input
            type="number"
            placeholder="Harga"
            className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none"
          />
        </div>

        {/* Stok */}
        <div className="flex items-center">
          <input
            type="number"
            placeholder="Stok"
            className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none"
          />
        </div>

        {/* Discount Toggle */}
        <div className="flex items-center justify-between">
          <label className="text-gray-700">Discount</label>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">Add Discount</span>
            <input
              type="checkbox"
              checked={discountEnabled}
              onChange={() => setDiscountEnabled(!discountEnabled)}
              className="toggle-checkbox"
            />
          </div>
        </div>

        {/* Expiry Date Toggle */}
        <div className="flex items-center justify-between">
          <label className="text-gray-700">Expiry Date</label>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">Add Expiry Date</span>
            <input
              type="checkbox"
              checked={expiryDateEnabled}
              onChange={() => setExpiryDateEnabled(!expiryDateEnabled)}
              className="toggle-checkbox"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFormCard;
