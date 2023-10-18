import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'

const recentOrderData = [
    {
        id: '1',
        customer_id: '23143',
        Product_name: 'Abstract 3D',
        Price: '$ 435.50',
        total_sale: '20',
        Stock: '32 in stock'
    },
    {
        id: '7',
        customer_id: '96453',
        Product_name: 'Sarphens illustration',
        Price: '$ 96.35',
        total_sale: '20',
        Stock: '32 in stock'
    },
    {
        id: '2',
        customer_id: '65345',
        Product_name: 'Mason Nash',
        Price: '$ 836.44',
        total_sale: '20',
        Stock: '32 in stock'
    },
    {
        id: '3',
        customer_id: '87832',
        Product_name: 'Luke Parkin',
        Price: '$ 334.50',
        ctotal_sale: '20',
        Stock: '32 in stock'
    },
    {
        id: '4',
        customer_id: '09832',
        Product_name: 'Anthony Fry',
        Price: '$ 876.00',
        total_sale: '20',
        Stock: '32 in stock'
    },
    {
        id: '5',
        customer_id: '97632',
        Product_name: 'Ryan Carroll',
        Price: '$ 96.35',
        total_sale: '20',
        Stock: '32 in stock'
    }
]

const ProductSell = () => {
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-xl border border-gray-200 flex-1">
            <div className="flex flex-row justify-between h-6 items-center">
                <strong>Product Sell</strong>
                <div className="relative left-60 ">
                    <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-2" />
                    <input
                        type="text"
                        placeholder="search"
                        className="text-sm focus:outline-none active:outline-none h-7 w-[14rem] bg-gray-50  pl-9 px-4"
                    />
                </div>
                <div className="pr-2">
                    <span className="text-gray-500 text-xs items-center p-1 font-medium flex flex-row rounded border-gray-200 bg-violet-50">
                        Last 30 days
                        <ChevronDownIcon
                            className="ml-2 -mr-1 h-5 w-5 text-gray-500 hover:text-blue-800"
                            aria-hidden="true"
                        />{' '}
                    </span>
                </div>
            </div>
            <div className="border-x border-gray-200 rounded-sm mt-2">
                <table className="w-full  ">
                    <thead className='text-gray-700'>
                        <tr>
                            <th  class=" py-1 text-xs">Product Name</th>
                            <th  class=" py-1 text-xs">Stock</th>
                            <th  class=" py-1 text-xs">Price</th>
                            <th  class=" py-1 text-xs">Total Sale</th>
                        </tr>
                    </thead>
                    <tbody >
                        {recentOrderData.map((order) => (
                            <tr key={order.id}>
                                <td className="flex flex-col py-1" >
                                    <span><Link to={`/customer/${order.customer_id}`}>{order.Product_name}</Link></span>
                                    <span className="text-xs text-gray-400">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, praesentium?
                                    </span>
                                </td>
                                <td className='py-1 text-gray-600'>{order.Stock}</td>
                                <td className='py-1 text-gray-600 font-bold'>{order.Price}</td>
                                <td className='py-1 text-gray-600'>{order.total_sale}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductSell
