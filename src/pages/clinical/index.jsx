import useAuthStore from '../../store/authStore';

const Clinical = () => {
  const { isAuthenticated, user, accessToken } = useAuthStore(state => state.authState);
  console.log(isAuthenticated, user, accessToken);
  return <div>Clinical protected</div>;
};

export default Clinical;
