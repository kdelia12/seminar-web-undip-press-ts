import React from 'react'

export default function Sidebar() {
  return (
    <div className="sidebar bg-primary-500 min-h-screen w-[3.5rem] overflow-hidden border-r hover:w-80 hover:bg-primary-500 hover:shadow-lg ease-in-out duration-300">
        <div className="flex h-screen flex-col justify-between pt-2 pb-6">
        <div>
            <div className="group flex items-center space-x-4 rounded-md w-max p-2.5">
            <img src="../icon/up.svg" className="" alt=""/>
            <img src="../icon/text-up.svg" className="" alt=""/>
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
