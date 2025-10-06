
import React from "react";
import Card from "../components/Card";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">📦 ArmazenaAi</h1>
      <p className="home-subtitle">Bem-vindo ao sistema de controle de estoque!</p>
      
      <div className="cards-container">
        <Card title="Total de Produtos" value={120} />
        <Card title="Estoque Crítico" value={8} />
        <Card title="Mais Vendidos" value="Camisas" />
      </div>
    </div>
  );
};

export default Home;
