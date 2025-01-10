import { ProductList } from "./styles";
import cartIconSVG from "../../assets/cart-icon.svg";
import shoesFivePNG from "../../assets/shoes-five.png";
import shoesFourPNG from "../../assets/shoes-four.png";
import shoesOnePNG from "../../assets/shoes-one.png";
import shoesSixPNG from "../../assets/shoes-six.png";
import shoesThreePNG from "../../assets/shoes-three.png";
import shoesTwoPNG from "../../assets/shoes-two.png";
import { useCart } from "../../hooks/useCart";

// Mapeamento das imagens de acordo com o ID
const shoeImages: { [key: number]: string } = {
  1: shoesOnePNG,
  2: shoesTwoPNG,
  3: shoesThreePNG,
  4: shoesFourPNG,
  5: shoesFivePNG,
  6: shoesSixPNG,
};

export function Home() {
  const { products } = useCart();

  if (!products || products.length === 0) {
    return <p>Carregando produtos...</p>;
  }

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <div className="header">
            <img
              src={shoeImages[product.id]}
              alt={product.description}
              className="shoes"
            />
            <span>{product.description}</span>
            <strong>R$ {product.price.toFixed(2)}</strong>
          </div>
          <div>
            <button type="button">
              <div className="button-style">
                <div className="cart-sum">
                  <img
                    src={cartIconSVG}
                    alt="cart-icon"
                    className="cart-icon"
                  />
                  <p>0</p>
                </div>
                <p>ADICIONAR AO CARRINHO</p>
              </div>
            </button>
          </div>
        </li>
      ))}
    </ProductList>
  );
}
