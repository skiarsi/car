import { changeurl } from '@/functions/lib';
import React, { useEffect, useState } from 'react';

export default function Selectmake({...props}) {

  const [brands , setBrands] = useState([]);
  const [defValue , setDefvalue] = useState(props.defaultval);

  useEffect(()=>{
    const getbrands = async ()=>{
      const response = await fetch('/brands');
      const jdata = await response.json();
      setBrands(jdata.data);
      props.setLoading(false);
    }

    getbrands();
  },[defValue]);

  const handlechange = (e)=>{
    props.setLoading(true);
    props.setbrand(e.target.value);
    setDefvalue(e.target.value);

    props.setmodel('any');

    if(props.currenturl=='/result')
      changeurl('brand',e.target.value);

  }

  return (
    <>
      <label className={props.labelclass}> {props.label}
        <select
          value={defValue}
          onChange={handlechange}
          className={props.class}>
          <option value="any" >Select brand</option>
          {brands && brands.map(brand=>{
            return <option key={ brand.id } value={ brand.slug }>{brand.name}</option>
          })}
        </select>
      </label>
    </>
  )
}
