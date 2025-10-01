import { InfiniteSlider } from "@/components/ui/infinite-slider"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"

const CarouselParceiros = () => {
    return (
        <section className="bg-background my-8">
            <div className="group relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm">Nossos Queridos Parceiros</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider reverse
                            speedOnHover={20}
                            speed={40}
                            gap={112}>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                    alt="Nvidia Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/column.svg"
                                    alt="Column Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/github.svg"
                                    alt="GitHub Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/nike.svg"
                                    alt="Nike Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                    alt="Lemon Squeezy Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/laravel.svg"
                                    alt="Laravel Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-7 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/lilly.svg"
                                    alt="Lilly Logo"
                                    height="28"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-6 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/openai.svg"
                                    alt="OpenAI Logo"
                                    height="24"
                                    width="auto"
                                />
                            </div>
                        </InfiniteSlider>

                        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>

        // <section className="bg-background pb-16 pt-16 md:pb-32">
        //     <div className="group relative m-auto max-w-5xl px-6">
        //         <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
        //             <Link
        //                 to="/"
        //                 className="block text-sm duration-150 hover:opacity-75">
        //                 <span>Ver todos os parceiros</span>

        //                 <ChevronRight className="ml-1 inline-block size-3" />
        //             </Link>
        //         </div>
        //         <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
        //             <div className="flex">
        //                 <img
        //                     className="mx-auto h-5 w-fit dark:invert"
        //                     src="https://html.tailus.io/blocks/customers/nvidia.svg"
        //                     alt="Nvidia Logo"
        //                     height="20"
        //                     width="auto"
        //                 />
        //             </div>

        //             <div className="flex">
        //                 <img
        //                     className="mx-auto h-4 w-fit dark:invert"
        //                     src="https://html.tailus.io/blocks/customers/column.svg"
        //                     alt="Column Logo"
        //                     height="16"
        //                     width="auto"
        //                 />
        //             </div>
        //             <div className="flex">
        //                 <img
        //                     className="mx-auto h-4 w-fit dark:invert"
        //                     src="https://html.tailus.io/blocks/customers/github.svg"
        //                     alt="GitHub Logo"
        //                     height="16"
        //                     width="auto"
        //                 />
        //             </div>
        //             <div className="flex">
        //                 <img
        //                     className="mx-auto h-5 w-fit dark:invert"
        //                     src="https://html.tailus.io/blocks/customers/nike.svg"
        //                     alt="Nike Logo"
        //                     height="20"
        //                     width="auto"
        //                 />
        //             </div>
        //             <div className="flex">
        //                 <img
        //                     className="mx-auto h-5 w-fit dark:invert"
        //                     src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
        //                     alt="Lemon Squeezy Logo"
        //                     height="20"
        //                     width="auto"
        //                 />
        //             </div>
        //             <div className="flex">
        //                 <img
        //                     className="mx-auto h-4 w-fit dark:invert"
        //                     src="https://html.tailus.io/blocks/customers/laravel.svg"
        //                     alt="Laravel Logo"
        //                     height="16"
        //                     width="auto"
        //                 />
        //             </div>
        //             <div className="flex">
        //                 <img
        //                     className="mx-auto h-7 w-fit dark:invert"
        //                     src="https://html.tailus.io/blocks/customers/lilly.svg"
        //                     alt="Lilly Logo"
        //                     height="28"
        //                     width="auto"
        //                 />
        //             </div>

        //             <div className="flex">
        //                 <img
        //                     className="mx-auto h-6 w-fit dark:invert"
        //                     src="https://html.tailus.io/blocks/customers/openai.svg"
        //                     alt="OpenAI Logo"
        //                     height="24"
        //                     width="auto"
        //                 />
        //             </div>
        //         </div>
        //     </div>
        // </section>
    )
}

export default CarouselParceiros
