export type RsvpStatus = "coming_alone" | "coming_with" | "not_coming" | "pending";

export interface Guest {
  id: string;
  invitationId: string;
  name: string;
  table?: string;
  status: RsvpStatus;
  plusCount?: number;
  wishes?: string;
  updatedAt: string;
}

export interface Invitation {
  id: string;
  ownerId: string;
  ownerChatId?: string;
  title: string;
  groomName?: string;
  brideName?: string;
  eventDate: string;
  eventTime?: string;
  venueName: string;
  venueAddress: string;
  mapLinks?: {
    twoGis?: string;
    yandex?: string;
    google?: string;
  };
  coverImage?: string;
  musicUrl?: string;
  templateId: string;
  language: "kk" | "ru" | "uz";
  tables?: string[];
  isActive: boolean;
  isDemo: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  plan: "demo" | "standard" | "premium" | "pro";
  planExpiresAt?: string;
  createdAt: string;
}
