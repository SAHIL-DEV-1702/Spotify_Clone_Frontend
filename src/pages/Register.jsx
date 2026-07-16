import { Link } from "react-router-dom";
import { UserPlus, Music2 } from "lucide-react";

export default function Register() {


    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-6">
            <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">
                {/* Logo */}
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

                <form className="space-y-5">
                    <div>
                        <label className="mb-2 block text-sm text-zinc-300">
                            Full Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-green-500"
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
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-zinc-300">
                            Role
                        </label>

                        <select className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-green-500">
                            <option value="user">User</option>
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