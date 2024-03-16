"use client";

import { createUpdateProduct } from "@/actions/product/create-update-product";
import clsx from "clsx";
import { Product } from "@/interfaces/products";
import { useRouter } from "next/navigation";
import { Category } from "@/interfaces/categories";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface Props {
  product: Partial<Product>;
  categories: Category[];
}

type FormInputs = {
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  categoryId: number;
  imageUrl: string;
};

export const ProductForm = ({ product, categories }: Props) => {
  
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { isValid },
    getValues,
    setValue,
    watch,
  } = useForm<FormInputs>({
    defaultValues: {
      ...product,
      
    },
  });

  const onSubmit = async (data: FormInputs) => {
    const formData = new FormData();

    const { ...productToSave } = data;

    if (product.id) {
      formData.append("id", product.id.toString() ?? "");
    }
    formData.append("name", productToSave.name);
    formData.append("description", productToSave.description);
    formData.append("price", productToSave.price.toString());
    formData.append("stockQuantity", productToSave.stockQuantity.toString());
    formData.append("categoryId", productToSave.categoryId.toString());
    formData.append("imageUrl", productToSave.imageUrl);

    const { ok, product: updatedProduct } = await createUpdateProduct(formData);

    if (!ok) {
      alert("We cannot update the product");
      return;
    }

    toast.success("Producto Guardado", {
      position: "top-right",
      autoClose: 2000,
    });
    router.replace(`/admin/product/${updatedProduct?.id}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-1/3"
    >
      {/* Textos */}
      <div className="w-full">
        <div className="flex flex-col mb-2">
          <span>Nombre</span>
          <input
            type="text"
            className="p-2 border rounded-md bg-gray-200"
            {...register("name", { required: true })}
          />
        </div>

        <div className="flex flex-col mb-2">
          <span>Descripcion</span>
          <textarea
            rows={5}
            className="p-2 border rounded-md bg-gray-200"
            {...register("description", { required: true })}
          ></textarea>
        </div>

        <div className="flex flex-col mb-2">
          <span>Precio</span>
          <input
            type="number"
            className="p-2 border rounded-md bg-gray-200"
            {...register("price", { required: true, min: 0 })}
          />
        </div>

        <div className="flex flex-col mb-2">
          <span>Stock</span>
          <input
            type="number"
            className="p-2 border rounded-md bg-gray-200"
            {...register("stockQuantity", { required: true, min: 0 })}
          />
        </div>

        <div className="flex flex-col mb-2">
          <span>Category</span>
          <select
            className="p-2 border rounded-md bg-gray-200"
            {...register("categoryId", { required: true })}
          >
            <option value="">[Select]</option>
            {categories.map((category) => (
              <option
                key={category.id}
                value={category.id}
                className="capitalize"
              >
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full">
          <div className="flex flex-col mb-2">
            <span>Imagen</span>
            <input
              type="text"
              className="p-2 border rounded-md bg-gray-200"
              {...register("imageUrl", { required: true })}
            />
          </div>

          <button className="rounded bg-blue-600 font-semibold text-sm text-white p-2 w-full">Guardar</button>
        </div>
      </div>
    </form>
  );
};
