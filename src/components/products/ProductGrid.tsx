// import { Product } from "@/interfaces/products";
import { Product } from "@/interfaces/products-v2";
import { ProductGridItem } from "./ProductGridItem";

// interface Props {
//   products: Product[];
// }

interface Props {
  products: Product[];
}

export const ProductGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10 mt-4 ">
      {products.map((product) => (
        <ProductGridItem key={product.id} product={product} />
      ))}
    </div>
  );
};
