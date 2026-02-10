import type { FavoriteArtDataProps } from "@/interfaces/artInterface";
import { Axios } from "@/lib/axios";
import CardObra from "@/sections/shared/components/CardObra";
import CardSearch from "@/sections/shared/components/CardSearch";
import { useQuery } from "@tanstack/react-query";
import EmptyData from "../../shared/components/EmptyData";

const ObrasFavoritas = () => {
    const { data: obrasFavoritas } = useQuery({
        queryKey: ['getAllFavoritesArts'],
        queryFn: async () => {
            try {
                const response = await Axios.get(`/painel/obrasFavoritas`, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                // //o 1º data é um atributo por padrão das respostas e o 2º data é proveniente da API
                const obras: Array<FavoriteArtDataProps> = response.data.data
                console.log(obras)
                return obras
            } catch (error) {
                console.log(error)
                return [];
            }
        }
    })

    return (
        <main className="site-padding-x w-full my-5 flex flex-col gap-10">
            {/* <div className="-mb-4">
                <SectionTitle textoNormal="Obras  " textoDestaque='Guardadas' posicaoDestaque='right' posicaoPadrao='center' />
                <FeaturedTitle text='Explore as obras mais curtidas e analisadas na Plataforma'></FeaturedTitle>
            </div> */}
            <CardSearch />

            <article className="w-full flex flex-col">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 w-full bg-transparent">
                    {
                        (obrasFavoritas && obrasFavoritas.length > 0) ?
                            obrasFavoritas.map((obrasFavorita, index) => {
                                return (
                                    <CardObra key={index} obra={obrasFavorita.Obra} />
                                )
                            }) :
                            <EmptyData text="Sem obras favoritas" />
                    }
                </div>
            </article>
        </main>
    )
}


export default ObrasFavoritas
