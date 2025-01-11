import { Content, ProductInCart } from "./styles";

import minusSVG from "../../assets/minus.svg";
import plusSVG from "../../assets/plus.svg";
import shoesOnePNG from "../../assets/shoes-one.png";
import trashSVG from "../../assets/trash.svg";

export function Cart() {
  return (
    <ProductInCart>
      <table>
        <thead>
          <tr>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>

        <tbody>
          <tr className="container">
            <td>
              <div className="product-info">
                <div>
                  <img src={shoesOnePNG} alt="Tênis" className="shoes" />
                </div>
                <div className="description-product">
                  <span>Tênis Thunder - Ideal para treinos intensos</span>
                  <strong>R$ 199.90</strong>
                </div>
              </div>
            </td>

            <td>
              <div className="qtd-container">
                <img src={minusSVG} alt="minus" className="assets" />
                <input type="number" min="0" placeholder="0" />
                <img src={plusSVG} alt="plus" className="assets" />
              </div>
            </td>

            <td>
              <p>R$ 199.90</p>
            </td>
            <td>
              <img src={trashSVG} alt="trash" className="assets" />
            </td>
          </tr>

          <tr className="container">
            <td>
              <div className="product-info">
                <div>
                  <img src={shoesOnePNG} alt="Tênis" className="shoes" />
                </div>
                <div className="description-product">
                  <span>Tênis Thunder - Ideal para treinos intensos</span>
                  <strong>R$ 199.90</strong>
                </div>
              </div>
            </td>

            <td>
              <div className="qtd-container">
                <img src={minusSVG} alt="minus" className="assets" />
                <input type="number" min="0" placeholder="0" />
                <img src={plusSVG} alt="plus" className="assets" />
              </div>
            </td>

            <td>
              <p>R$ 199.90</p>
            </td>
            <td>
              <img src={trashSVG} alt="trash" className="assets" id="trash" />
            </td>
          </tr>
        </tbody>
      </table>

      <Content>
        <button type="button">FINALIZAR O PEDIDO</button>

        <div className="ttl">
          <p>TOTAL</p>
          <strong>R$ 399.8</strong>
        </div>
      </Content>
    </ProductInCart>
  );
}
