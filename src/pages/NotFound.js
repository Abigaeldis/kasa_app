import React from "react";
import Header from "../components/Header";
import "../styles/notfound.css";

function NotFound() {
  return (
    <div>
      <Header />
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
    </div>
  );
}

export default NotFound;
