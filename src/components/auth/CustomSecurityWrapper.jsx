// host/src/components/SecurityWrapper.jsx
import { useEffect } from 'react';
import { Security } from '@okta/okta-react';
import { OktaAuth } from '@okta/okta-auth-js';
import { oktaConfig } from '../../../authConfig';
import useAuthStore from '../../store/authStore';

const oktaAuth = new OktaAuth(oktaConfig);

const SecurityWrapper = ({ children }) => {
  const setAuthState = useAuthStore(state => state.setAuthState);
  const setOktaAuth = useAuthStore(state => state.setOktaAuth);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Set initial state
        setOktaAuth(oktaAuth);

        // Initialize with a default state
        setAuthState({
          isAuthenticated: false,
          user: null,
          accessToken: null,
          isPending: true,
          error: null,
        });

        // Handle auth state changes
        const handleAuthStateChange = async state => {
          if (!state) return;

          try {
            const sanitizedAuthState = {
              isAuthenticated: Boolean(state.isAuthenticated),
              user: state.idToken?.claims || null,
              accessToken: state.accessToken?.accessToken || null,
              isPending: Boolean(state.isPending),
              error: state.error || null,
            };

            setAuthState(sanitizedAuthState);
          } catch (error) {
            console.error('Error processing auth state:', error);
            setAuthState({
              isAuthenticated: false,
              user: null,
              accessToken: null,
              isPending: false,
              error: error.message,
            });
          }
        };

        // Subscribe to auth state changes
        oktaAuth.authStateManager.subscribe(handleAuthStateChange);

        // Get and set initial auth state
        const initialAuthState = await oktaAuth.authStateManager.getAuthState();
        await handleAuthStateChange(initialAuthState);
      } catch (error) {
        console.error('Error initializing auth:', error);
        setAuthState({
          isAuthenticated: false,
          user: null,
          accessToken: null,
          isPending: false,
          error: error.message,
        });
      }
    };

    initializeAuth();

    return () => {
      oktaAuth.authStateManager.unsubscribe();
    };
  }, [setAuthState, setOktaAuth]);

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    const baseUrl = window.location.origin;
    const redirectPath = originalUri || '/';
    window.location.replace(`${baseUrl}${redirectPath}`);
  };

  return (
    <Security
      oktaAuth={oktaAuth}
      restoreOriginalUri={restoreOriginalUri}
      onAuthRequired={() => {
        oktaAuth.signInWithRedirect({
          originalUri: window.location.pathname,
        });
      }}
    >
      {children}
    </Security>
  );
};

export default SecurityWrapper;
