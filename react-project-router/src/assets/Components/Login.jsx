import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("Seja bem vindo usuario");
    navigate("/usuario");
  };
  return (
    <>
      <h1>Componente Login</h1>
      <button onClick={handleClick}>Logins</button>
    </>
  );
};

export default Login;
