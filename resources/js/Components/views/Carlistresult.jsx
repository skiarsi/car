import React from 'react'
import Sortselect from './result/Sortselect';
import { Link, router } from '@inertiajs/react';
import Thumbnail from './Thumbnail';

export default function Carlistresult({list, links, auth}) {


  const handleNext = (newpage=1) =>{
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('page', newpage);

    router.visit(currentUrl.toString(), {
      preserveState: true,
      replace: true
    });
  }


  return (
    <div className='w-full flex flex-col'>

      <div className="shadow-sm shadow-gray-400 rounded-md py-3 px-4 mb-3 flex bg-gray-50">
        <p className='text-lg ms-0 me-auto pt-1'><strong>{links.from}</strong> - <strong>{links.to}</strong> out of <strong>{links.total}</strong> listing</p>
        <Sortselect />
      </div>

      <div className="flex flex-col gap-4">
        {list && list.map(car=>{
          return <div key={car.id} className="w-full flex flex-col shadow-sm rounded-md shadow-gray-400 bg-white p-6">
              <div className='w-full flex flex-col md:flex-row'>
                <div className="w-full md:w-60">
                  <Thumbnail car={car} auth={auth} />
                </div>
                <div className="flex-1 px-2 flex flex-col">
                  <h1 className='font-bold text-3xl'>
                    {car.year}&nbsp;
                    {car.carmake.name}&nbsp;
                    {car.carmodel.name}&nbsp;
                  </h1>

                  <h1 className='text-gray-700 text-2xl font-normal py-2'>Price ${(car.price).toLocaleString()}</h1>

                  <div className="w-full grid grid-cols-3 gap-2 my-2">
                    <div className="w-full">
                      <h1 className='text-lg bg-gray-200 px-1 pb-1'>Title: <span className='block ps-2 text-sm font-light'>{car.title.cartitle_title}</span></h1>
                    </div>
                    <div className="w-full">
                      <h1 className='text-lg bg-gray-200 px-1 pb-1'>Drivetrain: <span className='block ps-2 text-sm font-light'>{car.drivetype.drivetype_title}</span></h1>
                    </div>
                    <div className="w-full">
                      <h1 className='text-lg bg-gray-200 px-1 pb-1'>Transmission: <span className='block ps-2 text-sm font-light'>{car.transmission.transmission_title}</span></h1>
                    </div>
                    <div className="w-full">
                      <h1 className='text-lg bg-gray-200 px-1 pb-1'>Engin: <span className='block ps-2 text-sm font-light'>{car.engintype.engine_title}</span></h1>
                    </div>
                    <div className="w-full">
                      <h1 className='text-lg bg-gray-200 px-1 pb-1'>Fuel type: <span className='block ps-2 text-sm font-light'>{car.fueltype.fueltype_title}</span></h1>
                    </div>
                    <div className="w-full">
                      <h1 className='text-lg bg-gray-200 px-1 pb-1'>Body type: <span className='font-light block ps-2 text-sm'>{car.bodytype.bodystyle_title}</span></h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <p className='text-lg mt-2'>
                  Dealer:&nbsp;
                    <Link
                      href={`/dealer/${(car.dealersel.dealer_slug) ? car.dealersel.dealer_slug : car.dealersel.id}`}
                      className='text-lg font-semibold text-blue-500'>
                          {car.dealersel.dealer_title}
                    </Link>
                </p>
                <p className=''>
                  <span className='font-bold'>Dealer's Description :&nbsp;</span>
                  <span className=' font-normal leading-2'>{car.dealer_description}</span>
                </p>
              </div>
            </div>
        })}
      </div>

      <div className="py-4 flex flex-row gap-2">
        {links.next_page_url != null ? <span className='bg-white shadow-sm shadow-gray-500 cursor-pointer rounded-sm select-none py-2 px-9 text-black' onClick={()=>handleNext((links.current_page)+1)}>Next</span> : ''}
        {links.prev_page_url != null ? <span className='bg-white shadow-sm shadow-gray-500 cursor-pointer rounded-sm select-none py-2 px-9 text-black' onClick={()=>handleNext((links.current_page)-1)}>Previous</span> : ''}
      </div>
    </div>
  )
}
