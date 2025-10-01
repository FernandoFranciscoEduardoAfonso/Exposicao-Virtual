import { Card, CardHeader, CardFooter } from "@heroui/react";
import SectionTitle from "./SectionTitle";
import FeaturedTitle from "./FeaturedTitle";
import image from '@/sections/site/assets/images/image-13.webp'
import { Badge } from "@/components/ui/badge";
import { VerifiedIcon } from "lucide-react";


export default function FeaturedExpositions() {
  return (
    <div className="site-padding-x w-full gap-2 pt-20">

      <div className="w-full">
        <SectionTitle textoNormal="Exposições de " textoDestaque='Destaque' posicaoDestaque='right' posicaoPadrao='center' />
        <FeaturedTitle text='Veja o que encontarás na Plataforma'></FeaturedTitle>
      </div>

      <div className="grid grid-cols-12 gap-2">
        <Card className="col-span-12 sm:col-span-6 h-[600px]">
          <img
            alt="Card background"
            className="z-0 w-full h-full object-cover rounded-xl"
            src="https://heroui.com/images/card-example-4.jpeg"
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
              src="https://heroui.com/images/card-example-2.jpeg"
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

          {/* <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5 rounded-xl">
            <CardHeader className="absolute z-10 top-1 flex-col items-start ">
              <p className="text-tiny text-white/60 uppercase font-bold">New</p>
              <h4 className="text-black font-medium text-2xl">Acme camera</h4>
            </CardHeader>
            <img
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover rounded-xl"
              src="https://heroui.com/images/card-example-6.jpeg"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">Available soon.</p>
                <p className="text-black text-tiny">Get notified.</p>
              </div>
              <Button className="text-tiny" color="primary" radius="full" size="sm">
                Notify Me
              </Button>
            </CardFooter>
          </Card>

          <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7 rounded-xl">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
              <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
            </CardHeader>
            <img
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover rounded-xl"
              src="https://heroui.com/images/card-example-5.jpeg"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex grow gap-2 items-center">
                <img
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src="https://heroui.com/images/breathing-app-icon.jpeg"
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Breathing App</p>
                  <p className="text-tiny text-white/60">Get a good night&#39;s sleep.</p>
                </div>
              </div>
              <Button radius="full" size="sm">
                Get App
              </Button>
            </CardFooter>
          </Card> */}


        </div>

      </div>

    </div>
  );
}
