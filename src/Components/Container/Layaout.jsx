import React from 'react'
import './Layaout.css'
import {AiOutlineHome} from 'react-icons/ai';
import { SlUser } from 'react-icons/sl';


const Layaout = () => {
  return (
    <div className='Navbar'>
        <h3>Odontologia Integral</h3>

        <div className='link-toogle'>
                <AiOutlineHome />
                <SlUser />
            </div>
        <ul className='link'>

            <li>Home <AiOutlineHome /> </li>
            
            <li>Usuario <SlUser /> </li>
        </ul>
    </div>
  )
}

export default Layaout