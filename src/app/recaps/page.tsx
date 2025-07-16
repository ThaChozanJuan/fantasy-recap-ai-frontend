import Link from 'next/link';

export default function Recaps() {
  return (
    <main className="min-h-screen bg-cover bg-center text-white" style={{ backgroundImage: "url('/images/fantasy-bg.jpg')" }}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-80 px-6 py-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 tracking-tight mb-2 drop-shadow-lg">
          Your Fantasy Recaps
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl text-center">
          Check out your latest recaps here.
        </p>
        <div className="mt-6 text-gray-400">
          [Recap content will be fetched from the backend soon]
        </div>
        <Link href="/dashboard">
          <button className="mt-6 bg-gradient-to-r from-yellow-400 to-pink-500 px-8 py-4 text-lg rounded-full text-white font-semibold shadow-lg hover:scale-105 transition duration-300">
            Back to Dashboard
          </button>
        </Link>
      </div>
    </main>
  );
}