import { CartProvider } from "./hooks/useCart";
import { Global } from "./styles/global";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

export function App() {
  return (
    <CartProvider>
      <Header />
      <Home />
      <Global />
    </CartProvider>
  );
}

export default App;
