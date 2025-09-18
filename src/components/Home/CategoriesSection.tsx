import React from 'react'
import { getCatigories } from '@/services/categories.service';
import { ICategory } from '@/interfaces/category.interface';
import CategoriesSlider from './CategoriesSlider';
import SectionTitle from '../shared/SectionTitle';
import { Separator } from '../ui/separator';


export default async function CategoriesSection() {
    const { data: categories }: { data: ICategory[] } = await getCatigories();

    return (
        <>
            <section className='py-10'>
                <div className="container mx-auto">


                    <SectionTitle title={"catigories"} subtitle={"Browse By Category"}/>
<CategoriesSlider categories={categories}/>

<Separator />
                </div>
            </section>
        </>
    )
}
