import Link from "next/link"
import { useState } from "react"
import axios from "axios";
import { toast } from "react-toastify";

export default function Sidebar_2() {
  const [showSidebar, setShowSidebar] = useState(false)
  const handleLogout = async () => {
    const token = localStorage.getItem("access_token");
    try {
      await axios.post(
        "http://127.0.0.1:8000/api/logout",
        {},
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      localStorage.removeItem("access_token");
      window.location.href = "/Login";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={`sidebar bg-primary-500 overflow-hidden border-r 
                   ${showSidebar ? "w-96 bg-primary-500 shadow-lg ease-in-out duration-300 " : "w-[7.5rem] ease-in-out duration-300"}`}>  
        <div className="flex h-screen flex-col justify-between pt-2 pb-6">
            <div>
                <div className={`group flex items-center rounded-md w-max pt-8 ${showSidebar ? "px-8 space-x-4" : "px-11"}`}>
                    <img src="../icon/up.svg" className={`${showSidebar ? "" : "hidden"}`} onClick={() => setShowSidebar(!showSidebar)}/>
                    <img src="../icon/text-up.svg" className={`${showSidebar ? "" : "hidden"}`} />                  
                    <button 
                        onClick={() => setShowSidebar(!showSidebar)}>
                            <img src={`${showSidebar ? "../icon/chevron-left.svg" : "../icon/chevron-right.svg"}`} 
                        className="" 
                        alt=""/>
                    </button>
                </div>
                <ul className="mt-6 space-y-2 tracking-wide px-8">
                    <li className="min-w-max">
                        <Link href="/Admin" aria-label="dashboard" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-white hover:bg-primary-400">
                            <img src='../icon/home.svg'/>
                            <span className={`${showSidebar ? "" : "hidden"} group-hover:text-gray-700`}>Home</span>
                        </Link>
                    </li>
                    <li className="min-w-max">
                        <Link href="/Admin/seminar" className="bg group flex items-center space-x-4 rounded-md px-4 py-3 text-white hover:bg-primary-400">
                            <img src='../icon/presentation.svg'/>
                            <span className={`${showSidebar ? "" : "hidden"} group-hover:text-gray-700`}>Manajemen Seminar</span>
                        </Link>
                    </li>
                    <li className="min-w-max">
                        <Link href="/Admin/sertifikat" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-white hover:bg-primary-400">
                            <img src='../icon/certificate.svg'/>
                            <span className={`${showSidebar ? "" : "hidden"} group-hover:text-gray-700`}>Manajemen Sertifikat</span>
                        </Link>
                    </li>
                    <li className="min-w-max">
                        <Link href="/Admin/laporan" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-white hover:bg-primary-400">
                            <img src='../icon/chart-bar.svg'/>
                            <span className={`${showSidebar ? "" : "hidden"} group-hover:text-gray-700`}>Laporan dan Analitik</span>
                        </Link>
                    </li>
                    <li className="min-w-max">
                        <Link href="/" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-white hover:bg-primary-400" onClick={handleLogout}>
                            <img src='../icon/certificate.svg'/>
                            <span className={`${showSidebar ? "" : "hidden"} group-hover:text-gray-700`}>Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="w-max -mb-3">
                <a href="#" className="group flex items-center space-x-4 rounded-md px-9 py-2 text-gray-600">
                    <img src="/face.png" className="w-10 h-10 rounded-full"/>
                    <div className={`${showSidebar ? "" : "hidden"} flex flex-col`}>
                        <span className="text-white font-bold">User</span>
                        <span className="text-white">user@gmail.com</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
  );
}
