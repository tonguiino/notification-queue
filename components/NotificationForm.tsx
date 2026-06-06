import React from 'react'

const NotificationForm = () => {
    return (
        <>
            <div className="p-2 border-gray-300 border rounded-md shadow-xl">
                <form action="" className='flex items-end gap-4'>
                    <div className='flex flex-col flex-1'>
                        <label htmlFor="">Notification Title</label>
                        <input className='border rounded-md p-1' type="text" placeholder='Ej: Promo de Verano' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Channel</label>
                        <select className="border rounded-md p-1 w-48">
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