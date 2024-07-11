import { Link } from 'react-router-dom';
import styles from './SignInPage.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface SignInForm {
  email: string;
  password: string;
}

const schema: yup.ObjectSchema<SignInForm> = yup
  .object({
    email: yup.string().email('Please enter a valid email').required('No email provided.'),
    password: yup.string().required('No password provided.'),
  })
  .required();

const SignInPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className={styles.signInWrapper}>
      <form className={styles.signInForm} onSubmit={handleSubmit((data) => console.log(data))}>
        <h3>Sign In</h3>
        <span>
          <label htmlFor="email">Email address</label>
          <input
            className={errors.email ? styles.error : null}
            id="email"
            placeholder="Email address"
            {...register('email', { required: true })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </span>
        <span>
          <label htmlFor="password">Password</label>
          <input
            className={errors.password ? styles.error : null}
            type="password"
            id="password"
            placeholder="Password"
            {...register('password', { required: true })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </span>
        <span className={styles.signUp}>
          <input type="submit" value="Login" />
          Don’t have an account?
          <Link to="/sign-up"> Sign Up</Link>.
        </span>
      </form>
    </div>
  );
};

export default SignInPage;
