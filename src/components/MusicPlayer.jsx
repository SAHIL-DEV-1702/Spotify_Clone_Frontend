
import {
    Play,
    Pause,
    SkipBack,
    SkipForward,
    Volume2,
    Heart,
} from "lucide-react";


import { useState, useEffect } from "react";

export default function MusicPlayer({ currentSong, audioRef }) {

    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setIsPlaying(!isPlaying);
    };

    // const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);


    const skipBack = () => {
        audioRef.current.currentTime -= 5
    }

    const skipForward = () => {
        audioRef.current.currentTime += 5
    }

    useEffect(() => {
        const audio = audioRef.current;

        const handleLoadedMetadata = () => {
            setDuration(audio.duration);
        };

        audio.addEventListener("loadedmetadata", handleLoadedMetadata);

        return () => {
            audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        };


    }, [audioRef, currentSong])



    if (!currentSong) return null;
    return (
        <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-800 bg-zinc-950 px-6 py-4">
            <div className="mx-auto flex max-w-7xl items-center justify-between">


                <div className="flex w-1/4 items-center gap-4">
                    <img
                        src="https://picsum.photos/80"
                        alt="cover"
                        className="h-14 w-14 rounded-lg object-cover"
                    />

                    <div>
                        <h3 className="font-semibold text-white">
                            {currentSong.title}
                        </h3>

                        <p className="text-sm text-zinc-400">
                            {currentSong.artist.name}
                        </p>
                    </div>

                    <button className="text-zinc-400 hover:text-red-500">
                        <Heart size={20} color="red" />
                    </button>
                </div>


                <div className="flex w-2/4 flex-col items-center">
                    <div className="mb-2 flex items-center gap-6">
                        <button className="text-zinc-300 hover:text-white" onClick={skipBack}>
                            <SkipBack size={22} />
                        </button>

                        <button className="rounded-full bg-white p-3 text-black hover:scale-105"
                            onClick={() => togglePlay} >

                            {isPlaying ? <Play size={22} fill="black" />
                                : <Pause size={22} fill="black" />
                            }

                        </button>

                        <button className="text-zinc-300 hover:text-white" onClick={skipForward}>
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

                        <span className="text-xs text-zinc-400">{duration}</span>
                    </div>
                </div>


                <div className="flex w-1/4 items-center justify-end gap-3">
                    <Volume2 size={20} className="text-zinc-300" />

                    <input
                        type="range"
                        min="0"
                        max="100"
                        defaultValue="70"
                        className="w-28 accent-green-500"
                        onClick={""}
                    />
                </div>

            </div>

            <audio
                ref={audioRef}
                src={currentSong.url}
                autoPlay
            />

        </footer>

    );
}