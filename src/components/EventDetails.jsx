import React from 'react'

const EventDetails = ({data}) => {
  return (
    <div className='shadow-2xl m-2 p-2 w-2/12'>
        <div className='w-38 h-24 p-2 m-2'>
        <img src='' alt='Event logo'/>
       </div>
      <div className='m-2 p-2'>
        <h2>{data.name}</h2>
        <h5>{data.organisedby}</h5>
        <p>{data.location}</p>
        <p>{data.date}</p>
        <p>{data.time}</p>
        <p>{data.description}</p>
        <p>{data.price}</p>
      </div>
    </div>
  )
}

export default EventDetails