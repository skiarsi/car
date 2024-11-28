import React, { useEffect, useState } from 'react'
import Selectmake from './Selectmake'
import Selectmodel from './Selectmodel';
import Selectyear from './Selectyear';
import Selectprice from './Selectprice';
import Mileage from './Mileage';
import Filterform from './filter/Filterform';
import { Link } from '@inertiajs/react';

export default function IndexForm() {


  const [countResult, setCountResult] = useState(0);
  const [make, setMake] = useState('any');
  const [model, setModel] = useState('any');
  const [price, setPrice] = useState('any');
  const [year, setYear] = useState('any');
  const [mileage, setMileage] = useState('any');
  const [title, setTitlevalue] = useState('any');
  const [body, setBodyvalue] = useState('any');
  const [drive, setDrivevalue] = useState('any');
  const [engin, setEnginevalue] = useState('any');

  // const [countloading, setCountloading] = useState(true);
  const [showmore, setShowmore] = useState(false);

  const [loading, setLoading] = useState(false);



  useEffect(()=>{
    const countcars = async() =>{
      const response = await fetch(`/car/count/${make}/${model}/${year}/${price}/${mileage}/${title}/${body}/${drive}/${engin}`,{
        headers:{
          'Content-Type': 'application/json',
          'accept'  : 'application/json'
        }
      });

      const jdata = await response.json();

      setCountResult(jdata);
    }
    countcars()
  },[make,model,year,price,mileage,title,body,drive,engin]);



  return (
    <div className="flex flex-col bg-white w-11/12 md:w-10/12 lg:w-9/12 xl:w-7/12 mx-auto shadow-md  md:shadow-sm shadow-gray-500 md:shadow-gray-700 rounded-md py-3 px-2">
      <div className='w-full grid grid-cols-1 md:grid-cols-2'>
        <div className="w-full grid grid-cols-2 gap-1">
          <div className="w-full py-3 px-1">
            <Selectmake
              setLoading={setLoading}
              setbrand={setMake}
              setmodel={setModel}
              class="w-full py-2 text-xl shadow-sm shadow-gray-500 rounded-md bg-white border-gray-200 border"
              label="Brand"
              labelclass="text-md lg:text-xl"
              defaultval="" />
          </div>
          <div className="w-full py-3 px-1">
            <Selectmodel
              setLoading={setLoading}
              class="w-full py-2 text-xl shadow-sm shadow-gray-500 rounded-md bg-white border-gray-200 border"
              labelclass="text-md lg:text-xl"
              label="Model"
              setmodel={setModel}
              make={make}
              defaultval=""
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-3">
          <div className="w-full py-3 px-1">
            <Selectyear
              defaultval=""
              class="w-full py-2 text-xl shadow-sm shadow-gray-500 rounded-md bg-white border-gray-200 border"
              label="Min Year"
              labelclass='text-md lg:text-xl'
              setyear={setYear}
              />
          </div>
          <div className="w-full py-3 px-1">
            <Selectprice
              defaultval=""
              setprice={setPrice}
              class="w-full py-2 text-xl shadow-sm shadow-gray-500 rounded-md bg-white border-gray-200 border"
              label="Price under"
              labelclass='text-md lg:text-xl' />
          </div>
          <div className="w-full py-3 px-1">
            <Mileage
              defaultval=""
              setmileage={setMileage}
              class="w-full py-2 text-xl shadow-sm shadow-gray-500 rounded-md bg-white border-gray-200 border"
              label="Max Mileage"
              labelclass='text-md lg:text-xl' />
          </div>
        </div>
      </div>
        {
          showmore &&
            <div className="relative flex pb-2">
              <Filterform settitle={setTitlevalue} setbody={setBodyvalue} setDrive={setDrivevalue} setEngin={setEnginevalue} />
            </div>
        }
      <div className="w-full px-1 flex">
        <Link
          as='button'
          href={`/result?brand=${make}&model=${model}&year=${year}&price=${price}&mileage=${mileage}&title=${title}&body=${body}&drive=${drive}&engin=${engin}${countResult>25 ? '&page=1' : ''}`}
          // data={{ brand:make, model:model, year:year, price:price, mileage:mileage, title:title, body:body, drive:drive, engin:engin}}
          className={`disabled:bg-gray-300 disabled:text-black ms-0 me-auto bg-blue-600 rounded-md text-white text-lg py-2 px-8 font-bold`}
          >
            Resualt <span className='font-normal text-sm'>{countResult}</span>
        </Link>

        {!showmore &&
          <span className='cursor-pointer ms-auto me-0 text-xl text-blue-600 font-bold select-none' onClick={()=>{setShowmore(true)}}>more filters</span>
        }
      </div>
    </div>
  )
}
