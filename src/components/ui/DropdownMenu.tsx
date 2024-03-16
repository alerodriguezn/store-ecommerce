"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { IoPerson } from "react-icons/io5";
import { IoLogIn } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import Link from "next/link";

export const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: session } = useSession();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Botón del dropdown */}
      <button
        onClick={toggleDropdown}
        className=" py-2 px-4 rounded inline-flex items-center"
      >
        <span>Menu</span>
        <svg
          className="fill-current h-4 w-4 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6z" />
        </svg>
      </button>
      {/* Contenido del dropdown */}
      {isOpen && (
        <ul className="absolute text-gray-700 pt-1 w-28 bg-white border rounded-lg shadow-lg">
          <li>
            <Link
              href="/profile"
              className="rounded-t-lg block px-4 py-2 text-sm"
            >
              <IoPerson className="inline-block mr-2" />
              Perfil
            </Link>
          </li>
          <li>
            <Link
              href="/admin"
              className="block px-4 py-2 text-sm"
            >
              <IoSettings className="inline-block mr-2"/>
              Admin
            </Link>
          </li>
          <li>
            <Link
              href={session?.user ? "api/auth/signout" : "api/auth/signin"}
              className="block px-4 py-2 text-sm"
            >
              <IoLogIn className="inline-block mr-2"/>
              {session?.user ? "Signout" : "Login"}
             
            </Link>
          </li>
          
        </ul>
      )}
    </div>
  );
};
