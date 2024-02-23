import { Product } from '@/interfaces/products'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    product: Product

}

export const ProductGridItem = ({ product }: Props) => {

  return (
    <div className='rounded-md'>
        <Link href={`/product/${product.id}`}>
            <Image 
                src={product.imageUrl} 
                alt={product.name} 
                width={500} 
                height={500}
                className='w-full object-cover rounded'
            />
        </Link>

        <div className='p-4 flex flex-col'>
            <Link href={`/product/${product.id}`} className="hover:text-blue-600">
                {product.name}
            </Link>
            <span className='font-bold'>${product.price}</span>

        </div>

    </div>
  )
}
