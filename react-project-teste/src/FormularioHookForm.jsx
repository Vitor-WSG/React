import React from "react";
import { useForm } from "react-hook-form";

const FormularioHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  function sendData(data) {
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(sendData)}>
        <label>Nome</label>
        <input
          type="text"
          placeholder="Insira seu nome"
          {...register("name", { required: true })}
        />
        {errors?.name?.type === "required" && (
          <span style={{ color: "red" }}>*Campo nome obrigatório</span>
        )}

        <label>E-mail</label>
        <input
          type="email"
          placeholder="Insira seu email"
          {...register("email", { required: true })}
        />
        {errors?.email && (
          <span style={{ color: "red" }}>*Campo email obrigatório</span>
        )}

        <label>Senha</label>
        <input
          type="password"
          placeholder="Insira sua senha"
          {...register("password", { required: true, minLength: 3 })}
        />
        {errors?.password?.type === "minLength" && (
          <span style={{ color: "red" }}>
            *Senha deve ter pelo menos 3 caracteres
          </span>
        )}

        <label>Profissão</label>
        <select {...register("profession")}>
          <option value="0">Selecione a profissão</option>
          <option value="1">Engenheiro</option>
          <option value="2">Desenvolvedor</option>
        </select>
        <br />

        <button>Enviar</button>
      </form>
    </>
  );
};

export default FormularioHookForm;
