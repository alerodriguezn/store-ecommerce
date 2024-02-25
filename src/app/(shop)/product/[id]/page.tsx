import Image from "next/image";
import { getProductById } from "@/actions/product/get-product-by-id";

interface Props {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: Props) {
  const { ok, product } = await getProductById(Number(params.id));

  
  if (!product) {
    return;
  }

  const { name, description, price, stockQuantity, imageUrl } = product;

  return (
    <div className="flex justify-center mt-4">
      <Image src={imageUrl} alt="asd" width={500} height={500} className="rounded-md" />

      <div className="col-span-1 px-5">
        <span>Stock: {stockQuantity}</span>
        <h1
          className={`antialiased font-bold text-xl  `}
        >
          {name}
        </h1>
        <p className="text-lg mb-5">${price}</p>

        <button className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded transition-all">Agregar al carrito</button>

        <h3 className="font-bold text-sm mt-2">Description</h3>
        <p className="font-light max-w-[36ch]">{description}</p>
      </div>
    </div>
  );
}

