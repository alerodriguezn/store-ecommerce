import { ProductGrid } from "@/components/products/ProductGrid";
import { Pagination } from "@/components/ui/Pagination";
import { getPaginatedProducts } from "@/actions/products/get-products-paginated";

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function Home({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 0;

  const { products, totalPages } = await getPaginatedProducts({ page });


  

  if (!products) {
    return;
  }

  return (
    <main className="flex flex-col justify-center items-center w-1/2">
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </main>
  );
}
