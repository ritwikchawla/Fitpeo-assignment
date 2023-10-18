import {
    HiOutlineViewGrid,
    HiOutlineCube,
    HiOutlineUser,
    HiOutlineCash,
    HiOutlineNewspaper,
    HiOutlineAnnotation
} from 'react-icons/hi'


export const DASHBOARD_SIDEBAR_LINKS=[
    {
        key: 'dashboard',
        label:'Dashboard',
        path:'/',
        icon: <HiOutlineViewGrid/>
    },
    {
        key:'products',
        label:'Products',
        path:'/products',
        icon:<HiOutlineCube/>
    },
    {
        key:'customers',
        label:'Customers',
        path:'/customers',
        icon:<HiOutlineUser/>
    },
    {
        key:'income',
        label:'Income',
        path:'/income',
        icon:<HiOutlineCash/>
    },
    {
        key:'promote',
        label:'Promote',
        path:'/promote',
        icon:<HiOutlineNewspaper/>
    },
    {
        key:'help',
        label:'Help',
        path:'/help',
        icon:<HiOutlineAnnotation/>
    },

]