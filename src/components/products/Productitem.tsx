import Image from 'next/image'
import React from 'react'
import { Star } from 'lucide-react';
import { Button } from '../ui/button';
import { IProduct } from '@/interfaces/product.inerface';
import Link from 'next/link';
import AddToCartBtn from './AddToCartBtn';
import Wishlistbtn from '../ui/Wishlistbtn';
import { IWishlist } from '@/interfaces/wishlist.interface';

export default function Productitem({ product, isWishlistPage=false}: { product: IProduct | IWishlist,
  isWishlistPage?: boolean
}) {
    return (
        <div>
            <picture className='relative group overflow-hidden'>
                {!isWishlistPage && <Wishlistbtn productId={product._id} className="text-gray-700 absolute top-1 right-5 cursor-pointer border-0 outline-none focus:outline-none shadow-none bg-transparent" />}
                <Link href={`/products/${product._id}`}>
                    <Image
                        src={product.imageCover}
                        alt={product.title}
                        width={270}
                        height={250}
                        loading='lazy'
                        className='w-full h-[15.625rem] object-contain bg-gray-100 mb-4'
                    />
                </Link>

                <Button className='w-full absolute bottom-0 translate-y-full group-hover:translate-y-0 invisible group-hover:visible'>Add to Cart</Button>


                <AddToCartBtn className='w-full absolute bottom-0 translate-y-full group-hover:translate-y-0 invisible group-hover:visible cursor-pointer' productId={product._id} />
            </picture>
            <h3 className='font-medium mb-2 line-clamp-1'>
                <Link href={`/products/${product._id}`}>
                    {product.title}
                </Link>
            </h3>

            <div className="flex items-center gap-x-4">
                <span className="font-medium text-red-500">{product.price} EGP</span>
                <div className='flex items-center gap-x-1'>
                    <Star className='text-yellow-400 fill-yellow-400' />
                    <span className="text-sm font-semibold text-gray-500">{product.ratingsAverage}</span>
                </div>
            </div>
        </div>
    )
}
