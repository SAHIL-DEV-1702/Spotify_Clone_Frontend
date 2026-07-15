import Navbar from "../components/Navbar";
import MusicCard from "../components/MusicCard";

export default function Home() {
    const musics = Array.from({ length: 20 }, (_, index) => ({
        _id: index,
        title: `Song ${index + 1}`,
        artist: "Unknown Artist",
    }));

    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            <Navbar />

            <main className="mx-auto max-w-7xl px-6 py-8">
               
                <section className="mb-10 rounded-2xl bg-linear-to-r from-green-500 to-emerald-700 p-8">
                    <h1 className="text-4xl font-bold">
                        Welcome Back 👋
                    </h1>

                    <p className="mt-3 max-w-xl text-green-100">
                        Discover new music, enjoy your favorite artists, and
                        stream millions of songs anytime.
                    </p>

                    <button className="mt-6 rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:bg-zinc-900">
                        Explore Music
                    </button>
                </section>

                
                <section className="mb-10">
                    <div className="mb-5 flex items-center justify-between">
                        <h2 className="text-2xl font-bold">
                            🔥 ALL Songs
                        </h2>

                        <button className="text-green-500 hover:underline">
                            View All
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {musics.map((music) => (
                            <MusicCard
                                key={music._id}
                                music={music}
                            />
                        ))}
                    </div>
                </section>

          
                <section className="mb-10">
                    <div className="mb-5 flex items-center justify-between">
                        <h2 className="text-2xl font-bold">
                            ⭐ Recommended
                        </h2>

                        <button className="text-green-500 hover:underline">
                            View All
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {musics.map((music) => (
                            <MusicCard
                                key={music._id}
                                music={music}
                            />
                        ))}
                    </div>
                </section>

                
                <section>
                    <div className="mb-5 flex items-center justify-between">
                        <h2 className="text-2xl font-bold">
                            🎧 Recently Played
                        </h2>

                        <button className="text-green-500 hover:underline">
                            View All
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {musics.map((music) => (
                            <MusicCard
                                key={music._id}
                                music={music}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}