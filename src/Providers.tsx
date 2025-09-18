"use client";
import React from 'react'
import { SessionProvider } from 'next-auth/react';
import { CartContextProvider } from './context/CartContext';
import { WishlistContextProvider } from './context/WishlistContext';
export default function Providers({children}: {children : React.ReactNode}) {
   return (
    <div><SessionProvider>
      <WishlistContextProvider>
        <CartContextProvider>{children}</CartContextProvider>
      </WishlistContextProvider>
      
      </SessionProvider></div>
  )
}
