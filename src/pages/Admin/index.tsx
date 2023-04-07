import Admin_Sidebar from "components/Admin_Sidebar";
import Link from "next/link";
import { useEffect, useState } from 'react';
import axios from 'axios';
import router, { useRouter } from 'next/router';

export default function Admin(){
    const [user, setUser] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (!token) {
          router.push('/');
          return;
        }
        axios.get('http://127.0.0.1:8000/api/user', { headers: { Authorization: `${token}`, } })
          .then(response => {
            setUser(response.data);
            const user = response.data;
            if (user.role !== 'admin') {
              router.push('/');
            }
          })
          .catch(error => {
            console.log(error);
            router.push('/');
          });
      }, []);
    return (
        <>
            <div className="flex">
                <aside className="h-screen sticky top-0">
                    <Admin_Sidebar/>
                </aside>
                <div className="p-8 gap-6">
                    <h1 className="text-3xl font-semibold px-2.5">Selamat Datang, {user && user.name}</h1>
                    <div className="flex flex-col gap-2.5">
                        <div className="container mt-6 flex flex-col gap-2.5 mx-auto">
                            {/* Warning */}
                            <div className="bg-warning-200 px-5 py-2.5 w-[56.75rem] h-[7.125rem]">
                                <div className="flex justify-between gap-2.5 py-2.5">
                                    <div className="flex flex-row gap-2.5">
                                        <img src="/icon/warning2.svg" alt="" />
                                        <h2 className="text-warning-600 font-bold text-base">Pemberitahuan</h2>
                                    </div>
                                    <button><img src="/icon/x.svg" alt="" /></button>
                                </div>
                                <h3 className="mb-[1.625rem] text-medium text-base">Anda belum melakukan upload sertifikat untuk 3 seminar, segera upload template sertifikat sekarang !</h3>
                            </div>
                            <div className="bg-warning-200 px-5 py-2.5 w-[56.75rem] h-[7.125rem]">
                                <div className="flex justify-between gap-2.5 py-2.5">
                                    <div className="flex flex-row gap-2.5">
                                        <img src="/icon/warning2.svg" alt="" />
                                        <h2 className="text-warning-600 font-bold text-base">Pemberitahuan</h2>
                                    </div>
                                    <button><img src="/icon/x.svg" alt="" /></button>
                                </div>
                                <h3 className="mb-[1.625rem] text-medium text-base">Anda belum melakukan generate barcode dan kode unik untuk peserta pada 3 seminar !</h3>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <div className="container mt-6 flex flex-row gap-5 mx-auto">  
                            {/* Card */}
                            <Link href="/Admin/seminar" className="flex flex-col items-center bg-primary-300 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-primary-400">
                                <div className="flex flex-row items-center justify-between py-7 px-[4.188rem] leading-normal">
                                    <img src="/icon/seminar.svg" alt="" />
                                    <h5 className="ml-3 text-2xl font-bold tracking-tight text-black">Manajemen Seminar</h5>
                                </div>
                            </Link>
                            {/* Card */}
                            <Link href="/Admin/sertifikat" className="flex flex-col items-center bg-primary-300 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-primary-400">
                                <div className="flex flex-row items-center justify-between py-7 px-[4.188rem] leading-normal">
                                    <img src="/icon/sertifikat.svg" alt="" />
                                    <h5 className="ml-3 text-2xl font-bold tracking-tight text-black">Manajemen Sertifikat</h5>
                                </div>
                            </Link>
                        </div>
                        <div className="container flex flex-row gap-5 mx-auto">
                            <Link href="/Admin/laporan" className="flex flex-col items-center bg-primary-300 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-primary-400">
                                <div className="flex flex-row items-center justify-between py-7 px-[4.188rem] leading-normal">
                                    <img src="/icon/laporan.svg" alt="" />
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