import { NotificationJob } from "@/types/notification";

type NotificationInput = {
  title: string;
  channel: "email" | "sms" | "push";
};

export function normalizeNotifications<T extends NotificationInput>(
  items: T[],
): NotificationJob[] {
  const seen = new Set<string>(); //Con esto evitamos la duplicidad de notificaciones
  const result: NotificationJob[] = [];

  for (const item of items) {
    const key = `${item.title}-${item.channel}`;

    if (!seen.has(key)) {
      seen.add(key);
      result.push({
        id: crypto.randomUUID(),
        title: item.title,
        channel: item.channel,
        status: "queued",
      });
    }
  }
  return result;
}
