import { NotificationChannel, NotificationJob } from '@/types/notification'
import { Dispatch, SetStateAction, useState } from 'react'

type SetNotification = {
    notifications: NotificationJob[]
    setNotifications: Dispatch<SetStateAction<NotificationJob[]>>
}
const NotificationForm = ({ setNotifications, notifications }: SetNotification) => {
    const [title, setTitle] = useState('')
    const [channel, setChannel] = useState<NotificationChannel>('email')

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const newNotification: NotificationJob = {
            id: crypto.randomUUID(),
            title,
            channel,
            status: 'queued'
        }
        setTitle('')
        setChannel('email')

        setNotifications(prev => [...prev, newNotification])

    }
    return (
        <>
            <div className="p-2 border-gray-300 border rounded-md shadow-xl">
                <form onSubmit={handleSubmit} className='flex items-end gap-4'>
                    <div className='flex flex-col flex-1'>
                        <label htmlFor="title">Notification Title</label>
                        <input
                            className='border rounded-md p-1'
                            type="text"
                            placeholder='Ej: Promo de Verano'
                            value={title}
                            onChange={e => setTitle(e.target.value)}

                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="channel">Channel</label>
                        <select
                            className="border rounded-md p-1 w-48"
                            value={channel}
                            onChange={e => setChannel(e.target.value as NotificationChannel)}
                        >
                            <option value="email">Email</option>
                            <option value="sms">Sms</option>
                            <option value="push">Push</option>
                        </select>
                    </div>
                    <button className='p-2 bg-blue-500 rounded-md text-white cursor-pointer' type='submit'>Add Notification</button>
                </form>

            </div>
        </>
    )
}

export default NotificationForm