'use client'

import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";



export const TopMenu = () => {

  

  return (
    <nav className="flex px-5 justify-between items-center w-full">
      <div>
        <Link href={"/"}>
          <span className={`antialiased font-bold `}>
            Ejemplo
          </span>
          <span> | Store</span>
        </Link>
      </div>
      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={"/category/1"}
        >
          Electrónicos
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={"/category/2"}
        >
          Moda
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={"/category/3"}
        >
          Hogar
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={"/category/4"}
        >
          Belleza
        </Link>
      </div>

      <div className="flex items-center">
        <button 
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 "
        >
          Menu
        </button>
      </div>
    </nav>
  );
};
