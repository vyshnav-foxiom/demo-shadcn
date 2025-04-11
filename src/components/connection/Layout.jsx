
import { Outlet } from 'react-router-dom'
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar'
import Navbar from '../Web/Navbar'
import Slidebar from '../Web/Slidebar'
import { useState } from 'react'

const Layout = () => {
  const [openSidebar, setOpenSidebar] = useState(true)
  const handleSidebar = () => {
    setOpenSidebar(!openSidebar)
  }

  return (
    <div>
      <div className="flex h-screen">
        {/* Sidebar on the left */}
        <SidebarProvider>
          <Slidebar />   
          <SidebarTrigger handleSidebar={handleSidebar} />
        </SidebarProvider>
        {/* Navbar on the right */}
        <div className="flex-1 flex flex-col ">
          <Navbar openSidebar={openSidebar} />
          <div className='mt-8'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout                                                    






// return (
//   <div>
//     <div className="flex h-screen">
//       {/* Sidebar on the left */}
//       <Slidebar2 handleSidebar={handleSidebar}  className="w-[250px] bg-gray-800"/>

//       {/* Navbar on the right */}
//       <div className="flex-1 flex flex-col ">
//         <Navbar openSidebar={openSidebar} className="bg-gray-200" />
//         <div className='flex items-center  w-screen h-screen'>
//         <Outlet />
//         </div>
//       </div>
//     </div>
//     {/* <SidebarProvider> */}
//     {/* <Slidebar />
//       <SidebarTrigger handleSidebar={handleSidebar} /> */}
    
//     {/* </SidebarProvider> */}

//   </div>
// )