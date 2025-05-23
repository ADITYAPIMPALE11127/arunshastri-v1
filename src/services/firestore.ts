import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { UserFormData } from '../types';

export const saveUserData = async (userData: UserFormData): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      ...userData,
      createdAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error saving user data:', error);
    throw error;
  }
};