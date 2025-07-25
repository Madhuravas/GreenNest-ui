import { createContext, useContext, useEffect, useRef, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const isFirstRender = useRef(true);

  // Load from localStorage
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("cartDetails");
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        if (parsedCart && typeof parsedCart === "object") {
          setCartItems(parsedCart);
        }
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage", error);
    }
  }, []);

  // Save to localStorage — skip on first render
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // ⛔ Skip the first call
    }

    try {
      localStorage.setItem("cartDetails", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to save cart to localStorage", error);
    }
  }, [cartItems]);

  const addToCart = (id) => {
    setCartItems(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId, quantity) => {
    if (quantity === "single") {
      setCartItems((prevItems) => {
        const updatedItems = { ...prevItems };

        if (updatedItems[itemId] > 1) {
          updatedItems[itemId] -= 1;
        } else {
          delete updatedItems[itemId];
        }

        return updatedItems;
      });
    } else {
      setCartItems((prevItems) => {
        const updatedItems = { ...prevItems };
        delete updatedItems[itemId];
        return updatedItems;
      });
    }
  };

  const removeAll = () =>{
    setCartItems({})
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, removeAll }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
