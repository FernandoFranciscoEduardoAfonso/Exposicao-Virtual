import type { FavoriteArtistDataProps } from "@/interfaces/artInterface";
import { Axios } from "@/lib/axios";
import CardSearch from "@/sections/shared/components/CardSearch";
import { useQuery } from "@tanstack/react-query";
import EmptyData from "../../shared/components/EmptyData";
import { CardArtista } from "../../site/components/FeaturedArtists";

const ArtistasFavoritos = () => {
    const { data: artistasFavoritos } = useQuery({
        queryKey: ['getAllFavoritesArtists'],
        queryFn: async () => {
            try {
                const response = await Axios.get(`/painel/artistasFavoritos`, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                // //o 1º data é um atributo por padrão das respostas e o 2º data é proveniente da API
                const artistas: Array<FavoriteArtistDataProps> = response.data.data
                console.log(artistas)
                return artistas
            } catch (error) {
                console.log(error)
                return [];
            }
        }
    })

    return (
        <main className="site-padding-x w-full my-5 flex flex-col gap-10">
            {/* <div className="-mb-4">
                <SectionTitle textoNormal="Artistas  " textoDestaque='Favoritos' posicaoDestaque='right' posicaoPadrao='center' />
                <FeaturedTitle text='Explore os artistas mais favoritados na Plataforma'></FeaturedTitle>
            </div> */}
            <CardSearch />

            <article className="w-full flex flex-col">
                <div className="relative mx-auto max-w-3xl px-8 lg:px-0">
                    <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        {(artistasFavoritos && artistasFavoritos.length > 0) ?
                            artistasFavoritos.map((artista, index) => (
                                <CardArtista key={index} artista={artista.Usuario} />
                            )) :
                            <EmptyData text="Sem artistas favoritos" />
                        }
                    </div>
                </div>

            </article>
        </main>
    )
}


export default ArtistasFavoritos
