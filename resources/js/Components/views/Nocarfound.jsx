import React from 'react'

export default function Nocarfound() {
  return (
    <div className='bg-gray-50 rounded-sm shadow-sm shadow-gray-400 py-2 px-2 mx-4'>
      <h1 className='text-black font-normal block text-3xl pt-3 pb-1'>No Car Found</h1>
      <hr />
      <p className='pt-4 text-xl text-center'>To get better result you can change your filters or clear all</p>
      <p className='w-full text-center flex pt-2 pb-4'>
        <span className='text-blue-600 font-bold text-xl mx-auto cursor-pointer'>Clear filters</span>
      </p>
    </div>
  )
}
