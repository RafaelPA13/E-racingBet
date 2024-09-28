import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import Classificacao from "./pages/Classificacao/Classificacao";
import Wiki from "./pages/Wiki/Wiki";
import Jogo from "./pages/Jogo/Jogo";
import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login/Login";

import App from "./App";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "classificacao", element: <Classificacao /> },
      { path: "wiki", element: <Wiki /> },
      { path: "jogo", element: <Jogo /> },
    ],
  },
  { path: "/cadastro", element: <Cadastro /> },
  { path: "/login", element: <Login /> }, 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
