import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { IBrand } from '@/interfaces/brand.inerface';
import { getBrands } from '@/services/brands.service';

export default async function BrandsPage() {


  const { data: brands }: { data: IBrand[] } = await getBrands()


  return (
    <div>
      <section className="py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-15">
            {brands.map((brnd) => (
              <div key={brnd._id} className="text-center">
                <Link href={`/brands/${brnd._id}`} >
                <Image
                  src={brnd.image}
                  alt={brnd.name}
                  width={270}
                  height={250}
                  loading="lazy"
                  className="mb-4 w-full h-[21.5rem] object-contain bg-gray-200"
                />
                </Link>
                                <Link href={`/brands/${brnd._id}`} className="block mb-4">
            <h3 className="font-medium">{brnd.name}</h3>
          </Link>
        </div>
            ))}
    </div>
        </div >
      </section >
    </div >
  )
}