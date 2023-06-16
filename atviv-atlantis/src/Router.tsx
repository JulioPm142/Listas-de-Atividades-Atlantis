import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import New from "./Pages/Newpage";
import CadastroCli from "./Pages/Cadastro/CadastroCli";
import ListagemCli from "./Pages/Listagem/Listagemcli";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
              
                <Route path="/" element={<CadastroCli />} />
                <Route path="/new" element={<New />} />
                <Route path="/CadastroCli" element={<CadastroCli />} />
                <Route path="/ListagemCli" element={<ListagemCli/>}/>

            </Routes>
        </Router>
    );
}

export default AppRoutes;