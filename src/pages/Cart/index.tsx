import { Content, ProductInCart } from "./styles";

import minusSVG from "../../assets/minus.svg";
import plusSVG from "../../assets/plus.svg";
import shoesFivePNG from "../../assets/shoes-five.png";
import shoesFourPNG from "../../assets/shoes-four.png";
import shoesOnePNG from "../../assets/shoes-one.png";
import shoesSixPNG from "../../assets/shoes-six.png";
import shoesThreePNG from "../../assets/shoes-three.png";
import shoesTwoPNG from "../../assets/shoes-two.png";
import trashSVG from "../../assets/trash.svg";
import { useCart } from "../../hooks/useCart";

const shoeImages: { [key: number]: string } = {
  1: shoesOnePNG,
  2: shoesTwoPNG,
  3: shoesThreePNG,
  4: shoesFourPNG,
  5: shoesFivePNG,
  6: shoesSixPNG,
};

export function Cart() {
  const {
    getProductQuantity,
    carts,
    handleRemoveProductOfCart,
    handleDecrementCart,
    handleIncrementCart,
  } = useCart();

  console.log(carts);

  function onSubtotal(productId: number) {
    const product = carts.find((p) => p.id === productId);

    if (product && product.price !== undefined) {
      const productQtd = getProductQuantity(productId);
      return product.price * productQtd;
    }

    return 0;
  }

  function onTotalPurchaseInCart() {
    const cart = [...carts];

    const total = cart.reduce((acc, product) => {
      const subTotal = onSubtotal(product.id);
      return subTotal !== undefined ? acc + subTotal : acc;
    }, 0);

    return total;
  }

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
          {carts.map((product) => (
            <tr className="container" key={product.id}>
              <td>
                <div className="product-info">
                  <div>
                    <img
                      src={shoeImages[product.id]}
                      alt="Tênis"
                      className="shoes"
                    />
                  </div>
                  <div className="description-product">
                    <span>{product.description}</span>
                    <strong>
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(product.price)}
                    </strong>
                  </div>
                </div>
              </td>

              <td>
                <div className="qtd-container">
                  <img
                    src={minusSVG}
                    alt="minus"
                    className="assets"
                    onClick={() => handleDecrementCart(product.id)}
                  />
                  <input
                    type="number"
                    min="0"
                    value={getProductQuantity(product.id)}
                    readOnly
                  />
                  <img
                    src={plusSVG}
                    alt="plus"
                    className="assets"
                    onClick={() => handleIncrementCart(product.id)}
                  />
                </div>
              </td>

              <td>
                <p>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(onSubtotal(product.id))}
                </p>
              </td>
              <td>
                <img
                  src={trashSVG}
                  alt="trash"
                  className="assets"
                  onClick={() => handleRemoveProductOfCart(product.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Content>
        <button type="button">FINALIZAR O PEDIDO</button>

        <div className="ttl">
          <p>TOTAL</p>
          <strong>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(onTotalPurchaseInCart())}
          </strong>
        </div>
      </Content>
    </ProductInCart>
  );
}
