import Image from 'next/image'
import React from 'react'
import SidebarLink from './SidebarLink'
import { signOut, useSession } from "next-auth/react"

import { HiHome,HiHashtag,HiOutlineBell,HiOutlineInbox,HiOutlineBookmark,HiOutlineClipboardList,HiOutlineUser,HiOutlineDotsCircleHorizontal,HiDotsHorizontal } from "react-icons/hi"

const Sidebar = () => {
    const { data: session } = useSession()


    return (
        <div className='hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full'>
            <div className='flex justify-center items-center w-14 h-14 hoverAnimation p-0 xl:ml-24'>
                <Image src="https://rb.gy/ogau5a" width={30} height={30}/>
            </div>
            {/* space-y-2.5 en el div de abajo para que haya mas espaciodo*/}
            <div className=' mt-4 mb-2.5 xl:ml-24'>
            <SidebarLink text="Home" Icon={HiHome} active />
            <SidebarLink text="Explore" Icon={HiHashtag} />
            <SidebarLink text="Notifications" Icon={HiOutlineBell} />
            <SidebarLink text="Messages" Icon={HiOutlineInbox} />
            <SidebarLink text="Bookmarks" Icon={HiOutlineBookmark} />
            <SidebarLink text="Lists" Icon={HiOutlineClipboardList} />
            <SidebarLink text="Profile" Icon={HiOutlineUser} />
            <SidebarLink text="More" Icon={HiOutlineDotsCircleHorizontal} />
            </div>
            <button className='hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]'>Tweet</button>
            <div className='text-[#d9d9d9] flex items-center justify-center hoverAnimation xl:ml-auto xl:-mr-5 mt-auto' onClick={signOut}>
                <img src={session?.user.image}
                alt="User" 
                className='h-10 w-10 rounded-full xl: mr-2.5'
                />
                <div className='hidden xl:inline leading-5'>
                    <h4 className='font-bold'>{session.user.name}</h4>
                    <p className='text-[#6e767d]'>@{session.user.tag}</p>
                </div>
                <HiDotsHorizontal className="h-5 hidden xl:inline ml-10" />
            </div>
        </div>
    )
}

export default Sidebar
