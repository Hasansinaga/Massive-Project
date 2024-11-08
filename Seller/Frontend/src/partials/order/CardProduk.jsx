// src/components/CardProduk.jsx
import React from "react";

const CardProduk = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Produk yang dipesan</h3>
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
        <div>
          <p>Produk</p>
          <p className="font-semibold">NPK</p>
        </div>
        <div>
          <p>Jumlah</p>
          <p className="font-semibold">10 kg</p>
        </div>
        <div>
          <p>Harga per satuan</p>
          <p className="font-semibold">Rp 40.000</p>
        </div>
        <div>
          <p>Total Harga</p>
          <p className="font-semibold">Rp 400.000</p>
        </div>
        <div>
          <p>Status Pembayaran</p>
          <p className="font-semibold text-green-500">Sukses</p>
        </div>
        <div>
          <p>Pembayaran</p>
          <p className="font-semibold">MANDIRI</p>
        </div>
      </div>
      <div className="mt-6 flex justify-end space-x-4">
        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
          Tolak Pesanan
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
          Proses Pesanan
        </button>
      </div>
    </div>
  );
};

export default CardProduk;
