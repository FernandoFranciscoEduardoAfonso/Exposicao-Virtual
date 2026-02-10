import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import TypewriterTitle from '@/components/kokonutui/type-writer'
import BtnBorderRotate from './BtnBorderRotate'
import { useTheme } from '@/components/ui/theme-provider'


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
            <main className="overflow-hidden lg:mb-10 mb-5">
                <FundoHeroSection />

                <ConteudoHeroSection />
            </main>
        </>
    )
}

const FundoHeroSection = () => {
    return (
        <div aria-hidden className="overflow-hidden absolute inset-0 isolate contain-strict">
            {/* Gradient a esquerda 1 */}
            <div aria-hidden className="absolute inset-0 isolate contain-strict overflow-hidden opacity-50">
                {/* <!-- Gradientes radiais originais --> */}
                <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(247,72%,80%,.40)_0,hsla(247,72%,50%,.20)_50%,hsla(247,72%,45%,0)_80%)] float-animation"></div>
                <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(247,72%,80%,.25)_0,hsla(247,72%,50%,.10)_80%,transparent_100%)] [translate:5%_-50%] pulse-animation"></div>
                <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(247,72%,80%,.20)_0,hsla(247,72%,50%,.10)_80%,transparent_100%)]"></div>
            </div>

            <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">

                {/* --- Camada de Quadrados Preenchidos Harmoniosos (EXPANDIDO) --- */}

                {/* Quadrados Azuis Claros (Tonalidade #432dd7) */}

                {/* Mais opaco (50%) */}
                <div className="absolute top-20 left-40 w-20 h-20 bg-(--tertiary-base)"></div>
                <div className="absolute bottom-40 right-40 w-20 h-20 bg-(--tertiary-base)"></div>
                <div className="absolute top-40 right-80 w-20 h-20 bg-indigo-400/30"></div> {/* NOVO 1 */}
                <div className="absolute bottom-20 right-60 w-20 h-20 bg-(--tertiary-base)"></div> {/* NOVO 2 */}
                <div className="absolute top-60 right-20 w-20 h-20 bg-(--tertiary-base)"></div> {/* NOVO 3 */}


                {/* Menos opaco (30%) */}
                <div className="absolute top-0 left-60 w-20 h-20 bg-indigo-500/30"></div>
                <div className="absolute top-60 left-20 w-20 h-20 bg-indigo-500/30"></div>
                <div className="absolute bottom-60 right-60 w-20 h-20 bg-indigo-500/30"></div>
                <div className="absolute bottom-0 left-40 w-20 h-20 bg-indigo-200/30"></div> {/* NOVO 4 */}
                <div className="absolute top-40 left-80 w-20 h-20 bg-indigo-500/30"></div> {/* NOVO 5 */}


                {/* Quadrados Cinzas Claros */}

                {/* Cinza (40%) */}
                <div className="absolute top-40 left-0 w-20 h-20 bg-gray-200/80"></div>
                <div className="absolute top-80 left-40 w-20 h-20 bg-gray-200/80"></div>
                <div className="absolute bottom-40 left-60 w-20 h-20 bg-gray-300/80"></div> {/* NOVO 6 */}
                <div className="absolute top-0 right-80 w-20 h-20 bg-gray-200/80"></div> {/* NOVO 7 */}


                {/* Cinza (20%) - Mais sutil */}
                <div className="absolute top-20 right-80 w-20 h-20 bg-gray-200/30"></div>
                <div className="absolute bottom-80 left-20 w-20 h-20 bg-gray-200/30"></div>
                <div className="absolute bottom-20 left-60 w-20 h-20 bg-gray-200/30"></div>
                <div className="absolute top-80 right-20 w-20 h-20 bg-gray-100/30"></div> {/* NOVO 8 */}
                <div className="absolute bottom-80 right-40 w-20 h-20 bg-gray-200/30"></div> {/* NOVO 9 */}
                <div className="absolute top-20 left-0 w-20 h-20 bg-gray-200/30"></div> {/* NOVO 10 */}

            </div>
        </div>
    )
}

const ConteudoHeroSection = () => {
    const { theme } = useTheme()

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
                            className="mt-8 text-balance text-4xl md:text-5xl xl:text-[3.8rem] lg:mt-16">
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
                            className={`mx-auto mt-8 max-w-2xl text-balance text-base text-muted-foreground`}>
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
                            {/* <div
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
                            </div> */}
                            <BtnBorderRotate text='Começar uma exposição' link="/" />
                            <Button
                                key={2}
                                asChild
                                size="lg"
                                className="h-10 rounded-xl px-5 py-6 bg-white hover:bg-white text-gray-600 border">
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
                    </div>
                </AnimatedGroup>
            </div>
        </section>
    )
}