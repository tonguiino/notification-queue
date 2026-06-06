import { NotificationJob } from "@/types/notification"

type NotificationItemProps = {
    notification: NotificationJob;
    onDelete: (id: string) => void;
    onSend: (id: string) => void;
    onCancel: (id: string) => void;
}

const NotificationItem = ({
    notification,
    onDelete,
    onSend,
    onCancel
}: NotificationItemProps) => {

    const statusMap: Record<string, string> = {
        queued: 'text-orange-500',
        sending: 'text-blue-500',
        sent: 'text-green-500',
        failed: 'text-red-500'
    }

    return (
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">

            <div className="w-1/3">
                <p className="font-semibold text-lg">
                    {notification.title}
                </p>

                <p className="uppercase text-gray-500 text-sm">
                    {notification.channel}
                </p>
            </div>

            <div className="w-1/3">

                <p
                    className={`font-medium capitalize ${statusMap[notification.status]}`}
                >
                    {notification.status}
                </p>

                {notification.status === 'sending' && (
                    <div className="mt-2">
                        <div className="w-full h-2 bg-gray-200 rounded">
                            <div
                                className="h-2 bg-blue-500 rounded transition-all"
                                style={{
                                    width: `${notification.progress}%`
                                }}
                            />
                        </div>
                    </div>
                )}

            </div>

            <div className="w-1/3 flex justify-end gap-3">

                {notification.status === 'queued' && (
                    <button
                        onClick={() => onSend(notification.id)}
                        className="px-5 py-2 rounded-md border border-gray-300 hover:bg-gray-50 cursor-pointer"
                    >
                        Send
                    </button>
                )}

                {notification.status === 'sending' && (
                    <button
                        onClick={() => onCancel(notification.id)}
                        className="px-5 py-2 rounded-md border border-gray-300 hover:bg-gray-50 cursor-pointer"
                    >
                        Cancel
                    </button>
                )}

                {notification.status === 'failed' && (
                    <button
                        onClick={() => onSend(notification.id)}
                        className="px-5 py-2 rounded-md border border-gray-300 hover:bg-gray-50 cursor-pointer"
                    >
                        Retry
                    </button>
                )}

                <button
                    onClick={() => onDelete(notification.id)}
                    className="px-5 py-2 rounded-md bg-red-100 text-red-600 hover:bg-red-200 cursor-pointer"
                >
                    Delete
                </button>

            </div>

        </div>
    )
}

export default NotificationItem