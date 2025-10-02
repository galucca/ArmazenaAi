
import React from "react";

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>📦 ArmazenaAi</h1>
      <p>Bem-vindo ao sistema de controle de estoque!</p>
      
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ background: "#f5f5f5", padding: "20px", borderRadius: "10px", flex: 1 }}>
          <h3>Total de Produtos</h3>
          <p>120</p>
        </div>
        <div style={{ background: "#f5f5f5", padding: "20px", borderRadius: "10px", flex: 1 }}>
          <h3>Estoque Crítico</h3>
          <p>8</p>
        </div>
        <div style={{ background: "#f5f5f5", padding: "20px", borderRadius: "10px", flex: 1 }}>
          <h3>Mais Vendidos</h3>
          <p>Camisas</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
