import { ProductList } from "./styles";
import cartIconSVG from "../../assets/cart-icon.svg";
import shoesOnePNG from "../../assets/shoes-one.png";
import shoesThreePNG from "../../assets/shoes-three.png";
import shoesTwoPNG from "../../assets/shoes-two.png";

export function Home() {
  return (
    <ProductList>
      <li>
        <div className="header">
          <img src={shoesOnePNG} alt="tênis" className="shoes" />
          <span>Tênis confortavel para corrida</span>
          <strong>R$ 179,90</strong>
        </div>

        <div>
          <button type="button">
            <div className="button-style">
              <div className="cart-sum">
                <img src={cartIconSVG} alt="cart-icon" className="cart-icon" />
                <p>0</p>
              </div>
              <p>ADICIONAR AO CARRINHO</p>
            </div>
          </button>
        </div>
      </li>
      <li>
        <div className="header">
          <img src={shoesTwoPNG} alt="tênis" className="shoes" />
          <span>Tênis estiloso e super confortavel</span>
          <strong>R$ 320,90</strong>
        </div>

        <div>
          <button type="button">
            <div className="button-style">
              <div className="cart-sum">
                <img src={cartIconSVG} alt="cart-icon" className="cart-icon" />
                <p>0</p>
              </div>
              <p>ADICIONAR AO CARRINHO</p>
            </div>
          </button>
        </div>
      </li>
      <li>
        <div className="header">
          <img src={shoesThreePNG} alt="tênis" className="shoes" />
          <span>Tênis azul perfeito para corridas a beira mar</span>
          <strong>R$ 159,90</strong>
        </div>

        <div>
          <button type="button">
            <div className="button-style">
              <div className="cart-sum">
                <img src={cartIconSVG} alt="cart-icon" className="cart-icon" />
                <p>0</p>
              </div>
              <p>ADICIONAR AO CARRINHO</p>
            </div>
          </button>
        </div>
      </li>
      <li>
        <div className="header">
          <img src={shoesTwoPNG} alt="tênis" className="shoes" />
          <span>Tênis estiloso e super confortavel</span>
          <strong>R$ 320,90</strong>
        </div>

        <div>
          <button type="button">
            <div className="button-style">
              <div className="cart-sum">
                <img src={cartIconSVG} alt="cart-icon" className="cart-icon" />
                <p>0</p>
              </div>
              <p>ADICIONAR AO CARRINHO</p>
            </div>
          </button>
        </div>
      </li>
      <li>
        <div className="header">
          <img src={shoesThreePNG} alt="tênis" className="shoes" />
          <span>Tênis azul perfeito para corridas a beira mar</span>
          <strong>R$ 159,90</strong>
        </div>

        <div>
          <button type="button">
            <div className="button-style">
              <div className="cart-sum">
                <img src={cartIconSVG} alt="cart-icon" className="cart-icon" />
                <p>0</p>
              </div>
              <p>ADICIONAR AO CARRINHO</p>
            </div>
          </button>
        </div>
      </li>
      <li>
        <div className="header">
          <img src={shoesOnePNG} alt="tênis" className="shoes" />
          <span>Tênis confortavel para corrida</span>
          <strong>R$ 179,90</strong>
        </div>

        <div>
          <button type="button">
            <div className="button-style">
              <div className="cart-sum">
                <img src={cartIconSVG} alt="cart-icon" className="cart-icon" />
                <p>0</p>
              </div>
              <p>ADICIONAR AO CARRINHO</p>
            </div>
          </button>
        </div>
      </li>
    </ProductList>
  );
}
