import { Separator } from '@/components/ui/separator'
import AuctionRanking from '@/sections/shared/components/Ranking';
import { useTheme } from '@/components/ui/theme-provider';
import { FaCheckCircle } from 'react-icons/fa';
import image from "@/sections/site/assets/images/bebe.jpg"
import image2 from "@/sections/site/assets/images/banner2.jpg"
import { Button } from '@heroui/react';
import SocialButton from '@/components/kokonutui/social-button';
import PageTitle from '../components/PageTitle';

const images: string[] = [
    'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-37.png',
    'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-36.png',
    'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-35.png',
    'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-34.png',
    'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-33.png',
    'https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/portfolio/image-32.png'
]

const mockProposals = [
    { id: '1', name: 'Maria Silva', amount: 125000.00, avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704' },
    { id: '2', name: 'João Costa', amount: 150000.00, avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026705' },
    { id: '3', name: 'Ana Pereira', amount: 130000.00, avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026706' },
    { id: '4', name: 'Carlos Santos', amount: 110000.00, avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026707' },
    { id: '5', name: 'Fernanda Lima', amount: 160000.00, avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026708' },
];

const DetalhesLeilao = () => {
    const { theme } = useTheme()

    return (
        <section className='site-padding-x w-full site-padding-y'>
            <div className='w-full'>
                {/* Section Header */}

                <PageTitle image={image2} title='Detalhes do Leilão' description='Explore cutting-edge AI solutions that enhance productivity and streamline workflows across various'></PageTitle>


                {/* Portfolio Content */}
                <div className='grid gap-2 lg:grid-cols-3 mt-4'>
                    {/* Left Section */}
                    <div className='columns-1 gap-6 sm:col-span-2 sm:columns-2'>
                        {images.map((image, index) => (
                            <div key={index} className='mb-6 break-inside-avoid-column overflow-hidden rounded-xl'>
                                <img src={image} alt={`Portfolio Image ${index + 1}`} className='w-full object-cover' />
                            </div>
                        ))}
                    </div>

                    {/* Right Section */}
                    <div className='space-y-6 px-6 py-6 '>

                        <h3 className='text-3xl font-medium'>AI Innovations</h3>

                        <p className='text-muted-foreground text-sm'>
                            Explore cutting-edge AI solutions that enhance productivity and streamline workflows across various
                            <br />
                            Join us in transforming the future of work with intelligent systems that adapt to your unique needs.
                        </p>

                        <Separator />

                        <div>
                            <div className={`${theme == 'light' ? 'bg-white' : 'bg-background'} p-2 rounded-sm cursor-pointer flex items-center gap-2 mt-4`}>
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
                            </div>
                        </div>

                        <ul className='space-y-4 text-sm'>
                            <li className='flex items-center gap-4'>
                                <span className='w-21 font-medium'>Categoria:</span>
                                <span className='text-muted-foreground'>AI Innovations</span>
                            </li>
                            <li className='flex items-center gap-4'>
                                <span className='font-medium'>Início do leilão:</span>
                                <span className='text-muted-foreground'>12/10/2025 20:30</span>
                            </li>
                            <li className='flex items-center gap-4'>
                                <span className='font-medium'>Témino do leilão:</span>
                                <span className='text-muted-foreground'>26/12/2025 20:30</span>
                            </li>
                        </ul>
                        <Separator />

                        {/* Tempo restante */}
                        <div
                            className="bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 overflow-hidden shadow-sm">
                            {/* Timer Section */}
                            <div className="p-6 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5">
                                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Auction Ends In
                                </p>
                                <div className="flex gap-3">
                                    <div
                                        className="flex-1 text-center bg-white dark:bg-background-dark rounded-lg py-3 border border-slate-100 dark:border-white/5">
                                        <p className="text-2xl font-black text-[#6366f1]">02</p>
                                        <p className="text-[10px] uppercase font-bold text-slate-400">Days</p>
                                    </div>
                                    <div
                                        className="flex-1 text-center bg-white dark:bg-background-dark rounded-lg py-3 border border-slate-100 dark:border-white/5">
                                        <p className="text-2xl font-black text-[#6366f1]">14</p>
                                        <p className="text-[10px] uppercase font-bold text-slate-400">Hours</p>
                                    </div>
                                    <div
                                        className="flex-1 text-center bg-white dark:bg-background-dark rounded-lg py-3 border border-slate-100 dark:border-white/5">
                                        <p className="text-2xl font-black text-[#6366f1]">35</p>
                                        <p className="text-[10px] uppercase font-bold text-slate-400">Mins</p>
                                    </div>
                                    <div
                                        className="flex-1 text-center bg-white dark:bg-background-dark rounded-lg py-3 border border-slate-100 dark:border-white/5">
                                        <p className="text-2xl font-black text-[#6366f1]">10</p>
                                        <p className="text-[10px] uppercase font-bold text-slate-400">Secs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-end mb-6">
                                    <div>
                                        <p className="text-sm font-medium text-slate-500 mb-1">Maior proposta</p>
                                        <p className="text-4xl font-black">$12,400.00</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded">
                                            Reserve Met</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="relative">
                                        <span
                                            className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">$</span>
                                        <input
                                            className="w-full bg-slate-50 dark:bg-white/5 border-2 border-slate-100 dark:border-white/10 rounded-xl py-4 pl-8 pr-4 font-bold text-lg focus:ring-primary focus:border-primary transition-all"
                                            step="100" type="number" />
                                    </div>
                                    <p className="text-[11px] text-slate-400 px-1">Incremento mínimo: 100.00 Kzs</p>
                                    <div className='flex items-center gap-4'>
                                        <Button className='bg-(--secondary-base) text-white'>Enviar Proposta</Button>
                                        <SocialButton />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <Separator />
                        <div className='text-gray-50'>
                            <AuctionRanking proposals={mockProposals} title="Propostas do Leilão" />
                        </div>





                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetalhesLeilao
