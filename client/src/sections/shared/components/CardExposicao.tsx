import { Badge } from "@/components/ui/badge";
import type { RoomDataProps } from "@/interfaces/roomInterface";
import image from '@/sections/site/assets/images/fundo.jpg';
import { Card, CardFooter, Skeleton } from "@heroui/react";
import { VerifiedIcon } from 'lucide-react';
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown, { type GroupDropdown } from "./Dropdown";

const CardExposicao = ({ exposicao, isAutor }: { exposicao?: RoomDataProps, isAutor?: boolean }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [showCard, setShowCard] = useState(false); // Controla quando mostrar o card real
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);

                    // Aguarda 1 segundos antes de mostrar o card real
                    setTimeout(() => setShowCard(true), 500);
                }
            },
            { threshold: 0.6 } //quando o componente estiver 60% visivel
        );

        if (cardRef.current) observer.observe(cardRef.current) // Inicia a observação
        return () => observer.disconnect() // Limpa a observação ao desmontar
    }, [isVisible]);

    const groups: GroupDropdown[] = [
        {
            index: 0,
            items: [
                {
                    text: "Ver reações",
                    link: "/exposicoes/34",
                },
            ]
        },
        {
            index: 1,
            items: [
                {
                    text: "Editar",
                    link: "nova",
                },
                {
                    text: "Eliminar",
                    color: "red",
                    onClick: () => { },
                }
            ]
        }
    ]

    return (
        <div ref={cardRef} className="relative w-full">
            {/* Skeleton sempre visível enquanto o card real não aparece */}
            <Skeleton
                className={`absolute inset-0 w-full h-full rounded-xl transition-opacity duration-1500 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${showCard ? "opacity-0" : "opacity-100"}`}

            >
            </Skeleton>

            <Link to={isAutor ? '#' : '/exposicoes/34'}>

                <Card className={`group aspect-square transition-all duration-900 ease-out transform
                    ${showCard
                        ? "opacity-100 translate-y-0 scale-100 blur-[0px]"
                        : "opacity-0 translate-y-6 scale-[0.98] blur-[3px]"
                    }`}>
                    <img
                        alt="Card background"
                        className="z-0 w-full h-full object-cover rounded-xl group-hover:scale-105 group-hover:brightness-75 transition-all duration-500"
                        src={image}
                    />

                    <CardFooter
                        className="absolute h-full z-10 bottom-0 flex-col gap-2 justify-end items-start 
                        bg-gradient-to-t from-black/70 to-transparent
                        pt-16 rounded-b-xl"
                    >
                        <Badge className="bg-green-600 text-white">{exposicao?.isOpen ? "Aberta" : "Fechada"}</Badge>
                        <h4 className="w-full text-white font-medium truncate">{exposicao?.nome}</h4>
                        <div className="flex justify-between w-full">
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
                                <div className="w-full flex items-center gap-1 truncate">
                                    <div className="text-white truncate">
                                        {exposicao?.Usuario?.nome}
                                    </div>
                                    <VerifiedIcon className="h-4 w-4 text-blue-400" />
                                </div>
                            </div>
                            <Dropdown
                                alignContent="end"
                                direccion="vertical"
                                groups={groups}
                            />
                        </div>
                    </CardFooter>
                </Card>
            </Link>
        </div>
    )
}

export default CardExposicao
