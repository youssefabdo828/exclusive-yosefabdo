import React from 'react'
import SectionTitle from './../shared/SectionTitle';
import { getProducts } from '@/services/products.service';
import { IProduct } from '@/interfaces/product.inerface';
import { Button } from '../ui/button';
import Link from 'next/link';
import Productitem from '../products/Productitem';

export default async function ProductSecton() {


    const { data: products }: { data: IProduct[] } = await getProducts(8)

    return (
        <section className='py-10'>
            <div className="container mx-auto">


                <SectionTitle title={"Our Products"} subtitle={"Explore Our Products"} />



                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 pag-y-15 mb-15">
                    {
                        products && products.map(product => (
                            <Productitem key={product._id} product={product} />
                        ))
                    }
                </div>


                <div className='flex justify-center'>
                    <Button variant={"destructive"} asChild>
                        <Link href={"/products"}>View All Products</Link>
                    </Button>
                </div>


            </div>
        </section>
    )
}
