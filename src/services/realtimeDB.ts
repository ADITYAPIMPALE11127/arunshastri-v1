import { ref, set } from 'firebase/database';
import { rtdb } from '../firebase/config';
import { UserFormData } from '../types';
import { v4 as uuidv4 } from 'uuid';

export const saveUserDataToRTDB = async (userData: UserFormData): Promise<string> => {
    try {
        const userId = uuidv4();
        await set(ref(rtdb, `users/${userId}`), {
            ...userData,
            createdAt: new Date().toISOString(),
        });
        return userId;
    } catch (error) {
        console.error('Error saving user data to Realtime DB:', error);
        throw error;
    }
};
