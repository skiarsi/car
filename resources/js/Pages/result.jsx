import Carlistresult from '@/Components/views/Carlistresult';
import Loading from '@/Components/views/Loading';
import Navbar from '@/Components/views/Navbar';
import Nocarfound from '@/Components/views/Nocarfound';
import Sidefilters from '@/Components/views/Sidefilters';
import React, { useEffect, useState } from 'react'

export default function result({auth, carlist, current_url}) {

  const [cars, setCars] = useState(carlist.data);
  const [links, setLinks] = useState(carlist);



  useEffect(()=>{
    const response = async()=>{
      setCars(carlist.data);
      setLinks(carlist);
    }
    response();
  },[carlist]);


  return (
    <div className='w-full flex flex-col'>
      <Navbar auth={auth} currenturl={current_url} />
      <div className="w-full md:w-10/12 lg:w-9/12 xl:w-7/12 mx-auto mt-7 flex flex-row">
        <div className="hidden md:block w-72 pt-5 pe-1">
          <div className="bg-gray-100 w-full rounded-sm shadow-sm shadow-gray-500">
            <Sidefilters currenturl={current_url} />
          </div>
        </div>
        <div className="w-96 flex-1 p-2 pt-5">
          {
            carlist.length < 1 ?
            <Nocarfound /> : <Carlistresult list={cars} links={links} auth={auth} />
          }
        </div>
      </div>
    </div>
  )
}
