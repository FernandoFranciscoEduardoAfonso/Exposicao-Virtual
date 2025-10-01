
const FeaturedTitle = ({ text }: { text: string }) => {
    return (
        <div className='my-4 flex items-center justify-center'>
            <span className='relative section-title py-1 px-3 text-[12px] md:text-sm'>
                {text}
            </span>
        </div>
    )
}

export default FeaturedTitle
