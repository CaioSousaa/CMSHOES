import { Container, Content } from "./styles";

import cartSVG from "../../assets/cart-1.svg";
import logoSVG from "../../assets/logo.svg";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { carts } = useCart();
  const cartSize = carts.length;

  return (
    <Container>
      <Content>
        <header>
          <img src={logoSVG} alt="logo" />
        </header>

        <div className="infos">
          <div className="desc-cart">
            <strong>Meu carrinho</strong>
            <span>
              {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
            </span>
          </div>

          <div className="icon">
            <img src={cartSVG} alt="cart" className="cart" />
          </div>
        </div>
      </Content>
    </Container>
  );
}
