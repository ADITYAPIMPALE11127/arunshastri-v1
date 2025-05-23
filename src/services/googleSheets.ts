import { UserFormData } from '../types';

export const saveToGoogleSheets = async (userData: UserFormData): Promise<void> => {
  try {
    const response = await fetch(import.meta.env.VITE_GOOGLE_SHEETS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: userData.fullName,
        email: userData.email,
        whatsappNumber: userData.whatsappNumber,
        dateOfBirth: userData.dateOfBirth.toLocaleDateString(),
        timeOfBirth: userData.timeOfBirth,
        gender: userData.gender,
        reportLanguage: userData.reportLanguage,
        currentChallenge: userData.currentChallenge || 'Not specified',
        placeOfBirth: userData.placeOfBirth,
        state: userData.state,
        pincode: userData.pincode,
        paymentId: userData.paymentId,
        createdAt: new Date().toISOString()
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to save data to Google Sheets');
    }
  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    throw error;
  }
};