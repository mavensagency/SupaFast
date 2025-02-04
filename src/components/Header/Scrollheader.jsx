import React from 'react'
import { NavLink } from 'react-router-dom'
function scrollheader() {
  return (
    <>
    <div className='absolute bottom-0 self-center w-full pb-10'>
      <div className=' pl-4 my-0 mx-auto bg-[#000000cc] border border-[rgba(255,255,255,0.12)] shadow-[rgba(0,0,0,0.08)_0px_5px_10px_0px,rgba(0,0,0,0.07)_0px_19px_19px_0px,rgba(0,0,0,0.04)_0px_43px_26px_0px,rgba(0,0,0,0.01)_0px_76px_31px_0px,rgba(0,0,0,0)_0px_119px_33px_0px] rounded-[64px] xl:flex hidden items-center justify-between w-[40em]'
      >
        <div className="logo"><img src="./public/icon.svg" alt="icon" className='w-9'/></div>
         <ul className='flex gap-[32px]'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">Pricing</NavLink></li>
            <li><NavLink to="/">Case studies</NavLink></li>
        </ul>
        <div className="flex bg-white rounded-[60px] py-2 px-2 items-center gap-2">
           <img src="./public/Profile.png" className='w-[44px] h-[44px] rounded-full' alt="profile"/>
           <span className='text-black font-semibold text-[16px]'>Book a Call with Namya</span>
        </div>
      </div>
      </div>
    </>
  )
}

export default scrollheader