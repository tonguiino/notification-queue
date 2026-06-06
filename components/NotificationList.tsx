
import NotificationItem from './NotificationItem'
import { NotificationJob } from '@/types/notification'

type NotificationListProps = {
    notifications: NotificationJob[];
}

const NotificationList = ({ notifications, }: NotificationListProps) => {


    return (
        <div className="flex flex-col flex-1 p-2 border-gray-300 border rounded-md shadow-xl">
            {notifications.map((n) => (
                <NotificationItem key={n.id} notification={n}/>
            ))}
        </div>
    )
}

export default NotificationList