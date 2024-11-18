import useAuthStore from '../../store/authStore';
import React, { Suspense } from 'react';
import { tableHeaders } from '../../../data/tableHeader';

// const RemoteFlagTable = React.lazy(() => import('product/FlagTable'));

const Clinical = () => {
  const { isAuthenticated, user, accessToken } = useAuthStore(state => state.authState);
  console.log(isAuthenticated, user, accessToken);
  return (
    <div>
      <h1>Host Application</h1>
      {/* <Suspense fallback={<div>Loading Flag Table...</div>}>
        <RemoteFlagTable data={tableHeaders} />
      </Suspense> */}
    </div>
  );
};

export default Clinical;
