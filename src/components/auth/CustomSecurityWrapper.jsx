import { Security } from '@okta/okta-react';
import { OktaAuth } from '@okta/okta-auth-js';
import { oktaConfig } from '../../../authConfig';

const oktaAuth = new OktaAuth(oktaConfig);

const CustomSecurityWrapper = ({ children }) => {
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    const baseUrl = window.location.origin;
    const path = originalUri || '/';
    window.location.replace(`${baseUrl}${path}`);
  };

  return (
    <Security
      oktaAuth={oktaAuth}
      restoreOriginalUri={restoreOriginalUri}
      onAuthRequired={() => {
        window.location.href = '/login';
      }}
    >
      {children}
    </Security>
  );
};

export default CustomSecurityWrapper;
