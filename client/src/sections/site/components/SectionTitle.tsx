const SectionTitle = ({ textoNormal, textoDestaque, posicaoDestaque }: { textoNormal: string, textoDestaque: string, posicaoDestaque: string }) => {
    return (
        <div className="text-center text-2xl md:text-3xl xl:text-[2.7rem]">
            {
                posicaoDestaque == 'right' &&
                <>
                    {textoNormal}
                    <span className="text-indigo-700 ml-2">
                        {textoDestaque}
                    </span>
                </>
            }
            {
                posicaoDestaque == 'left' &&
                <>
                    <span className="text-indigo-700 mr-2">
                        {textoDestaque}
                    </span>
                    {textoNormal}
                </>
            }
        </div>
    )
}

export default SectionTitle

