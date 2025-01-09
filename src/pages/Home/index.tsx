import { ProductList } from "./styles";
import cartIconSVG from "../../assets/cart-icon.svg";
import shoesFivePNG from "../../assets/shoes-five.png";
import shoesFourPNG from "../../assets/shoes-four.png";
import shoesOnePNG from "../../assets/shoes-one.png";
import shoesSixPNG from "../../assets/shoes-six.png";
import shoesThreePNG from "../../assets/shoes-three.png";
import shoesTwoPNG from "../../assets/shoes-two.png";

export function Home() {
  return (
    <ProductList>
      <li>
        <div className="header">
          <img src={shoesOnePNG} alt="Tênis Thunder" className="shoes" />
          <span>Tênis Thunder - Ideal para treinos intensos</span>
          <strong>R$ 199,90</strong>
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
          <img src={shoesTwoPNG} alt="Tênis Urban Runner" className="shoes" />
          <span>Tênis Urban Runner - Estilo e conforto na cidade</span>
          <strong>R$ 289,90</strong>
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
          <img src={shoesThreePNG} alt="Tênis Ocean Breeze" className="shoes" />
          <span>Tênis Ocean Breeze - Perfeito para corridas à beira-mar</span>
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
          <img
            src={shoesSixPNG}
            alt="Tênis Galaxy Star"
            className="shoes"
            id="shoes-six"
          />
          <span>Tênis Galaxy Star - Design moderno e durabilidade</span>
          <strong>R$ 259,90</strong>
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
          <img
            src={shoesFourPNG}
            alt="Tênis Lightning Bolt"
            className="shoes"
          />
          <span>Tênis Lightning Bolt - Para quem busca velocidade</span>
          <strong>R$ 299,90</strong>
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
          <img
            src={shoesFivePNG}
            alt="Tênis Desert Trail"
            className="shoes"
            id="shoes-five"
          />
          <span>Tênis Desert Trail - Ideal para aventuras em trilhas</span>
          <strong>R$ 239,90</strong>
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
