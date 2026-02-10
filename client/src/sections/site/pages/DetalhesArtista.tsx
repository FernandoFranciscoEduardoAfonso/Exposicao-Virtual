import ParticleButton from '@/components/kokonutui/particle-button';
import SocialButton from '@/components/kokonutui/social-button';
import { Separator } from '@/components/ui/separator';
import { useTheme } from '@/components/ui/theme-provider';
import image2 from "@/sections/site/assets/images/banner2.jpg";
import { Button } from '@heroui/react';
import { Users } from 'lucide-react';
import ArtistExpositions from '../components/ArtistExpositions';
import ArtistFeatured from '../components/ArtistFeatured';
import ArtistLeiloes from '../components/ArtistLeiloes';
import MoreOptions from '../components/MoreOptions';
import PageTitle from '../components/PageTitle';
import RecommendedArts from '../components/RecommendedArts';


const mockProposals = [
    { id: '1', name: 'Maria Silva', amount: 125000.00, avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704' },
    { id: '2', name: 'João Costa', amount: 150000.00, avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026705' },
    { id: '3', name: 'Ana Pereira', amount: 130000.00, avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026706' },
    { id: '4', name: 'Carlos Santos', amount: 110000.00, avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026707' },
    { id: '5', name: 'Fernanda Lima', amount: 160000.00, avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026708' },
];

const DetalhesArtista = () => {
    const { theme } = useTheme()

    return (
        <section className='site-padding-x w-full site-padding-y'>
            <div className='w-full'>
                {/* Section Header */}

                <PageTitle artist image={image2} title='Detalhes do Artista' description='Explore cutting-edge AI solutions that enhance productivity and streamline workflows across various'></PageTitle>


                {/* Portfolio Content */}
                <div className='grid gap-2 grid-cols-12 mt-4'>
                    {/* Left Section */}
                    <div className='col-span-4 space-y-6 px-6 py-6 '>

                        <h3 className='text-3xl font-medium'>Perfil do Artista</h3>

                        <p className='text-muted-foreground text-sm'>
                            Explore cutting-edge AI solutions that enhance productivity and streamline workflows across various
                            <br />
                            Join us in transforming the future of work with intelligent systems that adapt to your unique needs.
                        </p>

                        <Separator />

                        <div className="w-full flex items-center gap-2 px-2">
                            <Users className="w-4 -mt-[3px]" />
                            <span className="text-[0.8rem]">4.2 M visitantes mensais</span>
                        </div>

                        <div className="flex gap-2">
                            {/* <ReactionButton /> */}
                            <ParticleButton />
                            <SocialButton />
                            <MoreOptions />

                        </div>

                        <Separator />

                        <div className='flex items-center gap-2'>
                            <Button className='bg-(--secondary-base) text-white px-8'>Contactar</Button>
                            <Button className='px-8'>Consultar</Button>
                        </div>

                    </div>

                    {/* Right Section */}
                    <div className='col-span-8 '>
                        <ArtistFeatured />
                    </div>
                </div>
            </div>

            <div className='mt-10'>
                <ArtistLeiloes />
            </div>
            <div className='mt-10'>
                <RecommendedArts />
            </div>
            <div className='mt-10'>
                <ArtistExpositions />
            </div>

        </section>
    )
}

export default DetalhesArtista
