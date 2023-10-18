import React from 'react'
import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './TransactionChart'
import CustomersProfileChart from './CustomersProfileChart'
import ProductSell from './ProductSell'

export const Dashboard = () => {
    return (
        <div className='flex flex-col gap-4'>
            <DashboardStatsGrid/>
            <div className='flex flex-row gap-4 w-full'>
            <TransactionChart/>
            <CustomersProfileChart/>
            </div>

            <div className='flex flex-row gap-4 w-full'>
                <ProductSell/>
            </div>
           
        </div>
    )
}
