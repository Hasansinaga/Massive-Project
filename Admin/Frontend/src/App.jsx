import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import "./css/style.css";
import "./charts/ChartjsConfig";

import Login from "./pages/admin/auth/Login";
import Dashboard from "./pages/admin/Dashboard";
import ProductPage from "./pages/admin/Product/Product";
import DetailProdukPage from "./pages/admin/Product/ProductDetail";
import CustomerPage from "./pages/admin/Customer/Customer";
import CustomerOrder from "./pages/admin/Customer/CustomerDetail";
import SellerPage from "./pages/admin/Seller/Seller";
import SellerDetail from "./pages/admin/Seller/SellerDetail";
import Report from "./pages/admin/Report/Report";
import ReportDetail from "./pages/admin/Report/ReportDetail";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        
        <Route path="/login" element={<Login />} />
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/produk" element={<ProductPage />} />
        <Route path="/produk/detail" element={<DetailProdukPage />} />
        <Route path="/customer" element={<CustomerPage />} />
        <Route path="/customer/detail" element={<CustomerOrder />} />
        <Route path="/seller" element={<SellerPage />} />
        <Route path="/seller/detail" element={<SellerDetail />} />
        <Route path="/laporan" element={<Report />} />
        <Route path="/laporan/detail" element={<ReportDetail />} />
      </Routes>
    </>
  );
}

export default App;
