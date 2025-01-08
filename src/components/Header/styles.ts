import styled from "styled-components";

export const Container = styled.header`
  background: var(--purple);
`;

export const Content = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  padding: 2rem 2rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    text-align: right;

    strong {
      display: block;
      font-size: 1rem;
      color: var(--text-color);
    }

    span {
      font-size: 0.8rem;
      display: block;
      color: #efefef;
    }
  }

  .cart {
    width: 2.6rem;
    height: 2.6rem;
  }

  .infos {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
  }

  .icon {
    padding-top: 0.5rem;

    transition: filter 0.2%;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
