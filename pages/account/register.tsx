import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { useSignUpMutation } from '@/api';

export interface RegisterFormData {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

function RegisterPage() {
  const router = useRouter();

  const [signUpMutation] = useSignUpMutation({});
  const {
    register: registerForm,
    handleSubmit: handleSubmitForm,
    formState: { errors: errorsForm },
    setError: setErrorForm,
  } = useForm<RegisterFormData>({});

  const handleRegister = handleSubmitForm(async (formData: RegisterFormData) => {
    try {
      const { data } = await signUpMutation({
        variables: {
          email: formData.email,
          password: formData.password,
          firstName: formData.firstName,
          lastName: formData.lastName,
        },
      });
      const token = data?.signup?.token;

      if (!token) {
        data?.signup?.errors!.forEach(e => {
          if (e?.field === 'email') {
            setErrorForm('email', { message: e.message! });
          } else if (e?.field === 'password') {
            setErrorForm('password', { message: e.message! });
          } else {
            console.error('Registration error:', e);
          }
        });
        return;
      }

      router.push('/');
    } catch (err) {
      let errorMessage = '';

      if (typeof err === 'string') {
        errorMessage = err.toUpperCase();
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }

      toast.error(errorMessage);
    }
  });

  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-center bg-gradient-to-r from-blue-100 to-blue-500">
      <div className="flex justify-end">
        <div className="bg-white min-h-screen w-1/2 flex justify-center items-center">
          <div>
            <form onSubmit={handleRegister}>
              <div>
                <h1 className="text-2xl font-bold">Create a new account</h1>
              </div>

              <div className="my-3">
                <label htmlFor="email" className="block text-md mb-2">
                  First Name
                </label>

                <input
                  className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                  type="text"
                  id="firstName"
                  {...registerForm('firstName', {
                    required: true,
                  })}
                />

                {!!errorsForm.firstName && (
                  <p className="text-sm text-red-500 pt-2">
                    {errorsForm.firstName?.message}
                  </p>
                )}
              </div>

              <div className="my-3">
                <label htmlFor="email" className="block text-md mb-2">
                  Last Name
                </label>

                <input
                  className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                  type="text"
                  id="lastName"
                  {...registerForm('lastName', {
                    required: true,
                  })}
                />

                {!!errorsForm.lastName && (
                  <p className="text-sm text-red-500 pt-2">
                    {errorsForm.lastName?.message}
                  </p>
                )}
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

                {!!errorsForm.email && (
                  <p className="text-sm text-red-500 pt-2">{errorsForm.email?.message}</p>
                )}
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

                {!!errorsForm.password && (
                  <p className="text-sm text-red-500 pt-2">
                    {errorsForm.password?.message}
                  </p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  className={clsx(
                    'mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2',
                    'rounded-md transition duration-100'
                  )}
                >
                  Register
                </button>
              </div>
            </form>
            <p className="mt-8">
              <Link href="/account/login" passHref>
                <a href="pass">Log in to existing account</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
