import React from 'react'
import Loginlink from './Loginlink'
import { Link } from '@inertiajs/react'
import Useronnavbar from './Useronnavbar'

export default function Navbar({auth, currenturl}) {
  return (
    <div className='bg-blue-500 w-full fixed z-40'>
      <div className="w-full md:w-10/12 lg:w-9/12 xl:w-7/12 mx-auto py-1 px-2 flex relative">
      <Link href="/" className="text-white text-lg">Home</Link>
      {auth.user ?
        <Useronnavbar auth={auth} /> :
        <Loginlink currenturl={currenturl} />
      }
      </div>
    </div>
  )
}
