import {createContext, useState} from 'react'

// Create the Cart context
export const CartContext = createContext()

// Create the Cart context provider
export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([])
  const [checkOuts, setCheckOuts] = useState([])

  const addToCart = item => {
    setCartItems(prevItems => [...prevItems, item])
  }

  const removeFromCart = itemId => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId))
  }

  const addToCheckOuts = item => {
    setCheckOuts(prevItems => [...prevItems, item])
  }

  const removeFromCheckOuts = itemId => {
    setCheckOuts(prevItems => prevItems.filter(item => item.id !== itemId))
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        checkOuts,
        addToCart,
        removeFromCart,
        addToCheckOuts,
        removeFromCheckOuts,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
