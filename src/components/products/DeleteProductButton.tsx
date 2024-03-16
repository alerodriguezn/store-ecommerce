"use client";
import { deleteProductById } from "@/actions/product/delete-product-by-id";
import { toast } from "react-toastify";
import { usePathname } from 'next/navigation';
import { useRouter } from "next/navigation";


interface Props {
    id: number;
}

export const DeleteProductButton = ({ id }:Props) => {

  const router = useRouter();

  const handleDelete = async () => {
    const ok = await deleteProductById(id);

    if (!ok) {
      toast.error("No se pudo eliminar el producto", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    
    toast.error("Producto eliminado", {
      position: "top-right",
      autoClose: 2000,
    });
    router.refresh();
  };

  return (
    <button
      className="rounded bg-red-600 font-semibold text-sm text-white p-1"
      onClick={handleDelete}
    >
      Eliminar
    </button>
  );
};
