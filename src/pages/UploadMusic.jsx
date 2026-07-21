import { Music2, UploadCloud } from "lucide-react";
import { useState } from "react";
import { uploadMusic } from "../service/musicApi"

export default function UploadMusic() {
    const [formData, setFormData] = useState({
        title: "",
        album: "",
        language: "",
        music: "",

    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleFileChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            music: e.target.files[0],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append("title", formData.title);
        data.append("album", formData.album);
        data.append("language", formData.language);
        data.append("music", formData.music);

        console.log(formData, "form data printed");


        uploadMusic(formData);
    };

    return (
        <div className="min-h-screen bg-zinc-950 px-6 py-10 text-white">
            <div className="mx-auto max-w-4xl">

                <div className="mb-8">
                    <h1 className="text-4xl font-bold">Upload Music</h1>
                    <p className="mt-2 text-zinc-400">
                        Upload your latest track and make it available to listeners.
                    </p>
                </div>

                <form
                    className="space-y-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-8"
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                >


                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Song Title
                        </label>

                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter song title"
                            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none focus:border-green-500"
                        />
                    </div>


                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Album
                        </label>

                        <input
                            type="text"
                            name="album"
                            value={formData.album}
                            onChange={handleChange}
                            placeholder="Album name"
                            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none focus:border-green-500"
                        />
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">


                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Language
                            </label>

                            <input
                                type="text"
                                name="language"
                                value={formData.language}
                                onChange={handleChange}
                                placeholder="e.g. English"
                                className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none focus:border-green-500"
                            />
                        </div>

                    </div>


                    <div>
                        <label className="mb-3 block text-sm font-medium">
                            Music File
                        </label>

                        <label className="flex h-56 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-zinc-700 transition hover:border-green-500 hover:bg-zinc-800">

                            <Music2 size={50} className="text-zinc-500" />

                            <h3 className="mt-4 text-lg font-semibold">
                                Upload MP3 File
                            </h3>


                            <div>
                                {formData.music ? (<p className="mt-2 text-sm text-zinc-400">
                                    {formData.music.name}
                                </p>) : (<p className="mt-2 text-sm text-zinc-400">
                                    Click to browse or drag & drop your music here
                                </p>)}
                            </div>



                            <input
                                type="file"
                                name="music"
                                accept=".mp3,audio/*"
                                onChange={handleFileChange}
                                className="hidden"

                            />
                        </label>
                    </div>



                    <div className="flex justify-end gap-4 pt-4">
                        <button
                            type="button"
                            className="rounded-lg border border-zinc-700 px-6 py-3 hover:bg-zinc-800"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400"
                        >
                            <UploadCloud size={20} />
                            Upload Music
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}