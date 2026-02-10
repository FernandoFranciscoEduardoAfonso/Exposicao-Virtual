import AIInputSearch from "@/components/kokonutui/ai-input-search";
import SmoothTab from "@/components/kokonutui/smooth-tab";
import { useTheme } from "@/components/ui/theme-provider";
import { Card, CardHeader } from "@heroui/react";
import {ArrowLeftRight} from "lucide-react";

const CardSearch = () => {
    const {theme} = useTheme()
    return (
        <Card className="col-span-12 sm:col-span-4 h-[320px] shadow-sm bg-muted">
            <CardHeader className="absolute size-full z-10 top-1 flex-col items-center justify-center">
                <div className="text-center ">
                    <h4 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem]">Encontre obras de forma inteligente</h4>
                    <p className="text-gray-200 text-sm">Explore as obras mais curtidas e analisadas na Plataforma</p>
                </div>
                <AIInputSearch />

                <SmoothTab />
                <div className="md:hidden w-full flex justify-end p-4 text-gray-200 text-sm gap-2 items-center">
                    <span>Deslize</span>
                    <ArrowLeftRight className="size-5 "/>
                </div>
            </CardHeader>
                 {/* ${theme == 'light' && 'bg-gradient-to-b from-(--tertiary-medium) to-green-50'}`}> */}

            <div className={` z-0 w-full h-full object-cover rounded-xl
                ${theme == 'light' && 'bg-gradient-to-b from-black/70 to-black/50'}`}>
            </div>
        </Card>
    )
}

export default CardSearch
