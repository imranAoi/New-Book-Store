import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import avatarImg from '../assets/avatar.png'
import { useSelector } from 'react-redux';
import { useAuth } from '../Context/AuthContext';
const navigation= [
    {name:'Dashborad',href:"/dashboard"},
    {name:'Orders',href:"/order"},
    {name:"Cart page",href:"/cart"},
    {name:'check Out',href:"/checkout"},
]
function Navbar() {
    const [isdropDown,setIsdropDown] = useState(false)
    const cartItems = useSelector(state => state.cart.cartItems);
   
    const {currentUser, logout} = useAuth()
    
    const handleLogOut = () => {
        logout()
    }
  return (
    <header  className='max-w-screen-2xl mx-auto px-4 py-6'>

        <nav className='flex justify-between items-center'>
            {/* left side*/ }
            <div className='flex items-center md:gap-16 gap-4'>
                <Link to="/"><FaBarsStaggered className='size-6' /></Link>
                {/*search input */}
                <div className='relative sm:w-72 w-40 space-x-2 flex gap-2 '>
                  <FaSearch className='absolute inline-block left-3 inset-y-3'/>
                  <input type='text' placeholder='search' className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none'  />
                </div>
            </div>


            {/*right side*/ }

            <div className='relative flex items-center md:space-x-3 space-x-2'>
                <div>
                    { currentUser ? <>
                    <button onClick={()=>setIsdropDown(!isdropDown)}>
                        <img src={avatarImg} className={`size-7 inline-flex rounded-full ${currentUser?'ring-2 ring-blue-600 ':''}`}></img>
                    </button>
                        </>:<Link to="/login"> <FaRegUser className='size-6'/></Link>}
                </div>
               
                <button className='hidden sm:block '>  
                    <FaRegHeart className='size-6'/> 
                </button>
                {
                    isdropDown && (
                        <div className='absolute right-1 top-5 mt-2 w-48 bg-white shadow-lg rounded-md z-40'>
                            <ul className='py-2'>
                                {
                                    navigation.map((item)=>(
                                        <li onClick={()=>setIsdropDown(false)}>
                                            <Link to={item.href} className='block px-4 py-2 text-sm hover:bg-gray-100'>
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))
                                }
                                 <li>
                                <button onClick={handleLogOut} className='w-full block px-4 py-2 text-sm hover:bg-gray-100'>Logout</button>
                                </li>
                            </ul>
                           
                        </div>
                        
                    )
                }
                <Link to="/cart" className='bg-amber-400 p-1 sm:px-6 px-2 flex items-center rounded-sm'>
                <FaShoppingCart className='size-6' />
                {
                    cartItems.length >  0  ? <span className='text-sm font-semibold sm:ml-1'> {cartItems.length}</span>:<span className='text-sm font-semibold sm:ml-1'>0</span>
                }

                </Link>
               
            </div>
        </nav>
    </header>
  )
}
export default  Navbar