import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { clearContacts } from 'redux/ContactsApi';
import { logout } from 'redux/users/userApi';
import './UserMenu.css'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div className="user">
      <p className="welcome">Welcome, {user.name}</p>
      <button
        className="button login_up"
        type="button"
        onClick={() => {
          dispatch(logout());
          dispatch(clearContacts());
        }}
      >
        Log out
      </button>
    </div>
  );
};

