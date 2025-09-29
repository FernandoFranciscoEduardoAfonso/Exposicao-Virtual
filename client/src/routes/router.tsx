import { createBrowserRouter } from 'react-router-dom'
import ElementError from '@/sections/shared/pages/ElementError'
import NotFound from '@/sections/shared/pages/NotFound'
import App from '@/App'
import Site from '@/sections/site/pages/Site'
import Inicio from '@/sections/site/pages/Inicio'

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
                ]
            },

            // //Routas de acesso
            // {
            //     path: "acesso",
            //     element: <PainelAcesso />,
            //     children: [
            //         {
            //             index: true,
            //             element: <Conta />,
            //         },
            //         {
            //             path: "parceiro/:area",
            //             element: <AcessoParceiro />,
            //         },

            //         {
            //             path: "empresa/:area",
            //             element: <AcessoEmpresa />,
            //         },

            //     ]
            // },

            //routa para paginas não encontradas 
            {
                path: "*",
                element: <NotFound />,
            },


        ]
    }
])