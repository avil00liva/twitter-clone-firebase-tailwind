import React from 'react'

const Input2 = () => {
    return (
        <div className='text-white min-h-[100px] bg-black flex items-start
        justify-evenly py-1.5 px-1 gap-1.5 border-b-2 border-gray-700 xl:justify-evenly'>
                <img src="https://lh3.googleusercontent.com/ogw/ADea4I5czwSujNSbc-xQw_Wvr_HiCzb6AJ_3WU2PYjNehw=s83-c-mo"  
                alt="User" className='sm:mt-3 xl:mt-0 w-12 h-12 rounded-full md:w-[70px] md:h-[70px]'/>
                <div className='h-full w-[500px]'>
                    <input type="text" 
                           placeholder='Search...'
                           className='w-full py-4 outline-none bg-black px-1 border-gray-700 border-b-2 text-[#d9d9d9]'
                    />
                    <div className='w-full flex items-center justify-between py-2'>
                        <div className='py-2 px-1 flex-[0.5] flex items-center justify-start gap-4'>
                            <span className='cursor-pointer w-5 h-5 flex items-center justify-center'>🎆</span>
                            <span className='cursor-pointer w-5 h-5 flex items-center justify-center'>🎈</span>
                            <span className='cursor-pointer w-5 h-5 flex items-center justify-center'>🎃</span>
                            <span className='cursor-pointer w-5 h-5 flex items-center justify-center'>🎢</span>
                        </div>
                        <button className= "outline-none py-2 px-5 bg-[#1d9bf0] hover:bg-[#1a8cd8] rounded-full font-bold">Tweet</button>
                    </div>
                </div>
        </div>
    )
}

export default Input2
