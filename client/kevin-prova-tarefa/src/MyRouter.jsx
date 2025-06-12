// Cria a lista de rotas com o Router Dom.
import { createBrowserRouter } from "react-router-dom";

// Importação das telas.
import App from "./App.jsx";
import PaginaErro from "./pages/PaginaErro.jsx";
import CadastroUsuario from "./pages/cadastro-usuario/CadastroUsuario.jsx";
import CadastroTarefa from "./pages/cadastro-tarefa/CadastroTarefa.jsx";
import Inicio from './pages/inicio/Inicio.jsx';
import EditarTarefa from "./pages/editar-tarefa/EditarTarefa.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <PaginaErro />,
        children: [
            {
                path:"/",
                element: <Inicio />
            },
            {
                path: "/Inicio",
                element: <Inicio />
            },
            {
                path:"/Cadastro-usuario",
                element: <CadastroUsuario />
            },
            {
                path:"/Cadastro-tarefa",
                element: <CadastroTarefa />
            },
            {
                path:"/Editar-tarefa/:id_tarefa",
                element: <EditarTarefa />
            },
        ]
    }
])

export default router;