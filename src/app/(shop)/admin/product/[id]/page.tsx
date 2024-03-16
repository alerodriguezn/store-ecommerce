
import { getAllCategories } from '@/actions/categories/get-all-categories';
import { redirect } from 'next/navigation';
import { ProductForm } from './ui/ProductForm';
import { getProductById } from '@/actions/product/get-product-by-id';


interface Props {
    params: {
        id:string
    }
}


export default async function ProductPage({ params }: Props) {

  const { id } = params;

  // const product = await getProductBySlug(slug);

  const {product} = await getProductById(Number(id));

  const  {categories}  = await getAllCategories();

  if(!categories){
    redirect('/admin/products')
  }

  // Todo: new
  if ( !product && id !== 'new' ) {
    redirect('/admin/products')
  }

  const title = id === 'new' ? 'Nuevo Producto' : 'Editar Producto'


  return (
    <>
      <h2 className='text-2xl font-bold'>{title}</h2>


      <ProductForm product={product ?? {}} categories={categories}/>
 

    

  
    </>
  );
}