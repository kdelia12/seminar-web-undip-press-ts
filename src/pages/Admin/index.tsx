import Sidebar from "components/Sidebar";
import Sidebar_2 from "components/Sidebar_2";
import Link from "next/link";

export default function Admin(){
    return (
        <>
            <div className="flex flex-row">
                <Sidebar_2/>
                <div className="p-8">
                    <h1 className="text-3xl font-semibold px-2.5">Selamat Datang, Admin</h1>
                    <div className="px-2.5 flex flex-col gap-2.5">
                        <div className="container mt-6 flex flex-row gap-2.5 mx-auto">  
                            {/* Card */}
                            <Link href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl bg-neutral-300 hover:bg-neutral-400">
                                <div className="flex flex-row items-center justify-between py-7 px-[4.188rem] leading-normal">
                                    <img src="/seminar.svg" alt="" />
                                    <h5 className="ml-3 text-2xl font-bold tracking-tight text-black">Manajemen Seminar</h5>
                                </div>
                            </Link>
                            {/* Card */}
                            <Link href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl bg-neutral-300 hover:bg-neutral-400">
                                <div className="flex flex-row items-center justify-between py-7 px-[4.188rem] leading-normal">
                                    <img src="/sertifikat.svg" alt="" />
                                    <h5 className="ml-3 text-2xl font-bold tracking-tight text-black">Manajemen Sertifikat</h5>
                                </div>
                            </Link>
                        </div>
                        <div className="container flex flex-row gap-2.5 mx-auto">
                            <Link href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl bg-neutral-300 hover:bg-neutral-400">
                                <div className="flex flex-row items-center justify-between py-7 px-[4.188rem] leading-normal">
                                    <img src="/laporan.svg" alt="" />
                                    <h5 className="ml-3 text-2xl font-bold tracking-tight text-black">Laporan dan Analitik</h5>
                                </div>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}