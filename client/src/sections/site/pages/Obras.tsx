import { Button } from "@/components/ui/button";
import type { ArtDataProps } from "@/interfaces/artInterface";
import { Axios } from "@/lib/axios";
import CardObra from "@/sections/shared/components/CardObra";
import CardSearch from "@/sections/shared/components/CardSearch";
import image2 from "@/sections/site/assets/images/banner3.jpg";
import { useQuery } from "@tanstack/react-query";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import FeaturedTitle from "../components/FeaturedTitle";
import PageTitle from "../components/PageTitle";
import RecommendedArts from "../components/RecommendedArts";
import SectionTitle from "../components/SectionTitle";
import EmptyData from "@/sections/shared/components/EmptyData";

const Obras = () => {

    const { data: obras } = useQuery({
        queryKey: ['getAllArts'],
        queryFn: async () => {
            try {
                const response = await Axios.get(`/obras`, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                // //o 1º data é um atributo por padrão das respostas e o 2º data é proveniente da API
                const obras: Array<ArtDataProps> = response.data.data
                console.log(obras)
                return obras
            } catch (error) {
                console.log(error)
                return [];
            }
        }
    })

    return (
        <main className="site-padding-x w-full site-padding-y flex flex-col gap-10">
            <PageTitle image={image2} title='Secção de Obras' description='Explore cutting-edge AI solutions that enhance productivity and streamline workflows across various'></PageTitle>

            <CardSearch />

            <article className="w-full flex flex-col">
                <section className="w-full mb-10 rounded-xl p-4">
                    <RecommendedArts />
                </section>

                <section className="">
                    <div>
                        <SectionTitle textoNormal="Mais " textoDestaque='Obras' posicaoDestaque='right' posicaoPadrao='center' />
                        <FeaturedTitle text='Explore as obras mais curtidas e analisadas na Plataforma'></FeaturedTitle>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 w-full bg-transparent">
                        {
                            // Array.from({ length: 60 }).map((_, index) => (
                            //     <CardObra key={index} />
                            // ))

                            (obras && obras.length > 0) ?
                                obras.map((obra, index) => {
                                    return (
                                        <CardObra key={index} obra={obra} />
                                    )
                                }) :
                                <EmptyData text="Sem obras" />
                        }
                    </div>
                </section>
            </article>

            <article className="grid grid-cols-12 lg:px-8 px-4 py-8 bg-(--tertiary-dark) rounded-md">
                <div className="col-span-8 flex flex-col p-4">
                    <h1 className="max-w-2xl text-balance text-5xl md:text-6xl text-white">Apresente sua arte ao mundo</h1>
                    <p className="mt-8 max-w-2xl text-balance text-lg text-slate-200">Highly customizable components for building modern websites and applications you mean it.</p>

                    <div className="mt-6 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                        <Button
                            asChild
                            size="lg"
                            className="h-12 rounded-xl pl-5 pr-3 text-base bg-(--tertiary-medium) hover:bg-(--tertiary-medium) hover:brightness-110">
                            <Link to="#link">
                                <span className="text-nowrap">Tornar-se Artista</span>
                                <ChevronRight className="ml-1" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default Obras
