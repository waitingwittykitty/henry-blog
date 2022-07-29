import Link from 'next/link';
import { useApolloClient } from '@apollo/client';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { ErrorOption, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { CurrentUserDetailsDocument, useSignInMutation } from '@/api';

export type OptionalQuery = {
  next?: string;
};

export interface LoginFormData {
  email: string;
  password: string;
}

function LoginPage() {
  const client = useApolloClient();
  const router = useRouter();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [signInMutation] = useSignInMutation();

  const {
    register: registerForm,
    handleSubmit: handleSubmitForm,
    formState: { errors: errorsForm },
    setError: setErrorForm,
  } = useForm<LoginFormData>();

  const redirectURL = router.query.next?.toString() || '/';

  const handleLogin = handleSubmitForm(async (formData: LoginFormData) => {
    const { data } = await signInMutation({
      variables: {
        loginEmail2: formData.email,
        loginPassword2: formData.password,
      },
    });

    const token = data?.login?.token!;

    if (!token) {
      const errors = data?.login?.errors!;
      errors.forEach(error => {
        setErrorForm(error?.field! as keyof LoginFormData, error as ErrorOption);
      });
    } else {
      setIsAuthenticated(true);
      localStorage.setItem('henry-blog-token', token);
      toast.success('Successfully logged in!');
    }
  });

  if (isAuthenticated) {
    client.refetchQueries({ include: [CurrentUserDetailsDocument] });
    router.push(redirectURL);
    return null;
  }

  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-center bg-gradient-to-r from-blue-100 to-blue-500">
      <div className="flex justify-end">
        <div className="bg-white min-h-screen w-1/2 flex justify-center items-center">
          <div>
            <form onSubmit={handleLogin}>
              <div>
                <span className="text-sm text-gray-900">Welcome back</span>

                <h1 className="text-2xl font-bold">Login to your account</h1>
              </div>

              <div className="my-3">
                <label htmlFor="email" className="block text-md mb-2">
                  Email
                </label>

                <input
                  className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                  type="email"
                  id="email"
                  {...registerForm('email', {
                    required: true,
                  })}
                />
              </div>

              <div className="mt-5">
                <label htmlFor="password" className="block text-md mb-2">
                  Password
                </label>

                <input
                  className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                  type="password"
                  id="password"
                  {...registerForm('password', {
                    required: true,
                  })}
                />
              </div>

              <div className="flex justify-between">
                <span className="text-sm text-blue-700 hover:underline cursor-pointer pt-2">
                  Forgot password?
                </span>
              </div>

              <div>
                <button
                  type="submit"
                  className="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100"
                >
                  Log in
                </button>

                {!!errorsForm.email && (
                  <p className="text-sm text-red-500 pt-2">{errorsForm.email?.message}</p>
                )}
              </div>
            </form>

            <p className="mt-8">
              <Link href="/account/register" passHref>
                <a href="pass">Register a new account</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
