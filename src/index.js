import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductDetails from "./pages/ProductDetails";
import MoreInfo from "./pages/MoreInfo";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import InvoicePage from "./pages/InvoicePage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="/productpage" element={<ProductPage />} />
      <Route path="/productdetails" element={<ProductDetails />} />
      <Route path="/moreinfo" element={<MoreInfo />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/paymentpage" element={<PaymentPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/createAccount" element={<CreateAccount />} />
      <Route path="/login" element={<Login />} />
      <Route path="/invoice" element={<InvoicePage />} />
      <Route path="/contactpage" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <StrictMode></StrictMode>
  </React.StrictMode>
);
