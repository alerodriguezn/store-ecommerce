export const dynamic = 'force-dynamic';

import { getPaginatedProducts } from '@/actions/products/get-products-paginated';
import { ProductList } from '@/components/products/ProductList';
import { Pagination } from '@/components/ui/Pagination';
import Link from 'next/link';


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

      <Link href={"/admin/product/new"} className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded transition-all mb-4">
          Agregar Producto
          
      </Link>

      <ProductList products={products}/>

      <Pagination totalPages={totalPages} />
    </main>
  );
}