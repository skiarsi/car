import React from 'react'

export default function Sortselect() {
  return (
    <div className="flex me-0 ms-auto">
      <label htmlFor='sortselect' className='pe-2 font-bold pt-1.5'> sort by</label>
      <select name="" id="sortselect" className='py-1.5 ps-2 pe-14 rounded-md'>
        <option value="new">Date | New to Old </option>
        <option value="old">Date | Old to New </option>
        <option value="pricedesc">Price | High to Low </option>
        <option value="priceasc">Price | Low to High </option>
        <option value="mileagedesc">Price | Low to High </option>
        <option value="mileageasc">Price | High to Low </option>
        <option value="yeardesc">Year | New to Old </option>
        <option value="yearasc">Price | Old to New </option>
      </select>
    </div>
  )
}
