import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import CardObra from "./CardObra";
import SectionTitle from "@/sections/site/components/SectionTitle";
import FeaturedTitle from "@/sections/site/components/FeaturedTitle";


export default function RecommendedArts() {
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
        <div className="site-padding-x w-[100%] pb-8">
            <div>
                <SectionTitle textoNormal="Obras " textoDestaque='Recomendadas' posicaoDestaque='right' posicaoPadrao='center' />
                <FeaturedTitle text='Explore as obras mais curtidas e analisadas na Plataforma'></FeaturedTitle>
            </div>

            {/* <Carousel

                className="w-full"

                setApi={setApi}>
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="border flex gap-2">
                            <Card className="w-[200px]">
                                <CardContent className="flex aspect-video items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                            <Card className="w-[200px]">
                                <CardContent className="flex aspect-video items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="top-[calc(100%+0.5rem)] translate-y-0 left-0" />
                <CarouselNext className="top-[calc(100%+0.5rem)] translate-y-0 left-2 translate-x-full" />
            </Carousel> */}

            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent>
                    {/* {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-3xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))} */}

                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="flex basis-1/2 md:basis-1/3 lg:basis-1/4">
                            <Card className="w-[100%] p-0">
                                <CardContent className="flex aspect-video items-center justify-center p-0">
                                    {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                                    <CardObra />
                                </CardContent>
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
