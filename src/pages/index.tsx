import { Inter } from '@next/font/google'
import Header from 'components/header'
import Footer from 'components/footer'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <Header/>
      {/* TOP Part */}
      <div className='bg-primary-500 p-28 flex flex-col xl:flex-row gap-60'>
      {/* Left Side */}
        <div className='flex-1'>
          <h1 className='text-5xl text-white font-semibold'>Tingkatkan pengetahuanmu melalui seminar UNDIP</h1>
          <h2 className='mt-4 text-lg text-white font-normal'>Bergabunglah dengan Seminar UNDIP, di mana kamu akan mendapat kesempatan untuk belajar dari para ahli industri dan pemikir terkemuka di bidangmu.</h2>
          <Link href="/Login"><button className="mt-4 px-5 py-3 text-white rounded-lg bg-primary-300 hover:bg-primary-600 focus:bg-primary-600">Sign In</button></Link>
        </div>
        {/* Right Side */}
        <img className='hidden xl:block mt-12 xl:mt-0' src="/homeasset.svg" alt="" />
      </div>

      {/* Bottom Part */}
      {/* Upcoming Seminar */}
      <div className='bg-white px-28 py-24 flex flex-col justify-center gap-16'>
        <div className='gap-16'>
          <h1 className='text-4xl font-semibold flex justify-center'>Upcoming Seminar</h1>
          <h2 className='flex justify-center mt-7 text-lg font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</h2>
        </div>
        <div className='flex flex-row justify-between'>
          {/* Card */}
          <div className="max-w-xs bg-white border border-transparent rounded-lg shadow">
            <a href="#">
              <img className="rounded-t-lg h-64 object-cover" src="/homecard.svg" alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Technology</h5>
              </a>
              <p className="mb-3 font-normal text-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
          </div>
          {/* Card */}
          <div className="max-w-xs bg-white border border-transparent rounded-lg shadow">
            <a href="#">
              <img className="rounded-t-lg h-64 object-cover" src="/homecard.svg" alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Technology</h5>
              </a>
              <p className="mb-3 font-normal text-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
          </div>
          {/* Card */}
          <div className="max-w-xs bg-white border border-transparent rounded-lg shadow">
            <a href="#">
              <img className="rounded-t-lg h-64 object-cover" src="/homecard.svg" alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Technology</h5>
              </a>
              <p className="mb-3 font-normal text-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
          </div>
        </div>
      </div>
      {/* Upcoming Seminar */}
      <div className='bg-white px-28 pb-24 flex flex-col justify-center gap-16'>
        <div className='gap-16'>
          <h1 className='text-4xl font-semibold flex justify-center'>Past Seminar</h1>
          <h2 className='flex justify-center mt-7 text-lg font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</h2>
        </div>
        <div className='flex flex-row justify-between'>
          {/* Card */}
          <div className="max-w-xs bg-white border border-transparent rounded-lg shadow">
            <a href="#">
              <img className="rounded-t-lg h-64 object-cover" src="/homecard.svg" alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Technology</h5>
              </a>
              <p className="mb-3 font-normal text-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
          </div>
          {/* Card */}
          <div className="max-w-xs bg-white border border-transparent rounded-lg shadow">
            <a href="#">
              <img className="rounded-t-lg h-64 object-cover" src="/homecard.svg" alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Technology</h5>
              </a>
              <p className="mb-3 font-normal text-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
          </div>
          {/* Card */}
          <div className="max-w-xs bg-white border border-transparent rounded-lg shadow">
            <a href="#">
              <img className="rounded-t-lg h-64 object-cover" src="/homecard.svg" alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Technology</h5>
              </a>
              <p className="mb-3 font-normal text-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
