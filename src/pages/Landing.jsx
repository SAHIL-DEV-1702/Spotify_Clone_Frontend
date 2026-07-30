import { Link } from "react-router-dom";
import {
    Music2,
    Headphones,
    Heart,
    Zap
} from "lucide-react";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white">


            <nav className="flex items-center justify-between px-10 py-5">
                <div className="flex items-center gap-2">
                    <Music2 className="text-green-500" size={34} />
                    <h1 className="text-2xl font-bold">Musicify</h1>
                </div>


            </nav>

            {/* Hero */}
            <section className="mx-auto flex max-w-7xl flex-col items-center px-8 py-24 text-center">

                <h1 className="text-6xl font-bold leading-tight">
                    Feel Every
                    <span className="text-green-500"> Beat.</span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg text-zinc-400">
                    Stream your favorite songs anytime, anywhere.
                    Discover new artists, create playlists and enjoy
                    unlimited music with BeatWave.
                </p>

                <div className="mt-10 flex gap-5">
                    <Link
                        to="/login"
                        className="rounded-full bg-green-500 px-8 py-3 font-semibold text-black hover:bg-green-400"
                    >
                        Start Listening
                    </Link>

                    <Link
                        to="/register"
                        className="rounded-full border border-zinc-600 px-8 py-3 hover:bg-zinc-800"
                    >
                        Create Account
                    </Link>
                </div>
            </section>



            <section className="mx-auto grid max-w-6xl gap-8 px-8 py-20 md:grid-cols-3">

                <div className="rounded-2xl bg-zinc-900 p-8 text-center">
                    <Headphones className="mx-auto text-green-500" size={45} />
                    <h2 className="mt-5 text-xl font-bold">
                        Unlimited Music
                    </h2>

                    <p className="mt-3 text-zinc-400">
                        Listen to thousands of songs without interruption.
                    </p>
                </div>

                <div className="rounded-2xl bg-zinc-900 p-8 text-center">
                    <Heart className="mx-auto text-green-500" size={45} />
                    <h2 className="mt-5 text-xl font-bold">
                        Save Favorites
                    </h2>

                    <p className="mt-3 text-zinc-400">
                        Like songs and build your personal collection.
                    </p>
                </div>

                <div className="rounded-2xl bg-zinc-900 p-8 text-center">
                    <Zap className="mx-auto text-green-500" size={45} />
                    <h2 className="mt-5 text-xl font-bold">
                        Fast Streaming
                    </h2>

                    <p className="mt-3 text-zinc-400">
                        Smooth playback with a beautiful music player.
                    </p>
                </div>

            </section>


            <section className="px-8 py-20 text-center">

                <h2 className="text-4xl font-bold">
                    Ready to Enjoy Music?
                </h2>

                <p className="mt-4 text-zinc-400">
                    Join BeatWave today and start exploring millions of songs.
                </p>

                <Link
                    to="/register"
                    className="mt-8 inline-block rounded-full bg-green-500 px-8 py-3 font-semibold text-black hover:bg-green-400"
                >
                    Get Started
                </Link>

            </section>



            <footer className="border-t border-zinc-800 py-8 text-center text-zinc-500">
                © 2026. Musicify Made with ❤️ using React & Node.js
                <p>  patilsahil.dev@gmail.com</p>
            </footer>

        </div>
    );
}