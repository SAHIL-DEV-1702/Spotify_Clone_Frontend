import {
    Play,
    Pause,
    SkipBack,
    SkipForward,
    Volume2,
    Heart,
} from "lucide-react";

export default function MusicPlayer() {
    return (
        <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-800 bg-zinc-950 px-6 py-4">
            <div className="mx-auto flex max-w-7xl items-center justify-between">

                {/* Song Info */}
                <div className="flex w-1/4 items-center gap-4">
                    <img
                        src="https://picsum.photos/80"
                        alt="cover"
                        className="h-14 w-14 rounded-lg object-cover"
                    />

                    <div>
                        <h3 className="font-semibold text-white">
                            Blinding Lights
                        </h3>

                        <p className="text-sm text-zinc-400">
                            The Weeknd
                        </p>
                    </div>

                    <button className="text-zinc-400 hover:text-red-500">
                        <Heart size={20} />
                    </button>
                </div>

                {/* Controls */}
                <div className="flex w-2/4 flex-col items-center">
                    <div className="mb-2 flex items-center gap-6">
                        <button className="text-zinc-300 hover:text-white">
                            <SkipBack size={22} />
                        </button>

                        <button className="rounded-full bg-white p-3 text-black hover:scale-105">
                            <Play size={22} fill="black" />
                            {/* Replace with <Pause /> when music is playing */}
                        </button>

                        <button className="text-zinc-300 hover:text-white">
                            <SkipForward size={22} />
                        </button>
                    </div>

                    <div className="flex w-full items-center gap-3">
                        <span className="text-xs text-zinc-400">0:00</span>

                        <input
                            type="range"
                            min="0"
                            max="100"
                            defaultValue="25"
                            className="w-full accent-green-500"
                        />

                        <span className="text-xs text-zinc-400">3:45</span>
                    </div>
                </div>

                {/* Volume */}
                <div className="flex w-1/4 items-center justify-end gap-3">
                    <Volume2 size={20} className="text-zinc-300" />

                    <input
                        type="range"
                        min="0"
                        max="100"
                        defaultValue="70"
                        className="w-28 accent-green-500"
                    />
                </div>

            </div>
        </footer>
    );
}