import image from "@/sections/site/assets/images/bebe.jpg"
import { Button } from "@heroui/react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ThumbsDown, ThumbsUp } from "lucide-react"

interface ComentarioProps {
    idComentario: number
    descricao: string
    autor: string
    data: string
}

export default function CardComentario(props: ComentarioProps) {
    return (
        <div className="text-sm p-2 rounded-sm flex gap-2">
            <div>
                <div className="h-10 w-10">
                    <img
                        src={image}
                        alt="Autor image"
                        className="border size-full object-cover aspect-1/2 rounded-full"
                    />
                </div>
            </div>

            <div>
                <div className="flex gap-4">
                    <span>{props.autor}</span>
                    <span className="text-gray-500 text-[0.8rem]">{props.data}</span>
                </div>
                <span className="text-[0.8rem]">{props.descricao}</span>

                <div className="my-2">
                    <div className="flex gap-2">
                        <Button isIconOnly className="rounded-full">
                            <ThumbsUp size={16}/>
                        </Button>
                          <Button isIconOnly className="rounded-full">
                            <ThumbsDown size={16}/>
                        </Button>
                    </div>
                    
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>12 respostas</AccordionTrigger>
                            <AccordionContent>
                                ---
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    {/* <Button className="text-[0.7rem] border rounded-sm bg-white focus:bg-(--secondary-light) px-2">
                        12 respostas
                    </Button> */}
                </div>
            </div>

        </div>
    )
}