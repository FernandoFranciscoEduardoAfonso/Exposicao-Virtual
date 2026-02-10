import { useEffect, useRef, useState } from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Card, CardFooter, Skeleton } from "@heroui/react";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
// import { Skeleton } from "@/components/ui/skeleton";
import image from "@/sections/site/assets/images/bebe.jpg"
import { useTheme } from "@/components/ui/theme-provider";
import type { ArtDataProps } from "@/interfaces/artInterface";

export default function CardLeilao({obra}:{obra?: ArtDataProps}) {
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
                    setTimeout(() => setShowCard(true), 500);
                }
            },
            { threshold: 0.6 } //quando o componente estiver 60% visivel
        );

        if (cardRef.current) observer.observe(cardRef.current) // Inicia a observação
        return () => observer.disconnect() // Limpa a observação ao desmontar
    }, [isVisible]);

    return (
        <div ref={cardRef} className="relative w-full">
            {/* Skeleton sempre visível enquanto o card real não aparece */}
            <Skeleton
                className={`absolute inset-0 w-full h-full rounded-xl transition-opacity duration-1500 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${showCard ? "opacity-0" : "opacity-100"}`}

            >
                {/* <div className="size-full flex items-end p-2">
                    <Skeleton className="bg-gray-300 border rounded-md h-8 w-full"></Skeleton>
                </div> */}
            </Skeleton>


            {/* Card real com animação suave */}
            <Link to="/leiloes/34"
                // className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform
                className={`transition-all duration-900 ease-out transform cursor-pointer
                    ${showCard
                        ? "opacity-100 translate-y-0 scale-100 blur-[0px]"
                        : "opacity-0 translate-y-6 scale-[0.98] blur-[3px]"
                    }`}
            >
                <Card isFooterBlurred className="group border-none p-0 rounded-xl overflow-hidden">
                    <img
                        alt="Woman listening to music"
                        className="object-cover w-full h-full aspect-square hover:scale-105 hover:brightness-75 transition-all duration-500"
                        src={image}
                    />
                    <CardFooter className={`${theme == "light" ? 'bg-white' : 'bg-black/60 text-gray-200'}
                        flex justify-between rounded-lg overflow-hidden p-0.5 absolute before:rounded-xl bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10`}>
                        <div className="flex gap-2 w-full items-center px-2 truncate">
                            <div className="border p-1 rounded-md">
                                <Calendar size={18} className="text-blue-500" />
                            </div>
                            <p className="text-sm truncate">Termina em 12/10/2026{obra?.titulo}</p> {/*colocar a contar*/}
                        </div>
                        <AnimatedGroup>
                            <div
                                className="mx-auto flex w-fit items-center gap-4 rounded-sm border p-1 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950 bg-[var(--secondary-base)] hover:brightness-110"
                            >
                                <div className={`bg-transparent text-white group-hover:text-white size-6 overflow-hidden rounded-sm duration-500`}>
                                    <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                        <span className="flex size-6">
                                            <ArrowRight className="m-auto size-3" />
                                        </span>
                                        <span className="flex size-6">
                                            <ArrowRight className="m-auto size-3" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </AnimatedGroup>
                    </CardFooter>
                </Card>
            </Link>
        </div>
    );
}
