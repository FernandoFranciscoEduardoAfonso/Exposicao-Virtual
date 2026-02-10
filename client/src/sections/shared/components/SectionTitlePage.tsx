const SectionTitlePage = ({ title, description }: { title: string, description: string }) => {
    return (
        <div className="flex flex-col gap-1 mb-4">
            <h2
                className="text-xl font-black">
                {title}
            </h2>
            <p className="text-muted-foreground text-base font-normal">{description}</p>
        </div>
    )
}

export default SectionTitlePage
