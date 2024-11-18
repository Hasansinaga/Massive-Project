import React, { useState } from "react";
import Sidebar from "../../../partials/Sidebar";
import Header from "../../../partials/Header";
import OrderTablePage from "../../../partials/detailProduk/OrderTabelPage"; // Import komponen tabel pesanan

const DetailProdukPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden dark:bg-gray-900 dark:text-gray-100">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
                  Detail Produk
                </h1>
              </div>
            </div>

            {/* Card untuk Detail Produk */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <img
                  src="/images/pupuk1.png"
                  alt="Produk"
                  className="w-[160px] h-[180px] object-cover rounded-lg"
                />
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  Detail Produk
                </h2>
                <p>Nama Produk: Contoh Produk</p>
                <p>Harga: Rp100,000</p>
                <p>Stok: 10</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  Deskripsi Produk
                </h2>
                <p>
                  EcoFert adalah pupuk organik berkualitas tinggi yang
                  diformulasikan untuk meningkatkan kesuburan tanah dan
                  memperbaiki struktur tanah secara alami. Terbuat dari
                  bahan-bahan alami yang ramah lingkungan, EcoFert membantu
                  mempercepat pertumbuhan tanaman, memperkuat akar...
                </p>
              </div>
            </div>

            {/* Tabel Pesanan */}
            <OrderTablePage />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DetailProdukPage;
