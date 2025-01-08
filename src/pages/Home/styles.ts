import { darken } from "polished";
import styled from "styled-components";

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  list-style: none;
  max-width: 1020px;
  margin: 0 auto;

  li {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgb(221, 221, 221);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    justify-content: space-between;

    button {
      margin: 1.5rem 1rem 1rem;
      width: 17rem;
      border: none;
      border-radius: 3px;
      overflow: hidden;
      background: var(--purple);

      cursor: pointer;

      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, "#7159c1")};
      }

      p {
        color: #fff;
      }
    }
  }

  .header {
    padding: 1.5rem;

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }

    strong {
      display: block;
      margin-top: 0.3rem;
      font-size: larger;
    }
  }

  .shoes {
    width: 13rem;
    height: 13rem;
    padding-bottom: 2rem;
  }

  .cart-icon {
    margin: 0 0.2rem 0 0.4rem;
    width: 1.5rem;
    height: 1.5rem;
  }

  .button-style {
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 2rem;
  }

  li:nth-child(n + 4) {
    margin-top: 1rem;
  }

  .cart-sum {
    display: flex;
    background: rgb(108, 8, 202);
    height: 100%;
    align-items: center;
    width: 3rem;
  }
`;
