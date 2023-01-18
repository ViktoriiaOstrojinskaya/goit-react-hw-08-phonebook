import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  Form,
  ButtonRegister,
  FormInput,
  FormLabel,
} from './RegisterForm.styled';

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
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormLabel>
        Username
        <FormInput type="text" name="name" />
      </FormLabel>
      <FormLabel>
        Email
        <FormInput type="email" name="email" />
      </FormLabel>
      <FormLabel>
        Password
        <FormInput type="password" name="password" minLength={6} />
      </FormLabel>
      <ButtonRegister type="submit">Register</ButtonRegister>
    </Form>
  );
};
