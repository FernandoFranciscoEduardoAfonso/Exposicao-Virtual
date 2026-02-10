import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import video from '@/sections/site/assets/videos/dna-video.webm'

export default function AnimatedVideo() {
    return (
        <main className="site-padding-x w-full">
            <section>
                <div className="relative">
                    <div className="flex flex-col lg:px-8 px-4">
                        <div className="z-2 mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                            <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16">Apresente sua arte ao mundo</h1>
                            <p className="mt-8 max-w-2xl text-balance text-lg">Highly customizable components for building modern websites and applications you mean it.</p>

                            <div className="my-6 lg:mb-16 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                <Button
                                    asChild
                                    size="lg"
                                    className="h-12 text-white rounded-xl pl-5 pr-3 text-base bg-(--tertiary-medium) hover:bg-(--tertiary-medium) hover:brightness-110">
                                    <Link to="#link">
                                        <span className="text-nowrap ">Registrar-se</span>
                                        <ChevronRight className="ml-1" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="z-0 -ml-1 size-full overflow-hidden absolute aspect-2/3 inset-1 rounded-xl border-black/10 lg:aspect-video lg:rounded-[1rem] dark:border-white/5">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="min-h-[100%] relative object-cover opacity-50 invert dark:opacity-35 dark:invert-0 dark:lg:opacity-75"
                            src={video}></video>
                    </div>
                </div>
            </section>
        </main>
    )
}
