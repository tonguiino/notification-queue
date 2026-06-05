export type SendingJob = {
  id: string;
  title: string;
  channel: "email" | "sms" | "push";
  status: "sending"; //Dato discriminante
  progress: number;
};

export type OtherJob = {
  id: string;
  title: string;
  channel: "email" | "sms" | "push";
  status: "queued" | "sent" | "failed";
};

export type NotificationJob = SendingJob | OtherJob;
