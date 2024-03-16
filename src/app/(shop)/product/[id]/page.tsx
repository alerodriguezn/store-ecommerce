import Image from "next/image";
import { getProductById } from "@/actions/product/get-product-by-id";
import { AddToCart } from "./ui/AddToCart";

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

  const { name, description, price, imageUrl } = product;

  return (
    <div className="flex justify-center mt-4">
      <Image src={imageUrl} alt="asd" width={500} height={500} className="rounded-md" />

      <div className="col-span-1 px-5">
        <span>Stock: { 10 }</span>
        <h1
          className={`antialiased font-bold text-xl  `}
        >
          {name}
        </h1>
        <p className="text-lg mb-5">${price}</p>

        <AddToCart product={product} />

        <h3 className="font-bold text-sm mt-2">Description</h3>
        <p className="font-light max-w-[36ch]">{description}</p>
      </div>
    </div>
  );
}

