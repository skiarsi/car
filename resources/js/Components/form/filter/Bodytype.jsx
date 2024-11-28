import { changeurl } from '@/functions/lib';
import React, { useEffect, useState } from 'react'

export default function Bodytype({changeBody, ...props}) {

  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(false);



  const [defValue , setDefvalue] = useState(props.defaultval);

  useEffect(()=>{
    setLoading(true);
    const getdatas = async() =>{
      const response = await fetch(`/bodytype`);
      const jdata = await response.json();
      setTypes(jdata);
      setLoading(false);
    }
    getdatas();
  },[]);


  function handleChange(e){
    changeBody(e.target.value);
    setDefvalue(e.target.value);
    if(props.currenturl=='/result')
      changeurl('body',e.target.value);
  }


  return (
    <>
      {loading &&
        <div className="animate-pulse">
          <p className='bg-gray-300 rounded-md w-7/12'>&nbsp;</p>
          <p className='bg-gray-300 rounded-md w-full mt-1 py-1.5'>&nbsp;</p>
        </div>
      }

      {!loading &&
        <label className={props.labelclass}> Body Type
          <select onChange={handleChange} value={defValue} className={props.class}>
            <option value="any">Any Type</option>
            {types && types.map((item)=>{
                return <option key={item.id} value={item.id}>{item.bodystyle_title}</option>
            })}
          </select>
        </label>
      }
    </>
  )
}
