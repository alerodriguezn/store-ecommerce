'use client'

import { useEffect, useState } from "react";

export const InputPriceRange = () => {


  const [priceMin, setPriceMin] = useState<number>(0);
  const [priceMax, setPriceMax] = useState<number>(0);

  const handleClick = async () => {
    //Hacer el fetch de los productos
    
  }

  return (
    <div className="flex gap-2">
      <span className="font-semibold">$</span>
      <input type="number" className="rounded-md w-20" placeholder="0" value={priceMin} onChange={ (e) => setPriceMin(Number(e.target.value)) } />
      <span className="font-bold text-md"> - </span>
      <span className="font-semibold">$</span>
      <input type="text" className="rounded-md w-20" placeholder="100" value={priceMax} onChange={ (e) => setPriceMax(Number(e.target.value)) }  />
      <button 
        className="bg-blue-600 hover:bg-blue-800 text-white px-2 text-sm rounded transition-all"
        onClick={ handleClick  }
      >
        Filtrar
      </button>
    </div>
  );
};
