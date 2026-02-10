
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const LoadingTop = () => {
    const [progress, setProgress] = useState(0);
    const loadingRef = useRef<HTMLDivElement>(null);
    const location = useLocation()
    const rotaAtual = location.pathname

    // const { menuState, setMenuState } = useContext(MenuStateContext)

    useEffect(() => {
        setProgress(0)
        ResetOpacity("1")
        window.scrollTo({top: 0}) //sempre que a rota mudar, começar no início da página

        let interval: NodeJS.Timeout;

        // Simula progresso até o load completo
        const simulateProgress = () => {
            interval = setInterval(() => {
                setProgress((prev) => {
                    // Vai até 100% enquanto a página carrega
                    if (prev < 100) return prev + Math.random() * 15; //isso vai fazer com que no momento do loading ora avança mais rápido ora mais lento
                    else {
                        handleLoad();
                        return prev;
                    }
                });
            }, 200);
        };


        simulateProgress();

        // Quando a página termina de carregar
        function handleLoad () {
            clearInterval(interval);
            setProgress(100);

            // Remove a barra após um pequeno delay
            ResetOpacity("0")
        };

        function ResetOpacity(opacity: string) {
            setTimeout(() => {
                if (loadingRef.current) {
                    loadingRef.current.style.opacity = opacity;
                }
            }, 1000);
        }

    }, [rotaAtual]) //sempre que a rota mudar

    return (
        <div className="fixed top-0 left-0 z-[9999] w-full h-[2.2px] bg-transparent">
            <div
                ref={loadingRef}
                className="h-full bg-gradient-to-r from-(--secondary-base) to-blue-500
        ring-1 ring-blue-200 shadow-md shadow-gray-400 transition-all duration-300 ease-in-out"
                style={{ width: `${progress}vw` }}
            ></div>
        </div>
    );
};

export default LoadingTop;

