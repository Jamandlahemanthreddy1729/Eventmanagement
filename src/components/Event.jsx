import React from 'react'
import data from '../assets/data'
import EventDetails from './EventDetails'
const Event = () => {
  return (
    <div className='flex flex-wrap'>
      {
        data.map((eve,index)=>{
          return <EventDetails key={index} data={eve}/>
        })
      }
    </div>
  )
}

export default Event