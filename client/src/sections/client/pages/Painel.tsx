import image2 from "@/sections/site/assets/images/banner3.jpg";
import { getUserData } from "@/utils/SessionData";
import { Card, CardBody, Tab, Tabs } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../site/components/PageTitle";
import ArtistasFavoritos from "./ArtistasFavoritos";
import ExposicoesInscritas from "./ExposicoesInscritas";
import LeiloesParticipados from "./LeiloesParticipados";
import ObrasFavoritas from "./ObrasFavoritas";

const Painel = () => {
    const navigate = useNavigate()
    
    const { data: userData } = useQuery({
        queryKey: ['getUserData'],
        queryFn: async () => {
            try {
                const responseData = await getUserData()
                if (!responseData.success) {
                    throw new Error('Não autenticado ou erro no servidor'); //lança um erro para acionar o catch
                }
                const usuario = responseData.data
                console.log('UserData:', usuario)
                return usuario
            } catch (error) {
                console.log(error)
                navigate(`/`)
                throw error; // Re-throw o erro para que o React Query saiba que a consulta falhou
            }
        },
    })

    return (
        <main className="site-padding-x w-full mt-40 mb-20 flex flex-col gap-10">
            <PageTitle image={image2} title='Meu Painel' description='Explore cutting-edge AI solutions that enhance productivity and streamline workflows across various'></PageTitle>
            <TabCategorias />
        </main>
    )
}

function TabCategorias() {
    let tabs = [
        {
            id: "ObrasFavoritas",
            label: "Obras Favoritas",
            content: <ObrasFavoritas />
        },
        {
            id: "ArtistasFavoritos",
            label: "Artistas Favoritos",
            content: <ArtistasFavoritos />
        },
        {
            id: "ExposicoesInscritas",
            label: "Exposições Inscritas",
            content: <ExposicoesInscritas />
        },
        {
            id: "LeiloesParticipados",
            label: "Leilões Participados",
            content: <LeiloesParticipados />
        },
    ];

    return (
        <div className="relative flex w-full flex-col -mt-7">
            <Tabs
                classNames={{
                    tab: "px-0 h-9 overfllow-x-auto whitespace-nowrap md:min-w-auto min-w-[35%]",
                    tabContent: "w-300 min-w-300",
                }}
                aria-label="Dynamic tabs" items={tabs} className="w-full">
                {(item) => (
                    <Tab key={item.id} title={item.label} className="w-full">
                        <Card>
                            <CardBody className="bg-background">{item.content}</CardBody>
                        </Card>
                    </Tab>
                )}
            </Tabs>

            {/* <Tabs defaultValue="account">
                <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <Card>
                        fg
                    </Card>
                </TabsContent>
                <TabsContent value="password">
                    <Card>
                        fde
                    </Card>
                </TabsContent>
            </Tabs> */}
        </div>
    );
}


export default Painel
