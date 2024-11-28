import { changeurl } from '@/functions/lib';
import React, {useEffect, useState } from 'react'

export default function Mileage({...props}) {

  const [loading, setLoading] = useState(false);

  const [mileageValue, setMileageValue] = useState('');
  const [debounceValue, setDebounceValue] = useState(mileageValue);


  const [defValue , setDefvalue] = useState(props.defaultval);


  const handleChange = (e) =>{
    props.setmileage(e.target.value);
    setDefvalue(e.target.value);

    if(props.currenturl=='/result')
      changeurl('mileage',e.target.value);
  }


  return (
    <>
      <label className={props.labelclass}> {props.label}
        <select onChange={handleChange} value={defValue} className={props.class}>
          <option value="any">Any mileage</option>
          <option value="5000">5000</option>
          <option value="10000">10,000</option>
          <option value="15000">15,000</option>
          <option value="20000">20,000</option>
          <option value="40000">40,000</option>
          <option value="75000">75,000</option>
          <option value="90000">90,000</option>
          <option value="100000">100,000</option>
          <option value="120000">120,000</option>
          <option value="150000">150,000</option>
          <option value="170000">170,000</option>
          <option value="200000">200,000</option>
          <option value="250000">250,000</option>
          <option value="300000">300,000</option>
        </select>
      </label>
    </>
  )
}
