import React from 'react'
import { HiOutlineCurrencyDollar } from 'react-icons/hi'
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai'
import{CgNotes} from 'react-icons/cg'
import{HiOutlineBanknotes} from 'react-icons/hi2'
import {TbShoppingBag }from 'react-icons/tb'
const DashboardStatsGrid = () => {
    return (
        <div className="flex gap-4 w-full">
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
                    <HiOutlineCurrencyDollar className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Earning</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">$198k</strong>
                    </div>
                    <div className='flex flex-row'>
                        <span className="text-sm text-green-500 flex flex-row"><AiOutlineArrowUp/>37.8%</span>
                        <span className="pl-1">this month</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-purple-300">
                    <CgNotes className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Orders</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">$198k</strong>
                    </div>
                    <div className='flex flex-row'>
                        <span className="text-sm text-red-500 flex flex-row"><AiOutlineArrowDown/>2%</span>
                        <span className="pl-1">this month</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-300">
                    <HiOutlineBanknotes className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Balance</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">$198k</strong>
                    </div>
                    <div className='flex flex-row'>
                        <span className="text-sm text-red-500 flex flex-row"><AiOutlineArrowDown/>2%</span>
                        <span className="pl-1">this month</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-red-300">
                    <TbShoppingBag className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total sales</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">$198k</strong>
                    </div>
                    <div className='flex flex-row'>
                        <span className="text-sm text-green-500 flex flex-row"><AiOutlineArrowUp/>37.8%</span>
                        <span className="pl-1">this month</span>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    )
}
function BoxWrapper({ children }) {
    return <div className="bg-white rounded-xl p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}

export default DashboardStatsGrid


