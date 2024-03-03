

// Hay que crear una interfaz para las categorias

import { Pageable, Sort } from "./products";

export interface RootObjectCategory {
    content:          Category[];
    pageable:         Pageable;
    totalPages:       number;
    totalElements:    number;
    last:             boolean;
    size:             number;
    number:           number;
    sort:             Sort;
    numberOfElements: number;
    first:            boolean;
    empty:            boolean;
  }
  
export interface Category {
    id: number,
    name: string,
    image: string,
    description: string,
}