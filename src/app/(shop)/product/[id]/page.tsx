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
    <div className="flex justify-center">
      <Image src={imageUrl} alt="asd" width={500} height={500} />

      <div className="col-span-1 px-5">
        <span>Stock: {stockQuantity}</span>
        <h1
          className={`antialiased font-bold text-xl  `}
        >
          {name}
        </h1>
        <p className="text-lg mb-5">${price}</p>

        <h3 className="font-bold text-sm">Description</h3>
        <p className="font-light">{description}</p>
      </div>
    </div>
  );
}

