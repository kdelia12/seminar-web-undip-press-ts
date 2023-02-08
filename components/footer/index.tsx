import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="bg-primary-500">
        <div className="py-16 px-28">
            <div className="flex flex-row justify-center gap-28">
                <div className="flex flex-col text-white">
                    <h1 className="font-black text-2xl">Product</h1>
                    <Link href="/"> Deploy </Link>
                    <Link href="/">Blog</Link> 
                </div>
                <div className="flex flex-col text-white">
                    <h1 className="font-black text-2xl">Company</h1>
                    <Link href="/">About Us</Link>
                    <Link href="/">Industries</Link>
                    <Link href="/">How we work</Link>
                    <Link href="/">Career</Link>
                </div>
                <div className="flex flex-col text-white">
                    <h1 className="font-black text-2xl">Support</h1>
                    <Link href="/">Terms of Service</Link>
                    <Link href="/">Privacy</Link>
                    <Link href="/">FAQs</Link>
                </div>
            </div>
            
        </div>
        <div className="flex flex-wrap justify-between px-28 py-6">
            <h1 className="text-white">Copyright © Universitas Diponegoro | 2020</h1>
            <div className="flex flex-row">
                <Link href="/"><img src="/instagram.svg" alt="" /></Link>
                <Link href="/"><img src="/facebook.svg" alt="" /></Link>
                <Link href="/"><img src="/twitter.svg" alt="" /></Link>
            </div>    
        </div>
      </div>
    </>
  );
}