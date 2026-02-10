import { FaCheckCircle } from "react-icons/fa"

const PageTitle = ({ image, title, description, artist }: { image: string, title: string, description: string, artist?: boolean }) => {
    return (
        <div className='relative lg:h-70 md:h-60 h-50 space-y-4 mb-10 bg-gray-500 overflow-hidden rounded-xl border' >
            <div className='w-full h-full'>
                <img src={image} className='h-full w-full object-cover object-[center_35%]' alt="Detalhes leilão" />
            </div>
            <div className={`${artist ? 'bg-gradient-to-t from-black/90 to-black/30' : 'bg-gradient-to-r from-black/80 to-transparent'}
                    absolute rounded-none
                    left-0 top-0 w-full h-full flex flex-col justify-center px-8`}>
                {
                    !artist &&
                    <div className="flex flex-col gap-2">
                        <h5 className="font-medium text-xl lg:text-[2.7rem] italic text-white">{title}</h5>
                        <p className='text-slate-200 md:text-sm text-[0.75rem]'>
                            {description}
                        </p>
                    </div>
                }

                {
                    artist &&
                    <div>
                        <div className={`p-2 rounded-sm cursor-pointer flex items-center gap-2 mt-4`}>
                            <div>
                                <div className="w-30 h-30">
                                    <img
                                        src={image}
                                        alt="Autor image"
                                        className="size-full object-cover rounded-full border-3 border-white"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex gap-2 items-center">
                                    <h5 className="lg:text-2xl text-lg text-white">Fernando Francisco Eduardo Afonso</h5>
                                    <FaCheckCircle className="text-blue-500" />
                                </div>
                                <span className="text-gray-300 text-sm">Pintor | Desenhista | Artista Plástico</span>
                            </div>
                        </div>
                    </div>

                }
            </div>
        </div>
    )
}

export default PageTitle
