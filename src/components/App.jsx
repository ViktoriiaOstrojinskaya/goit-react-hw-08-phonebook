import { Toaster } from 'react-hot-toast';
import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Title } from './Title/Title';
import { Box } from './App.styled';
import { Loader } from './Loader/Loader';
import { fetchContacts } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectIsLoading,
  selectError,
  selectContacts,
} from 'redux/auth/selectors';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const Contatcs = lazy(() => import('pages/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const contactsList = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      {/* <Title title="Phonebook" />
      <ContactForm />
      <Title title="Contacts" />
      {contactsList.length > 0 && <Filter />}
      {contactsList.length === 0 ? (
        <p>Your contacts are empty, let`s create them 🚀</p>
      ) : (
        <ContactList />
      )}

      {isLoading && !error && <Loader />}
      <Toaster /> */}

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
      <Toaster />
    </Box>
  );
}
