import { Link } from '@inertiajs/react'
import React from 'react'

export default function Loginlink({currenturl}) {
  return (
    <div className='ms-auto me-0 flex flex-row gap-3 text-white select-none text-lg'>
      {currenturl!='/login' ? <><Link href='/login' className='text-white text-lg'>Login</Link> | </> : ''}

      {currenturl!='/register' ? <><Link href='/register' className='text-white text-lg'>Register</Link></> : ''}
    </div>
  )
}
