"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const FiltersList = () => {
  const pathname = usePathname();
  const [priceMin, setPriceMin] = useState<number>(0);
  const [priceMax, setPriceMax] = useState<number>(0);

  const createPageUrl = () => {
    const params = new URLSearchParams();

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
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="font-semibold">Categorias</h2>
        <div className="flex justify-center gap-2">
          <input
            type="radio"
            id="electronica"
            name="contact"
            value="email"
          />
          <label htmlFor="electronica">Email</label>

          <input
            type="radio"
            id="contactChoice2"
            name="contact"
            value="phone"
          />
          <label htmlFor="contactChoice2">Phone</label>

          <input type="radio" id="contactChoice3" name="contact" value="mail" />
          <label htmlFor="contactChoice3">Mail</label>

          
        </div>
      </section>

      <Link
        className="bg-blue-600 hover:bg-blue-800 text-white px-2 py-1 text-center text-sm rounded transition-all w-20"
        href={createPageUrl()}
      >
        Filtrar
      </Link>
    </div>
  );
};
