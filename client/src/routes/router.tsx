import App from '@/App'
import ArtistDashboard from '@/sections/artist/pages/Dashboard/Dashboard'
import Layout from '@/sections/artist/pages/Layout'
import NovaObra from '@/sections/artist/pages/Obras/NovaObra'
import ArtistObras from '@/sections/artist/pages/Obras/Obras'
import ArtistExposicoes from '@/sections/artist/pages/Exposicoes/Exposicoes'
import ArtistLeiloes from '@/sections/artist/pages/Leiloes/Leiloes'
import Painel from '@/sections/client/pages/Painel'
import ElementError from '@/sections/shared/pages/ElementError'
import NotFound from '@/sections/shared/pages/NotFound'
import Acesso from '@/sections/site/pages/Acesso'
import DetalhesArtista from '@/sections/site/pages/DetalhesArtista'
import DetalhesExposicao from '@/sections/site/pages/DetalhesExposicao'
import DetalhesLeilao from '@/sections/site/pages/DetalhesLeilao'
import DetalhesObra from '@/sections/site/pages/DetalhesObra'
import Exposicoes from '@/sections/site/pages/Exposicoes'
import Inicio from '@/sections/site/pages/Inicio'
import Leiloes from '@/sections/site/pages/Leiloes'
import Login from '@/sections/site/pages/Login'
import Registo from '@/sections/site/pages/Registo'
import Obras from '@/sections/site/pages/Obras'
import Site from '@/sections/site/pages/Site'
import VerificacaoEmail from '@/sections/site/pages/VerificacaoEmail'
import { createBrowserRouter } from 'react-router-dom'

//o index:true só pode estar dentro do children, não pode estar fora do children

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ElementError />,
        children: [

            //Routas do site
            {
                path: "",
                element: <Site />,
                children: [
                    {
                        index: true,
                        element: <Inicio />,
                    },
                    {
                        path: "/obras",
                        element: <Obras />
                    },
                    {
                        path: "/obras/:idObra",
                        element: <DetalhesObra />
                    },
                    {
                        path: "/exposicoes",
                        element: <Exposicoes />
                    },
                    {
                        path: "/exposicoes/:idExposicao",
                        element: <DetalhesExposicao />
                    },
                    {
                        path: "/leiloes",
                        element: <Leiloes />
                    },
                    {
                        path: "/leiloes/:idLeilao",
                        element: <DetalhesLeilao />
                    },
                    {
                        path: "/artista/:idArtista",
                        element: <DetalhesArtista />
                    },

                    //panel do cliente
                    {
                        path: "/painel",
                        element: <Painel />
                    },

                ]
            },

            //rotas de acesso
            {
                path: "/acesso",
                element: <Acesso />,
                children: [
                    {
                        index: true,
                        element: <Login />
                    },
                    {
                        path: "login",
                        element: <Login />
                    },
                    {
                        path: "registo",
                        element: <Registo />
                    },
                    {
                        path: "autenticacao",
                        element: <VerificacaoEmail />
                    },
                ]
            },

            //área do artista
            {
                path: "/app-artista",
                element: <Layout />,
                children: [
                    {
                        index: true,
                        element: <ArtistDashboard />
                    },
                    {
                        path: "obras",
                        element: <ArtistObras />
                    },
                    {
                        path: "obras/nova",
                        element: <NovaObra />
                    },
                    {
                        path: "exposicoes",
                        element: <ArtistExposicoes />
                    },
                    {
                        path: "leiloes",
                        element: <ArtistLeiloes />
                    },
                ]
            },

            //routa para paginas não encontradas 
            {
                path: "*",
                element: <NotFound />,
            },


        ]
    }
])