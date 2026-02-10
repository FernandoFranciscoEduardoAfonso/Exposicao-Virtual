import { useEffect, useRef, useState } from "react";
import { Card, CardFooter, Skeleton } from "@heroui/react";
import { Book, Eye, Flag, MoreVertical, User } from "lucide-react";
import image from "@/sections/site/assets/images/bebe.jpg"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ui/theme-provider";

export default function CardSugestaoObra() {
    const [isVisible, setIsVisible] = useState(false);
    const [showCard, setShowCard] = useState(false); // Controla quando mostrar o card real
    const cardRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme()

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);

                    // Aguarda 1 segundos antes de mostrar o card real
                    setTimeout(() => setShowCard(true), 1000);
                }
            },
            { threshold: 0.6 } //quando o componente estiver 60% visivel
        );

        if (cardRef.current) observer.observe(cardRef.current) // Inicia a observação
        return () => observer.disconnect() // Limpa a observação ao desmontar
    }, [isVisible]);

    return (
        <div ref={cardRef} className="relative cursor-pointer overflow-hidden w-full h-auto">
            {/* Skeleton sempre visível enquanto o card real não aparece */}
            <div className="relative flex flex-col gap-2">
                <Skeleton className={`inset-0 w-full aspect-video rounded-md transition-opacity duration-1500 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${showCard ? "opacity-0 hidden" : "opacity-100"} `}
                >
                </Skeleton>
                <Skeleton className={`h-4 inset-0 rounded-md transition-opacity duration-1500 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${showCard ? "opacity-0 hidden" : "opacity-100"} `}>
                </Skeleton>
                <Skeleton className={`h-4 inset-0 rounded-md transition-opacity duration-1500 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${showCard ? "opacity-0 hidden" : "opacity-100"} `}>
                </Skeleton>
                <Skeleton className={`h-4 inset-0 rounded-md transition-opacity duration-1500 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${showCard ? "opacity-0 hidden" : "opacity-100"} `}>
                </Skeleton>
            </div>

            {/* Card real com animação suave */}
            <div
                // className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform
                className={`transition-all duration-900 ease-out transform overflow-hidden
                    ${showCard
                        ? "opacity-100 translate-y-0 scale-100 blur-[0px]"
                        : "opacity-0 h-0 translate-y-6 scale-[0.98] blur-[3px]"
                    }
                    
                    `
                }
            >
                <Card isFooterBlurred className={`${theme != 'light' && "bg-background"}
                    overflow-hidden shadow-none border-none rounded-md flex flex-col gap-1`}>
                    <div className="rounded-md aspect-square w-full overflow-hidden">
                        <img
                            alt="Woman listening to music"
                            className="rounded-md w-full hover:scale-105 hover:brightness-75 transition-all duration-500"
                            src={image}
                        />
                    </div>

                    <CardFooter className={`flex flex-col px-2 items-start gap-1 rounded-sm overflow-hidden p-0.5 before:rounded-xl bottom-1 w-[calc(100%_-_8px)] ml-1 z-10`}>
                        <div className="w-full flex items-center justify-between">
                            <h6 className="text-balance truncate">O poder da espada</h6>
                            <DropdownMenu modal={false}>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" aria-label="Open menu" size="icon">
                                        <MoreVertical />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-40" align="end">
                                    <DropdownMenuLabel>Acões</DropdownMenuLabel>
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem className="flex gap-2">
                                            <Book />
                                            Guardar
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="flex gap-2">
                                            <Flag />
                                            Denunciar
                                        </DropdownMenuItem>
                                        {/* <DropdownMenuItem disabled>Download</DropdownMenuItem> */}
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        <div className="flex gap-2 w-full items-center truncate">
                            <div className="p-1 rounded-md border">
                                <User size={18} className="text-blue-500" />
                            </div>
                            <p className="text-[0.8rem] truncate">Autor: Fernando Eduardo</p>
                        </div>
                        <div className="text-gray-500 w-full flex items-center gap-2">
                            <Eye className="w-4 -mt-[3px]" />
                            <span className="text-[0.8rem]">4.2 M visualizações há 23 dias</span>
                        </div>

                    </CardFooter>
                </Card>
            </div>
        </div >
    );
}
