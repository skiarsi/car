import IndexForm from '@/Components/form/IndexForm'
import Navbar from '@/Components/views/Navbar'
import React from 'react'

export default function Index({auth, current_url}) {
  return (
    <div>

      <div className="flex flex-col h-screen relative">
        <div className="h-1/6 bg-blue-500">
          <Navbar auth={auth} currenturl={current_url} />
        </div>
        <div className="h-3/6 bg-white bg-gradient-to-b from-blue-500 from-50% to-white to-0% flex items-center justify-center">
          <IndexForm />
        </div>
        <div className="h-2/6 bg-white">&nbsp;</div>
      </div>
    </div>
  )
}
