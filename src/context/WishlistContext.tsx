"use client"
import React, { useContext, createContext, useState, useEffect } from 'react'
import { getWishlist } from '@/services/wishlist.service';
import { IWishlistResponse } from '@/interfaces/wishlist.interface';

interface IWishlistContext {
    WishlistDetails: IWishlistResponse | null;
    setWishlistDetails: React.Dispatch<React.SetStateAction<IWishlistResponse | null>>;
    getWishlistDetails: () => Promise<void>;
}
const WishlistContext = createContext<IWishlistContext | null>(null)

export function WishlistContextProvider({ children }: { children: React.ReactNode }) {
    const [WishlistDetails, setWishlistDetails] = useState<IWishlistResponse | null>(null)

    async function getWishlistDetails() {
        const data = await getWishlist()
        setWishlistDetails(data);
    }


    useEffect(() => {

        getWishlistDetails();
    }, [])

    return (
        <WishlistContext.Provider value={{ WishlistDetails, setWishlistDetails, getWishlistDetails }}>
            {children}
        </WishlistContext.Provider>
    )
}




export function useWishlist() {


    const context = useContext(WishlistContext)

    if (!context) {
        throw new Error("useWishlist must be used within a WishlistContextProvider")
    }

    return context;
}