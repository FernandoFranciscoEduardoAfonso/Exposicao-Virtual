import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const BtnBorderRotate = ({text, link}:{text:string, link:string}) => {
    return (
        <div
            className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] btn-border-rotate">
            <div className='content'>
                <Button
                    asChild
                    size="lg"
                    className="rounded-xl px-5 text-white bg-(--secondary-base) hover:bg-(--secondary-base) hover:brightness-125">
                    <Link to={link}>
                        <span className="text-nowrap relative z-10">{text}</span>
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default BtnBorderRotate
