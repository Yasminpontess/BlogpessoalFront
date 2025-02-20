import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./componentes/footer/Footer";
import Navbar from "./componentes/navbar/Navbar";
import Home from "./pages/home/home";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import { AuthProvider } from "./contexts/AuthContext";
import ListaTemas from "./componentes/temas/listartemas/ListarTemas";
import FormTema from "./componentes/temas/formtema/FormTema.tsx";
import DeletarTema from "./componentes/temas/deletartema/DeletarTema.tsx";
import ListaPostagens from "./componentes/postagens/listapostagens/ListarPostagens.tsx";
import FormPostagem from "./componentes/postagens/formpostagem/FormPostagem.tsx";
import DeletarPostagem from "./componentes/postagens/deletarpostagem/DeletarPostagem.tsx";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastrartema" element={<FormTema />} />
              <Route path="/editartema/:id" element={<FormTema />} />
              <Route path="/deletartema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastrarpostagem" element={<FormPostagem />} />
              <Route path="/editarpostagem/:id" element={<FormPostagem />} />
              <Route
                path="/deletarpostagem/:id"
                element={<DeletarPostagem />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
