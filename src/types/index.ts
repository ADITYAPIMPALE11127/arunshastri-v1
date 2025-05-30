export interface UserFormData {
  fullName: string;
  email: string;
  whatsappNumber: string;
  dateOfBirth: Date;
  timeOfBirth: string;
  gender: 'Male' | 'Female' | 'Other';
  reportLanguage: string;
  currentChallenge?: string;
  placeOfBirth: string;
  state: string;
  pincode: string;
  createdAt?: Date;
  paymentId?: string;
  orderId?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}