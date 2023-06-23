import { useDispatch } from 'react-redux';
import { register } from 'redux/users/userApi';
// import '../LoginForm/styles.css';
import './RegisterForm.css'
import { 
  MdOutlinePeopleOutline, 
  MdMailOutline,
  MdKey,  
  MdKeyboardArrowRight,
} from 'react-icons/md';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
        <div className="text">Registration Form</div>
        <form className="login" onSubmit={handleSubmit} autoComplete="off">
          <div className="login__field">
          <MdOutlinePeopleOutline style={{ width: 25, height: 25, }} />
            <input type="text"  
            className="login__input" 
            placeholder="name" 
            name="name" 
            required />
          </div>
          <div className="login__field">
          <MdMailOutline style={{ width: 25, height: 25, }} />

            <input type="text" 
            className="login__input" 
            placeholder="email"
            name="email"
            required />
          </div>
          <div className="login__field">
          <MdKey style={{ width: 25, height: 25, }} />

            <input type="password" 
            className="login__input" 
            placeholder="password"
            name="password"
             required />
          </div>

          <button type="submit" className="button login__submit">
          <span className="button__text">Sign in</span>
          <MdKeyboardArrowRight style={{ width: 25, height: 25, }} />
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};