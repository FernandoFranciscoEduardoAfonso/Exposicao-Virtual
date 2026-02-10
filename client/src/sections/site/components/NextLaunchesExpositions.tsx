import * as React from "react";

import { Card, CardFooter } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import SectionTitle from "@/sections/site/components/SectionTitle";
import FeaturedTitle from "@/sections/site/components/FeaturedTitle";
import image from '@/sections/site/assets/images/image-13.webp'
import { Calendar } from "lucide-react";


export default function NextLaunchesExpositions() {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div className="site-padding-x w-[100%]">
            <div>
                <SectionTitle textoNormal="Futuros " textoDestaque='Lançamentos' posicaoDestaque='right' posicaoPadrao='center' />
                <FeaturedTitle text='Explore as obras mais curtidas e analisadas na Plataforma'></FeaturedTitle>
            </div>

            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent>

                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="flex basis-1/2 md:basis-1/3 lg:basis-1/4">
                            <Card className="border-0 w-[100%] p-0 h-[320px] overflow-hidden relative group cursor-pointer ">
                                <img
                                    alt="Card background"
                                    className="z-0 object-cover rounded-xl p-0 w-full h-full group-hover:scale-105 transition-all duration-500"
                                    src={image}
                                />
                                <CardFooter
                                    className="absolute h-full w-full z-10 flex-col gap-2 justify-end items-start 
                   bg-gradient-to-t from-black/40 to-transparent p-4
                   rounded-b-xl"
                                >
                                    {/* <Badge className="bg-green-600 text-white">Aberta</Badge> */}
                                    <h5 className="text-white font-medium text-sm lg:text-base truncate">Sala de Pinturas Agrícolas</h5>
                                    <div className="flex gap-3 text-gray-300">
                                        <Calendar size={18} className=""/>
                                        <span className="text-xs lg:text-sm">10 de Outubro de 2024, 08:35</span>
                                    </div>
                                </CardFooter>
                            </Card>

                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}

                <CarouselPrevious className="top-[calc(100%+0.5rem)] translate-y-0 left-0" />
                <CarouselNext className="top-[calc(100%+0.5rem)] translate-y-0 left-2 translate-x-full" />

            </Carousel>

            <div className="mt-4 flex items-center justify-end gap-2">
                {Array.from({ length: count }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={cn("h-3.5 w-3.5 rounded-full border-2", {
                            "border-primary": current === index + 1,
                        })}
                    />
                ))}
            </div>
        </div>
    );
}
