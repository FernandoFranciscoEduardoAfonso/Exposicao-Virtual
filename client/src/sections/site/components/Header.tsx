import { Menu, X, LayoutDashboard, Image, Layers, Sparkles } from 'lucide-react'
import React, { useContext } from 'react'
import { cn } from '@/lib/utils'
import { Link, useLocation } from 'react-router-dom'
import ProfileDropdown from '@/components/kokonutui/profile-dropdown'
import { ModeToggle } from '@/components/ui/mode-toggle'
import Logotipo from './Logotipo'
import { MenuStateContext } from '../pages/Site'
import { Button } from '@heroui/react'
import { useTheme } from '@/components/ui/theme-provider'
import { memo } from 'react'
import type { UsuarioDataProps } from '@/interfaces/replyInterface'

const menuItems = [
    { name: 'Início', href: '/', icon: <LayoutDashboard /> },
    { name: 'Obras', href: '/obras', icon: <Image /> },
    { name: 'Exposições', href: '/exposicoes', icon: <Layers /> },
    { name: 'Leilões', href: '/leiloes', icon: <Sparkles /> },
]

export const Header = memo(({ userData }: { userData: UsuarioDataProps | null }) => {
    const { theme } = useTheme()
    console.log("User Data no Header:", userData);

    //esse estado agora provém do MenuStateContext
    const { menuState, setMenuState } = useContext(MenuStateContext)

    const [isScrolled, setIsScrolled] = React.useState(false)
    const location = useLocation() //no react
    const rotaAtual = location.pathname

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header className="">
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-[100vw] px-2 lg:site-padding-x">
                {/* <div className={cn('mx-auto mt-8 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}> */}
                <div className={cn('mx-auto mt-2 max-w-7xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background rounded-2xl border backdrop-blur-lg lg:px-6')}>
                    <div className="relative flex flex-wrap items-center justify-between py-3 lg:py-4 ">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                to="/"
                                aria-label="home"
                                className="flex items-center">
                                <Logotipo />
                                {/* <div className='text-xl md:text-3xl xl:text-[2.25rem] text-indigo-700'>
                                    mukutart
                                </div> */}
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        {/* navbar em dispositivos maiores */}
                        <div className="absolute inset-0 m-auto -translate-x-12 hidden size-fit lg:block">
                            <ul className="flex text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            to={item.href}
                                            className={`hover:text-(--secondary-base) flex flex-col items-center justify-center gap-1.5 p-1 px-1.5 rounded-t-sm w-[98px] border-b-2 transition-all ease-in-out duration-300
                                                ${item.href == "/" ?
                                                    rotaAtual == item.href ? 'text-(--secondary-base) border-indigo-400' : 'text-muted-foreground border-transparent' :
                                                    rotaAtual.includes(item.href) ? 'text-(--secondary-base) border-indigo-400' : 'text-muted-foreground border-transparent'}
                                                `}>
                                            <span className='size-5 flex place-items-center pt-2'>
                                                {item.icon}
                                            </span>
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* navbar em dispositivos pequenos */}
                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex hidden w-full flex-wrap items-center justify-end space-y-4 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-4 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                onClick={() => setMenuState(!menuState)}
                                                to={item.href}
                                                className={`hover:text-(--secondary-base) text-[1.8vh] flex items-center gap-2 transition-all ease-in-out duration-300
                                                  ${item.href == "/" ?
                                                        rotaAtual == item.href ? 'text-(--secondary-base)' : 'text-muted-foreground' :
                                                        rotaAtual.includes(item.href) ? 'text-(--secondary-base)' : 'text-muted-foreground'}
                                                `}>
                                                <span className='size-5 flex place-items-center'>
                                                    {item.icon}
                                                </span>
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col items-start space-y-3 sm:flex-row sm:items-center sm:gap-2 sm:space-y-0 md:w-fit">
                                {
                                    (!userData) ?
                                        <>
                                            <Link to={"/acesso/registo"}>
                                                <Button className={`${theme == 'light' && 'text-gray-800'}`}>Criar Exposição</Button>
                                            </Link>
                                            <Link to={"/acesso/login"}>
                                                <Button className={`bg-(--secondary-base) ${theme == 'light' && 'text-white'}`}>Iniciar Sessão</Button>
                                            </Link>
                                        </> :
                                        <ProfileDropdown data={userData} />
                                }

                                <ModeToggle />
                            </div>
                        </div>


                    </div>
                </div>
            </nav>
        </header>
    )
})


export default Header