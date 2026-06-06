
const NotificationItem = () => {


    // const statusMap: Record<string, string> = {
    //     'queued': 'text-orange-400',
    //     'sending': 'text-blue-400',
    //     'sent': 'text-green-400',
    //     'failed': 'text-red-500'
    // }

     
    return (
        <div className='flex flex-1  gap-6 justify-center items-center'>
            <div>
                <p className='font-semibold'>Summer Promotion</p>
                <p className='text-gray-500'>Email</p>
            </div>
            <p>Queued</p>
            <button>Send</button>
            <button>Delete</button>
            <button>Cancel</button>
            <button>Retry</button>
        </div>
    )
}

export default NotificationItem