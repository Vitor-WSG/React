import "./App.css";
import Contato from "./components/Contato";
import Header from "./components/Header";
import Produtos from "./components/Produtos";
import Produto from "./components/Produto";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="produtos" element={<Produtos />} />
          <Route path="produto:id" element={<Produto />} />
          <Route path="contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
