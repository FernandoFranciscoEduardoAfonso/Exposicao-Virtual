import { AnimatedGroup } from "@/components/ui/animated-group";
import { Card, CardFooter, Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CardObra() {
    return (
        <Card isFooterBlurred className="border-none p-0 rounded-xl overflow-hidden">
            <img
                alt="Woman listing to music"
                className="object-cover w-[100%] h-[100%] hover:scale-105 transition-all duration-500"
                src="https://heroui.com/images/hero-card.jpeg"
            // height={200}
            // width={200}
            />
            <CardFooter className="flex justify-between bg-white rounded-sm overflow-hidden p-0.5 absolute before:rounded-xl bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-sm text-gray-700 truncate">Available soon.</p>
                <AnimatedGroup>
                    <Link
                        to="#link"
                        className="dark:hover:border-t-border group mx-auto flex w-fit items-center gap-4 rounded-sm border p-1 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950 bg-indigo-200 hover:bg-indigo-500">
                        {/* <span className="text-foreground text-sm">Sobre a Obra</span>
                        <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span> */}

                        {/* <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-sm duration-500"> */}
                        <div className="bg-transparent group-hover:text-white size-6 overflow-hidden rounded-sm duration-500">
                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                <span className="flex size-6">
                                    <ArrowRight className="m-auto size-3" />
                                </span>
                                <span className="flex size-6">
                                    <ArrowRight className="m-auto size-3" />
                                </span>
                            </div>
                        </div>
                    </Link>
                </AnimatedGroup>
            </CardFooter>
        </Card>
    );
}
