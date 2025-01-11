import { Model, createServer } from "miragejs";

import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createServer({
  models: {
    product: Model,
  },

  seeds(server) {
    server.db.loadData({
      products: [
        {
          id: 1,
          description: "Tênis Thunder - Ideal para treinos intensos",
          price: 199.9,
        },
        {
          id: 2,
          description: "Tênis Urban Runner - Estilo e conforto na cidade",
          price: 289.9,
        },
        {
          id: 3,
          description:
            "Tênis Ocean Breeze - Perfeito para corridas à beira-mar",
          price: 179.9,
        },
        {
          id: 4,
          description: "Tênis Galaxy Star - Design moderno e durabilidade",
          price: 259.9,
        },
        {
          id: 5,
          description: "Tênis Lightning Bolt - Para quem busca velocidade",
          price: 299.9,
        },
        {
          id: 6,
          description: "Tênis Desert Trail - Ideal para aventuras em trilhas",
          price: 239.9,
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/products", () => {
      return this.schema.all("product");
    });
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
