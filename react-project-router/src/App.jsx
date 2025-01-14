import Login from "./assets/Components/Login";
import Home from "./assets/Components/Home";
import Contato from "./assets/Components/Contato";
import Header from "./assets/Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./assets/Components/404";
import Usuario from "./assets/Components/Usuario";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="contato" element={<Contato />} />
          <Route path="usuario" element={<Usuario />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
