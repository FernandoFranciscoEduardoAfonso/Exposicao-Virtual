import { Skeleton } from "@heroui/skeleton"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { ArrowLeft, EyeIcon, EyeOffIcon, RotateCcw } from "lucide-react"
import { useContext, useEffect, useState } from "react"
import { Tab, Tabs } from "@heroui/react"
import { Link, useNavigate } from "react-router-dom"
import Logotipo from "../components/Logotipo"
import image from '@/sections/site/assets/images/banner1.jpg'
import { z } from "zod"
import { toastError, toastNormal, toastPromiseError, toastPromiseSuccess } from "@/lib/reactHotForm"
import type { ReplyProps } from "@/interfaces/replyInterface"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Axios } from "@/lib/axios"
import { Toaster } from "react-hot-toast"
import UserData from "@/contexts/UserData"

const Registo = () => {
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

const UserRegistroShema = z.object({
    nome: z.optional(z.string({ message: "O nome só deve conter letras" })),
    email: z.string({ message: "Email inválido" }).email({ message: "Email inválido" }),
    senha: z.optional(z.string().min(8, { message: "A senha tem de ter no mínimo 8 caracteres" })),
    senhaConfirmada: z.optional(z.string().min(8, { message: "A senha confirmada tem de ter no mínimo 8 caracteres" }))
})

type UserRegistroProps = z.infer<typeof UserRegistroShema> //inferência de tipo

const Form = ({ role }: { role: string }) => {
    const [isVisible, setIsVisible] = useState(false)
    const [isVisible2, setIsVisible2] = useState(false)
    const navigate = useNavigate();
    const { setUserData } = useContext(UserData);
    const [isFetching, setIsFetching] = useState(false)

    const x: any = localStorage.getItem('pendentData')
    let pendentData: { email: string, isValid: boolean, role: string } = x ? JSON.parse(x) : null

    const { register, handleSubmit, formState: { errors } } = useForm<UserRegistroProps>({
        resolver: zodResolver(UserRegistroShema)
    })

    //esta função envia o código de confirmação no email definido
    const sendVerificationCode = async (userData: { email: string }) => {
        toastNormal('A validar o email')
        const data = { email: userData.email, role: role }
        setIsFetching(true)

        try {
            const response = await Axios.post(`/acesso/autenticacao`, data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            console.log(response.data)
            toastPromiseSuccess(new Promise(resolve => setTimeout(resolve, 2000)), response.data.message)
            await new Promise(resolve => setTimeout(resolve, 3000))

            //guardar o email pendente no localStorage
            const { email } = response.data.data
            const pendentData = {
                email: email,
                isValid: false,
                role: role
            }

            localStorage.setItem('pendentData', JSON.stringify(pendentData))

            //redireccionar para a página de autenticação de email
            navigate(`/acesso/autenticacao`)
        } catch (error: any) {
            await new Promise(resolve => setTimeout(resolve, 3000))

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

    const registerUser = async (dados: UserRegistroProps) => {
        setIsFetching(true)
        try {
            const response = await Axios.post(`/acesso/${role}/registar`, dados, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            toastPromiseSuccess(new Promise(resolve => setTimeout(resolve, 2000)), response.data.message)

            //o 1º data é um atributo por padrão das respostas e o 2º data é proveniente da API
            const userData = response.data.data
            setUserData(userData)

            //Os dados do usuários são guardados via cookies httpOnly no backend
            //redireccionar para o dashboard

            await new Promise(resolve => setTimeout(resolve, 3000))
            navigate(`/`)
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
        errors.nome?.message && arrayError.push(errors.nome?.message)
        errors.email?.message && arrayError.push(errors.email?.message)
        errors.senha?.message && arrayError.push(errors.senha?.message)
        errors.senhaConfirmada?.message && arrayError.push(errors.senhaConfirmada?.message)

        let countToast = 0
        arrayError.filter((err: any) => {
            countToast++
            if (countToast === 1) {
                toastError(err)
            }
        })
    }, [errors])

    const removePendentData = () => {
        //reiniciar o pendentData
        let y = {
            email: "",
            isValid: false,
            role: ""
        }
        localStorage.setItem('pendentData', JSON.stringify(y))

        //eliminar o pendentData do localStorage, se existir
        localStorage.removeItem('pendentData')

        //ir para area de registo
        navigate(`/acesso/registo`)
    }

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
                    <CardTitle className='mb-1.5 text-2xl'>Bem vindo a Plataforma</CardTitle>
                    <CardDescription className='text-base'>Introduza os seus dados para validar o Registo.</CardDescription>
                </div>
            </CardHeader>

            <CardContent>
                <div className='space-y-4'>
                    {(!pendentData || !pendentData.isValid) ?

                        <form className='space-y-4' onSubmit={handleSubmit(sendVerificationCode)}>
                            <div className='space-y-1'>
                                <Label htmlFor='userEmail' className='leading-5'>
                                    Email *
                                </Label>
                                <Input placeholder="Digite o seu email" inputMode="text" type="email" {...register('email')} required />
                            </div>

                            <Button disabled={isFetching} className='w-full bg-(--secondary-base) hover:bg-(--secondary-base) text-white hover:brightness-110' type='submit'>
                                Continuar
                            </Button>
                        </form> :
                        <form className='space-y-4' onSubmit={handleSubmit(registerUser)}>
                            <Toaster position="top-center" />
                            <div className="text-gray-600 w-full flex gap-1 items-center cursor-pointer" onClick={removePendentData}>
                                <RotateCcw className="h-4" />
                                <span>Recomeçar</span>
                            </div>
                            <div className="bg-secondary-medium-color rounded-sm p-2 text-gray-600 col-span-12 overflow-hidden">
                                <div className="flex flex-col w-full">
                                    <span>Continuar a criar conta com</span>
                                    <span className="text-indigo-500 text-ellipsis overflow-hidden whitespace-nowrap">{pendentData?.email}</span>
                                </div>
                                <Input type="hidden" {...register('email')} required value={pendentData?.email} />
                            </div>
                            <div className='space-y-1'>
                                <Label htmlFor='nome' className='leading-5'>
                                    Nome *
                                </Label>
                                <Input id="nome" placeholder="Digite o seu nome" inputMode="text" type="text" {...register('nome')} required />
                            </div>
                            <div className='w-full space-y-1'>
                                <Label htmlFor='senha' className='leading-5'>
                                    Senha *
                                </Label>
                                <div className='relative'>
                                    <Input id='senha' type={isVisible ? 'text' : 'password'} placeholder='Digite a sua senha' className='pr-9' inputMode="text" {...register('senha')} required />
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

                            <div className='w-full space-y-1'>
                                <Label htmlFor='senhaConfirmada' className='leading-5'>
                                    Confirmar senha *
                                </Label>
                                <div className='relative'>
                                    <Input id='senhaConfirmada' type={isVisible2 ? 'text' : 'password'} placeholder='Digite novamente a sua senha' className='pr-9' inputMode="text" {...register('senhaConfirmada')} required />
                                    <Button type="button"
                                        variant='ghost'
                                        size='icon'
                                        onClick={() => setIsVisible2(prevState => !prevState)}
                                        className='text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent'
                                    >
                                        {isVisible2 ? <EyeOffIcon /> : <EyeIcon />}
                                        <span className='sr-only'>{isVisible2 ? 'Hide password' : 'Show password'}</span>
                                    </Button>
                                </div>
                            </div>


                            <div className="col-span-12 flex flex-col gap-y-1 mt-2">
                                <Button disabled={isFetching} className='w-full bg-(--secondary-base) hover:bg-(--secondary-base) text-white hover:brightness-110' type='submit'>
                                    Criar conta
                                </Button>
                            </div>
                        </form>
                    }

                    <p className='text-muted-foreground text-center'>
                        Já tenho uma conta.{' '}
                        <Link to='/acesso/login' className='text-card-foreground hover:underline'>
                            Iniciar sessão
                        </Link>
                    </p>

                </div>
            </CardContent>
        </Card>
    )
}
export default Registo
