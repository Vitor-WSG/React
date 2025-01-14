import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <h1>Header da pagina</h1>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>{" "}
        | <NavLink to="contato">Contato</NavLink> |{" "}
        <NavLink to="login">Login</NavLink>
      </nav>
    </>
  );
};

export default Header;
