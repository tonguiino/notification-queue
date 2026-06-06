'use client';

import NotificationForm from "@/components/NotificationForm";
import NotificationList from "@/components/NotificationList";
import { NotificationJob } from "@/types/notification";
import { useState } from "react";


export default function Home() {

  const [notifications, setNotifications] = useState<NotificationJob[]>([])

  const handleDelete = (id: string) => {
    setNotifications(prev =>
      prev.filter(notification => notification.id !== id)
    )
  }

  const handleSend = (id: string) => {
    setNotifications(prev =>
      prev.map(notification => {
        if (notification.id !== id) {
          return notification
        }

        return {
          ...notification,
          status: 'sending',
          progress: 0
        }
      })
    )
    let progress = 0

    const interval = setInterval(() => {
      progress += 10

      setNotifications(prev =>
        prev.map(notification => {
          if (
            notification.id === id &&
            notification.status === 'sending'
          ) {
            return {
              ...notification,
              progress
            }
          }

          return notification
        })
      )

      if (progress >= 100) {
        clearInterval(interval)

        setNotifications(prev =>
          prev.map(notification => {
            if (notification.id === id) {
              return {
                id: notification.id,
                title: notification.title,
                channel: notification.channel,
                status: 'sent'
              }
            }

            return notification
          })
        )
      }
    }, 500)
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex justify-between items-center w-full mb-4">
        <h1>Notificaciones</h1>
        <button className='p-2 bg-blue-500 rounded-md text-white cursor-pointer'>Send All</button>
      </div>
      <NotificationForm setNotifications={setNotifications} notifications={notifications} />
      <NotificationList notifications={notifications} onDelete={handleDelete} onSend={handleSend} />
    </div>
  );
}
