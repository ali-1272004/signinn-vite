export enum AppointmentStatus {
  CONFIRMED = 'Confirmed',
  COMPLETED = 'Completed',
  CANCELLED = 'Cancelled',
  PENDING = 'Pending'
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  password?: string; // In a real app, never store plain text
}

export interface Appointment {
  id: string;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  status: AppointmentStatus;
  notes?: string;
  location: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}