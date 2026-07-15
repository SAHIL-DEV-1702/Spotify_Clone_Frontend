import { Link } from "react-router-dom";
import { LogIn, Music2 } from "lucide-react";


export default function Login() {


    return (
        <>

            <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-6">
                <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">
                    {/* Logo */}
                    <div className="mb-8 text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500">
                            <Music2 size={32} className="text-black" />
                        </div>

                        <h1 className="mt-5 text-3xl font-bold text-white">
                            Welcome Back
                        </h1>

                        <p className="mt-2 text-zinc-400">
                            Sign in to continue listening.
                        </p>
                    </div>

                    <form className="space-y-5">
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
                                placeholder="Enter your password"
                                className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-green-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 py-3 font-semibold text-black transition hover:bg-green-400"
                        >
                            <LogIn size={20} />
                            Login
                        </button>
                    </form>

                    <p className="mt-6 text-center text-zinc-400">
                        Don't have an account?{" "}
                        <Link
                            to="/register"
                            className="font-medium text-green-500 hover:underline"
                        >
                            Register
                        </Link>
                    </p>
                </div>
            </div>



        </>
    );
}