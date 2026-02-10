import { Button } from '@heroui/react'
import { Link } from 'react-router-dom'

type variant = "flat" | "light" | "ghost" | "solid" | "bordered" | "faded" | "shadow" | undefined
const ButtonAction = ({ text, icon, isPrimary, to, variant }: { text: string, icon?: any, isPrimary?: boolean, to?: string, variant?: variant }) => {
    return (
        <Button variant={variant ? variant : 'solid'} className={`p-0 shadow ${isPrimary && 'text-white bg-(--secondary-base) hover:brightness-97 hover:bg-(--secondary-base) active:bg-(--secondary-base)'} `}>
            {
                to ?
                    <Link to={to} className='flex items-center gap-2 size-full px-8'>
                        {icon && <span className='place-content-center'>{icon}</span>}
                        {text}
                    </Link> :
                    <div className='flex items-center gap-2 size-full px-8'>
                        {icon && <span className='place-content-center'>{icon}</span>}
                        {text}
                    </div>
            }
        </Button>
    )
}

export default ButtonAction
