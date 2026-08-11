import { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import MusicCard from "../components/MusicCard";
import { deleteMusic as apiDeleteMusic } from "../service/musicApi";
import { getAllMusic } from "../service/musicApi";
import { toast } from "react-toastify";
import MusicPlayer from "../components/MusicPlayer";
import Loader from "../components/Loader";


export default function Home() {

    const [musics, setMusics] = useState([])

    const [currentSong, setCurrentSong] = useState(null);

    const [isPlaying, setIsPlaying] = useState(false);

    const [search, setSearch] = useState("");

    const audioRef = useRef(null);

    const [recentlyPlayed, setRecentlyPlayed] = useState([]);

    const [page, setPage] = useState(1);

    const [hasMore, setHasMore] = useState(true);

    const [loading, setLoading] = useState(false);

    const loaderRef = useRef(null);





    useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await getAllMusic(page, 20)
                setMusics((prev) => [...prev, ...res.data.musics]);
                setHasMore(res.data.hasMore);

                console.log(res.data.musics, "musics log")
                console.log(res.data, "data")
            } catch (error) {
                toast(error.response?.data?.messege)
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();

    }, [page]);



    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && !loading) {
                    setPage((prev) => prev + 1);
                }
            },
            {
                threshold: 1,
            }
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [hasMore, loading]);



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


    const handleDelete = async (id) => {
        try {
            await apiDeleteMusic(id);
            setMusics((prev) => prev.filter((m) => m._id !== id));
            toast.success("Music deleted successfully");
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Failed to delete music");
        }
    };


    useEffect(() => {
        if (currentSong && audioRef.current) {

            audioRef.current.play()
                .then(() => {
                    setIsPlaying(true);
                })
                .catch((err) => {
                    console.log(err);
                });

        }
    }, [currentSong]);


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
                                onDelete={handleDelete}
                                currentSong={currentSong}
                            />
                        ))}

                        <div ref={loaderRef} className="h-10">
                            {loading && <Loader />}
                        </div>

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
                                onDelete={handleDelete}
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
                                onDelete={handleDelete}
                                currentSong={currentSong}

                            />
                        ))}
                    </div>
                </section>
            </main>

            <MusicPlayer
                currentSong={currentSong}
                audioRef={audioRef}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}

            />
        </div>
    );
}