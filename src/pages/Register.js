import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <div>
      <Helmet>
        <h1>Register</h1>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
