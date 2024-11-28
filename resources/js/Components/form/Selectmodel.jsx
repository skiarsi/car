import { changeurl } from '@/functions/lib';
import React, { useEffect, useState } from 'react'


export default function Selectmodel({...props}) {

  const [models, setModel] = useState([]);
  const [defValue , setDefvalue] = useState(props.defaultval);

  useEffect(()=>{
    const modellist = async() =>{
      const response = await fetch(`/model/${props.make}`);
      const jdata = await response.json();
      props.setLoading(false);
      setModel(jdata.data);
    }
    modellist();
  },[defValue, props.make]);

  const handleChange=(e)=>{
    props.setLoading(true);
    props.setmodel(e.target.value);
    setDefvalue(e.target.value);
    if(props.currenturl=='/result')
      changeurl('model',e.target.value);
  }

  return (
    <>
      <label className={props.labelclass}> {props.label}
        <select
          className={props.class}
          onChange={handleChange}
          value={defValue}
          >
            <option value="any">Select model</option>
            {models && models.map(model=>{
              return <option value={model.slug} key={model.id}>{model.name}</option>
            })}
        </select>
      </label>
    </>
  )
}
