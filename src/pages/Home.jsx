import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MusicCard from "../components/MusicCard";
import { getAllMusic } from "../service/musicApi";
import { toast } from "react-toastify";
import { useRef } from "react";
import MusicPlayer from "../components/MusicPlayer";


export default function Home() {

    const [musics, setMusics] = useState([])

    const [currentSong, setCurrentSong] = useState(null);

    const [isPlaying, setIsPlaying] = useState(false);

    const [search, setSearch] = useState("");

    const audioRef = useRef(null);

    const [recentlyPlayed, setRecentlyPlayed] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAllMusic()
                setMusics(res.data.musics);
                console.log(res.data.musics, "musics log")
                console.log(res.data, "data")
            } catch (error) {
                toast(error.repsponse?.data?.messege)
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log(currentSong);
    }, [currentSong]);

    const filteredSongs = musics.filter((song) =>
        song.title.toLowerCase().includes(search.toLowerCase())
    );

    const handlePlay = (song) => {

        if (currentSong?._id === song._id) {
            setIsPlaying(prev => !prev);
        }
        else {
            setCurrentSong(song);
            setIsPlaying(true);
        }

        setRecentlyPlayed((prev) => {
            const filtered = prev.filter(item => item._id !== song._id);
            return [song, ...filtered].slice(0, 10);
        });
    };

    const recommendedSongs = currentSong
        ? musics.filter(
            (song) =>
                song.language === currentSong.language &&
                song._id !== currentSong._id
        )
        : [];

    return (
        <div className="min-h-screen bg-zinc-950 text-white">

            <Navbar search={search} setSearch={setSearch} />

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

                    <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {filteredSongs.map((music) => (
                            <MusicCard
                                key={music._id}
                                music={music}
                                onPlay={handlePlay}
                                currentSong={currentSong}
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

                    <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {recommendedSongs.map((music) => (
                            <MusicCard
                                key={music._id}
                                music={music}
                                onPlay={handlePlay}
                                currentSong={currentSong}
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

                    <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {recentlyPlayed.map((music) => (
                            <MusicCard
                                key={music._id}
                                music={music}
                                onPlay={handlePlay}
                                currentSong={currentSong}

                            />
                        ))}
                    </div>
                </section>
            </main>

            <MusicPlayer
                currentSong={currentSong}
                audioRef={audioRef}
            />

        </div>
    );
}