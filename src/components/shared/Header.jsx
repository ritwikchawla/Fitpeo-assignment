import React from 'react'
import { HiHand, HiOutlineSearch } from 'react-icons/hi'

export const Header = () => {
    return (
        <div className="h-16 px-4 flex justify-between items-center">
            <div className='flex flex-row pl-8'> <span>Hello Shahrukh</span><HiHand/></div>
            <div className='relative pr-11'>
                <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-2' />
                <input
                    type="text"
                    placeholder="search"
                    className="text-sm focus:outline-none active:outline-none h-7 w-[15rem] rounded-sm pl-9 px-4"
                />
            </div>
        </div>
    )
}
