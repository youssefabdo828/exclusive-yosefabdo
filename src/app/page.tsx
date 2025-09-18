import MainSlider from "@/components/Home/MainSlider";
import CategoriesSection from "@/components/Home/CategoriesSection";
import ProductSecton from "@/components/Home/ProductSecton";
import { Suspense } from "react";
import { SkeletonCard } from "@/components/shared/SkeletonCard";

export default function Home() {
  return (
    <>
      <MainSlider />
      <Suspense fallback={<SkeletonCard />}>
        <CategoriesSection />
      </Suspense>
      <Suspense fallback={<SkeletonCard />}>
        <ProductSecton />
      </Suspense>
    </>
  );
}
