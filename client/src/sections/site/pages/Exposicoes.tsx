import CardSearch from '@/sections/shared/components/CardSearch'
import SectionTitle from '../components/SectionTitle';
import FeaturedTitle from '../components/FeaturedTitle';
import CardExposicao from '../../shared/components/CardExposicao';
import PageTitle from '../components/PageTitle';
import image2 from "@/sections/site/assets/images/banner1.jpg"
import { useQuery } from '@tanstack/react-query';
import { Axios } from '@/lib/axios';
import type { AcessoDataProps } from '@/interfaces/roomInterface';
import EmptyData from '@/sections/shared/components/EmptyData';

const Exposicoes = () => {
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
        <main className="site-padding-x w-full site-padding-y flex flex-col gap-10">
            <PageTitle image={image2} title='Secção de Exposições' description='Explore cutting-edge AI solutions that enhance productivity and streamline workflows across various'></PageTitle>

            <CardSearch />

            <article className="mt-10 w-full flex flex-col">
                {/* <section className="w-full mb-10 rounded-xl p-4">
                    <div className="w-full">
                        <SectionTitle textoNormal="Exposições de " textoDestaque='Destaque' posicaoDestaque='right' posicaoPadrao='center' />
                        <FeaturedTitle text='Veja o que encontarás na Plataforma'></FeaturedTitle>
                    </div>

                    <div className="grid grid-cols-12 gap-2">
                        <Card className="col-span-12 sm:col-span-6 h-[600px]">
                            <img
                                alt="Card background"
                                className="z-0 w-full h-full object-cover rounded-xl"
                                src={image}
                            />
                            <CardFooter
                                className="absolute h-full z-10 bottom-0 flex-col gap-2 justify-end items-start 
                   bg-gradient-to-t from-black/40 to-transparent
                   pt-16 rounded-b-xl"
                            >
                                <Badge className="bg-green-600 text-white">Aberta</Badge>
                                <h4 className="text-white font-medium text-2xl">Sala de Pinturas Agrícolas</h4>
                                <div className="flex gap-3">
                                    <div className="shrink-0">
                                        <div className="h-10 w-10 rounded-full overflow-hidden">
                                            <img
                                                src={image}
                                                alt={'Trunfo'}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex items-center gap-1">
                                            <span className="text-white">
                                                Fernando Eduardo
                                            </span>
                                            <VerifiedIcon className="h-4 w-4 text-blue-400" />
                                        </div>
                                    </div>
                                </div>

                            </CardFooter>
                        </Card>

                        <div className="col-span-12 sm:col-span-6 grid grid-cols-12 gap-2 h-[600px]">

                            <Card className="col-span-12">
                                <img
                                    alt="Card background"
                                    className="z-0 w-full h-full object-cover rounded-xl"
                                    src={image}
                                />

                                <CardFooter
                                    className="absolute h-full z-10 bottom-0 flex-col gap-2 justify-end items-start 
                   bg-gradient-to-t from-black/40 to-transparent 
                   pt-16 rounded-b-xl"
                                >
                                    <Badge className="bg-amber-600 text-white">Pendente</Badge>
                                    <h4 className="text-white font-medium">Sala de Pinturas Agrícolas</h4>
                                    <div className="flex gap-3">
                                        <div className="shrink-0">
                                            <div className="h-10 w-10 rounded-full overflow-hidden">
                                                <img
                                                    src={image}
                                                    alt={'Trunfo'}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="flex items-center gap-1">
                                                <span className="text-white">
                                                    Fernando Eduardo
                                                </span>
                                                <VerifiedIcon className="h-4 w-4 text-blue-400" />
                                            </div>
                                        </div>
                                    </div>

                                </CardFooter>
                            </Card>

                            <Card className="col-span-12">
                                <img
                                    alt="Card background"
                                    className="z-0 w-full h-full object-cover rounded-xl"
                                    src={image}
                                />
                                <CardFooter
                                    className="absolute h-full z-10 bottom-0 flex-col gap-2 justify-end items-start 
                   bg-gradient-to-t from-black/40 to-transparent
                   pt-16 rounded-b-xl"
                                >
                                    <Badge className="bg-green-600 text-white">Aberta</Badge>
                                    <h4 className="text-white font-medium">Sala de Pinturas Agrícolas</h4>
                                    <div className="flex gap-3">
                                        <div className="shrink-0">
                                            <div className="h-10 w-10 rounded-full overflow-hidden">
                                                <img
                                                    src={image}
                                                    alt={'Trunfo'}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="flex items-center gap-1">
                                                <span className="text-white">
                                                    Fernando Eduardo
                                                </span>
                                                <VerifiedIcon className="h-4 w-4 text-blue-400" />
                                            </div>
                                        </div>
                                    </div>

                                </CardFooter>
                            </Card>

                        </div>

                    </div>

                </section> */}

                <section className="">
                    <div>
                        <SectionTitle textoNormal="Mais " textoDestaque='Exposições' posicaoDestaque='right' posicaoPadrao='center' />
                        <FeaturedTitle text='Explore as obras mais curtidas e analisadas na Plataforma'></FeaturedTitle>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 w-full bg-transparent">
                        {

                            (acessos && acessos.length > 0) ?
                                acessos.map((acesso, index) => (
                                    <div className='aspect-square' key={index}>
                                        <CardExposicao key={index} exposicao={acesso.SalaExposicao} />
                                    </div>
                                )) :
                                <EmptyData text='Sem dados' />

                        }
                    </div>
                </section>
            </article>


        </main>
    )
}

export default Exposicoes
