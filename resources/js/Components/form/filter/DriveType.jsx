// import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { changeurl } from '@/functions/lib';
import React, { useEffect, useState } from 'react'

export default function DriveType({changeDrive, ...props}) {
    const [drive, setDrive] = useState([]);
    const [loading, setLoading] = useState(false);


    const [defValue , setDefvalue] = useState(props.defaultval);

    useEffect(()=>{
    setLoading(true);
      const getdatas = async() =>{
        const response = await fetch(`/drivetype`);
        const jdata = await response.json();
        setDrive(jdata);
        setLoading(false);
      }
      getdatas();
    },[]);

    function handleChange(e){
        changeDrive(e.target.value);
        setDefvalue(e.target.value);

        if(props.currenturl=='/result')
          changeurl('drive',e.target.value);
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
                <label className={props.labelclass}> Drivetrain
                <select
                  value={defValue}
                  onChange={handleChange}
                  className={props.class}>
                  <option value="any">All types</option>
                  {drive && drive.map((item)=>{
                      return <option key={item.id} value={item.id}>{item.drivetype_title}</option>
                  })}
                </select>
                </label>
            }
        </>
    )
}
