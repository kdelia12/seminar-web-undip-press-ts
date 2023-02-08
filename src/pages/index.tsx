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
      <div className='bg-primary-500 p-28 flex flex-row gap-60'>
        <div className='w-1/4'>
          <h1 className='text-5xl text-white font-semibold'>Tingkatkan pengetahuanmu melalui seminar UNDIP</h1>
          <h2 className='mt-4 text-lg text-white font-normal'>Bergabunglah dengan Seminar UNDIP, di mana kamu akan mendapat kesempatan untuk belajar dari para ahli industri dan pemikir terkemuka di bidangmu.</h2>
          <Link href="/signin"><button className="px-4 py-2 text-white">Sign In</button></Link>
        </div>
        <img src="/homeasset.svg" alt="" />
      </div>
      {/* Bottom Part */}
      <div className='bg-white px-28 py-24 flex flex-col justify-center gap-16'>
        <div className=''>
          <h1 className='text-4xl font-semibold flex justify-center'>Upcoming Seminar</h1>
          <h2 className='w-8 mt-7 text-lg font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</h2>
        </div>
        
        <div className='flex flex-row justify-between'>
          <div className='w-1 rounded overflow-hidden shadow-lg'>
            <img src="/homecard.svg" alt="" />
            <div className='p-5 flex-col gap-5 w-0'>
              <h2>
                Technology
              </h2>
              <h3 className='truncate'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              </h3>
            </div>
          </div>
        </div>
        
      </div>
      <Footer/>
    </>
  )
}
