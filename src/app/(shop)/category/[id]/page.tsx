import { getPaginatedProducts } from "@/actions/products/get-products-paginated";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Pagination } from "@/components/ui/Pagination";


interface Props {
  params: {
    id: string;
  },
  searchParams : {
    page?: string;
  }
}

export default async function CategoryPage({ searchParams, params }: Props) {

 const { id } = params;

 const page = searchParams.page ? parseInt(searchParams.page) : 0;

 const { products, totalPages } = await getPaginatedProducts({ page, categoryId: Number(id) });

  if (!products) {
    return;
  }

  const labels: Record<number, string> = {
    1: "Electrónica",
    2: "Moda",
    3: "Alimentación",
    4: "Hogar y Jardín",
    5: "Salud y Belleza",

  };

  return (
    <main className="flex flex-col justify-center items-center w-1/2">
      <h2 className="font-bold text-xl my-2 ">{labels[Number(id)]}</h2>
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </main>
  );
}