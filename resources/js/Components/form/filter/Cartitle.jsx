import { changeurl } from '@/functions/lib';
import React, { useEffect, useState } from 'react'

export default function Cartitle({changetitle, ...props}) {


  const [titles, setTitles] = useState([]);
  const [loading, setLoading] = useState(false);



  const [defValue , setDefvalue] = useState(props.defaultval);

  useEffect(()=>{
    setLoading(true);
    const gettitles = async ()=>{
      const response = await fetch(`/cartitle`);
      const jdata = await response.json();
      setTitles(jdata);
      setLoading(false);
    }
    gettitles();
  },[]);

  function handleChange(e){
    console.log(e);

    changetitle(e.target.value);
    setDefvalue(e.target.value);
    if(props.currenturl=='/result')
      changeurl('title',e.target.value);
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
        <label className={props.labelclass}> Car title
          <select value={defValue} onChange={handleChange} className={props.class}>
            <option value="any">Any Title</option>
            {titles && titles.map((title)=>{
              return <option key={title.id} value={title.id}>{title.cartitle_title}</option>
            })}
          </select>
        </label>
      }
    </>
  )
}
