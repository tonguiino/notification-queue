import { NotificationJob } from "@/types/notification"

type NotificationItemProps = {
    notification: NotificationJob;
    onDelete: (id: string) => void;
    onSend: (id: string) => void;
}

const NotificationItem = ({
    notification,
    onDelete,
    onSend
}: NotificationItemProps) => {

    const statusMap: Record<string, string> = {
        queued: 'text-orange-400',
        sending: 'text-blue-500',
        sent: 'text-green-500',
        failed: 'text-red-500'
    }

    return (
        <div className="flex flex-1 items-center justify-between gap-6 border-b border-gray-200 py-4">

            <div className="flex-1">
                <p className="font-semibold">
                    {notification.title}
                </p>

                <p className="text-gray-500">
                    {notification.channel}
                </p>
            </div>

            <div className="w-40">
                <p
                    className={`font-medium ${statusMap[notification.status]}`}
                >
                    {notification.status}
                </p>

                {notification.status === 'sending' && (
                    <>
                        <p className="text-sm mb-1">
                            {notification.progress}%
                        </p>

                        <div className="w-full h-2 bg-gray-200 rounded">
                            <div
                                className="h-2 bg-blue-500 rounded transition-all"
                                style={{
                                    width: `${notification.progress}%`
                                }}
                            />
                        </div>
                    </>
                )}
            </div>

            <div className="flex gap-2">

                {notification.status === 'queued' && (
                    <button
                        onClick={() => onSend(notification.id)}
                        className="px-4 py-2 rounded-md bg-blue-500 text-white"
                    >
                        Send
                    </button>
                )}

                <button
                    onClick={() => onDelete(notification.id)}
                    className="px-4 py-2 rounded-md bg-red-200 text-red-500"
                >
                    Delete
                </button>

                <button
                    className="px-4 py-2 rounded-md bg-gray-200"
                >
                    Cancel
                </button>

                <button
                    className="px-4 py-2 rounded-md bg-yellow-200 text-yellow-700"
                >
                    Retry
                </button>

            </div>

        </div>
    )
}

export default NotificationItem