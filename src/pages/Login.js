import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';

export default function Login() {
  return (
    <div>
      <Helmet>
        <h1>Login</h1>
      </Helmet>
      <LoginForm />
    </div>
  );
}
