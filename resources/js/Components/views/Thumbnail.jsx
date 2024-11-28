import React, { useEffect, useState } from 'react'
import { router, usePage } from '@inertiajs/react'

export default function Thumbnail({car, auth}) {

  const props = usePage().props

  const [userlike, setUserlike] = useState((car.user.length === 0) ? 0 : 1);

    const likecar = async ()=>{

      const response = await fetch(`/car/like/${car.id}`,{
        headers:{
          'accept' : 'application/json',
          'content' : 'application/json',
          'X-CSRF-TOKEN': window.csrfToken
        },
        method:'POST'
      });

      const jLike = await response.json();

      if(jLike && jLike.carlike == 0){
        setUserlike(0);
      }else{
        setUserlike(1);
      }

    }



  const handlelike = (carid)=>{
    if(auth.user){
      likecar(carid);
    }else{
      alert('login');
    }
  }

  const [like, setLike] = useState(auth.user && auth.user.id == car.user.user_id);

  const thumbnail = (car.thumbnail).length > 0 ? car.thumbnail[0].image_url : 'https://dummyimage.com/300x300/000/fff&text=';
  return (
    <>
      <div className="w-full relative h-full bg-gray-600 rounded-md overflow-hidden" style={{minWidth:'100%'}}>
        {/* {(auth.user.id == car.user.user_id) ? 'like' : 'dislike'} */}

        <svg onClick={()=>{handlelike()}} xmlns="http://www.w3.org/2000/svg" fill={`${userlike == 1 ? 'rgb(220 38 38)' : '#FFF' }`} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`cursor-pointer size-9 absolute top-1 right-1 ${userlike == 1 ? 'text-red-600' : 'text-white'}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>

        <div className=" ">

        </div>
      </div>
    </>
  )
}
