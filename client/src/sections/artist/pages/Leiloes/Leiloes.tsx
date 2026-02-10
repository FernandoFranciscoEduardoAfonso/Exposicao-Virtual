import { Separator } from "@/components/ui/separator";
import ButtonAction from "@/sections/shared/components/ButtonAction";
import CardLeilao from "@/sections/shared/components/CardLeilaoApp";
import SectionTitlePage from "@/sections/shared/components/SectionTitlePage";
import { Input, Tab, Tabs } from "@heroui/react";
import { Plus, Search } from "lucide-react";
import { useState } from "react";


const Leiloes = () => {
    const [search, setSearch] = useState<string>("")

    return (
        <main className="flex flex-col gap-4 card-container card-border">
            <div className="flex flex-wrap md:items-center md:justify-between gap-2 -mb-4">
                <SectionTitlePage title="Meus Leilões" description="Explore as obras da exposição virtual." />
                <ButtonAction text="Iniciar leilão" icon={<Plus />} to="nova" isPrimary />
            </div>

            <Tabs aria-label="Tabs variants" variant={"underlined"} color="primary" >
                <Tab key="photos" title="Photos" />
                <Tab key="music" title="Music" />
                <Tab key="videos" title="Videos" />
            </Tabs>
            <Separator className="-mt-5" />

            <div className="relative w-full max-w-md">
                <Search className={`${search.length > 0 ? "hidden" : "absolute z-2 right-2 top-2 text-gray-400 text-[18px]"}`} />

                <Input
                    className="w-full"
                    placeholder="Search works, auctions, or analytics..." type="search"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                <CardLeilao direction="horizontal" />
                <CardLeilao direction="horizontal" />
                <CardLeilao direction="horizontal" />
                <CardLeilao direction="horizontal" />
                <CardLeilao direction="horizontal" />
                <CardLeilao direction="horizontal" />
            </div>

        </main>
    )
}



export default Leiloes
