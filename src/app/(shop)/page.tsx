export const dynamic = 'force-dynamic';

import { ProductGrid } from "@/components/products/ProductGrid";
import { Pagination } from "@/components/ui/Pagination";
import { getPaginatedProducts } from "@/actions/products/get-products-paginated";
import { FiltersList } from "@/components/filters/FiltersList";
import { SearchBar } from "../../components/filters/SearchBar";
import { getAllCategories } from "@/actions/categories/get-all-categories";

interface Props {
  searchParams: {
    page?: string;
    priceMin?: string;
    priceMax?: string;
    categoryId?: string;

    name?: string;
  };
}

export default async function Home({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 0;

  const { categories } = await getAllCategories();

  if (!categories) {
    return;
  }

  
  const priceMin = searchParams.priceMin ? parseInt(searchParams.priceMin) : null;
  const priceMax = searchParams.priceMax ? parseInt(searchParams.priceMax) : null;
  const name = searchParams.name ? searchParams.name : null;
  const categoryId = searchParams.categoryId ? parseInt(searchParams.categoryId) : null;


  const { products, totalPages } = await getPaginatedProducts({
    page,
    priceMin,
    priceMax,
    name,
    categoryId,
  });

  if (!products) {
    return;
  }

  return (
    <main className="grid grid-cols-5 w-full">
      <aside className=" rounded-md mt-4 p-4 m-4">
        <FiltersList categories={categories} />
      </aside>
      <div className="col-span-3">
        <SearchBar />
        <ProductGrid products={products} />
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}
