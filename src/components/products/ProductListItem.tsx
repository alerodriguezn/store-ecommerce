import { Product } from "@/interfaces/products";
import Image from "next/image";
import Link from "next/link";
import { DeleteProductButton } from "./DeleteProductButton";

interface Props {
  product: Product;
}

export const ProductListItem = ({ product }: Props) => {
  return (
    <div className="rounded-md w-full h-full bg-white flex justify-between ">
      <div className="flex justify-start items-center p-2">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={50}
            height={50}
            className="w-full max-h-[25rem] object-contain rounded"
          />
        </Link>

        <div className="p-4 flex flex-col">
          <Link href={`/product/${product.id}`} className="hover:text-blue-600">
            {product.name}
          </Link>
          <span className="font-bold">${product.price}</span>
        </div>
      </div>

      <div className="flex justify-center items-center mx-3 gap-2">
        <Link
          href={`/admin/product/${product.id}`}
          className="rounded bg-green-600 font-semibold text-sm text-white p-1"
        >
          Editar
        </Link>
        <DeleteProductButton id={product.id} />
      </div>
    </div>
  );
};
