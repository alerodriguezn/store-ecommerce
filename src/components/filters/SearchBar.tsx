"use client";

import Link from "next/link";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { ChangeEvent } from "react";
import { useSearchParams } from "next/navigation";

export const SearchBar = () => {


  const [name, setName] = useState<string>("");

  const currentParams = useSearchParams();

  const pathname = usePathname();

  const createUrl = () => {
    const params = new URLSearchParams();

    if(currentParams.has("categoryId")){
      params.set("categoryId", currentParams.get("categoryId") as string);
    }

    if(currentParams.has("priceMin")){
      params.set("priceMin", currentParams.get("priceMin") as string);
    }

    if(currentParams.has("priceMax")){
      params.set("priceMax", currentParams.get("priceMax") as string);
    }


    if (name === "") {
      return `?${params.toString()}`;
    }

    if (name !== "") {
      params.set("name", name);
    }

    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex">
      <input
        type="text"
        className="w-full rounded px-2"
        placeholder="Buscar"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Link
        href={createUrl()}
        className="flex justify-center items-center gap-2 mx-2 bg-blue-600 hover:bg-blue-800 text-white px-2 py-1 text-center text-sm rounded transition-all w-20"
      >
        <IoSearchOutline />
        Buscar
      </Link>
    </div>
  );
};