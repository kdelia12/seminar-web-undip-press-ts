import Sidebar from "components/Sidebar";

export default function Admin(){
    return (
        <>
            <div className="flex flex-row">
                <Sidebar/>
                <h1 className="text-3xl font-semibold px-2.5">Selamat Datang, Admin</h1>
            </div>
        </>
    );
}