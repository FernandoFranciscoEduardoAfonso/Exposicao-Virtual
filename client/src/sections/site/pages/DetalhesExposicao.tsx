import { Badge } from "@/components/ui/badge";
import { Button, Card, CardFooter, Pagination } from "@heroui/react";
import image from '@/sections/site/assets/images/image-13.webp'
import { Users, VerifiedIcon } from "lucide-react";
import CardObraPersonalizavel from "@/sections/shared/components/CardObraPersonalizavel";


const data: Array<DadosProps> = [
    {
        title: "Obras",
        number: 4
    },
    {
        title: "Visualizações",
        number: 4
    },
    {
        title: "Colaboradores",
        number: 4
    },
    {
        title: "Feedbacks",
        number: 4
    }
]

const aspectCard = ["square", "auto", "video"];

const DetalhesExposicao = () => {
    const isParticipant = false
    return (
        <main className="site-padding-x w-full site-padding-y flex flex-col gap-10">

            <article className='w-full grid grid-cols-12 gap-4'>
                <Card className="lg:col-span-8 col-span-12 h-[500px]">
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

                <section className="flex flex-col justify-between lg:col-span-4 col-span-12 bg-muted rounded-xl h-[500px] p-4">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-center">Apresentação Expositória</h3>
                        <p className="text-justify md:text-small text-[0.8rem] text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci libero sapiente accusamus laudantium at sit, provident ducimus obcaecati, ad aperiam aspernatur, magnam nihil molestias quae cupiditate ex optio dolor blanditiis?</p>
                        {/* <p className="text-justify md:text-small text-[0.8rem] text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci libero sapiente accusamus laudantium at sit, provident ducimus obcaecati, ad aperiam aspernatur, magnam nihil molestias quae cupiditate ex optio dolor blanditiis?</p> */}
                    </div>

                    <div className="grid grid-cols-12 gap-4 my-3">
                        {
                            data.map((d, index) => (
                                <CardDadosExposicao key={index} data={d} />
                            ))
                        }
                    </div>

                    <div className="flex flex-col gap-3">
                        <span className="text-[1.6vh] text-gray-400 text-end">Criada em 12/10/2024</span>
                        <div className="flex justify-end items-center gap-2">
                            <Button className="px-8 ">Contactar Artista</Button>
                            <Button className="bg-(--secondary-base) px-8 text-white">Participar</Button>
                            {/* <Link to="" className="underline hover:text-(--secondary-base) text-small">Contactar Artista</Link> */}
                        </div>
                    </div>
                </section>

            </article>

            <article className="w-full flex flex-col">
                <section className="">
                    <div className="columns-2 md:columns-3 lg:columns-4 gap-2 md:gap-4 w-full bg-transparent">
                        {
                            Array.from({ length: 60 }).map((_, index) => {
                                const i = Math.floor(Math.random() * aspectCard.length)
                                return (
                                    <div
                                        key={index}
                                        className={`
                                        mb-2 md:mb-4 // Adiciona a margem inferior para o espaçamento vertical
                                        break-inside-avoid // evita quebras de coluna dentro do item
                                        relative aspect-${aspectCard[i]}
                                    `}
                                    >
                                        <CardObraPersonalizavel aspect={aspectCard[i]} isOpen={isParticipant} />
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="flex justify-end mt-8">
                        <Pagination isCompact showControls initialPage={1} total={10} />
                    </div>
                </section>
            </article>



        </main >
    )
}

type DadosProps = {
    title: string,
    number: number
}

export function CardDadosExposicao({ data }: { data: DadosProps }) {
    return (
        <section className="flex flex-col gap-2 bg-background col-span-6 p-2 rounded-md">
            <div className="flex gap-2 items-center">
                <div className="bg-indigo-500 p-1 rounded-sm">
                    <Users className="text-white" size={16} />
                </div>
                <h5 className="text-[0.8rem] text-gray-400">{data.title}</h5>
            </div>
            <span className="md:text-2xl">{data.number}</span>
        </section>
    )
}
export default DetalhesExposicao
