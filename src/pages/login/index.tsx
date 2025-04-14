import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Input } from '@components/input/input';
import { Button } from '@components/button/button';
import { saveDataLocalStorage } from '@utils/localStorage';
import { loginData } from './login.constant';

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export const Login: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values: LoginFormValues) => {
    setIsLoading(true);
    setError('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (
        values.password === loginData.password &&
        values.email === loginData.email
      ) {
        saveDataLocalStorage('isAuthenticated', true);
        saveDataLocalStorage('user', { email: values.email });

        navigate('/home');
      } else {
        setError(
          'Invalid credentials. Search in the codebase the password and email'
        );
      }
    } catch (err) {
      setError('An error occurred during login. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-screen bg-neutral-gray dark:bg-neutral-dark-black p-4"
    >
      <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-dark rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary dark:text-white">
            Login
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Sign in to access your dashboard
          </p>
        </div>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="mt-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <Field name="email">
                    {({ field }: any) => (
                      <Input
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        field={field}
                        required
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="mt-1 text-sm text-danger"
                  />
                </div>

                <div>
                  <Field name="password">
                    {({ field }: any) => (
                      <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        field={field}
                        required
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="mt-1 text-sm text-danger"
                  />
                </div>
              </div>

              {error && (
                <div className="p-3 text-sm text-white bg-danger rounded">
                  {error}
                </div>
              )}

              <div>
                <Button
                  text={isLoading ? 'Signing in...' : 'Sign in'}
                  type="submit"
                  disabled={isSubmitting || isLoading}
                  onClick={() => {}}
                  variant="primary"
                  className="w-full"
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </motion.div>
  );
};
