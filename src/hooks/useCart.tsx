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
  quantity?: number;
}

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  products: Product[];
  carts: Product[];
  addProductInCart: (productId: number) => void;
  getProductQuantity: (productId: number) => number;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [carts, setCarts] = useState<Product[]>([]);

  useEffect(() => {
    api
      .get("/products")
      .then((response) => setProducts(response.data.products));
  }, []);

  function addProductInCart(productId: number) {
    try {
      const product = products.find((p) => p.id === productId);

      if (product) {
        setCarts((prevCarts) => [...prevCarts, product]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function getProductQuantity(productId: number): number {
    return carts.filter((product) => product.id === productId).length;
  }

  return (
    <CartContext.Provider
      value={{
        products,
        carts,
        addProductInCart,
        getProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
