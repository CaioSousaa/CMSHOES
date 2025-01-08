import { Container, Content } from "./styles";

import cartSVG from "../../assets/cart-1.svg";
import logoSVG from "../../assets/logo.svg";

export function Header() {
  return (
    <Container>
      <Content>
        <header>
          <img src={logoSVG} alt="logo" />
        </header>

        <div className="infos">
          <div className="desc-cart">
            <strong>Meu carrinho</strong>
            <span>2 itens</span>
          </div>

          <div className="icon">
            <img src={cartSVG} alt="cart" className="cart" />
          </div>
        </div>
      </Content>
    </Container>
  );
}
