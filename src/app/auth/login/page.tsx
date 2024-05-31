"use client";
import toast from 'react-hot-toast';
import { emailRegex } from '@/app/utils/regex';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [failedAuthMessage, setFailedAuthMessage] = useState<string|null>(null)

  const router = useRouter();


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim().length < 1 || password.trim().length < 6) {
      setFailedAuthMessage('Email must not be empty and Password can not be less than 6 characters')
      return;
    }

    if (emailRegex.test(email) == false) {
      setFailedAuthMessage('Email is not valid')
      return false;
    }

    setFailedAuthMessage(null)
    toast.success('Successfully logged in!')
    router.push('/');
    
  };


  return (
    <div  className="w-full flex flex-col my-36 items-center">
      <h1 className='mb-10 text-xl text-emerald-400'>Login to your TMDB Account</h1>
      <form onSubmit={handleSubmit} className="bg-gray-500 w-4/6  shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {failedAuthMessage && (
          <p className='ml-1 mb-4 text-lg'>{failedAuthMessage}</p>
        )}
        <div className="flex items-center justify-between">
          <button
            className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;