export interface UserFormData {
  fullName: string;
  email: string;
  whatsappNumber: string;
  dateOfBirth: Date;
  timeOfBirth: string;
  gender: 'Male' | 'Female' | 'Other';
  reportLanguage: 'English' | 'Hindi';
  currentChallenge?: string;
  placeOfBirth: string;
  state: string;
  pincode: string;
  createdAt?: Date;
}