import { Model, createServer } from "miragejs";

import App from "./App.tsx";
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
          description: "Tênis confortavel para corrida",
          price: 179.9,
        },

        {
          id: 2,
          description: "Tênis estiloso e super confortavel",
          price: 320.9,
        },

        {
          id: 3,
          description: "Tênis azul perfeito para corridas a beira mar",
          price: 159.9,
        },
      ],
    });
  },

  routes() {
    this.namespace = "/api";

    this.get("/products", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("product", data);
    });
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
