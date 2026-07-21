import { Link } from "react-router-dom";
import { UserPlus, Music2 } from "lucide-react";
import { useState } from "react";
import { register } from "../service/authApi";
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";

export default function Register() {

    const navigate = useNavigate();
    const [formdata, setFormdata] = useState({
        name: "",
        email: "",
        password: "",

    })

    const handlechange = (e) => {

        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value,
        })

    }

    const submitHandle = async (e) => {
        e.preventDefault()
        try {
            const res = await register(formdata.data);
            navigate("/")
            toast.info("register sucessfully");

            console.log(res.data);

        } catch (err) {
            toast.error(`${err.response.data}`)
            console.log(err.response.data);
        }
    }


    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-6">
            <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">

                <div className="mb-8 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500">
                        <Music2 size={32} className="text-black" />
                    </div>

                    <h1 className="mt-5 text-3xl font-bold text-white">
                        Create Account
                    </h1>

                    <p className="mt-2 text-zinc-400">
                        Join and start sharing your music.
                    </p>
                </div>

                <form className="space-y-5" onSubmit={submitHandle} >
                    <div>
                        <label className="mb-2 block text-sm text-zinc-300">
                            Full Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-green-500"
                            onChange={handlechange}
                            value={formdata.name}
                            name="name"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-zinc-300">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-green-500"
                            onChange={handlechange}
                            value={formdata.email}
                            name="email"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-zinc-300">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Create a password"
                            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-green-500"
                            onChange={handlechange}
                            value={formdata.password}
                            name="password"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-zinc-300">
                            Role
                        </label>

                        <select className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-green-500">
                            <option value="user" >User</option>
                            <option value="artist">Artist</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 py-3 font-semibold text-black transition hover:bg-green-400"
                    >
                        <UserPlus size={20} />
                        Register
                    </button>
                </form>

                <p className="mt-6 text-center text-zinc-400">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="font-medium text-green-500 hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}