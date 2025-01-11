import { darken } from "polished";
import styled from "styled-components";

export const ProductInCart = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  align-items: center;

  table {
    width: 100%;

    thead {
      th {
        color: #969cb3;
        font-weight: 400;
        text-align: left;
        line-height: 1.5rem;
        padding: 1rem 2rem;
      }

      th:first-child {
        padding-left: 13rem;
      }
    }

    tbody {
      td {
        padding: 1rem;

        .product-info {
          display: flex;
          align-items: center;

          .description-product {
            display: flex;
            flex-direction: column;

            strong {
              padding-top: 0.1rem;
              font-size: large;
              color: #333;
            }
          }
        }

        .shoes {
          width: 12rem;
          height: 12rem;
          padding-bottom: 2rem;
        }

        .qtd-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding-left: 1.3rem;

          input {
            border: 1px solid #ddd;
            border-radius: 4px;
            color: #666;
            padding: 6px;
            width: 50px;
          }
        }

        p {
          color: rgb(5, 5, 5);
          font-weight: bold;
          padding-left: 1.5rem;
        }

        .assets {
          cursor: pointer;
          transition: transform 0.2s, filter 0.2s;

          &:hover {
            filter: brightness(0.8);
            transform: scale(1.1);
          }

          &:disabled {
            filter: grayscale(100%);
            cursor: not-allowed;
          }
        }

        #trash {
          padding-right: 1rem;
        }
      }
    }

    .container {
      border: 1px solid rgb(221, 221, 221);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
      border-radius: 8px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  button {
    border: none;
    border-radius: 8px;
    width: 12rem;
    height: 4rem;
    font-size: 15px;
    background: var(--purple);
    color: var(--text-color);

    transition: background 0.3s;

    &:hover {
      background: ${(darken(0.6), "#7159c1")};
    }
  }

  .ttl {
    display: flex;
    align-items: center;
    gap: 1rem;

    strong {
      font-size: 30px;
    }
  }
`;
