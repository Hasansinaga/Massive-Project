import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import "./css/style.css";
import "./charts/ChartjsConfig";

import Login from "./pages/seller/auth/Login";
import Dashboard from "./pages/seller/Dashboard";
import ProductPage from "./pages/seller/Product/Product";
import DetailProdukPage from "./pages/seller/Product/ProductDetail";
import CustomerPage from "./pages/seller/Customer/Customer";
import CustomerOrder from "./pages/seller/Customer/CustomerDetail";
import SellerPage from "./pages/seller/Seller/Seller";
import SellerDetail from "./pages/seller/Seller/SellerDetail";
import Report from "./pages/seller/Report/Report";
import ReportDetail from "./pages/seller/Report/ReportDetail";
import Order from "./pages/seller/Order/Order"
import OrderDetail from "./pages/seller/Order/OrderDetail"

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
        <Route path="/order" element={<Order />} />
        <Route path="/order/detail" element={<OrderDetail />} />
      </Routes>
    </>
  );
}

export default App;
