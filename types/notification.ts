export type NotificationChannel = "email" | "sms" | "push";

export type SendingJob = {
  id: string;
  title: string;
  channel: NotificationChannel;
  status: "sending";
  progress: number;
};

export type OtherJob = {
  id: string;
  title: string;
  channel: NotificationChannel;
  status: "queued" | "sent" | "failed";
};

export type NotificationJob = SendingJob | OtherJob;
