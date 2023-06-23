import { useDispatch } from 'react-redux';
import { login } from 'redux/users/userApi';

import '../RegisterForm/RegisterForm'
import { 
  MdMailOutline,
  MdKey,  
  MdKeyboardArrowRight,
} from 'react-icons/md';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="text">Login Form</div>
        <form  onSubmit={handleSubmit} className="login" autoComplete="off">
          <div className="login__field">
          <MdMailOutline style={{ width: 25, height: 25, }} />

            <input 
            type="text" 
            className="login__input" 
            placeholder="email" 
            name="email"
            required />
          </div>
          <div className="login__field">
          <MdKey style={{ width: 25, height: 25, }} />

            <input 
            type="password" 
            className="login__input" 
            placeholder="password" 
            name="password" 
            required />
          </div>

          <button type="submit" className="button login__submit">
            <span className="button__text">Log in</span>
            <MdKeyboardArrowRight style={{ width: 25, height: 25, }} />
          </button>

        </form>
      </div>
    </div>
  );
};