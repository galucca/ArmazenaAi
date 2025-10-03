
import React from "react";
import Card from "../components/Card";

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>📦 ArmazenaAi</h1>
      <p>Bem-vindo ao sistema de controle de estoque!</p>
      
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <Card title="Total de Produtos" value={120} />
        <Card title="Estoque Crítico" value={8} />
        <Card title="Mais Vendidos" value="Camisas" />
      </div>
    </div>
  );
};

export default Home;
