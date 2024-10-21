import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

const auth0Config = {
  domain: import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN,
  clientId: import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID,
  redirectUri: window.location.origin,
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider {...auth0Config}>
    <App />
  </Auth0Provider>
);
