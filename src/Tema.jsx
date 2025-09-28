import React, { createContext, useContext, useState } from "react";

// 1️⃣ Criando o Contexto para armazenar o tema
const TemaContext = createContext("claro");

// 2️⃣ Componente que consome o contexto e mostra o tema
function Caixa() {
  const tema = useContext(TemaContext); // acessa o valor do contexto

  // Ajusta o estilo de acordo com o tema
  const estilo = {
    backgroundColor: tema === "claro" ? "#fff" : "#333",
    color: tema === "claro" ? "#000" : "#fff",
    padding: "20px",
    textAlign: "center",
  };

  return <div style={estilo}>Tema atual: {tema}</div>;
}

// 3️⃣ Componente principal que fornece o contexto
function Tema() {
  const [tema, setTema] = useState("claro"); // controla o tema

  return (
    <TemaContext.Provider value={tema}>
      {/* Componente filho que consome o contexto */}
      <Caixa />

      {/* Botão para alternar o tema */}
      <div style={{ marginTop: "10px", textAlign: "center" }}>
        <button onClick={() => setTema(tema === "claro" ? "escuro" : "claro")}>
          Trocar Tema
        </button>
      </div>
    </TemaContext.Provider>
  );
}

export default Tema;
