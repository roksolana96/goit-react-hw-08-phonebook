// import { useAuth } from 'hooks/useAuth';
// import { ContactPage } from 'pages/ContactPage';
// import { Login } from 'pages/Login';
// import { Register } from 'pages/Register';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { Route, Routes } from 'react-router-dom';
// import { refreshUser } from 'redux/users/userApi';
// import { HomePage } from './HomePage/HomePage';
// import Layout from './Layout/Layout';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';

import { useAuth } from "hooks/useAuth";
import { ContactPage } from "pages/ContactPage";
import { Login } from "pages/Login";
import { Register } from "pages/Register";
import { refreshUser } from "redux/users/userApi";
import HomePage from "./HomePage/HomePage";
import Layout from "./Layout/Layout";
import { PrivateRoute } from "./Route/PrivateRoute";
import { RestrictedRoute } from "./Route/RestrictedRoute";

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'Fetching user data...'
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactPage />} />
          }
        />
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};





// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
// import { ContactForm } from './ContactForm/ContactForm';

// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'services/fetchApi';
// import Loader from './Loader/Loader';
// import { getLoader } from 'redux/Selectors';

// export const App = () => {
//   const dispatch = useDispatch();
//   const loader = useSelector(getLoader);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <>
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm />
//         <h2>Contacts</h2>
//         <Filter />
//         {loader && (
//           <div
//             style={{
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}
//           >
//           <Loader />        
//       </div>
//         )}
//         <ContactList />
//       </div>
//     </>
//   );
// };