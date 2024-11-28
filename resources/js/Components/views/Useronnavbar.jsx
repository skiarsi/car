import { Link } from '@inertiajs/react';
import React, { useEffect, useRef, useState } from 'react'

export default function Useronnavbar({auth}) {
  const [visible , setVisible] = useState(false);
  const divRef = useRef(null);

  const handleClickOutSide = (event) =>{
    if(divRef.current && !divRef.current.contains(event.target)){
      setVisible(false);
    }
  }

  useEffect(()=>{
    document.addEventListener('mousedown', handleClickOutSide);

    return () =>{
      document.removeEventListener('mousedown', handleClickOutSide);
    }
  },[]);
  return (
    <>
      <div onClick={()=>{setVisible(!visible)}} className='ms-auto me-0 flex flex-row gap-3 text-white select-none text-lg cursor-pointer'>
        {auth.user.name}
      </div>
      <div
        ref={divRef}
        className={`w-52 flex flex-col bg-white rounded-sm shadow-sm shadow-gray-400 absolute top-8 right-0 ${(visible) ? 'block' : 'hidden'}`}>
          <Link className='py-2 px-4 text-lg hover:bg-gray-50' href={`/users/${auth.user.username}`}>{auth.user.name}</Link>
          <Link className='py-2 px-4 text-lg hover:bg-gray-50' href="/setting/favs">My Favorites</Link>
          <Link className='py-2 px-4 text-lg hover:bg-gray-50' href="/setting/favs">Profile</Link>

        </div>
    </>
  )
}
