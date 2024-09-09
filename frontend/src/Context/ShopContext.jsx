// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate} from "react-router-dom";

const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  // Add to cart function with validation for product size
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error('Select Product Size');
      return;
    }
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  // Get total count of items in the cart
  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      const sizes = cartItems[itemId];
      for (const size in sizes) {
        if (sizes[size] > 0) {
          totalCount += sizes[size];
        }
      }
    }
    return totalCount;
  }

  const updateQuantity = async (itemId, size, quantity)=> {
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  }

  const getCartAmount =  () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      const itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          console.error("Error calculating cart amount:", error); // Logs the error for debugging
        }
      }
    }
    return totalAmount;
  };
  
  const value = {
    products,
    currency,
    delivery_fee,
    search, setSearch, showSearch, setShowSearch,
    cartItems, addToCart,
    getCartCount,updateQuantity,
    getCartAmount, navigate
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

// PropTypes validation
ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ShopContext, ShopContextProvider };
