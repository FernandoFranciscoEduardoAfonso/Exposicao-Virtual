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
import CardObra from "../../shared/components/CardObra";
import SectionTitle from "@/sections/site/components/SectionTitle";
import FeaturedTitle from "@/sections/site/components/FeaturedTitle";
import CardExposicao from "../../shared/components/CardExposicao";


export default function ArtistExpositions() {
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
        <div className="w-[100%] pb-8">
            <div>
                <SectionTitle textoNormal="Exposições " textoDestaque='' posicaoDestaque='right' posicaoPadrao='center' />
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
                            <Card className="w-[100%] p-0">
                                <CardContent className="flex aspect-video items-center justify-center p-0">
                                    <CardExposicao key={index} exposicao={null as any} />
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
