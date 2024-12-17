import React from "react";
import styles from "./DesafioFormulario.module.css";

const DesafioFormulario = () => {
  const [resposta, setResposta] = React.useState();
  const [score, setScore] = React.useState(0);
  const [slide, setSlide] = React.useState(0);
  const perguntas = [
    {
      pergunta: "Qual método é utilizado para criar componentes?",
      options: [
        "React.makeComponent()",
        "React.createComponent()",
        "React.createElement()",
      ],
      resposta: "React.createElement()",
      id: "p1",
    },
    {
      pergunta: "Como importamos um componente externo?",
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      resposta: 'import Component from "./Component"',
      id: "p2",
    },
    {
      pergunta: "Qual hook não é nativo?",
      options: ["useEffect()", "useFetch()", "useCallback()"],
      resposta: "useFetch()",
      id: "p3",
    },
    {
      pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
      options: ["set", "get", "use"],
      resposta: "use",
      id: "p4",
    },
  ];

  return (
    <>
      {perguntas.map(
        (r, index) =>
          slide === index && (
            <fieldset key={r}>
              <legend className={styles.legend}>{r.pergunta}</legend>
              {r.options.map((r) => (
                <label key={r} style={{ fontFamily: "monospace" }}>
                  <input
                    type="radio"
                    value={r}
                    onChange={({ target }) => setResposta(target.value)}
                    checked={resposta === r}
                  />
                  {r}
                </label>
              ))}
              <button
              className={styles.button}
                onClick={() => {
                  if (resposta === r.resposta) {
                    setScore(score + 1);
                    setSlide(slide + 1);
                  }
                }}
              >
                Próxima
              </button>
            </fieldset>
          )
      )}

      <p>
        Você acertou : {score} de {perguntas.length}
      </p>
    </>
  );
};

export default DesafioFormulario;
