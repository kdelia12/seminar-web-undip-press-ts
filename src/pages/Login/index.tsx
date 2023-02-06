export default function Login() {
    return (
        <>  
            <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js" defer></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.4.2/zxcvbn.js"></script>

            <style>@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')</style>

            <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
                <div className="bg-primary-500 text-black rounded-3xl shadow-xl w-full overflow-hidden "style={{ maxWidth: '1000px' }}>
                    <div className="md:flex w-full">
                        
                        <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                            <div className="mb-10">
                                <img src='/undip-press.svg' />
                            </div>
                            <div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <label className="text-xs text-white font-semibold px-1">Email</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                            <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-12">
                                        <label className="text-xs text-white font-semibold px-1">Password</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                            <input type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4 flex-row items-center">
                                    <input 
                                        className="form-checkbox h-4 w-4 text-indigo-600"
                                        type="checkbox"
                                        id="remember"
                                    />
                                    <label className="ml-2 text-white" htmlFor="remember">
                                        Ingat Saya
                                    </label>
                                    
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-12">
                                        <button className="block w-full max-w-xs mx-auto bg-primary-400 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">LOGIN</button>
                                    </div>
                                </div>                               
                            </div>
                        </div>
                        <div className=" block w-1/2 bg-white py-10 px-10">
                            <img src='/login.svg'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}