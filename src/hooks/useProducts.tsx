/* eslint-disable react-refresh/only-export-components */
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { api } from "../services/app";

interface Product {
  id: number;
  description: string;
  price: number;
}

interface ProductProviderProps {
  children: ReactNode;
}

interface ProductContextData {
  products: Product[];
}

const ProductContext = createContext<ProductContextData>(
  {} as ProductContextData
);

export function ProductsProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api
      .get("/products")
      .then((response) => setProducts(response.data.products));
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);

  return context;
}
