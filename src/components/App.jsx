import React from 'react';
//import { ContactForm } from './ContactForm/ContactForm';
//import { Filter } from './Filter/Filter';
//import { ContactList } from './ContactList/ContactList';
//import { Title } from './Title/Title';
import { Box } from './App.styled';
//import { Loader } from './Loader/Loader';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
// import {
//   selectIsLoading,
//   selectError,
//   selectContacts,
// } from 'redux/auth/selectors';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App=()=> {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  // const contactsList = useSelector(selectContacts);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Box>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
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
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
      </Routes>
    </Box>
  );
}

/* <Title title="Phonebook" />
      <ContactForm />
      <Title title="Contacts" />
      {contactsList.length > 0 && <Filter />}
      {contactsList.length === 0 ? (
        <p>Your contacts are empty, let`s create them 🚀</p>
      ) : (
        <ContactList />
      )}

      {isLoading && !error && <Loader />}
      <Toaster /> */
