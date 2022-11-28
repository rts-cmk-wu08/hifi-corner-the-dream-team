import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Homepage from './pages/HomePage'
import Productpage from "./pages/ProductPage";
import ProductDetails from "./pages/ProductDetails";
import MoreInfo from "./pages/MoreInfo";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/Contactpage";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";
import Login from "./pages/Login";
import InvoicePage from "./pages/InvoicePage";

export const router = createBrowserRouter(createRoutesFromElements (
    <Route path="/" element={<App />}>
     <Route index element={<Homepage />} />
     <Route path="/productpage" element={<Productpage />} />
     <Route path="/productdetails" element={<ProductDetails />} />
     <Route path="/moreinfo" element={<MoreInfo />} />
     <Route path="/aboutus" element={<AboutUs />} />
     <Route path="/cartpage" element={<CartPage />} />
     <Route path="/paymentpage" element={<PaymentPage />} />
     <Route path="/login" element={<Login />} />
     <Route path="/invoice" element={<InvoicePage />} />
     <Route path="/contactpage" element={<ContactPage />} />
    </Route>
))



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
