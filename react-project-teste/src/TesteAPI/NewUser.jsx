import { useForm } from "react-hook-form";
import Axios from "axios";

const NewUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function sendData(data) {
    Axios.post("https://dogsapi.origamid.dev/json/api/user", {
      username: data.username,
      password: data.password,
      email: data.email,
    })
      .then((r) => console.log(r))
      .catch((e) => console.log(e));
  }

  return (
    <>
      <fieldset>
        <legend>Usuario POST</legend>

        <form onSubmit={handleSubmit(sendData)}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Type your username here"
            {...register("username", { required: true })}
          />
          {errors?.username?.type === "required" && (
            <span style={{ color: "red", fontSize: "1rem" }}>
              *The name field is required
            </span>
          )}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Type your password here"
            {...register("password", { required: true, minLength: 3 })}
          />
          {errors?.password && (
            <span style={{ color: "red", fontSize: "1rem" }}>
              *The password field is required
            </span>
          )}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Type your email here"
            {...register("email", { required: true })}
          />
          {errors?.email?.type === "required" && (
            <span style={{ color: "red", fontSize: "1rem" }}>
              *The email field is required
            </span>
          )}
          <div>
            <button style={{ backgroundColor: "blue" }}>Criar</button>
          </div>
        </form>
      </fieldset>
    </>
  );
};

export default NewUser;
