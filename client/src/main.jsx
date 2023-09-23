import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";

const auth0Config = {
  domain: "dev-k8p33cfv577ia8wr.us.auth0.com",
  clientId: "OvzpMhybzIED4yoL8Novk1QLei5InK5s",
  redirectUri: window.location.origin,
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider {...auth0Config}>
    <App />
  </Auth0Provider>
);
