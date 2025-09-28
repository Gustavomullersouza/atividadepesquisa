import React, { useRef } from "react";

function Focar() {
  // 1️⃣ Criamos uma referência para o input
  // useRef cria um objeto que persiste entre renders
  const inputRef = useRef(null);

  // 2️⃣ Função que usa a referência para focar no input
  const focarInput = () => {
    // inputRef.current aponta para o elemento DOM
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: 20 }}>
      {/* 3️⃣ Input que recebe a referência */}
      <input ref={inputRef} placeholder="Digite algo..." />

      {/* 4️⃣ Botão que, ao clicar, coloca o foco no input */}
      <button onClick={focarInput} style={{ marginLeft: 10 }}>
        Foca no Botão
      </button>
    </div>
  );
}

export default Focar;
