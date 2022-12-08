import ProductCard from "../templates/productCard";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductDetails from "./ProductDetails";

const HomePage = () => {
  return (
    <article className="homepage">
      <h2 className="homepage__h2">popular products</h2>
      <section className="homepage__products">
        <ProductCard />
      </section>
      <section className="homepage__info">
        <div className="homepage__what">
          <h2 className="homepage__h2 homepage__h2--white">What we do</h2>
          <p className="homepage__p homepage__p--mb">
            We look forward to customising a system to meet your needs.
          </p>
          <p className="homepage__p homepage__p--mb">
            We don’t favour one manufacturer over another – the only thing we do
            favour is making sure our customers get the right product that suits
            their needs and listening preferences. We will ask many questions in
            order to ensure that what you buy from us is tailored to you and you
            alone.
          </p>
          <p className="homepage__p homepage__p--mb">
            If you are looking for a product not found in our demonstration
            showrooms or our online site, don’t fret as we have access to
            hundreds of brands.
          </p>
          <p className="homepage__p homepage__p--mb">
            One of our biggest pleasures of working in this industry is to see
            the smile on our customers’ faces when they finally hear and see the
            system of their dreams.
          </p>
        </div>
        <div className="homepage__hours">
          <h2 className="homepage__h2 homepage__h2--white">Opening hours</h2>
          <p className="homepage__p homepage__p--black">Edinburgh</p>
          <p className="homepage__p">2 Joppa Rd,Edinburgh, EH15 2EU</p>
          <p className="homepage__p">Monday to Friday: 10:00am - 5:30pm</p>
          <p className="homepage__p">Saturday: 10:00am - 5:30pm</p>
          <p className="homepage__p homepage__p--mb">Sunday: Closed</p>
          <p className="homepage__p homepage__p--black">Falkirk</p>
          <p className="homepage__p">
            44 Cow Wynd, Falkirk, Central Region, FK1 1PU
          </p>
          <p className="homepage__p">Monday to Friday: 10:00am - 5:30pm</p>
          <p className="homepage__p">Saturday - By appointment only</p>
          <p className="homepage__p">Sunday: Closed</p>
        </div>
      </section>
    </article>
  );
};

export default HomePage;
