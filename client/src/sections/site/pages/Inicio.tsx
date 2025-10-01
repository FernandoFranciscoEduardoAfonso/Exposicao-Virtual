import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, SendHorizonal, UserCheck } from "lucide-react"
import { Link } from "react-router-dom"
import image from '@/sections/site/assets/images/bebe.jpg'
import SectionTitle from "../components/SectionTitle"
import CardHorizontal from "@/sections/shared/components/CardHorizontal"
import FeaturedTitle from "../components/FeaturedTitle"
import RecommendedArts from "@/sections/shared/components/RecommendedArts"
import FeaturedBanners from "../components/FeaturedBanners"
import CarouselParceiros from "../components/CarouselParceiros"
import FeaturedArts from "../components/FeaturedArts"
import HeroSection from "../components/HeroSection"
import FeaturedExpositions from "../components/FeaturedExpositions"
import NextLaunchesExpositions from "../components/NextLaunchesExpositions"


const Inicio = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <HeroSection />

      <FeaturedBanners />

      <FeaturedArts />

      <RecommendedArts />

      <main className="site-padding-x w-[100%]">
        <section className="overflow-hidden">
          <div className="relative mx-auto max-w-5x py-28 lg:py-20 ">
            <div className="lg:flex lg:items-center lg:gap-12">
              <div className="relative z-10 mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <Link
                  to="/"
                  className="rounded-(--radius) mx-auto flex w-fit items-center gap-2 border p-1 pr-3 lg:ml-0 mb-2">
                  <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">
                    <UserCheck size={18} className="text-indigo-700" />
                  </span>
                  <span className="text-sm">Comece agora</span>
                  <span className="bg-(--color-border) block h-4 w-px"></span>

                  <ArrowRight className="size-4" />
                </Link>

                <SectionTitle textoDestaque="Registe-se " textoNormal="como Artista e Promova as Suas Obras" posicaoDestaque="left" />
                {/* <h1 className="mt-10 text-balance text-4xl font-bold md:text-5xl xl:text-5xl leading-14">Registe-se como Artista e Promova as Suas Obras</h1> */}
                <p className="mt-8">Error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!</p>

                <div>
                  <form
                    action=""
                    className="mx-auto my-10 max-w-sm lg:my-12 lg:ml-0 lg:mr-auto">
                    <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                      <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

                      <input
                        placeholder="Your mail address"
                        className="h-14 w-full bg-transparent pl-12 focus:outline-none"
                        type="email"
                      />

                      <div className="md:pr-1.5 lg:pr-0">
                        <Button
                          aria-label="submit"
                          className="rounded-(--radius)">
                          <span className="hidden md:block">Get Started</span>
                          <SendHorizonal
                            className="relative mx-auto size-5 md:hidden"
                            strokeWidth={2}
                          />
                        </Button>
                      </div>
                    </div>
                  </form>


                </div>
              </div>
            </div>

            <div className="absolute inset-0 -mx-4 rounded-3xl p-3 lg:col-span-3">
              <div className="relative">
                <div className="bg-radial-[at_65%_25%] to-background z-1 -inset-17 absolute from-transparent to-40%"></div>
                <img
                  className="hidden dark:block w-full"
                  src={image}
                  alt="app illustration"
                  // width={2796}
                  // height={2008}
                />
                <img
                  className="dark:hidden w-full"
                  src={image}
                  alt="app illustration"
                  // width={2796}
                  // height={2008}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <FeaturedExpositions />

      <NextLaunchesExpositions />

      <main className="site-padding-x pt-20">
        <div>
          <SectionTitle textoNormal="Tipos de " textoDestaque='Usuários' posicaoDestaque='right' posicaoPadrao='center' />
          <FeaturedTitle text='Explore as obras mais curtidas e analisadas na Plataforma' />
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <CardHorizontal />
          <CardHorizontal />
        </div>

      </main>

      <CarouselParceiros />

      {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium dicta autem iste vitae neque voluptatem nemo minus sunt molestiae id repudiandae ut, beatae voluptatum non blanditiis molestias eum corporis. Quam?</p> */}
    </div>
  )
}

export default Inicio
