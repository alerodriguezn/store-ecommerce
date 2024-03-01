import { ProductGrid } from "@/components/products/ProductGrid";
import { Pagination } from "@/components/ui/Pagination";
import { getPaginatedProducts } from "@/actions/products/get-products-paginated";
import { FiltersList } from "@/components/filters/FiltersList";

interface Props {
  searchParams: {
    page?: string;
    priceMin?: string;
    priceMax?: string;
    categoryId?: string;
  };
}

export default async function Home({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 0;

  const priceMin = searchParams.priceMin
    ? parseInt(searchParams.priceMin)
    : null;

  const priceMax = searchParams.priceMax
    ? parseInt(searchParams.priceMax)
    : null;

  const { products, totalPages } = await getPaginatedProducts({
    page,
    priceMin,
    priceMax,
  });

  if (!products) {
    return;
  }

  return (
    <main className="grid grid-cols-5 w-full">
      <aside className=" rounded-md mt-4 p-4 m-4">
        <FiltersList />
      </aside>
      <div className="col-span-3">
        <ProductGrid products={products} />
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}

{
  /* <main className="flex flex-col justify-center items-center w-1/2">
     
     
   </main> */
}
