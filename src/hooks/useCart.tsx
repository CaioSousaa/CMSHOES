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
  productsInCart: Product[];
  addProductInCart: (productId: number) => void;
  getProductQuantity: (productId: number) => number;
  handleRemoveProductOfCart: (productId: number) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [carts, setCarts] = useState<Product[]>([]);
  const [productsInCart, setProductsInCart] = useState<Product[]>([]);

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

  useEffect(() => {
    const uniqueProducts = carts.reduce<Product[]>((acc, product) => {
      if (!acc.some((p) => p.id === product.id)) {
        return [...acc, product];
      }
      return acc;
    }, []);

    setProductsInCart(uniqueProducts);
  }, [carts]);

  function handleRemoveProductOfCart(productId: number) {
    setCarts((prevCarts) => {
      const updatedCarts = prevCarts
        .map((product) => {
          if (product.id === productId) {
            if (product.quantity && product.quantity > 1) {
              return { ...product, quantity: product.quantity - 1 };
            }

            return null;
          }
          return product;
        })
        .filter((product) => product !== null) as Product[];

      return updatedCarts;
    });
  }

  return (
    <CartContext.Provider
      value={{
        products,
        carts,
        productsInCart,
        addProductInCart,
        getProductQuantity,
        handleRemoveProductOfCart,
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
