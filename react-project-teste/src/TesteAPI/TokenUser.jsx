import { useForm } from "react-hook-form";
import Axios from "axios";

const TokenUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function getToken(data) {
    Axios.post("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      username: data.username,
      password: data.password,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <>
      <fieldset>
        <legend>Token POST</legend>
        <form onSubmit={handleSubmit(getToken)}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Type your username here"
            id="username"
            {...register("username", { required: true })}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Type your password here"
            id="password"
            {...register("password", { required: true, minLength: 3 })}
          />
          <div>
            <button style={{ backgroundColor: "green" }}>Acessar</button>
          </div>
        </form>
      </fieldset>
    </>
  );
};

export default TokenUser;
