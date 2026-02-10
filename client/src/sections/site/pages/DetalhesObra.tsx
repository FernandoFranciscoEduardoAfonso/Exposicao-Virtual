import DeepZoomViewer from "@/sections/shared/components/DeepZoomViewer"
import { Book, Columns2, Eye, Flag, ListFilter, MessageSquare, MoreHorizontalIcon, PaintBucket } from "lucide-react"
import FeaturedTitle from "../components/FeaturedTitle"
import SocialButton from "@/components/kokonutui/social-button"
import ParticleButton from "@/components/kokonutui/particle-button"
import { FaCheckCircle } from 'react-icons/fa'

import image from "@/sections/site/assets/images/bebe.jpg"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"
import CardComentario from "@/sections/shared/components/CardComentario"
import { Textarea } from "@heroui/react"
import { Button as ButtonHero } from "@heroui/button"
import CardSugestaoObra from "@/sections/shared/components/CardSugestaoObra"
import { useTheme } from "@/components/ui/theme-provider"
import MoreOptions from "../components/MoreOptions"

const DetalhesObra = () => {
  const { theme } = useTheme()
  return (
    <main className="site-padding-x w-full site-padding-y">
      <article className="grid grid-cols-12 gap-4">

        <section className={`${theme == 'light' ? 'bg-(--secondary-light) text-gray-700' : 'bg-muted'}
          xl:order-0 order-1  text-sm xl:col-span-4 col-span-12  rounded-md p-4
          flex flex-col gap-4`}>
          <div>
            <h5 className="font-medium text-xl lg:text-[1.5rem] text-center">Detalhes da Obra</h5>
            <FeaturedTitle text='Explore as obras mais curtidas e analisadas na Plataforma'></FeaturedTitle>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-semibold">Tema da obra</span>
            <div className="flex items-center gap-2">
              <div className="bg-indigo-500 p-2 rounded-sm">
                <PaintBucket className="text-white" />
              </div>
              <div>
                <h5 className={`text-(--secondary-base)`}>Realidade Cultural Angolana</h5>
                <span className="text-gray-400">Pintura</span>
              </div>
            </div>

          </div>

          <div className="w-full flex items-center gap-2 px-2">
            <Eye className="w-4 -mt-[3px]" />
            <span className="text-[0.8rem]">4.2 M visualizações há 23 dias</span>
          </div>

          <div className="flex gap-2">
            {/* <ReactionButton /> */}
            <ParticleButton />
            <SocialButton />
            <MoreOptions />

          </div>

          <Link to="/artista/34" className={`${theme == 'light' ? 'bg-white' : 'bg-background'} p-2 rounded-sm cursor-pointer flex items-center gap-2 mt-4`}>
            <div>
              <div className="w-12 h-12">
                <img
                  src={image}
                  alt="Autor image"
                  className="size-full object-cover rounded-full"
                />
              </div>
            </div>

            <div>
              <div className="flex gap-2 items-center">
                <h5>Fernando Francisco Eduardo Afonso</h5>
                <FaCheckCircle className="text-blue-500" />
              </div>
              <span className="text-gray-400">Autor</span>
            </div>
          </Link>

          <div>
            <Link to="" className="underline hover:text-(--secondary-base)">Mais obras do artista</Link>
          </div>

          <div className=" flex flex-col gap-2">
            <span className="font-semibold">Descrição artistica</span>
            <p>Esta é uma obra Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus fuga minus facilis? Pariatur laboriosam error ullam inventore beatae consectetur, eum tempora dolorum, eaque quis deserunt incidunt</p>
          </div>
          <div className="flex items-center gap-[50%]">
            <div className=" flex flex-col gap-2">
              <span className="font-semibold">Ano</span>
              <p >2024</p>
            </div>
            <div className=" flex flex-col gap-2">
              <span className="font-semibold">Dimensão</span>
              <p >120cm x 80cm</p>
            </div>

          </div>

        </section>

        <section className="xl:col-span-8 col-span-12">
          <DeepZoomViewer imageUrl={image}></DeepZoomViewer>
        </section>
      </article>

      <article className="grid grid-cols-12 my-4 gap-4 text-sm">
        {/* Comentários */}
        <section className="xl:col-span-9 col-span-12">
          <div className="w-full flex items-center gap-4">
            <div className="col-span-12 flex items-center gap-2">
              <MessageSquare size={18} />
              <h5 className="font-medium text-[1rem] lg:text-[1.2rem]">11 comentários</h5>
            </div>

            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <div className="flex gap-2 cursor-pointer">
                  <ListFilter size={18} />
                  <span>Ordenadar por</span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40" align="end">
                {/* <DropdownMenuLabel>Acões</DropdownMenuLabel> */}
                <DropdownMenuGroup>
                  <DropdownMenuItem className="flex gap-2">
                    <Book />
                    Recentes
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex gap-2">
                    <Flag />
                    Relevância
                  </DropdownMenuItem>
                  {/* <DropdownMenuItem disabled>Download</DropdownMenuItem> */}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

          </div>
          <div className="flex flex-col gap-2 my-2">
            <Textarea placeholder="Escreva um comentário" variant={"underlined"} maxRows={4} />
            <div className="flex justify-end">
              <ButtonHero>Enviar</ButtonHero>
            </div>
          </div>

          <div className="w-full flex flex-col gap-3 mt-2">
            {
              Array.from({ length: 5 }).map((_, index) => (
                <CardComentario key={index}
                  idComentario={index}
                  autor="Luis Pinto"
                  descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam dolorem maxime cum nam repellat, quo animi eaque voluptates laborum enim natus."
                  data="há 4 dias"
                />
              ))
            }
          </div>

        </section>

        {/* Sugestões de obras */}
        <section className="xl:col-span-3 col-span-12 grid grid-cols-12 gap-2">
          <div className="col-span-12 flex items-center gap-2">
            <Columns2 size={18} />
            <h5 className=" font-medium text-[1rem] lg:text-[1.2rem]">Obras semelhantes</h5>
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-4">

            {
              Array.from({ length: 5 }).map((_, index) => (
                <div className="col-span-6 sm:col-span-4 lg:col-span-4 xl:col-span-12 size-fit">
                  <CardSugestaoObra key={index} />
                </div>
              ))
            }
          </div>

        </section>


      </article>
    </main >
  )
}



export default DetalhesObra
