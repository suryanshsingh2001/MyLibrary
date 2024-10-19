import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { I18nProProvider } from "@marchintosh94/i18n-pro-react";
import { getDefaultLocale } from "./utils";

const defaultLocale = getDefaultLocale();

const auth0Config = {
  domain: import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN,
  clientId: import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID,
  redirectUri: window.location.origin,
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider {...auth0Config}>
    <I18nProProvider initialSetup={{ locale: defaultLocale, path: `/i18n/${defaultLocale}.json` }}>
      <App />
    </I18nProProvider>
  </Auth0Provider>
);
