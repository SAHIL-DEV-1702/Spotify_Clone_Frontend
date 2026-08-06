
import {
    Play,
    Pause,
    SkipBack,
    SkipForward,
    Heart,
    Volume2,
} from "lucide-react";


import { useState } from "react";

export default function MusicPlayer({ currentSong, audioRef }) {

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const [isPlaying, setIsPlaying] = useState(true);
    const [volume, setVolume] = useState(0.5);

    const togglePlay = () => {

        if (!audioRef.current) return;

        if (audioRef.current.paused) {
            audioRef.current.play();
        }
        else {
            audioRef.current.pause();
        }

    }

    const skipBack = () => {
        audioRef.current.currentTime -= 5
    }

    const skipForward = () => {
        audioRef.current.currentTime += 5
    }

    const handleSeek = (e) => {
        const value = Number(e.target.value);
        audioRef.current.currentTime = value;
        setCurrentTime(value);
    };

    const handleVolumeChange = (e) => {
        const value = Number(e.target.value);
        if (!audioRef.current) return;
        audioRef.current.volume = value;
        setVolume(value);
    };

    const formatTime = (time) => {

        if (isNaN(time)) return "0:00";

        const minutes = Math.floor(time / 60);

        const seconds = Math.floor(time % 60);

        return `${minutes}:${seconds.toString().padStart(2, "0")}`;

    };





    if (!currentSong) return null;
    return (
        <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-800 bg-zinc-950 px-3 py-3 sm:px-6 sm:py-4">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">


                <div className="flex w-full items-center gap-3 sm:w-1/4">
                    <img
                        src="https://picsum.photos/80"
                        alt="cover"
                        className="h-14 w-14 rounded-lg object-cover"
                    />

                    <div className="flex-1 min-w-0">
                        <h3 className="truncate font-semibold text-white">
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
                            onClick={togglePlay} >

                            {
                                isPlaying ? <Pause size={22} fill="black" /> : <Play size={22} fill="black" />
                            }

                        </button>

                        <button className="text-zinc-300 hover:text-white" onClick={skipForward}>
                            <SkipForward size={22} />
                        </button>

                    </div>

                    <div className="flex w-full items-center gap-3">
                        <span className="text-xs text-zinc-400">{formatTime(currentTime)}</span>

                        <input
                            type="range"
                            min={0}
                            max={duration}
                            value={currentTime}
                            className="flex-1 accent-green-500 "
                            onInput={handleSeek}
                            step={0.50}
                        />

                        <span className="text-xs text-zinc-400">{formatTime(duration)}</span>
                    </div>
                </div>

                <div className="flex w-1/4 items-center justify-end gap-3">
                    <Volume2 size={18} className="text-zinc-400" />
                    <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.01}
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-24 accent-green-500"

                    />
                </div>

            </div>

            <audio
                ref={audioRef}
                src={currentSong.url}
                onLoadedMetadata={() => {
                    setDuration(audioRef.current.duration);
                }}

                onTimeUpdate={() => {
                    setCurrentTime(audioRef.current.currentTime);
                }}

                autoPlay

                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />

        </footer>

    );
}