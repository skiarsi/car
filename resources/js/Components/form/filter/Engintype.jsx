import { changeurl } from '@/functions/lib';
import React, { useEffect, useState } from 'react'

export default function Engintype({changeEngin , ...props}) {
  const [engin, setEngin] = useState([]);
  const [loading, setLoading] = useState(false);



  const [defValue , setDefvalue] = useState(props.defaultval);


  useEffect(()=>{
    setLoading(true);
    const getdatas = async() =>{
      const response = await fetch(`/engintype`);
      const jdata = await response.json();
      setEngin(jdata);
      setLoading(false);
    }
    getdatas();
  },[])



  function handleChange(e){
    changeEngin(e.target.value);
    setDefvalue(e.target.value);

    if(props.currenturl=='/result')
      changeurl('engin',e.target.value);
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
        <label className={props.labelclass}> Engin Type
          <select value={defValue} onChange={handleChange} className={props.class}>
            <option value="any">Any Engin types</option>
            {engin && engin.map((item)=>{
                return <option key={item.id} value={item.id}>{item.engine_title}</option>
            })}
          </select>
        </label>
      }
    </>
  )
}
