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

export const router = createBrowserRouter(createRoutesFromElements (
    <Route path="/" element={<App />}>
     <Route index element={<Homepage />} />
     <Route path="/productpage" element={<Productpage />} />
     <Route path="/productdetails" element={<ProductDetails />} />
     <Route path="/moreinfo" element={<MoreInfo />} />
     <Route path="/aboutus" element={<AboutUs />} />
     <Route path="/CartPage" element={<CartPage />} />
    </Route>
))



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
