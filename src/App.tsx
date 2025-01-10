import { Global } from "./styles/global";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { ProductsProvider } from "./hooks/useProducts";

export function App() {
  return (
    <ProductsProvider>
      <Header />
      <Home />
      <Global />
    </ProductsProvider>
  );
}

export default App;
