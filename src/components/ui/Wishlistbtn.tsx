"use client"
import React from 'react'
import { toast } from 'sonner';
import { Heart, LoaderCircle } from "lucide-react";
import { useTransition } from 'react'
import { useWishlist } from '@/context/WishlistContext';
import { Button } from '@/components/ui/button';
import { addToWishlist } from '@/services/wishlist.service';
type AddtocartbtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  productId: string;
};

export default function Wishlistbtn({ productId, ...props }: AddtocartbtnProps) {
            const { getWishlistDetails } = useWishlist();
    const [isPending, startTransition] = useTransition();

    async function AddProductToWishlist(productId: string) {  
        
      startTransition(async()=>{
        const res = await addToWishlist(productId);
        

        if (res.success) {
            getWishlistDetails();   //to update wishlist details in context
            toast.success("Product added to wishlist successfully",{position:"top-right"} );
        }
        else{
            toast.error("Failed to add product to wishlist: ",{position:"top-right"} );
        }
      })
        
    }
  return (
    <div>   
          <Button disabled={isPending}
          variant={"outline"} className="cursor-pointer"
          onClick={()=>AddProductToWishlist(productId)} {...props}>
          {isPending ? <LoaderCircle className="animate-spin" />:<Heart className="size-6 mx-auto text-gray-400" />} 
            </Button>
</div>
  )
}