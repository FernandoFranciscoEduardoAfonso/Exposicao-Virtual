import { Inbox } from 'lucide-react'
const EmptyData = ({ text }: { text: string }) => {
    return (
        <div className="w-full col-span-12 text-sm text-gray-500 flex gap-2 items-center justify-center">
            <Inbox className='text-inherit size-6'/>
            <span>{text}</span>
        </div>
    )
}

export default EmptyData
