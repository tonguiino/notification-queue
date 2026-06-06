
import NotificationItem from './NotificationItem'
import { NotificationJob } from '@/types/notification'

type NotificationListProps = {
    notifications: NotificationJob[];
}

const NotificationList = ({notifications,}:NotificationListProps) => {
   
    console.log(notifications);
    
    return (
        <div className="flex flex-1 p-2 border-gray-300 border rounded-md shadow-xl">
            <NotificationItem />
        </div>
    )
}

export default NotificationList