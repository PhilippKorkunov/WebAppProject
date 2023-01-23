import './App.css';
import HeaderPage from "./components/Header/HeaderPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import React from "react";
import Orders from "./pages/Orders";
import FormPage from "./pages/FormPage";
import OrderPage from "./pages/order-page/OrderPage";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <BrowserRouter>
            <HeaderPage />
            <Routes>
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/order"} element={<Orders />} />
                <Route path={"/create"} element={<FormPage />} />
                <Route path={"/order/:id"} element={<OrderPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;