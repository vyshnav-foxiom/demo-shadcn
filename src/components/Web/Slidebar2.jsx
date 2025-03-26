
import { useState } from 'react'
import logo from './logo.png'

// icons
import { IoHomeOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { IoLogoBuffer } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineMenu, AiOutlineQuestionCircle } from 'react-icons/ai';
const menuItems = [
    {
        icons: <IoHomeOutline size={30} />,
        label: 'Home'
    },
    {
        icons: <MdOutlineDashboard size={30} />,
        label: 'Dashboard'
    },
    {
        icons: <CiSettings size={30} />,
        label: 'Setting'
    },
    {
        icons: <IoLogoBuffer size={30} />,
        label: 'Log'
    },
    {
        icons: <TbReportSearch size={30} />,
        label: 'Report'
    },
    {
        icons: <AiOutlineQuestionCircle size={30} />,
        label: 'Help'
    }
]
const Slidebar2 = ({ handleSidebar }) => {
    const [open, setOpen] = useState(true)
    return (
        <div>
            <nav className={`shadow-md h-screen p-2 flex flex-col duration-500 bg-black-600 text-white ${open ? 'w-60' : 'w-16'}`}>

                {/* Header */}
                <div className=' px-3 py-2 h-20 flex justify-between items-center'>
                    <img src={logo} alt="Logo" className={`${open ? 'w-20' : 'w-0'} rounded-md`} />
                    <div><AiOutlineMenu size={34} className={` duration-500 cursor-pointer ${!open && ' rotate-180'}`}
                        onClick={() => {
                            setOpen(!open);
                             handleSidebar
                        }} /></div>
                </div>

                {/* Body */}

                <ul className='flex-1'>
                    {
                        menuItems.map((item, index) => {
                            return (
                                <li key={index} className='px-3 py-2 my-2 hover:bg-blue-800 rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group'>
                                    <div>{item.icons}</div>
                                    <p className={`${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>{item.label}</p>
                                    <p className={`${open && 'hidden'} absolute left-32 shadow-md rounded-md
           w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16
          `}>{item.label}</p>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* footer */}
                <div className='flex items-center gap-2 px-3 py-2'>
                    <div><FaUserCircle size={30} /></div>
                    <div className={`leading-5 ${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>
                        <p>Vyshnav</p>
                        <span className='text-xs'>vyshnav.foxiom@gmail.com</span>

                    </div>
                </div>


            </nav>
        </div>
    )
}
export default Slidebar2