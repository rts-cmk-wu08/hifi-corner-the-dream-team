import { useContext, createContext, ReactNode, useState } from "react";
import React from "react";

//asigned the children property ReactNode 
type ShoppingCartProviderProps = {
  children: ReactNode,
};

//type for cartItem array passed in setCartItems - all the info we need to store
type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}
//shoppingCardContext contains the four above values
const ShoppingCartContext = createContext({} as ShoppingCartContext )

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}


export function ShoppingCartProvider({ children }: ShoppingCartProviderProps)
 {
    const [ cartItems, setCartItems ] = useState<CartItem[]>([])

function getItemQuantity(id: number) {
    //if there is a product show the quantity or else show 0
    return cartItems.find(item => item.id === id)?.quantity || 0
}

function increaseCartQuantity(id: number) {
    setCartItems(currItems => {
        //check if the item exist in our cart or else add it
        if (currItems.find(item => item.id === id) == null ) {
            //if the item doesn't exist it needs to be add to the cart 
            return [...currItems, {id, quantity: 1}]
        //if we don't have this item stored, add the item or else increment by one
        } else {
            return currItems.map(item => {
                if ( item.id === id) {
                    //if we found the item keep everything the same but increase current item by 1
                    return {...item, quantity: item.quantity + 1}
                } else {
                    return item
                }
            })
        }
    })
}

function decreaseCartQuantity (id: number) {
    setCartItems(currItems => {
        //check if the item exist in our cart or else add it
        if (currItems.find(item => item.id === id)?.quantity === 1 ) {
            //if the item doesn't exist it needs to be add to the cart 
            return currItems.filter(item => item.id !== id)
        //if we don't have this item stored, add the item or else increment by one
        } else {
            return currItems.map(item => {
                if ( item.id === id) {
                    //if we found the item keep everything the same but increase current item by 1
                    return {...item, quantity: item.quantity - 1}
                } else {
                    return item
                }
            })
        }
    })
}

function removeFromCart(id: number) {
    setCartItems(currItems => {
        //filter out the id not identical to current id
        return currItems.filter(item => item.id !== id)
    })
}

  return (
    <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart}}>
        {children}
    </ShoppingCartContext.Provider>
  )
}
