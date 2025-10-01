import * as React from "react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
import { Badge } from "@/components/ui/badge";
import image from '@/sections/site/assets/images/image-13.webp'
import { VerifiedIcon } from "lucide-react";
import CardObra from "@/sections/shared/components/CardObra";


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
        <div className="site-padding-x w-[100%] pb-8">
            <div>
                <SectionTitle textoNormal="Obras Mais " textoDestaque='Populares' posicaoDestaque='right' posicaoPadrao='center' />
                <FeaturedTitle text='Explore as obras mais curtidas e analisadas na Plataforma'></FeaturedTitle>
            </div>

            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent className="p-0">

                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="flex basis-1/2 md:basis-1/3 lg:basis-1/4">
                            <Card className="border-0 w-[100%] p-0 h-[400px]">
                                <img
                                    alt="Card background"
                                    className="z-0 object-cover rounded-xl p-0 w-full h-full"
                                    src={image}
                                />
                                <CardFooter
                                    className="absolute h-full z-10 bottom-0 flex-col gap-2 justify-end items-start 
                   bg-gradient-to-t from-black/40 to-transparent p-0
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

                            {/* <Card className="w-[100%] p-0">
                                <CardContent className="flex aspect-video items-center justify-center p-0">
                                    <CardObra />
                                </CardContent>
                            </Card> */}
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
