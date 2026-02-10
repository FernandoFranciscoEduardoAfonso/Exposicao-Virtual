import { AnimatedGroup } from "@/components/ui/animated-group";
import { useTheme } from "@/components/ui/theme-provider";
import type { ArtDataProps } from "@/interfaces/artInterface";
import image from "@/sections/site/assets/images/bebe.jpg";
import { Card, CardFooter, Skeleton } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function CardObra({ obra }: { obra: ArtDataProps }) {
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
                    ${showCard ? "opacity-0" : "opacity-100"}`}>
            </Skeleton>
            {/* Card real com animação suave */}
            <Link to="/obras/34"
                className={`transition-all duration-900 ease-out transform cursor-pointer
                    ${showCard
                        ? "opacity-100 translate-y-0 scale-100 blur-[0px]"
                        : "opacity-0 translate-y-6 scale-[0.98] blur-[3px]"
                    }`}
            >
                <Card className="group border-none p-0 rounded-xl overflow-hidden">
                    <img
                        alt="Woman listening to music"
                        className="object-cover w-full h-full aspect-square group-hover:scale-105 group-hover:brightness-75 transition-all duration-500"
                        src={image}
                    />
                    <CardFooter className={`h-full w-full pb-3 
                        bg-gradient-to-t from-black/60 to-transparent
                        flex justify-between items-end rounded-lg overflow-hidden absolute before:rounded-xl shadow-small z-10`}>
                        <div className="flex gap-2 w-full items-center px-2 truncate">
                            <h5 className="text-sm truncate text-white">{obra.titulo}</h5>
                        </div>
                        <AnimatedGroup>
                            <div
                                className="mx-auto flex w-fit items-center gap-4 rounded-sm p-1 shadow-md shadow-zinc-950/5 transition-colors duration-300"
                            >
                                <div className={`-mb-1.5 group-hover:opacity-100 opacity-0 bg-transparent text-white group-hover:text-white size-6 overflow-hidden duration-500`}>
                                    <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                        <span className="flex size-6">
                                            <ArrowRight className="m-auto size-4" />
                                        </span>
                                        <span className="flex size-6">
                                            <ArrowRight className="m-auto size-4" />
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
