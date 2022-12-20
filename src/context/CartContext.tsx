import { useContext, createContext, ReactNode, useState } from "react";
import React from "react";

//------------------ TYPES ------------------
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
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}
// shoppingCardContext contains the four above values
const ShoppingCartContext = createContext({} as ShoppingCartContext )

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

//------------------ SHOPPING CART PROVIDER ------------------
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps){
    //got an empty array with a type of CartItem (see under types) 
    const [ isOpen, setIsOpen] = useState(false)
    const [ cartItems, setCartItems ] = useState<CartItem[]>([])

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
      )
    

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

function getItemQuantity(id: number) {
    //if this evaluates to something ()?) show quantity or else || 0
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
    <ShoppingCartContext.Provider value={{ 
        getItemQuantity, 
        increaseCartQuantity, 
        decreaseCartQuantity, 
        removeFromCart, 
        openCart, 
        closeCart, 
        cartItems, 
        cartQuantity}}>
        {children}
        
    </ShoppingCartContext.Provider>
  )
}
