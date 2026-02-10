import type { AcessoDataProps } from "@/interfaces/roomInterface";
import { Axios } from "@/lib/axios";
import CardSearch from "@/sections/shared/components/CardSearch";
import { useQuery } from "@tanstack/react-query";
import CardExposicao from "../../shared/components/CardExposicao";
import EmptyData from "../../shared/components/EmptyData";

const ExposicoesInscritas = () => {
    const { data: acessos } = useQuery({
        queryKey: ['getAllAccessedRooms'],
        queryFn: async () => {
            try {
                const response = await Axios.get(`/painel/exposicoesInscritas`, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                // //o 1º data é um atributo por padrão das respostas e o 2º data é proveniente da API
                const acessos: Array<AcessoDataProps> = response.data.data
                console.log(acessos)
                return acessos      
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
                    {(acessos && acessos.length > 0) ?
                        acessos.map((acesso, index) => (
                            <CardExposicao key={index} exposicao={acesso.SalaExposicao}/>
                        )) :
                        <EmptyData text="Sem exposições inscritas" />
                    }
                </div>
            </article>
        </main>
    )
}


export default ExposicoesInscritas
