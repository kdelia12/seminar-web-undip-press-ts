import Admin_Sidebar from "components/Admin_Sidebar";
import Link from "next/link";

export default function Seminar(){
    return(
        <>
            <div className="flex">
                <aside className="h-screen sticky top-0">
                    <Admin_Sidebar/>
                </aside>
                <div className="w-full flex flex-col p-8 gap-6">
                    <h1 className="text-3xl font-semibold px-2.5">Manajemen Seminar</h1>
                    <div className="container p-2.5">
                        {/* Card */}
                        <Link href="/Admin/seminar" className="w-fit flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl bg-neutral-300 hover:bg-neutral-400">
                            <div className="flex flex-row items-center justify-between py-7 px-[4.188rem] leading-normal">
                                <img src="/seminar.svg" alt="" />
                                <h5 className="ml-3 text-2xl font-bold tracking-tight text-black">Buat Seminar Baru</h5>
                            </div>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <div className="flex flex-row p-2.5">
                            <h1 className="text-2xl font-bold">List Seminar</h1>
                            <form className="ml-auto">
                                <div className="flex">
                                    <div className="relative w-80">
                                        <input className="block p-2.5 w-full z-20 text-sm text-neutral-500 rounded-lg border-neutral-500 border-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Search"/>
                                        <button type="submit" className="absolute top-0 right-0 mr-1 p-2.5 text-sm font-medium text-white">
                                            <img src="/search.svg" alt="" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                            {/* Card */}
                            <div className="bg-neutral-300 rounded-lg px-2.5">
                                <div className="flex flex-row items-center p-2.5 leading-normal">
                                    <div className="gap-2.5 flex flex-row">
                                        <img src="/index1.svg" alt="" />
                                        <div className="flex flex-col p-2.5 gap-2.5">
                                            <div className="flex flex-row gap-2.5">
                                                <h3 className="w-fit px-2.5 rounded-lg border border-black border-2">Teknologi</h3>
                                            </div>
                                            <h1 className="text-5xl font-bold tracking-tight text-black">Judul Seminar</h1>
                                            <h2 className="">Penyelenggara Seminar</h2>
                                        </div> 
                                    </div>
                                    <div className="flex flex-col ml-auto gap-2.5 p-2.5 text-right">
                                        <h2>Tanggal Diselenggarakan</h2>
                                        <h2>02 Januari 2023</h2>
                                        <div className="flex flex-row gap-2.5 justify-end">
                                            <img src="/edit.svg" alt="" />
                                            <img src="/delete.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Card */}
                            <div className="bg-neutral-300 rounded-lg px-2.5">
                                <div className="flex flex-row items-center p-2.5 leading-normal">
                                    <div className="gap-2.5 flex flex-row">
                                        <img src="/index1.svg" alt="" />
                                        <div className="flex flex-col p-2.5 gap-2.5">
                                            <div className="flex flex-row gap-2.5">
                                                <h3 className="w-fit px-2.5 rounded-lg border border-black border-2">Teknologi</h3>
                                            </div>
                                            <h1 className="text-5xl font-bold tracking-tight text-black">Judul Seminar</h1>
                                            <h2 className="">Penyelenggara Seminar</h2>
                                        </div> 
                                    </div>
                                    <div className="flex flex-col ml-auto gap-2.5 p-2.5 text-right">
                                        <h2>Tanggal Diselenggarakan</h2>
                                        <h2>02 Januari 2023</h2>
                                        <div className="flex flex-row gap-2.5 justify-end">
                                            <img src="/edit.svg" alt="" />
                                            <img src="/delete.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                                
                    </div> 
                </div>
            </div>
        </>
    );
}