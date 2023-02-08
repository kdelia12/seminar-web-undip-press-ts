import { useState } from "react"

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <div className={`sidebar bg-primary-500 w-[3.5rem] overflow-hidden border-r 
                   ${showSidebar ? "w-80 bg-primary-500 shadow-lg ease-in-out duration-300 " : "ease-in-out duration-300"}`}>  
        <div className="flex h-screen flex-col justify-between pt-2 pb-6">
            <div>
                <div className={`group flex items-center rounded-md w-max p-2.5 ${showSidebar ? "space-x-4" : " "}`}>
                    <img src="../icon/up.svg" className={`${showSidebar ? "" : "hidden"}`} onClick={() => setShowSidebar(!showSidebar)}/>
                    <img src="../icon/text-up.svg" className={`${showSidebar ? "" : "hidden"}`} />                  
                    <button 
                        onClick={() => setShowSidebar(!showSidebar)}>
                            <img src={`${showSidebar ? "../icon/chevron-left.svg" : "../icon/chevron-right.svg"}`} 
                        className="" 
                        alt=""/>
                    </button>
                </div>
                <ul className="mt-6 space-y-2 tracking-wide">
                    <li className="min-w-max">
                        <a href="#" aria-label="dashboard" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-white">
                            <img src='../icon/home.svg'/>
                            <span className="group-hover:text-gray-700">Home</span>
                        </a>
                    </li>
                    <li className="min-w-max">
                        <a href="#" className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-white">
                            <img src='../icon/template.svg'/>
                            <span className="group-hover:text-gray-700">List Seminar</span>
                        </a>
                    </li>
                    <li className="min-w-max">
                        <a href="#" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-white">
                            <img src='../icon/certificate.svg'/>
                            <span className="group-hover:text-gray-700">List Sertifikat</span>
                        </a>
                    </li>
                    <li className="min-w-max">
                        <a href="#" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-white">
                            <img src='../icon/berkas.svg'/>
                            <span className="group-hover:text-gray-700">Pembaruan Berkas</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="w-max -mb-3">
                <a href="#" className="group flex items-center space-x-4 rounded-md px-2 py-2 text-gray-600">
                    <img src="./face.png" className="w-10 h-10 rounded-full"/>
                    <div className="flex flex-col">
                        <span className="text-white font-bold">User</span>
                        <span className="text-white">user@gmail.com</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}
