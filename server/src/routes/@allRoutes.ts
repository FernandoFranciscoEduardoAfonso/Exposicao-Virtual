import app from "../http/server";
import { artistaRoutes } from "./artist/artistRoutes";
import { clienteRoutes } from "./client/clientRoutes";
import { publicRoutes } from "./public/publicRoutes";

export const allRoutes = ()=>{
    app.register(publicRoutes, {prefix: "/"} )
    app.register(artistaRoutes, {prefix: "/artist"} )
    app.register(clienteRoutes, {prefix: "/client"} )
}
