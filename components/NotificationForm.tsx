import { NotificationChannel, NotificationJob } from '@/types/notification'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Dispatch, SetStateAction, } from 'react'

type SetNotification = {
    // notifications: NotificationJob[]
    setNotifications: Dispatch<SetStateAction<NotificationJob[]>>
}

type FormValues = {
    title: string,
    channel: NotificationChannel;
}

const notificationSchema = Yup.object({
    title: Yup.string()
        .required('Title is required'),

    channel: Yup.mixed<NotificationChannel>()
        .oneOf(['email', 'sms', 'push'])
        .required('Channel is required')
})

const NotificationForm = ({ setNotifications, }: SetNotification) => {

    const formik = useFormik<FormValues>({
        initialValues: {
            title: '',
            channel: 'email'
        },
        validationSchema: notificationSchema,

        onSubmit: values => {
            const newNotification: NotificationJob = {
                id: crypto.randomUUID(),
                title: values.title,
                channel: values.channel,
                status: 'queued'
            }

            setNotifications(prev => [...prev, newNotification])

            formik.resetForm()
        }

    })


    return (
        <>
            <div className="p-2 border-gray-300 border rounded-md shadow-xl">
                <form onSubmit={formik.handleSubmit} className='flex items-end gap-4'>
                    <div className='flex flex-col flex-1'>
                        <label htmlFor="title">Notification Title</label>
                        <input
                            name='title'
                            className='border rounded-md p-1'
                            type="text"
                            placeholder='Ej: Promo de Verano'
                            value={formik.values.title}
                            onChange={formik.handleChange}

                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="channel">Channel</label>
                        <select
                            name='channel'
                            className="border rounded-md p-1 w-48"
                            value={formik.values.channel}
                            onChange={formik.handleChange}
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
