const SectionTitle = ({ textoNormal, textoDestaque, posicaoDestaque, posicaoPadrao }: { textoNormal: string, textoDestaque: string, posicaoDestaque: string, posicaoPadrao?: string }) => {
    return (
        <div className={`${posicaoPadrao == "center" && 'text-center'} text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem]`}>
            {
                posicaoDestaque == 'right' &&
                <>
                    {textoNormal}
                    {/* <span className="text-indigo-600"> */}
                    <span className="font-semibold">
                        {textoDestaque}
                    </span>
                </>
            }
            {
                posicaoDestaque == 'left' &&
                <>
                    {/* <span className="text-[#008069]"> */}
                    <span className="font-semibold">
                        {textoDestaque}
                    </span>
                    {textoNormal}
                </>
            }
        </div>
    )
}

export default SectionTitle

