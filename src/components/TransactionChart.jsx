import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
    {
        name: 'Jan',
        Expense: 4000,
        Income: 8900
    },
    {
        name: 'Feb',
        Expense: 3000,
        Income: 3400
    },
    {
        name: 'Mar',
        Expense: 2000,
        Income: 6247
    },
    {
        name: 'Apr',
        Expense: 2390,
        Income: 1230
    },
    {
        name: 'May',
        Expense: 2900,
        Income: 3191
    },
    {
        name: 'Jun',
        Expense: 4020,
        Income: 5990
    },
    {
        name: 'Jul',
        Expense: 1300,
        Income: 4565
    },
    {
        name: 'Aug',
        Expense: 2389,
        Income: 1330
    },
    {
        name: 'Sep',
        Expense: 4600,
        Income: 7564
    },
    {
        name: 'Oct',
        Expense: 3289,
        Income: 9302
    },
    {
        name: 'Nov',
        Expense: 3200,
        Income: 8902
    },
    {
        name: 'Dec',
        Expense: 3130,
        Income: 8798
    }
]

const TransactionChart = () => {
    return (
        <div className="h-[19rem] bg-white p-4 rounded-2xl border-gray-200 flex flex-col flex-1">
            <div className='flex flex-row justify-between'>
            <strong className="text-gray-800 font-bold flex flex-col">Overview 
            <span className='text-xs font-medium text-gray-400'>Monthly Earning</span></strong>
            
            
            <span className="text-gray-500 text-xs items-center p-1 font-medium flex flex-row rounded border-gray-200 bg-violet-50">Quarterly <ChevronDownIcon
                        className="ml-2 -mr-1 h-5 w-5 text-gray-500 hover:text-blue-800"
                        aria-hidden="true"
                        /> </span>
            </div>
            
            <div className="w-full mt-3 flex-1 text-xs">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                        
                    >
                        <CartesianGrid horizontal={false} vertical={false} />
                        <XAxis dataKey="name" />
                        <Tooltip />
                       
                        <Bar dataKey="Income" fill="#40E0D0" />
                        
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default TransactionChart
