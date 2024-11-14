// host/src/store/authStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const createAuthStore = () => {
  const initialAuthState = {
    isAuthenticated: false,
    user: null,
    accessToken: null,
    isPending: true,
    error: null,
  };

  return create(
    persist(
      set => ({
        authState: initialAuthState,
        oktaAuth: null,
        setAuthState: state => set({ authState: state }),
        setOktaAuth: auth => set({ oktaAuth: auth }),
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
};

const useAuthStore = createAuthStore();

export default useAuthStore;
