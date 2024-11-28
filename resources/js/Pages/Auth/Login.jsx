import Navbar from '@/Components/views/Navbar'
import React, { useEffect, useState } from 'react'
import { Img } from 'react-image'
import { Link, router } from '@inertiajs/react'


export default function Login({auth, current_url}) {

  const[errors, setErrors] = useState('');

  const [values, setValues] = useState({
      email: "",
      password: ""
  });

  function handleChange(e) {
      const key = e.target.id;
      const value = e.target.value;
      setValues(values => ({
          ...values,
          [key]: value,
      }));
  }

  function handleSubmit(e) {
      e.preventDefault();
      router.post('/login', values, {
          onSuccess: (page) => {
              console.log('Response:', page.props);
          },
          onError: (errors) => {
              console.log('Errors:', errors);
              setErrors(errors);
          }
      });
  }

  return (
    <>
      <div className="h-screen w-full relative">
        <Navbar auth={auth} currenturl={current_url} />
        <div className="w-full h-[calc(100%-60px)] flex items-center justify-center">
          <div className="bg-white w-96 shadow-sm shadow-gray-400 h-auto py-16 px-5 rounded-sm flex flex-col">
            <Img
              src={`img/logo.png`}
              alt='CarMan logo'
              loader={<p className='bg-gray-600 h-24 w-full'>&nbsp;</p>}
              className='w-full'
              />
            <p className='text-center block font-bold text-2xl py-3 pt-7'>Login In With CarMan</p>
            <form onSubmit={handleSubmit}>
              <input
                  type="email"
                  placeholder='Email address'
                  onChange={handleChange}
                  value={values.email}
                  id="email"
                  className='text-xl shadow-sm shadow-gray-200 py-2 px-2 w-full rounded-sm my-3 mb-2 border-gray-400' />
              {errors?.email && <span className='text-red-600'>{errors?.email}</span> }
              <input
                  type="password"
                  placeholder='Password'
                  onChange={handleChange}
                  value={values.password}
                  id="password"
                  className='text-xl shadow-sm shadow-gray-200 py-2 px-2 w-full rounded-sm my-1 border-gray-400' />

              <button
                  type='submit'
                  className='bg-blue-500 text-white py-2 px-10 rounded-sm my-3 font-bold text-xl'>Submit</button>
            </form>
            <p className='py-3 text-lg'>Don't have an account? <Link className='text-blue-500 font-bold' href={route('register')}>Create one</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}
