import React from 'react'
import list from '../../public/list.json'
import Card from './Card'
import {Link} from 'react-router-dom'

export default function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 py-4'>
        <div className='mt-28 text-center justify-center items-center'>
          <h1 className=' text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>here!</span></h1>
          <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rem sed tempore corporis ratione perspiciatis nulla assumenda, illo cumque, sit placeat autem a eius nisi temporibus fuga aut. Cum architecto voluptas illo maxime qui delectus expedita omnis quos reiciendis labore.</p>
          <Link to={"/"}>
          <button className='bg-pink-500 text-white px-5 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 space-x-3'>
          {
            list.map((item)=>(
              <Card item={item} key={item.id}/>
            ))
          }
        </div>
      </div>

    </>
  )
}
