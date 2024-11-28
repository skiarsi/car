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
        className={`w-60 flex flex-col py-5 bg-white rounded-sm shadow-sm shadow-gray-400 absolute top-8 right-0 ${(visible) ? 'block' : 'hidden'}`}>

          <Link href="/setting/favs">My Favorites</Link>
          <Link href="/setting/favs">Profile</Link>

        </div>
    </>
  )
}
