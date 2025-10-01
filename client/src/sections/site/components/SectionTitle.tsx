const SectionTitle = ({ textoNormal, textoDestaque, posicaoDestaque, posicaoPadrao }: { textoNormal: string, textoDestaque: string, posicaoDestaque: string, posicaoPadrao?: string }) => {
    return (
        <div className={`${posicaoPadrao == "center" && 'text-center'} font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem]`}>
            {
                posicaoDestaque == 'right' &&
                <>
                    {textoNormal}
                    <span className="text-indigo-700">
                        {textoDestaque}
                    </span>
                </>
            }
            {
                posicaoDestaque == 'left' &&
                <>
                    <span className="text-indigo-700">
                        {textoDestaque}
                    </span>
                    {textoNormal}
                </>
            }
        </div>
    )
}

export default SectionTitle

