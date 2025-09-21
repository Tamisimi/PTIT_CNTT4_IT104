import React from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
export default function App() {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Shopping Cart</h1>
      </div>
      <div className="row">
        {/* Danh sách sản phẩm */}
        <ProductList></ProductList>
        {/* Gio hàng */}
        <ShoppingCart></ShoppingCart>
      </div>
    </div>
  );
}