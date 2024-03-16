"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Category } from "@/interfaces/categories";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

interface Props {
  categories: Category[];
}


export const FiltersList = ({ categories }: Props) => {
  const router = useRouter();

  const currentParams = useSearchParams();

  const pathname = usePathname();
  const [priceMin, setPriceMin] = useState<number>(0);
  const [priceMax, setPriceMax] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string>("");

  //redirect to the same page with the new query params
  const handleChangeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);

    console.log(e.target.value);

    const params = new URLSearchParams();
    params.set("categoryId", e.target.value);
    const newUrl = `${pathname}?${params.toString()}`;
    router.push(newUrl);
  };

  const createPageUrl = () => {
    const params = new URLSearchParams();

    if(currentParams.has("name")){
      params.set("name", currentParams.get("name") as string);
    }

    //get the past params and add the new ones

    params.set("priceMin", priceMin.toString());
    params.set("priceMax", priceMax.toString());
    if (selectedOption) {
      params.set("categoryId", selectedOption);
    }

    if (priceMin === 0 && priceMax === 0) {
      return `?${params.toString()}`;
    }

    if (priceMin > 0) {
      params.set("priceMin", priceMin.toString());
    }

    if (priceMax > 0) {
      params.set("priceMax", priceMax.toString());
    }

    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-start ">
      <section className="flex flex-col gap-2">
        <h2 className="font-semibold">Rango de Precios</h2>
        <div className="flex justify-center gap-2">
          <span className="font-semibold">$</span>
          <input
            type="number"
            className="rounded-md w-20"
            placeholder="0"
            value={priceMin}
            onChange={(e) => setPriceMin(Number(e.target.value))}
          />
          <span className="font-bold text-md"> - </span>
          <span className="font-semibold">$</span>
          <input
            type="text"
            className="rounded-md w-20"
            placeholder="100"
            value={priceMax}
            onChange={(e) => setPriceMax(Number(e.target.value))}
          />
        </div>
        <Link
          className="bg-blue-600 hover:bg-blue-800 text-white px-2 py-1 text-center text-sm rounded transition-all w-20 mt-3"
          href={createPageUrl()}
        >
          Filtrar
        </Link>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="font-semibold">Categorias</h2>
        <div className="grid grid-cols-1 gap-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center gap-2">
              <input
                type="radio"
                id={category.id.toString()}
                name={category.name}
                value={category.id}
                checked={selectedOption === category.id.toString()}
                onChange={handleChangeOption}
              />
              <label htmlFor="electronica">{category.name}</label>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};