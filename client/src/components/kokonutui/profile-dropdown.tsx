"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Settings, CreditCard, FileText, LogOut, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { ReplyProps, UsuarioDataProps } from "@/interfaces/replyInterface";
import UserData from "@/contexts/UserData";
import { Toaster } from "react-hot-toast";
import { toastPromiseError, toastPromiseSuccess } from "@/lib/reactHotForm";
import { Axios } from "@/lib/axios";

interface MenuItem {
    label: string;
    value?: string;
    href: string;
    icon: React.ReactNode;
    external?: boolean;
}

interface ProfileDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
    data: UsuarioDataProps | null;
    showTopbar?: boolean;
}

export default function ProfileDropdown({
    data,
    className,
    ...props
}: ProfileDropdownProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    const { setUserData } = React.useContext(UserData);
    const navigate = useNavigate();

    const menuItems: MenuItem[] = [
        {
            label: "Meu Perfil",
            href: "/perfil",
            icon: <User className="w-4 h-4" />,
        },
        {
            label: "Meu Painel",
            value: "Versão 1.0.0",
            href: "/painel",
            icon: <CreditCard className="w-4 h-4" />,
        },
        {
            label: "Configurações",
            href: "/configuracoes",
            icon: <Settings className="w-4 h-4" />,
        },
        {
            label: "Termos & Políticas",
            href: "/termos-politicas",
            icon: <FileText className="w-4 h-4" />,
            external: true,
        },
    ];

    const logout = async () => {
        try {
            const response = await Axios.delete(`/acesso/logout`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            toastPromiseSuccess(new Promise(resolve => setTimeout(resolve, 2000)), response.data.message)
            await new Promise(resolve => setTimeout(resolve, 3000))

            //o 1º data é um atributo por padrão das respostas e o 2º data é proveniente da API
            const data = response.data
            console.log(data)
            setUserData(null)

            //redireccionar para o dashboard
            await new Promise(resolve => setTimeout(resolve, 1000))
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
        }
    }

    return (
        <div className={cn("relative", className)} {...props}>
            <Toaster position="top-center" />

            <DropdownMenu onOpenChange={setIsOpen}>
                <div className="group relative">
                    <DropdownMenuTrigger asChild>
                        <button
                            type="button"
                            className="cursor-pointer flex items-center gap-16 p-3 py-1 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-sm transition-all duration-200 focus:outline-none"
                        >
                            <div className="text-left flex-1">
                                <div className="text-sm font-medium tracking-tight leading-tight">
                                    {data?.nome}
                                </div>
                                {/* <div className="text-xs text-zinc-500 dark:text-zinc-400 tracking-tight leading-tight">
                                    {data.email}
                                </div> */}
                            </div>
                            <div className="relative">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-0.5">
                                    <div className="w-full h-full rounded-full overflow-hidden">
                                        <img
                                            src={'https://ferf1mheo22r9ira.public.blob.vercel-storage.com/profile-mjss82WnWBRO86MHHGxvJ2TVZuyrDv.jpeg'}
                                            alt={data?.nome}
                                            width={36}
                                            height={36}
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                        align="end"
                        sideOffset={4}
                        className="w-64 p-2 dark:bg-zinc-900/95 backdrop-blur-sm border border-zinc-200/60 dark:border-zinc-800/60 rounded-2xl shadow-xl shadow-zinc-900/5 dark:shadow-zinc-950/20 
                    data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-top-right"
                    >
                        <div className="space-y-1">
                            {menuItems.map((item) => (
                                <DropdownMenuItem key={item.label} asChild>
                                    <Link
                                        to={item.href}
                                        className="flex items-center p-3 rounded-xl transition-all duration-200 cursor-pointer group hover:shadow-sm border border-transparent hover:border-zinc-200/50 dark:hover:border-zinc-700/50"
                                    >
                                        <div className="flex items-center gap-2 flex-1">
                                            {item.icon}
                                            <span className="text-sm font-medium tracking-tight leading-tight whitespace-nowrap transition-colors">
                                                {item.label}
                                            </span>
                                        </div>
                                        <div className="flex-shrink-0 ml-auto">
                                            {item.value && (
                                                <span
                                                    className={cn(
                                                        "text-xs font-medium rounded-md py-1 px-2 tracking-tight",
                                                        item.label === "Model"
                                                            ? "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-500/10 border border-blue-500/10"
                                                            : "text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-purple-500/10 border border-purple-500/10"
                                                    )}
                                                >
                                                    {item.value}
                                                </span>
                                            )}
                                        </div>
                                    </Link>
                                </DropdownMenuItem>
                            ))}
                        </div>

                        <DropdownMenuSeparator className="my-3 bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800" />

                        <DropdownMenuItem asChild onClick={() => logout()}>
                            <button
                                type="button"
                                className="w-full flex items-center gap-3 p-3 duration-200 bg-red-500/10 rounded-xl hover:bg-red-500/20 cursor-pointer border border-transparent hover:border-red-500/30 hover:shadow-sm transition-all group"
                            >
                                <LogOut className="w-4 h-4 text-red-500 group-hover:text-red-600" />
                                <span className="text-sm font-medium text-red-500 group-hover:text-red-600">
                                    Terminar Sessão
                                </span>
                            </button>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </div>
            </DropdownMenu>
        </div>
    );
}
