import { changeurl } from '@/functions/lib';
import React, { useState } from 'react'

export default function Selectprice({...props}) {



  const [defValue , setDefvalue] = useState(props.defaultval);


  function handleChange(e){
    props.setprice(e.target.value);
    setDefvalue(e.target.value);

    if(props.currenturl=='/result')
      changeurl('price',e.target.value);
  }


  return (

    <>
      <label className={props.labelclass}> {props.label}
        <select onChange={handleChange} value={defValue} className={props.class}>
          <option value="any">Any price</option>
          <option value="5000">$5000</option>
          <option value="10000">$10,000</option>
          <option value="15000">$15,000</option>
          <option value="20000">$20,000</option>
          <option value="25000">$25,000</option>
          <option value="35000">$35,000</option>
          <option value="50000">$50,000</option>
          <option value="75000">$75,000</option>
        </select>
      </label>
    </>
  )
}
