import { Product } from "@/interfaces/products";
import { ProductListItem } from "./ProductListItem";


interface Props {
  products: Product[];
  
}



export const ProductList = ({ products }: Props) => {



  return (
    <div className="flex flex-col gap-2 justify-center items-center mt-4 ">
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </div>
  );
};
