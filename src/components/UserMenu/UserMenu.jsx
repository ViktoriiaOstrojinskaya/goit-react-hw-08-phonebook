import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { ButtonLogout, Box, Text } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box>
      <Text>
        Welcome, <b>{user.name}</b>!
      </Text>
      <ButtonLogout type="button" onClick={() => dispatch(logOut())}>
        Logout
      </ButtonLogout>
    </Box>
  );
};
