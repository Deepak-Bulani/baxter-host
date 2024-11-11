// host/src/store/authStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialAuthState = {
  isAuthenticated: false,
  user: null,
  accessToken: null,
  isPending: true,
  error: null,
};

const useAuthStore = create(
  persist(
    set => ({
      authState: initialAuthState,
      oktaAuth: null,
      setAuthState: state => set({ authState: state }),
      setOktaAuth: auth => set({ oktaAuth: auth }, false), // Don't persist oktaAuth
      clearAuth: () =>
        set({
          authState: initialAuthState,
          oktaAuth: null,
        }),
    }),
    {
      name: 'auth-storage',
      partialize: state => ({
        authState: state.authState,
      }),
    }
  )
);

export default useAuthStore;
