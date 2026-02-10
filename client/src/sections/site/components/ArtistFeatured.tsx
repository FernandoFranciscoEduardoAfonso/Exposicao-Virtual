import { Badge } from "@/components/ui/badge";
import image2 from '@/sections/site/assets/images/bebe.jpg';
import image from '@/sections/site/assets/images/fundo.jpg';
import { Card, CardFooter } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import FeaturedTitle from "./FeaturedTitle";
import SectionTitle from "./SectionTitle";


export default function ArtistFeatured() {
  return (
    <div className="site-padding-x w-full gap-2">

      <div className="w-full">
        <SectionTitle textoNormal="Destaques" textoDestaque='' posicaoDestaque='right' posicaoPadrao='center' />
        <FeaturedTitle text='Veja o que encontarás na Plataforma'></FeaturedTitle>
      </div>

      <div className="grid grid-cols-12 gap-2">

        <div className="col-span-12 sm:col-span-12 grid grid-cols-12 gap-2 h-[300px]">

          <Card className="col-span-6">
            <img
              alt="Card background"
              className="z-0 w-full h-full object-cover rounded-xl"
              src={image}
            />

            <CardFooter
              className="absolute h-full z-10 bottom-0 flex-col gap-2 justify-end items-start 
                   bg-gradient-to-t from-black/60 to-transparent 
                   pt-16 rounded-b-xl border"
            >
              <Badge className="bg-green-600 text-white">New</Badge>
              <h4 className="text-white font-medium">Sala de Pinturas Agrícolas</h4>
              <div>

              </div>
              <div className="group flex items-center gap-4">
                <span className="hover:underline text-[1.7vh]">Ver mais</span>
                <span className="-translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                  <ArrowRight className="size-4" />
                </span>
              </div>
            </CardFooter>
          </Card>

          <Card className="col-span-6">
            <img
              alt="Card background"
              className="z-0 w-full h-full object-cover rounded-xl"
              src={image2}
            />

            <CardFooter
              className="absolute h-full z-10 bottom-0 flex-col gap-2 justify-end items-start 
                   bg-gradient-to-t from-black/60 to-transparent 
                   pt-16 rounded-b-xl border"
            >
              <Badge className="bg-green-600 text-white">New</Badge>
              <h4 className="text-white font-medium">Sala de Pinturas Agrícolas</h4>
              <div className="group flex items-center gap-4">
                <span className="hover:underline text-[1.7vh]">Ver mais</span>
                <span className="-translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                  <ArrowRight className="size-4" />
                </span>
              </div>
            </CardFooter>
          </Card>

        </div>

      </div>

    </div >
  );
}
