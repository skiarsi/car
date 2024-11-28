import { changeurl } from '@/functions/lib';
import { router } from '@inertiajs/react';
import React, { useState } from 'react'


export default function Selectyear({...props}) {

  const [defValue , setDefvalue] = useState(props.defaultval);

  const years = [];
  for (let index = 2024; index >= 1980; index--) {
    years.push(index);
  }

  function handleChange(e){
    props.setyear(e.target.value);
    setDefvalue(e.target.value);
    if(props.currenturl=='/result')
      changeurl('year',e.target.value);
  }

  return (
    <>
      <label className={props.labelclass}> {props.label}
        <select
          value={defValue}
          onChange={handleChange}
          className={props.class}>
          <option value="any">Any year</option>
          {years.map(year=>{
            return <option key={year} value={year}>{year}</option>
          })}
        </select>
      </label>
    </>
  )
}
