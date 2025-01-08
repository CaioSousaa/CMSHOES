import { Global } from "./styles/global";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

export function App() {
  return (
    <>
      <Header />
      <Home />
      <Global />
    </>
  );
}

export default App;
