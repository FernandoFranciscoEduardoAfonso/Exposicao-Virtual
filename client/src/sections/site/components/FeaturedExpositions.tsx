import { Card, CardFooter } from "@heroui/react";
import SectionTitle from "./SectionTitle";
import FeaturedTitle from "./FeaturedTitle";
import image from '@/sections/site/assets/images/image-13.webp'
import { Badge } from "@/components/ui/badge";
import { VerifiedIcon } from "lucide-react";

export default function FeaturedExpositions() {
  return (
    <div className="site-padding-x w-full gap-2">

      <div className="w-full">
        <SectionTitle textoNormal="Exposições de " textoDestaque='Destaque' posicaoDestaque='right' posicaoPadrao='center' />
        <FeaturedTitle text='Veja o que encontarás na Plataforma'></FeaturedTitle>
      </div>

      <div className="grid grid-cols-12 gap-2">
        <Card className="col-span-12 sm:col-span-6 h-[600px]">
          <img
            alt="Card background"
            className="z-0 w-full h-full object-cover rounded-xl"
            src={image}
          />
          <CardFooter
            className="absolute h-full z-10 bottom-0 flex-col gap-2 justify-end items-start 
                   bg-gradient-to-t from-black/40 to-transparent
                   pt-16 rounded-b-xl border"
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

        <div className="col-span-12 sm:col-span-6 grid grid-cols-12 gap-2 h-[600px]">

          <Card className="col-span-12">
            <img
              alt="Card background"
              className="z-0 w-full h-full object-cover rounded-xl"
              src={image}
            />

            <CardFooter
              className="absolute h-full z-10 bottom-0 flex-col gap-2 justify-end items-start 
                   bg-gradient-to-t from-black/40 to-transparent 
                   pt-16 rounded-b-xl border"
            >
              <Badge className="bg-amber-600 text-white">Pendente</Badge>
              <h4 className="text-white font-medium">Sala de Pinturas Agrícolas</h4>
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

          <Card className="col-span-12">
            <img
              alt="Card background"
              className="z-0 w-full h-full object-cover rounded-xl"
              src={image}
            />
            <CardFooter
              className="absolute h-full z-10 bottom-0 flex-col gap-2 justify-end items-start 
                   bg-gradient-to-t from-black/40 to-transparent
                   pt-16 rounded-b-xl border"
            >
              <Badge className="bg-green-600 text-white">Aberta</Badge>
              <h4 className="text-white font-medium">Sala de Pinturas Agrícolas</h4>
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

        </div>

      </div>

    </div>
  );
}
