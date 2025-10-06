import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h2 className="logo">📦 ArmazenaAi</h2>
      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Produtos</a>
        <a href="#">Categorias</a>
        <a href="#">Relatórios</a>
      </nav>
    </header>
  );
};

export default Header;
