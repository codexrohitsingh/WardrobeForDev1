'use client'
import { productsDummyData, userDummyData } from "@/assets/assets";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext)
}

export const AppContextProvider = (props) => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY
    const router = useRouter()

    const [products, setProducts] = useState([])
    const [userData, setUserData] = useState(false)
    const [isSeller, setIsSeller] = useState(true)
    const [cartItems, setCartItems] = useState({})
    const [selectedCartItems, setSelectedCartItems] = useState({})
    const [wishlistItems, setWishlistItems] = useState({})

    const fetchProductData = async () => {
        setProducts(productsDummyData)
    }

    const fetchUserData = async () => {
        setUserData(userDummyData)
    }

    const addToCart = async (itemId) => {

        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            cartData[itemId] += 1;
        }
        else {
            cartData[itemId] = 1;
        }
        setCartItems(cartData);

        // Also select the item by default when adding to cart
        let selectedData = structuredClone(selectedCartItems);
        selectedData[itemId] = true;
        setSelectedCartItems(selectedData);
    }

    const updateCartQuantity = async (itemId, quantity) => {

        let cartData = structuredClone(cartItems);
        if (quantity === 0) {
            delete cartData[itemId];
            
            // Also remove from selected items if item is removed from cart
            let selectedData = structuredClone(selectedCartItems);
            delete selectedData[itemId];
            setSelectedCartItems(selectedData);
        } else {
            cartData[itemId] = quantity;
        }
        setCartItems(cartData)

    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            if (cartItems[items] > 0) {
                totalCount += cartItems[items];
            }
        }
        return totalCount;
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            if (cartItems[items] > 0) {
                totalAmount += itemInfo.offerPrice * cartItems[items];
            }
        }
        return Math.floor(totalAmount * 100) / 100;
    }
    
    const getSelectedCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            // Only calculate for selected items
            if (selectedCartItems[items]) {
                let itemInfo = products.find((product) => product._id === items);
                if (cartItems[items] > 0) {
                    totalAmount += itemInfo.offerPrice * cartItems[items];
                }
            }
        }
        return Math.floor(totalAmount * 100) / 100;
    }
    
    const toggleCartItemSelection = (itemId) => {
        let selectedData = structuredClone(selectedCartItems);
        selectedData[itemId] = !selectedData[itemId];
        setSelectedCartItems(selectedData);
    }
    
    const isCartItemSelected = (itemId) => {
        return selectedCartItems[itemId] ? true : false;
    }
    
    const toggleWishlist = (itemId) => {
        let wishlistData = structuredClone(wishlistItems);
        if (wishlistData[itemId]) {
            delete wishlistData[itemId];
        } else {
            wishlistData[itemId] = true;
        }
        setWishlistItems(wishlistData);
    }
    
    const isInWishlist = (itemId) => {
        return wishlistItems[itemId] ? true : false;
    }

    useEffect(() => {
        fetchProductData()
    }, [])

    useEffect(() => {
        fetchUserData()
    }, [])

    const value = {
        currency, router,
        isSeller, setIsSeller,
        userData, fetchUserData,
        products, fetchProductData,
        cartItems, setCartItems,
        selectedCartItems, setSelectedCartItems,
        addToCart, updateCartQuantity,
        getCartCount, getCartAmount, getSelectedCartAmount,
        toggleCartItemSelection, isCartItemSelected,
        wishlistItems, setWishlistItems,
        toggleWishlist, isInWishlist
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}