import { IBrand } from "./brand.inerface";
import { ICategory } from "./category.interface";
import { IPagination } from "./pagination.interface"
import { ISubcategory } from "./sub.category";

export interface IProductResponse {
  results: number;
  metadata: IPagination;
  data: IProduct[];
}

export interface IProduct {
  currentPage: number
  numberOfPages: number
  limit: number
  nextPage: number
}

export interface IProduct {
  sold: number
  images: string[]
  subcategory: ISubcategory[]
  ratingsQuantity: number
  _id: string
  title: string
  slug: string
  description: string
  quantity: number
  price: number
  imageCover: string
  category: ICategory
  brand: IBrand
  ratingsAverage: number
  createdAt: string
  updatedAt: string
  id: string
  priceAfterDiscount?: number
  availableColors?: string[]
}
