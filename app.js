import React, { useState } from 'react';

function CuestionarioCHAOS() {
  const preguntas = [
    "En mi hogar hay muy poca conmoción.",
    "Generalmente podemos encontrar las cosas cuando las necesitamos.",
    // Añade las otras 13 preguntas aquí
  ];

  const [respuestas, setRespuestas] = useState(
    new Array(preguntas.length).fill(3)
  );

  const cambiarRespuesta = (index, valor) => {
    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas[index] = valor;
    setRespuestas(nuevasRespuestas);
  };

  const calcularResultado = () => {
    const puntajeTotal = respuestas.reduce((a, b) => a + b, 0);
    return {
      puntajeTotal,
      interpretacion: 
        puntajeTotal < 30 ? "Ambiente Muy Organizado" :
        puntajeTotal < 45 ? "Ambiente Moderadamente Organizado" :
        "Ambiente Caótico"
    };
  };

  return (
    <div>
      <h1>Cuestionario CHAOS</h1>
      {preguntas.map((pregunta, index) => (
        <div key={index}>
          <p>{pregunta}</p>
          {[1, 2, 3, 4, 5].map((valor) => (
            <button 
              key={valor}
              onClick={() => cambiarRespuesta(index, valor)}
              style={{
                backgroundColor: respuestas[index] === valor ? 'blue' : 'white',
                color: respuestas[index] === valor ? 'white' : 'black'
              }}
            >
              {valor}
            </button>
          ))}
        </div>
      ))}
      <div>
        <h2>Resultado</h2>
        <p>{calcularResultado().interpretacion}</p>
      </div>
    </div>
  );
}

export default CuestionarioCHAOS;
