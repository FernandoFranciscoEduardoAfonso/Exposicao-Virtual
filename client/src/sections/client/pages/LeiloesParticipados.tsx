import CardSearch from "@/sections/shared/components/CardSearch";
import CardLeilao from "../../shared/components/CardLeilao";

const LeiloesParticipados = () => {
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
                        Array.from({ length: 60 }).map((_, index) => (
                            <CardLeilao key={index} />
                        ))
                    }
                </div>
            </article>
        </main>
    )
}


export default LeiloesParticipados
