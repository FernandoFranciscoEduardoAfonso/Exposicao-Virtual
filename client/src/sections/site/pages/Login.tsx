import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { ArrowLeft, EyeIcon, EyeOffIcon } from "lucide-react"
import { useContext, useEffect, useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Skeleton, Tab, Tabs } from "@heroui/react"
import { Link, useNavigate } from "react-router-dom"
import Logotipo from "../components/Logotipo"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toastError, toastPromiseError, toastPromiseSuccess } from "@/lib/reactHotForm"
import { Axios } from "@/lib/axios"
import type { ReplyProps } from "@/interfaces/replyInterface"
import { Toaster } from "react-hot-toast"
import image from '@/sections/site/assets/images/banner2.jpg'
import UserData from '@/contexts/UserData';

const Login = () => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])
    return (
        <main className="grid grid-cols-12 w-full h-[100vh] overflow-hidden">
            <article className="relative col-span-12 lg:col-span-7 xl:col-span-8 h-[100vh] lg:block hidden">
                {
                    isLoading ?
                        <Skeleton className="h-full" /> :
                        <img src={image} className='h-full w-full object-cover object-[center_35%]' alt="Imagem de acesso" />
                }
                <div className="h-full w-full absolute left-0 top-0 bg-gradient-to-r from-black/90 to-transparent"></div>
            </article>
            <article className="pt-5 col-span-12 lg:col-span-5 xl:col-span-4 flex flex-col items-center top-0 w-full h-full p-4">
                <div className="w-50 my-4 place-items-center">
                    <Logotipo />
                </div>
                <Tabs aria-label="Options" >
                    <Tab key="a" title="Artista" className="w-full place-items-center">
                        <Form role="artist" />
                    </Tab>
                    <Tab key="c" title="Cliente" className="w-full place-items-center">
                        <Form role="client" />
                    </Tab>
                </Tabs>
            </article>
        </main>
    )
}


const UserLoginShema = z.object({
    email: z.string({ message: "Email inválido" }).email({ message: "Email inválido" }),
    senha: z.string(), //já não é preciso validar o nº de digitos, pois vai comparar com a senha na DB
})

type UserLoginProps = z.infer<typeof UserLoginShema> //inferência de tipo

const Form = ({ role }: { role: string }) => {
    const [isVisible, setIsVisible] = useState(false)
    const navigate = useNavigate();
    const { setUserData } = useContext(UserData);
    const [isFetching, setIsFetching] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm<UserLoginProps>({
        resolver: zodResolver(UserLoginShema)
    })

    const loginUser = async (data: UserLoginProps) => {
        setIsFetching(true)
        try {
            const response = await Axios.post(`/acesso/${role}/login`, data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            toastPromiseSuccess(new Promise(resolve => setTimeout(resolve, 2000)), response.data.message)

            //o 1º data é um atributo por padrão das respostas e o 2º data é proveniente da API
            const userData = response.data.data
            setUserData(userData)

            //verificar se existe uma rota pendente
            // const pendentRoute = localStorage.getItem("pendentRoute")
            // if (pendentRoute) {
            //     //redireccionar para a página de pagamento
            //     await new Promise(resolve => setTimeout(resolve, 3000))
            //     navigate(pendentRoute)
            //     return
            // }

            //redireccionar para o dashboard
            await new Promise(resolve => setTimeout(resolve, 3000))
            if (role == "artist") {
                navigate(`/app-artist`)
            } else if (role == "admin") {
                navigate(`/app-admin`)
            } else {
                navigate(`/painel`)
            }
        } catch (error: any) {
            if (error.response) {
                const err = error.response as ReplyProps
                console.log(err.data)
                toastPromiseError(new Promise((_, reject) => setTimeout(reject, 2000)), err.data.message)
            } else {
                console.log(error.message) //Network Error
                toastPromiseError(new Promise((_, reject) => setTimeout(reject, 2000)), "Falha na solicitação")
            }
        } finally {
            await new Promise(resolve => setTimeout(resolve, 3000))
            setIsFetching(false)
        }
    }

    //configuração dos toasts
    const arrayError: Array<string> = []
    useEffect(() => {
        errors.email?.message && arrayError.push(errors.email?.message)
        errors.senha?.message && arrayError.push(errors.senha?.message)

        let countToast = 0
        arrayError.filter((err: any) => {
            countToast++
            if (countToast === 1) {
                toastError(err)
            }
        })
    }, [errors])

    return (
        <Card className='bg-background z-1 w-full border-0 shadow-none sm:max-w-lg text-sm'>
            <Toaster position="top-center" />

            <CardHeader className='gap-6'>
                <div className="flex">
                    <Link to="/" className="group flex gap-2 items-center text-gray-500">
                        <ArrowLeft size={17} className="group-hover:-translate-x-1 transition-all" />
                        Ir para o início
                    </Link>
                </div>

                <div>
                    <CardTitle className='mb-1.5 text-2xl'>Entrar na Plataforma</CardTitle>
                    <CardDescription className='text-base'>Escolha uma forma de acesso.</CardDescription>
                </div>
            </CardHeader>

            <CardContent>
                <p className='text-muted-foreground mb-6'>
                    Entrar com{' '}
                    <a href='#' className='text-card-foreground hover:underline'>
                        Link Mágico
                    </a>
                </p>

                {/* start form */}
                <div className='space-y-4'>
                    <form className='space-y-4' onSubmit={handleSubmit(loginUser)}>
                        {/* Email */}
                        <div className='space-y-1'>
                            <Label htmlFor='userEmail' className='leading-5'>
                                Email *
                            </Label>
                            <Input type='email' id='userEmail' placeholder='Digite o seu email' inputMode="email" {...register('email')} required />
                        </div>

                        {/* Password */}
                        <div className='w-full space-y-1'>
                            <Label htmlFor='password' className='leading-5'>
                                Senha*
                            </Label>
                            <div className='relative'>
                                <Input id='password' type={isVisible ? 'text' : 'password'} placeholder='Digite a sua senha' className='pr-9' inputMode="text" {...register('senha')} required />
                                <Button type="button"
                                    variant='ghost'
                                    size='icon'
                                    onClick={() => setIsVisible(prevState => !prevState)}
                                    className='text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent'
                                >
                                    {isVisible ? <EyeOffIcon /> : <EyeIcon />}
                                    <span className='sr-only'>{isVisible ? 'Hide password' : 'Show password'}</span>
                                </Button>
                            </div>
                        </div>

                        {/* Remember Me and Forgot Password */}
                        <div className='flex items-center justify-between gap-y-2'>
                            <div className='flex items-center gap-3'>
                                <Checkbox id='rememberMe' className='size-6' />
                                <Label htmlFor='rememberMe' className='text-muted-foreground'>
                                    {' '}
                                    Remember Me
                                </Label>
                            </div>

                            <a href='#' className='hover:underline'>
                                Forgot Password?
                            </a>
                        </div>

                        <Button disabled={isFetching} className='w-full bg-(--secondary-base) hover:bg-(--secondary-base) text-white hover:brightness-110 cursor-pointer' type='submit'>
                            Entrar
                        </Button>
                    </form>
                    {/* end form */}

                    <p className='text-muted-foreground text-center'>
                        Não tenho uma conta.{' '}
                        <Link to='/acesso/registo' className='text-card-foreground hover:underline'>
                            Criar conta
                        </Link>
                    </p>

                    <div className='flex items-center gap-4'>
                        <Separator className='flex-1' />
                        <p>ou</p>
                        <Separator className='flex-1' />
                    </div>

                    <Button variant='outline' className='w-full' asChild>
                        <a href='#'>Entrar com conta google</a>
                    </Button>
                </div>

            </CardContent>
        </Card>
    )
}


export default Login
