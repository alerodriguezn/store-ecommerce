export const dynamic = 'force-dynamic';

import { getPaginatedProducts } from '@/actions/products/get-products-paginated';
import { ProductList } from '@/components/products/ProductList';
import { Pagination } from '@/components/ui/Pagination';


interface Props {
  searchParams: {
    page?: string;

  };

}

export default async function AdminPage({ searchParams }:Props) {

  
  const page = searchParams.page ? parseInt(searchParams.page) : 0;
  

  const { products, totalPages } = await getPaginatedProducts({ page });

  return (
    <main className="w-3/4">
      <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>

      <ProductList products={products}/>

      <Pagination totalPages={totalPages} />
    </main>
  );
}