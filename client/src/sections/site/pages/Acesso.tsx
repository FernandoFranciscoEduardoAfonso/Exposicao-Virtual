import { getUserData } from "@/utils/SessionData"
import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

const Acesso = () => {
    const navigate = useNavigate()
    const { data: userData, isFetched } = useQuery({
        queryKey: ['getUserData'],
        queryFn: async () => {
            try {
                const responseData = await getUserData()
                if ([401, 403, 500].includes(responseData.status)) {
                    return null;
                } else {
                    const usuario = responseData.data
                    console.log('User Data:', usuario)
                    return usuario
                }
            } catch (error) {
                console.log(error)
                return null;
            }
        }
    })

    useEffect(() => {
        //se ja terminou de buscar os dados e não tem usuario logado
        if (isFetched && userData) {
            navigate(`/`)
        }
    }, [userData])

    return (
        <main className="w-[100vw] h-[100vh]">
            <Outlet></Outlet>
        </main>
    )
}

export default Acesso
