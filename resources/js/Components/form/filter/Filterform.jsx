import React from 'react'
import Cartitle from './Cartitle'
import Bodytype from './Bodytype'
import DriveType from './DriveType'
import Engintype from './Engintype'

export default function Filterform({settitle, setbody, setDrive, setEngin}) {



  return (
    <div className="w-full">
      <hr className='border-1 md:border-2 border-gray-200 md:border-gray-400  block lg:hidden' />
      <div className="grid grid-cols-2 md:grid-cols-4 text-left pt-2 gap-2">
        <div className="w-full">
          <Bodytype
            defaultval=""
            changeBody={setbody}
            labelclass="text-md lg:text-xl"
            class="text-gray-900 rounded-lg bg-white border border-gray-400 w-full py-1 px-3 text-xl font-normal" />
        </div>
        <div className="w-full">
          <Cartitle
            defaultval=""
            changetitle={settitle}
            labelclass="text-md lg:text-xl"
            class="text-gray-900 rounded-lg bg-white border border-gray-400 w-full py-1 px-3 text-xl font-normal" />
        </div>
        <div className="w-full">
          <DriveType
            defaultval=""
            changeDrive={setDrive}
            labelclass="text-md lg:text-xl"
            class="text-gray-900 rounded-lg bg-white border border-gray-400 w-full py-1 px-3 text-xl font-normal"
             />
        </div>
        <div className="w-full">
          <Engintype
            defaultval=""
            changeEngin={setEngin}
            labelclass="text-md lg:text-xl"
            class="text-gray-900 rounded-lg bg-white border border-gray-400 w-full py-1 px-3 text-xl font-normal" />
        </div>
      </div>
    </div>
  )
}
