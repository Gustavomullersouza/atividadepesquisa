import React, { useState, useMemo } from "react";

function Memoriza() {
  // Estado que controla o número usado no cálculo
  const [numero, setNumero] = useState(0);

  // Estado que controla a cor de fundo do componente
  const [cor, setCor] = useState("lightblue");

  // Função que simula um cálculo pesado (loop grande)
  const calculoPesado = (n) => {
    console.log("🔄 Calculando..."); // Indica quando o cálculo acontece
    let total = 0;
    for (let i = 0; i < 1e7; i++) { 
      total += i;
    }
    return total + n; // Retorna o resultado do cálculo
  };

  // useMemo memoriza o resultado da função
  // Só recalcula quando 'numero' muda
  const resultado = useMemo(() => calculoPesado(numero), [numero]);

  return (
    <div style={{ backgroundColor: cor, padding: 20 }}>
      {/* Exibe o resultado do cálculo */}
      <h2>Resultado: {resultado}</h2>

      {/* Botão para incrementar o número */}
      <button onClick={() => setNumero(numero + 1)}>Somar +1</button>

      {/* Botão para alternar a cor de fundo */}
      <button
        onClick={() => setCor(cor === "lightblue" ? "lightgreen" : "lightblue")}
        style={{ marginLeft: 10 }}
      >
        Trocar Cor
      </button>
    </div>
  );
}

export default Memoriza;
