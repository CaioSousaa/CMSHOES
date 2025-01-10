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

interface ProductClick {
  product: Product;
  createdAt: Date;
}

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  products: Product[];
  carts: ProductClick[];
  addProductInCart: (productClick: ProductClick) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [carts, setCarts] = useState<ProductClick[]>([]);

  useEffect(() => {
    api
      .get("/products")
      .then((response) => setProducts(response.data.products));
  }, []);

  function addProductInCart(productClick: ProductClick) {
    setCarts([...carts, productClick]);
  }

  return (
    <CartContext.Provider value={{ products, carts, addProductInCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
