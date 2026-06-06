'use client';

import NotificationForm from "@/components/NotificationForm";
import NotificationList from "@/components/NotificationList";
import { NotificationJob } from "@/types/notification";
import { useRef, useState } from "react";

export default function Home() {
  const [notifications, setNotifications] = useState<NotificationJob[]>([]);

  const [filter, setFilter] = useState<
    'all' | 'queued' | 'sending' | 'sent' | 'failed'
  >('all');
  const controllersRef = useRef<
    Record<string, AbortController>
  >({});

  const handleDelete = (id: string) => {
    setNotifications(prev =>
      prev.filter(notification => notification.id !== id)
    );
  };

  const handleCancel = (id: string) => {
    controllersRef.current[id]?.abort();
  };

  const handleSend = (id: string) => {
    setNotifications(prev =>
      prev.map(notification => {
        if (notification.id !== id) {
          return notification;
        }

        return {
          ...notification,
          status: 'sending',
          progress: 0
        };
      })
    );

    let progress = 0;

    const duration =
      Math.floor(Math.random() * 7000) + 1000;

    const stepTime = duration / 10;

    const controller = new AbortController();

    controllersRef.current[id] = controller;

    const interval = setInterval(() => {

      if (controller.signal.aborted) {
        clearInterval(interval);

        delete controllersRef.current[id];

        setNotifications(prev =>
          prev.map(notification => {
            if (notification.id === id) {
              return {
                id: notification.id,
                title: notification.title,
                channel: notification.channel,
                status: 'queued'
              };
            }

            return notification;
          })
        );

        return;
      }

      progress += 10;

      setNotifications(prev =>
        prev.map(notification => {
          if (
            notification.id === id &&
            notification.status === 'sending'
          ) {
            return {
              ...notification,
              progress
            };
          }

          return notification;
        })
      );

      if (progress >= 100) {
        clearInterval(interval);

        delete controllersRef.current[id];

        const failed = Math.random() < 0.2;

        setNotifications(prev =>
          prev.map(notification => {
            if (notification.id === id) {
              return {
                id: notification.id,
                title: notification.title,
                channel: notification.channel,
                status: failed ? 'failed' : 'sent'
              };
            }

            return notification;
          })
        );
      }

    }, stepTime);
  };

  const handleSendAll = () => {

    const hasSending = notifications.some(
      notification => notification.status === 'sending'
    )

    if (hasSending) {
      alert(
        'Notification error: there are notifications currently sending'
      )

      return
    }

    notifications
      .filter(notification => notification.status === 'queued')
      .forEach(notification =>
        handleSend(notification.id)
      )
  }

  const filteredNotifications =
    filter === 'all'
      ? notifications
      : notifications.filter(
        notification =>
          notification.status === filter
      );

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-4">

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Notifications
          </h1>

          <button
            onClick={handleSendAll}
            className="px-6 py-3 bg-blue-500 rounded-lg text-white font-medium hover:bg-blue-600 transition"
          >
            Send All
          </button>
        </div>

        <NotificationForm
          setNotifications={setNotifications}
          notifications={notifications}
        />

        <div className="flex gap-3 my-6 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full transition ${filter === 'all'
                ? 'bg-slate-900 text-white'
                : 'bg-gray-200 text-gray-600'
              }`}
          >
            All
          </button>

          <button
            onClick={() => setFilter('queued')}
            className={`px-4 py-2 rounded-full transition ${filter === 'queued'
                ? 'bg-orange-400 text-white'
                : 'bg-gray-200 text-gray-600'
              }`}
          >
            Queued
          </button>

          <button
            onClick={() => setFilter('sending')}
            className={`px-4 py-2 rounded-full transition ${filter === 'sending'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-600'
              }`}
          >
            Sending
          </button>

          <button
            onClick={() => setFilter('sent')}
            className={`px-4 py-2 rounded-full transition ${filter === 'sent'
                ? 'bg-green-500 text-white'
                : 'bg-gray-200 text-gray-600'
              }`}
          >
            Sent
          </button>

          <button
            onClick={() => setFilter('failed')}
            className={`px-4 py-2 rounded-full transition ${filter === 'failed'
                ? 'bg-red-500 text-white'
                : 'bg-gray-200 text-gray-600'
              }`}
          >
            Failed
          </button>
        </div>

        <NotificationList
          notifications={filteredNotifications}
          onDelete={handleDelete}
          onSend={handleSend}
          onCancel={handleCancel}
        />

      </div>
    </div>
  );
}