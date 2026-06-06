'use client';

import NotificationForm from "@/components/NotificationForm";
import NotificationList from "@/components/NotificationList";
import { NotificationJob } from "@/types/notification";
import { useState } from "react";


export default function Home() {

  const [notifications, setNotifications] = useState<NotificationJob[]>([])

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex justify-between items-center w-full mb-4">
        <h1>Notificaciones</h1>
        <button className='p-2 bg-blue-500 rounded-md text-white cursor-pointer'>Send All</button>
      </div>
      <NotificationForm setNotifications={setNotifications} />
      <NotificationList notifications={notifications} />
    </div>
  );
}
