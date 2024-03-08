"use client";

import Link from "next/link";
import { DropdownMenu } from './DropdownMenu';
import { IoCartOutline } from "react-icons/io5";
const navList = [
  {
    name: "Electrónicos",
    url: "/category/1",
  },
  {
    name: "Moda",
    url: "/category/2",
  },
  {
    name: "Alimentación",
    url: "/category/3",
  },
  {
    name: "Hogar",
    url: "/category/4",
  },
  {
    name: "Belleza",
    url: "/category/5",
  },
];

export const TopMenu = () => {


  return (
    <nav className="flex px-5 justify-between items-center w-full">
      <div>
        <Link href={"/"}>
          <span className={`antialiased font-bold `}>Ejemplo</span>
          <span> | Store</span>
        </Link>
      </div>
      <div className="hidden sm:block">
        {navList.map((item) => (
          <Link
            key={item.url}
            className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
            href={item.url}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center">

          <Link href="/cart" className="mr-2">
            <IoCartOutline size={25}/>
          </Link>
        

        <DropdownMenu />
   
        {/* <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 ">
          Menu
        </button> */}
      </div>
    </nav>
  );
};
