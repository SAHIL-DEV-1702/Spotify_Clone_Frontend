import {
    Play,
    Heart,
    MoreVertical,
    Music2,
} from "lucide-react";


export default function MusicCard({ music }) {


    return (
        <div className="group w-64 rounded-2xl bg-zinc-900 p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">


            <div className="relative">
                <img
                    src="https://picsum.photos/300/"
                    alt="cover"
                    className="aspect-square w-full rounded-xl object-cover"
                />


                <button className="absolute bottom-3 right-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-black opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:scale-110">
                    <Play size={22} fill="black" />
                </button>
            </div>


            <div className="mt-4">
                <h2 className="truncate text-lg font-semibold text-white">
                    {music.title}
                </h2>

                <p className="mt-1 truncate text-sm text-gray-400">
                    {music.artist.name}
                </p>
            </div>


            <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <button className="rounded-full p-2 text-gray-400 transition hover:bg-zinc-800 hover:text-red-500">
                        <Heart size={18} />
                    </button>

                    <button className="rounded-full p-2 text-gray-400 transition hover:bg-zinc-800 hover:text-white">
                        <Music2 size={18} />
                    </button>
                </div>

                <button className="rounded-full p-2 text-gray-400 transition hover:bg-zinc-800 hover:text-white">
                    <MoreVertical size={18} />
                </button>
            </div>
        </div>
    );
}