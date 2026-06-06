import { NotificationJob } from "@/types/notification"

type NotificationItemProps = {
    notification: NotificationJob
}
const NotificationItem = ({ notification, }: NotificationItemProps) => {


    return (
        <div className='flex flex-1  gap-6 justify-center items-center'>
            <div>
                <p className='font-semibold'>{notification.title}</p>
                <p className='text-gray-500'>{notification.channel}</p>
            </div>
            <p>{notification.status}</p>
            <button>Send</button>
            <button>Delete</button>
            <button>Cancel</button>
            <button>Retry</button>
        </div>
    )
}

export default NotificationItem


    // const statusMap: Record<string, string> = {
    //     'queued': 'text-orange-400',
    //     'sending': 'text-blue-400',
    //     'sent': 'text-green-400',
    //     'failed': 'text-red-500'
    // }

