import React, { useState } from 'react'
import Selectmake from '../form/Selectmake';
import { usePage } from '@inertiajs/react';
import Selectmodel from '../form/Selectmodel';
import Selectyear from '../form/Selectyear';
import Selectprice from '../form/Selectprice';
import Mileage from '../form/Mileage';
import Bodytype from '../form/filter/Bodytype';
import Cartitle from '../form/filter/Cartitle';
import DriveType from '../form/filter/DriveType';
import Engintype from '../form/filter/Engintype';

export default function Sidefilters({currenturl}) {

  const {url} = usePage();

  const queryParams = new URLSearchParams(url.split('?')[1]);

  const brandval = queryParams.get('brand');
  const modelval = queryParams.get('model');
  const yearval = queryParams.get('year');
  const priceval = queryParams.get('price');

  const mileageval = queryParams.get('mileage');
  const titleval = queryParams.get('title');
  const bodyval = queryParams.get('body');
  const driveval = queryParams.get('drive');
  const enginval = queryParams.get('engin');



  const [countResult, setCountResult] = useState(0);
  const [make, setMake] = useState(brandval);
  const [model, setModel] = useState(modelval);
  const [price, setPrice] = useState(priceval);
  const [year, setYear] = useState(yearval);
  const [mileage, setMileage] = useState(mileageval);
  const [title, setTitlevalue] = useState(titleval);
  const [body, setBodyvalue] = useState(bodyval);
  const [drive, setDrivevalue] = useState(driveval);
  const [engin, setEnginevalue] = useState(enginval);


  const [loading, setLoading] = useState(false);

  return (
    <div className='w-full flex flex-col p-2 pt-4 gap-4'>
      <div className="flex w-full select-none">
        <p className="ms-0 me-auto text-xl">filters {loading && 'loading'}</p>
        <p className="ms-auto me-0 text-lg font-bold cursor-pointer text-blue-700">clear all</p>
      </div>
      <hr className='mb-3 border-gray-200 border-2' />
      <div className="w-full flex flex-col gap-2 px-3 py-5 rounded-md bg-white shadow-sm shadow-gray-600 relative">
        <span className='-mt-7 bg-white px-2 rounded-xl flex flex-row absolute'>Brand & Model</span>
        <Selectmake
          setLoading={setLoading}
          setbrand={setMake}
          setmodel={setModel}
          class="w-full py-0 text-lg shadow-sm shadow-gray-500 rounded-sm bg-white border-none"
          label="Brand"
          labelclass="text-md"
          defaultval={make}
          currenturl={currenturl} />

        <Selectmodel
          setLoading={setLoading}
          class="w-full py-0 text-lg shadow-sm shadow-gray-500 rounded-sm bg-white border-none"
          labelclass="text-md"
          label="Model"
          setmodel={setModel}
          make={make}
          defaultval={model}
          currenturl={currenturl}
        />
      </div>
      <div className="w-full flex flex-col gap-2 px-3 py-3">
          <Selectyear
            defaultval={year}
            class="w-full py-0 text-lg shadow-sm shadow-gray-500 rounded-sm bg-white border-none"
            label="Min Year"
            labelclass='text-md'
            setyear={setYear}
            currenturl={currenturl}
            />
          <Selectprice
            defaultval={price}
            setprice={setPrice}
            class="w-full py-0 text-lg shadow-sm shadow-gray-500 rounded-sm bg-white border-none"
            label="Price under"
            labelclass='text-md'
            currenturl={currenturl} />
          <Mileage
            defaultval={mileage}
            setmileage={setMileage}
            class="w-full py-0 text-lg shadow-sm shadow-gray-500 rounded-sm bg-white border-none"
            label="Max Mileage"
            labelclass='text-md'
            currenturl={currenturl} />
          <Bodytype
            defaultval={body}
            changeBody={setBodyvalue}
            labelclass="text-md"
            currenturl={currenturl}
            class="w-full py-0 text-lg shadow-sm shadow-gray-500 rounded-sm bg-white border-none"
            />
          <Cartitle
            defaultval={title}
            changetitle={setTitlevalue}
            labelclass="text-md"
            class="w-full py-0 text-lg shadow-sm shadow-gray-500 rounded-sm bg-white border-none"
            currenturl={currenturl}
            />
          <DriveType
            defaultval={drive}
            changeDrive={setDrivevalue}
            labelclass="text-md"
            class="w-full py-0 text-lg shadow-sm shadow-gray-500 rounded-sm bg-white border-none"
            currenturl={currenturl}
            />
          <Engintype
            defaultval={engin}
            changeEngin={setEnginevalue}
            labelclass="text-md"
            class="w-full py-0 text-lg shadow-sm shadow-gray-500 rounded-sm bg-white border-none"
            currenturl={currenturl}
            />
      </div>
    </div>
  )
}
