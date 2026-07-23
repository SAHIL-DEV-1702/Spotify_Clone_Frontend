import {
    Search,
    Bell,
    Upload,
    Home,
    Music2,
    Menu,
    LogOutIcon,
    LogInIcon,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import { logout } from "../service/authApi";



export default function Navbar({ role = "user" }) {

    const navigate = useNavigate()

    const onClickHandle = () => {
        try {
            logout
            navigate("/")
            toast.sucess("logout Success")
        } catch (error) {
            toast.error("not logout yet")
        }
    }



    return (
        <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500">
                            <Music2 className="text-black" size={22} />
                        </div>

                        <h1 className="text-xl font-bold text-white">
                            Musicify
                        </h1>
                    </div>


                    <nav className="hidden items-center gap-6 lg:flex">
                        <button className="flex items-center gap-2 text-gray-400 transition hover:text-white" >
                            <Home size={18} />
                            <Link to="/">Home</Link>
                        </button>

                        <button className="flex items-center gap-2 text-gray-400 transition hover:text-white">
                            <LogInIcon size={18} />
                            <Link to="/login">Login</Link>
                        </button>

                        <button className="flex items-center gap-2 text-gray-400 transition hover:text-white" onClick={onClickHandle}}>
                        <LogOutIcon size={18} />
                        Logout
                    </button>
                </nav>
            </div>



            <div className="hidden w-full max-w-md lg:block">
                <div className="flex items-center rounded-full bg-zinc-900 px-4 py-2">
                    <Search size={18} className="text-gray-400" />

                    <input
                        type="text"
                        placeholder="Search songs, artists..."
                        className="ml-3 w-full bg-transparent text-white placeholder:text-gray-500 focus:outline-none"
                    />
                </div>
            </div>



            <div className="flex items-center gap-3">
                {role === "artist" && (
                    <button className="hidden items-center gap-2 rounded-full bg-green-500 px-4 py-2 font-medium text-black transition hover:scale-105 lg:flex">
                        <Upload size={18} />
                        Upload
                    </button>
                )}

                <button className="rounded-full p-2 text-gray-400 transition hover:bg-zinc-900 hover:text-white">
                    <Bell size={20} />
                </button>

                <img
                    src="https://i.pravatar.cc/100"
                    alt="Profile"
                    className="h-10 w-10 rounded-full border-2 border-zinc-700 object-cover"
                />

                <button className="rounded-full p-2 text-gray-400 transition hover:bg-zinc-900 hover:text-white lg:hidden">
                    <Menu size={22} />
                </button>
            </div>
        </div>
        </header >
    );
}