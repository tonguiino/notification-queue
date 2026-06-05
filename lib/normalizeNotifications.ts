import { NotificationJob } from "@/types/notification";

export function normalizeNotifications<T>(items: T[]): NotificationJob[]{
    const seen = new Set<string>() //Con esto evitamos la duplicidad de notificaciones
    const result: NotificationJob[] = []

    for(const item of items ){
        
    }
}