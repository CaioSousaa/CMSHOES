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
  quantity: number;
}

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  products: Product[];
  carts: Product[];
  addProductInCart: (productId: number) => void;
  getProductQuantity: (productId: number) => number;
  handleRemoveProductOfCart: (productId: number) => void;
  handleDecrementCart: (productId: number) => void;
  handleIncrementCart: (productId: number) => void;
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
    setCarts((prevCarts) => {
      const existingProduct = prevCarts.find(
        (product) => product.id === productId
      );

      if (existingProduct) {
        return prevCarts.map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      }

      const productToAdd = products.find((product) => product.id === productId);
      if (productToAdd) {
        return [...prevCarts, { ...productToAdd, quantity: 1 }];
      }

      return prevCarts;
    });
  }

  function getProductQuantity(productId: number): number {
    const product = carts.find((p) => p.id === productId);
    return product ? product.quantity : 0;
  }

  function handleDecrementCart(productId: number) {
    setCarts((prevCarts) =>
      prevCarts
        .map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0)
    );
  }

  function handleIncrementCart(productId: number) {
    setCarts((prevCarts) =>
      prevCarts
        .map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
        .filter((product) => product.quantity > 0)
    );
  }

  function handleRemoveProductOfCart(productId: number) {
    setCarts((prevCarts) =>
      prevCarts
        .map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0)
    );
  }

  return (
    <CartContext.Provider
      value={{
        products,
        carts,
        addProductInCart,
        getProductQuantity,
        handleRemoveProductOfCart,
        handleDecrementCart,
        handleIncrementCart,
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
