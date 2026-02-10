import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { Axios } from "@/lib/axios"
import { type confirmacaoEmailProps, type ReplyProps } from "@/interfaces/replyInterface"
import { toastError, toastNormal, toastPromiseError, toastPromiseSuccess } from "@/lib/reactHotForm"
import { Toaster } from "react-hot-toast";
import { Skeleton } from "@heroui/skeleton"
import image from '@/sections/site/assets/images/banner1.jpg'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'


const VerificacaoEmail = () => {
  const navigate = useNavigate();
  const [duracao, setDuracao] = useState(1); // duração em minutos
  const [tempoTotal, setTempoTotal] = useState(duracao * 60); // duração em segundos
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  const x: any = localStorage.getItem('pendentData')
  const pendentData: { email: string, isValid: boolean, role: string } = x ? JSON.parse(x) : null

  //buscar o codigo de confirmacao correspondente ao email
  const { data: confirmacaoEmail } = useQuery({
    queryKey: ['getConfirmacaoEmail'],
    queryFn: async () => {
      try {
        const response: any = await Axios.get(`/acesso/autenticacao/${pendentData.email}`, {
          headers: {
            'Content-Type': 'application/json',
          }
        })

        const confirmacaoEmail = response.data.data
        console.log(confirmacaoEmail)
        return confirmacaoEmail

      } catch (error: any) {
        if (error.response) {
          const err = error.response as ReplyProps
          console.log(err.data)
        } else {
          console.log(error.message)
        }
      }
    }
  })

  useEffect(() => {
    if (!pendentData) {
      navigate('/acesso/registo')
    }

    //depois de 3 segundos vai verificar se existe um codigo de confirmacao com o respectivo email
    setTimeout(async () => {
      if (!confirmacaoEmail && !confirmacaoEmail.email) {
        navigate('/acesso/registo')
      }
    }, 3000)
  })

  //esta função envia o código de confirmação no email definido, caso ele peça o código novamente
  const sendConfirmationCode = async () => {
    const data = {
      email: pendentData.email,
      role: pendentData.role
    }

    if (tempoTotal == 0) {
      toastNormal('A validar o email')
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
        const p = {
          email: email,
          isValid: false,
          role: pendentData.role
        }

        localStorage.setItem('pendentData', JSON.stringify(p))

        setDuracao(2)

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

      }
    }

  }

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
        <h5 className="mb-6 text-indigo-500">Verificação de Email</h5>
        <span className="text-gray-600">Nós enviamos para o seu email, um código de verificação de 6 dígitos. Use-o para validar a sua identidade.</span>

        <Form confirmacaoEmail={confirmacaoEmail} />

        <div>
          <div onClick={sendConfirmationCode} className="">
            <span className={`w-[85%] ${tempoTotal == 0 ? 'text-terciary-base-color hover:text-terciary-light-color' : 'text-gray-600'} `}>Reenviar o código</span>
            <TempoRestante tempoTotal={tempoTotal} setTempoTotal={setTempoTotal} />
          </div>
        </div>
      </article>
    </main>
  )
}

const Form = ({ confirmacaoEmail }: { confirmacaoEmail: confirmacaoEmailProps }) => {
  const [codigo, setCodigo] = useState('')
  const navigate = useNavigate()

  const x: any = localStorage.getItem('pendentData')
  const pendentData: { email: string, isValid: boolean, role: string } = x ? JSON.parse(x) : null

  const validateVerificationCode = async () => {
    if (codigo.length != 6) {
      toastError("O código deve ter 6 dígitos")
    } else {
      if (codigo != confirmacaoEmail.codigo) {
        toastError("Código inválido")
      } else {
        //se o codigo estiver correcto, alterar o pendentDat.isValid para true
        let y = {
          email: pendentData.email,
          isValid: true,
          role: pendentData.role
        }

        toastPromiseSuccess(new Promise(resolve => setTimeout(resolve, 2000)), "Código válido")
        await new Promise(resolve => setTimeout(resolve, 4000))
        localStorage.setItem('pendentData', JSON.stringify(y))
        navigate(`/acesso/registo`)
      }
    }
  }

  return (
    <article className={`w-full
          flex flex-col gap-y-3 py-4 pb-4
      `}>
      <form action="" className="w-full">
        <Toaster />

        <section className="w-full rounded-md">
          <div className='space-y-1'>
            <Label htmlFor='codigo' className='leading-5'>
              Código de verificação *
            </Label>
            <Input placeholder="Digite o código de verificação" inputMode="text" type="text" maxLength={6}
              onChange={(e) => setCodigo(e.target.value)} required
            />
          </div>

          <div className="col-span-12 flex flex-col gap-y-1 mt-2">
            <Button className='w-full bg-(--secondary-base) hover:bg-(--secondary-base) hover:brightness-110' type='button' onClick={validateVerificationCode}>
              Verificar
            </Button>
          </div>
        </section>

      </form>
    </article>
  )
}

const TempoRestante = ({ tempoTotal, setTempoTotal }: { tempoTotal: any, setTempoTotal: any }) => {

  const [isAtivo, setIsAtivo] = useState(true);

  useEffect(() => {
    let intervalo: any

    if (isAtivo && tempoTotal > 0) {
      intervalo = setInterval(() => {
        setTempoTotal((prevTempo: any) => prevTempo - 1);
      }, 1000);
    } else if (tempoTotal === 0) {
      clearInterval(intervalo);
      setIsAtivo(false); // Para o temporizador quando chega a zero
    }

    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar o componente
  }, [tempoTotal]);

  const formatarTempo = (tempo: number) => {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    return `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  };


  return (
    <div className="col-span-4 flex justify-center">
      {tempoTotal != 0 && 'Em ' + formatarTempo(tempoTotal)}
    </div>
  )
}


export default VerificacaoEmail
