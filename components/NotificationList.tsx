import NotificationItem from './NotificationItem'
import { NotificationJob } from '@/types/notification'

type NotificationListProps = {
    notifications: NotificationJob[];
    onDelete: (id: string) => void;
    onSend: (id: string) => void;
    onCancel: (id: string) => void;
}

const NotificationList = ({
    notifications,
    onDelete,
    onSend,
    onCancel
}: NotificationListProps) => {

    return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
            {notifications.map((n) => (
                <NotificationItem
                    key={n.id}
                    notification={n}
                    onDelete={onDelete}
                    onSend={onSend}
                    onCancel={onCancel}
                />
            ))}
        </div>
    )
}

export default NotificationList