import { AnimatedGroup } from "@/components/ui/animated-group";
import { Card, CardFooter } from "@heroui/react";
import { ArrowRight, Trash, Trash2 } from "lucide-react";
const ViewImage = ({ image }: { image: string }) => {
    return (
        <Card className="group border-none p-0 rounded-md overflow-hidden">
            <img
                alt="Woman listening to music"
                className="object-cover w-full h-full aspect-square group-hover:scale-105 group-hover:brightness-75 transition-all duration-500"
                src={image}
            />
            <CardFooter className={`h-full w-full pb-3
                        bg-gradient-to-t from-black/10 to-transparent
                        flex justify-between items-end rounded-lg overflow-hidden absolute before:rounded-xl shadow z-10`}>
                <AnimatedGroup className="w-full">
                    <div className={`cursor-pointer group-hover:opacity-100 opacity-0 bg-transparent text-white group-hover:text-white size-6 overflow-hidden duration-500`}>
                        <Trash2 className="text-white" />
                    </div>
                </AnimatedGroup>
                <AnimatedGroup>
                    <div
                        className="mx-auto flex w-fit items-center gap-4 rounded-sm p-1 shadow-md shadow-zinc-950/5 transition-colors duration-300"
                    >
                        <div className={`cursor-pointer -mb-1.5 group-hover:opacity-100 opacity-0 bg-transparent text-white group-hover:text-white size-6 overflow-hidden duration-500`}>
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
    )
}

export default ViewImage
