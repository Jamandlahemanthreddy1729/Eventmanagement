import React from 'react'
import { Link } from 'react-router-dom'
import Eventfrom from './Eventfrom'

const Header = () => {
  return (
    <div className='flex justify-between m-2'>
        <div className='w-36 '>
            <img src='https://www.knowafest.com/files/uploads/Rapture%20logo-2019021816.jpeg' alt='logo'/>
        </div>
        <div className='mx-10 my-2'>
            <ul className='flex'>
                <Link to='/eventform'><li className='p-4 cursor-pointer'>Organise Event</li></Link>
                <Link to='/event'><li className='p-4 cursor-pointer'>Events</li></Link>
                <Link to='/login'><li className='p-4 cursor-pointer'>Login</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Header