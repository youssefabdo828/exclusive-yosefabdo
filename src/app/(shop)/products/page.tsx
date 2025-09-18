import React from 'react'
import { getProducts } from '@/services/products.service';
import { IProduct } from '@/interfaces/product.inerface';
import Productitem from '@/components/products/Productitem';

export default async function ProductsPage() {


  const { data: products }: { data: IProduct[] } = await getProducts()


  return (
    <section className='py-10'>
      <div className="container mx-auto">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 pag-y-15 mb-15">
          {
            products && products.map(product => (
              <Productitem key={product._id} product={product} />
            ))
          }
        </div>
      </div>
    </section>
  )
}
