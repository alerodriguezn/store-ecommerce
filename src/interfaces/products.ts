import { Category } from './categories'

export interface RootObjectProduct {
  content:          Product[];
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

export interface Product {
  id:            number;
  name:          string;
  description:   string;
  price:         number;
  stockQuantity: number;
  categoryName:  string;
  imageUrl:      string;
  createdAt:     Date;
  updatedAt:     Date;
}

export interface Pageable {
  pageNumber: number;
  pageSize:   number;
  sort:       Sort;
  offset:     number;
  paged:      boolean;
  unpaged:    boolean;
}

export interface Sort {
  empty:    boolean;
  unsorted: boolean;
  sorted:   boolean;
}