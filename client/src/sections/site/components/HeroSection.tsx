import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import TypewriterTitle from '@/components/kokonutui/type-writer'


const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <main className="overflow-hidden">
                <FundoHeroSection />

                <ConteudoHeroSection />
            </main>
        </>
    )
}



const FundoHeroSection = () => {
    return (
        <div aria-hidden className="absolute inset-0 isolate opacity-70 contain-strict overflow-hidden">
            <div aria-hidden className="absolute inset-0 isolate opacity-65 contain-strict overflow-hidden">
                {/* <!-- Gradientes radiais originais --> */}
                <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(247,72%,80%,.40)_0,hsla(247,72%,50%,.20)_50%,hsla(247,72%,45%,0)_80%)] float-animation"></div>
                <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(247,72%,80%,.25)_0,hsla(247,72%,50%,.10)_80%,transparent_100%)] [translate:5%_-50%] pulse-animation"></div>
                <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(247,72%,80%,.20)_0,hsla(247,72%,50%,.10)_80%,transparent_100%)]"></div>
            </div>

            <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">

                {/* --- Camada de Quadrados Preenchidos Harmoniosos (EXPANDIDO) --- */}

                {/* Quadrados Azuis Claros (Tonalidade #432dd7) */}

                {/* Mais opaco (50%) */}
                <div className="absolute top-20 left-40 w-20 h-20 bg-indigo-300/50"></div>
                <div className="absolute bottom-40 right-40 w-20 h-20 bg-indigo-300/50"></div>
                <div className="absolute top-40 right-80 w-20 h-20 bg-indigo-400/50"></div> {/* NOVO 1 */}
                <div className="absolute bottom-20 right-60 w-20 h-20 bg-indigo-300/50"></div> {/* NOVO 2 */}
                <div className="absolute top-60 right-20 w-20 h-20 bg-indigo-300/50"></div> {/* NOVO 3 */}


                {/* Menos opaco (30%) */}
                <div className="absolute top-0 left-60 w-20 h-20 bg-indigo-300/30"></div>
                <div className="absolute top-60 left-20 w-20 h-20 bg-indigo-300/30"></div>
                <div className="absolute bottom-60 right-60 w-20 h-20 bg-indigo-300/30"></div>
                <div className="absolute bottom-0 left-40 w-20 h-20 bg-indigo-200/30"></div> {/* NOVO 4 */}
                <div className="absolute top-40 left-80 w-20 h-20 bg-indigo-300/30"></div> {/* NOVO 5 */}


                {/* Quadrados Cinzas Claros */}

                {/* Cinza (40%) */}
                <div className="absolute top-40 left-0 w-20 h-20 bg-gray-200/40"></div>
                <div className="absolute top-80 left-40 w-20 h-20 bg-gray-200/40"></div>
                <div className="absolute bottom-40 left-60 w-20 h-20 bg-gray-300/40"></div> {/* NOVO 6 */}
                <div className="absolute top-0 right-80 w-20 h-20 bg-gray-200/40"></div> {/* NOVO 7 */}


                {/* Cinza (20%) - Mais sutil */}
                <div className="absolute top-20 right-80 w-20 h-20 bg-gray-200/20"></div>
                <div className="absolute bottom-80 left-20 w-20 h-20 bg-gray-200/20"></div>
                <div className="absolute bottom-20 left-60 w-20 h-20 bg-gray-200/20"></div>
                <div className="absolute top-80 right-20 w-20 h-20 bg-gray-100/20"></div> {/* NOVO 8 */}
                <div className="absolute bottom-80 right-40 w-20 h-20 bg-gray-200/20"></div> {/* NOVO 9 */}
                <div className="absolute top-20 left-0 w-20 h-20 bg-gray-200/20"></div> {/* NOVO 10 */}


                {/* --- Linhas Horizontais (Seu Código Original) --- */}
                <div className="absolute top-0 left-0 w-full h-px bg-purple-400"></div>
                <div className="absolute top-20 left-0 w-full h-px bg-purple-400"></div>
                <div className="absolute top-40 left-0 w-full h-px bg-purple-400"></div>
                <div className="absolute top-60 left-0 w-full h-px bg-purple-400"></div>
                <div className="absolute top-80 left-0 w-full h-px bg-purple-400"></div>
                <div className="absolute bottom-80 left-0 w-full h-px bg-purple-400"></div>
                <div className="absolute bottom-60 left-0 w-full h-px bg-purple-400"></div>
                <div className="absolute bottom-40 left-0 w-full h-px bg-purple-400"></div>
                <div className="absolute bottom-20 left-0 w-full h-px bg-purple-400"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-purple-400"></div>

                {/* --- Linhas Verticais (Seu Código Original) --- */}
                <div className="absolute top-0 left-0 h-full w-px bg-purple-400"></div>
                <div className="absolute top-0 left-20 h-full w-px bg-purple-400"></div>
                <div className="absolute top-0 left-40 h-full w-px bg-purple-400"></div>
                <div className="absolute top-0 left-60 h-full w-px bg-purple-400"></div>
                <div className="absolute top-0 left-80 h-full w-px bg-purple-400"></div>
                <div className="absolute top-0 right-100 h-full w-px bg-purple-400"></div>
                <div className="absolute top-0 right-80 h-full w-px bg-purple-400"></div>
                <div className="absolute top-0 right-60 h-full w-px bg-purple-400"></div>
                <div className="absolute top-0 right-40 h-full w-px bg-purple-400"></div>
                <div className="absolute top-0 right-20 h-full w-px bg-purple-400"></div>
                <div className="absolute top-0 right-0 h-full w-px bg-purple-400"></div>
            </div>
        </div>
    )
}

{/* <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div> 


                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(247,72%,80%,.40)_0,hsla(247,72%,50%,.20)_50%,hsla(247,72%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(247,72%,80%,.25)_0,hsla(247,72%,50%,.10)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(247,72%,80%,.20)_0,hsla(247,72%,50%,.10)_80%,transparent_100%)]" />
                </div> 
                */}


const ConteudoHeroSection = () => {
    return (
        <section>
            <div className="relative pt-24 md:pt-36">

                <div className="px-6">
                    <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                        <AnimatedGroup variants={transitionVariants as any}>
                            <Link
                                to="#link"
                                className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                <span className="text-foreground text-sm">Sobre a Plataforma</span>
                                <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
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

                        <TextEffect
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            as="h1"
                            className="mt-8 text-balance text-5xl md:text-6xl xl:text-[4.25rem] lg:mt-16">
                            Sala de Exposição Virtual para:
                        </TextEffect>

                        <TypewriterTitle
                            textos={["Desenhistas", "Fotógrafos", "Artistas Plásticos", "Pintores", "Artesãos"]}
                        />

                        <TextEffect
                            per="line"
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            delay={0.5}
                            as="p"
                            className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                            Highly customizable components for building modern websites and applications that look and feel the way you mean it.
                        </TextEffect>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            } as any}
                            className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                            <div
                                key={1}
                                className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] btn-border-rotate">
                                <div className='content'>
                                    <Button
                                        asChild
                                        size="lg"
                                        className="rounded-xl px-5 text-base text-white bg-[#432dd7] hover:bg-indigo-800">
                                        <Link to="#link">
                                            <span className="text-nowrap relative z-10">Começar uma exposição</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <Button
                                key={2}
                                asChild
                                size="lg"
                                variant="ghost"
                                className="h-10.5 rounded-xl px-5 py-6">
                                <Link to="#link">
                                    <span className="text-nowrap">Ver uma demonstração</span>
                                </Link>
                            </Button>
                        </AnimatedGroup>
                    </div>
                </div>

                {/* Componente escondido */}
                <AnimatedGroup
                    variants={{
                        container: {
                            visible: {
                                transition: {
                                    staggerChildren: 0.05,
                                    delayChildren: 0.75,
                                },
                            },
                        },
                        ...transitionVariants,
                    } as any}>
                    <div className="hidden relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                        <div
                            aria-hidden
                            className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-50%"
                        />

                        <div className="h-[auto] p-4 inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl shadow-lg shadow-zinc-950/15 ring-1">

                            {/* Carousel com  slides a horizontal e a vertical */}
                            {/* <div className='flex gap-2'>
                                        <div className='w-[auto]'>
                                            <InfiniteSlider direction='vertical'
                                                speedOnHover={20}
                                                speed={40}
                                                gap={10}>

                                                <Link to={"#"} className='shrink-0 rounded-2xl opacity-[1] group relative'>
                                                    <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                                                        <Link
                                                            to="/"
                                                            className="block text-sm duration-150 bg-white px-4 py-2 rounded-2xl">
                                                            <span>Ver mais sobre a obra</span>

                                                            <ChevronRight className="ml-1 inline-block size-3" />
                                                        </Link>
                                                    </div>
                                                    <div className='rounded-[inherit] inset-0 group-hover:blur-xs transition-all duration-500 group-hover:opacity-50'>
                                                        <img decoding="auto" src={image} alt="Imagem_Obra" className="aspect-[1/2] block w-[360px]  h-[300px] rounded-[inherit] object-center object-cover" />
                                                    </div>
                                                </Link>
                                                <Link to={"#"} className='shrink-0 rounded-2xl opacity-[1] group relative'>
                                                    <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                                                        <Link
                                                            to="/"
                                                            className="block text-sm duration-150 bg-white px-4 py-2 rounded-2xl">
                                                            <span>Ver mais sobre a obra</span>

                                                            <ChevronRight className="ml-1 inline-block size-3" />
                                                        </Link>
                                                    </div>
                                                    <div className='rounded-[inherit] inset-0 group-hover:blur-xs transition-all duration-500 group-hover:opacity-50'>
                                                        <img decoding="auto" src={image} alt="Imagem_Obra" className="aspect-[1/2] block w-[360px]  h-[300px] rounded-[inherit] object-center object-cover" />
                                                    </div>
                                                </Link>
                                            </InfiniteSlider>
                                        </div>

                                        <div className='flex gap-2 flex-col w-[auto]'>
                                            <InfiniteSlider 
                                                speedOnHover={20}
                                                speed={40}
                                                gap={10}>

                                                <Link to={"#"} className='shrink-0 rounded-2xl opacity-[1] group relative'>
                                                    <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                                                        <Link
                                                            to="/"
                                                            className="block text-sm duration-150 bg-white px-4 py-2 rounded-2xl">
                                                            <span>Ver mais sobre a obra</span>

                                                            <ChevronRight className="ml-1 inline-block size-3" />
                                                        </Link>
                                                    </div>
                                                    <div className='rounded-[inherit] inset-0 group-hover:blur-xs transition-all duration-500 group-hover:opacity-50'>
                                                        <img decoding="auto" src={image} alt="Imagem_Obra" className="aspect-[1/2] block w-[360px]  h-[300px] rounded-[inherit] object-center object-cover" />
                                                    </div>
                                                </Link>
                                                <Link to={"#"} className='shrink-0 rounded-2xl opacity-[1] group relative'>
                                                    <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                                                        <Link
                                                            to="/"
                                                            className="block text-sm duration-150 bg-white px-4 py-2 rounded-2xl">
                                                            <span>Ver mais sobre a obra</span>

                                                            <ChevronRight className="ml-1 inline-block size-3" />
                                                        </Link>
                                                    </div>
                                                    <div className='rounded-[inherit] inset-0 group-hover:blur-xs transition-all duration-500 group-hover:opacity-50'>
                                                        <img decoding="auto" src={image} alt="Imagem_Obra" className="aspect-[1/2] block w-[360px]  h-[300px] rounded-[inherit] object-center object-cover" />
                                                    </div>
                                                </Link>

                                            </InfiniteSlider>

                                            <InfiniteSlider reverse
                                                speedOnHover={20}
                                                speed={40}
                                                gap={10}>

                                                <Link to={"#"} className='shrink-0 rounded-2xl opacity-[1] group relative'>
                                                    <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                                                        <Link
                                                            to="/"
                                                            className="block text-sm duration-150 bg-white px-4 py-2 rounded-2xl">
                                                            <span>Ver mais sobre a obra</span>

                                                            <ChevronRight className="ml-1 inline-block size-3" />
                                                        </Link>
                                                    </div>
                                                    <div className='rounded-[inherit] inset-0 group-hover:blur-xs transition-all duration-500 group-hover:opacity-50'>
                                                        <img decoding="auto" src={image} alt="Imagem_Obra" className="aspect-[1/2] block w-[360px]  h-[300px] rounded-[inherit] object-center object-cover" />
                                                    </div>
                                                </Link>
                                                <Link to={"#"} className='shrink-0 rounded-2xl opacity-[1] group relative'>
                                                    <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                                                        <Link
                                                            to="/"
                                                            className="block text-sm duration-150 bg-white px-4 py-2 rounded-2xl">
                                                            <span>Ver mais sobre a obra</span>

                                                            <ChevronRight className="ml-1 inline-block size-3" />
                                                        </Link>
                                                    </div>
                                                    <div className='rounded-[inherit] inset-0 group-hover:blur-xs transition-all duration-500 group-hover:opacity-50'>
                                                        <img decoding="auto" src={image} alt="Imagem_Obra" className="aspect-[1/2] block w-[360px]  h-[300px] rounded-[inherit] object-center object-cover" />
                                                    </div>
                                                </Link>

                                            </InfiniteSlider>
                                        </div>
                                    </div> */}

                            {/* Imagem de destaque */}
                            {/* <img
                                        className="w-[100%] z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                                        src={image}
                                        alt="app screen"
                                    /> */}
                        </div>
                    </div>
                </AnimatedGroup>
            </div>
        </section>
    )
}