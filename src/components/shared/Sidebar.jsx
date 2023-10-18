import React, { Fragment } from 'react'
import { GiNestedHexagons } from 'react-icons/gi'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/navigation'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const linkClasses =
    'flex items-center gap-2 font-light px-3 py-2 hover:bg-indigo-700 hover:no-underline active:bg-indigo-700 rounded-sm text-base'

export const Sidebar = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-indigo-950 w-60 p-3 text-white flex flex-col ">
            <div className="flex items-center gap-2 px-1 py-3">
                <GiNestedHexagons fontSize={24} />
                <span className="text-neutral-100 text-lg">Dashboard</span>
            </div>
            {/* sidebar links */}
            <div className="flex-1 py-8 flex flex-col gap-0.5">
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}
            </div>
            {/* sidebar bottom */}
                <Menu as="div" className="relative pb-24 ">
                    <Menu.Button className="bg-indigo-900  rounded w-full pt-1 pb-1 flex items-center justify-between ">
                        <div className="ml-2  flex flex-row rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
                            <span className="sr-only">open user menu</span>
                            <div
                                className="h-10 w-10 rounded-full bg-sky-300 bg-cover bg-no-repeat bg-center "
                                style={{ backgroundImage: 'url("https://source.unsplash.com/80x80?face")' }}
                            >
                                
                            </div>
                            

                        </div>
                        <div className='flex flex-col'>
                        <span className='text-xs font-bold pr-12'>Evano</span>
                        <span className='text-xs pr-4 text-gray-400' >Project Manager</span>
                        </div>
                       <div className='pr-3'>
                       <ChevronDownIcon
                        className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                        aria-hidden="true"
                        />
                       </div>
                         
                    </Menu.Button>
                    {/* dropdown */}
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        className={classNames(
                                            active && 'bg-gray-100',
                                            'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-1'
                                        )}
                                        onClick={() => navigate('/profile')}
                                    >
                                        Profile
                                    </div>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        className={classNames(
                                            active && 'bg-gray-100',
                                            'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-1'
                                        )}
                                        onClick={() => navigate('/settings')}
                                    >
                                        Settings
                                    </div>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        className={classNames(
                                            active && 'bg-gray-100',
                                            'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-1'
                                        )}
                                        onClick={() => navigate('/logout')}
                                    >
                                        Logout
                                    </div>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                    
                </Menu>
     
            </div>
        
    )
}

function SidebarLink({ item }) {
    const { pathname } = useLocation()

    return (
        <Link
            to={item.path}
            className={classNames(
                pathname === item.path ? 'rounded-md bg-indigo-800 text-white' : 'text-neutral-300',
                linkClasses
            )}
        >  
            <span className="text-xl">{item.icon}</span>
            {item.label} <div>
                       <ChevronRightIcon
                        className="ml-6 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                        aria-hidden="true"
                        />
                       </div>
        </Link>
    )
}


