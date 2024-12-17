import React from "react";
import styles from "./Quiz.module.css";

const Quiz = ({ pergunta, options}) => {
  const [questionario, setQuestionario] = React.useState();
  return (
    <>
      <fieldset>
        <legend className={styles.titulo}>{pergunta}</legend>

        {options.map((option) => (
          <label className={styles.perguntas} key={option}>
            <input
              type="radio"
              value={option}
              checked={questionario === option}
              onChange={({ target }) => {console.log(target), setQuestionario(target.value)}}
            />
            {option}
          </label>
        ))}
      </fieldset>
    </>
  );
};

export default Quiz;
