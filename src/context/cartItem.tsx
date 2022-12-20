import useFetch from "../hooks/useFetch";
import { useShoppingCart } from "./CartContext";
import React from "react";

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
    const { 
            removeFromCart,   
        } = useShoppingCart()

    const { loading, error, data } = useFetch(
        "http://localhost:1337/api/products"
      );
    
      const item = data.data.attribues.find(i => i.id === id)
      if (item == null) return null

     if (loading) return <p>Loading...</p>;
     if (error) return <p>Error!</p>;
        console.log(data)

    return (
        <section>
            {data.data.map((products) => {
                <div className="product-card__txts">
                <p>{products.attributes.title}</p>
                <p>{products.attributes.subtitle}</p>
                <br />
                <button onClick={() => increaseCartQuantity(products.attributes.id)}>
                  Add item
                </button>
                <br />
                <button onClick={() => decreaseCartQuantity(products.attributes.id)}>
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={() => increaseCartQuantity(products.attributes.id)}>
                  +
                </button>
              </div>
            })}
        </section>
    )
}