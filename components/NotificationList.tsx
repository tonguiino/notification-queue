
import NotificationItem from './NotificationItem'
import { NotificationJob } from '@/types/notification'

type NotificationListProps = {
    notifications: NotificationJob[];
    onDelete: (id: string) => void;
    onSend: (id: string) => void;
}

const NotificationList = ({ notifications, onDelete, onSend }: NotificationListProps) => {


    return (
        <div className="flex flex-col flex-1 p-2 border-gray-300 border rounded-md shadow-xl">
            {notifications.map((n) => (
                <NotificationItem
                    key={n.id}
                    notification={n}
                    onDelete={onDelete}
                    onSend={onSend}

                />

            ))}
        </div>
    )
}

export default NotificationList