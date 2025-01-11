import { AppRoutes } from "./routes";
import { CartProvider } from "./hooks/useCart";
import { Global } from "./styles/global";
import { Header } from "./components/Header";

export function App() {
  return (
    <CartProvider>
      <Header />
      <AppRoutes />
      <Global />
    </CartProvider>
  );
}

export default App;
