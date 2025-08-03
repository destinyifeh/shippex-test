import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type AuthState = {
  currentUser: null;
  selectedUser: any;
  isLoading: boolean;
  setSelectedUser: (data: any) => void;
  setUser: (data: any) => void;
  logout: () => void;
  sessionExpiredAction: () => void;
  isAuthenticated: boolean;
  hasHydrated: boolean;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      currentUser: null,
      isLoading: false,
      isAuthenticated: false,
      hasHydrated: false,
      selectedUser: null,

      setUser: (data: any) => {
        console.log(data, 'currentUser data');
        set({ currentUser: data, isAuthenticated: true });
      },

      setSelectedUser: (data: any) => {
        console.log(data, 'selected user data');
        set({ selectedUser: data });
      },

      logout: () => {
        set({ currentUser: null, isAuthenticated: false, selectedUser: null });
      },

      sessionExpiredAction: () => {
        set({ currentUser: null, isAuthenticated: false });
        Alert.alert('', 'Session expired. Please log in again');
      },
    }),
    {
      name: 'current_user',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: state => ({
        currentUser: state.currentUser,
        isAuthenticated: state.isAuthenticated,
      }),
      onRehydrateStorage: () => state => {
        if (state) {
          state.hasHydrated = true;
        }
      },
    },
  ),
);
