import { Outlet } from "react-router-dom"

export const Layout= ()=>{

    return(
    <div className='h-screen bg-blue-700 text-white flex flex-col items-center'>
        <div className='text-gray-400 mt-40 mb-16 text-4xl'>Webinar<span className='text-white'>.gg</span></div>
        <Outlet/>
    </div>
    )
}