import Link from 'next/link';

export default function Signup() {
  return (
    <main className="min-h-screen bg-cover bg-center text-white" style={{ backgroundImage: "url('/images/fantasy-bg.jpg')" }}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-80 px-6 py-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 tracking-tight mb-2 drop-shadow-lg">
          Sign Up for Fantasy Recap
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl text-center">
          Join to get hilarious, personality-driven recaps.
        </p>
        <form className="mt-6 flex flex-col gap-4 w-full max-w-md">
          <input
            type="text"
            placeholder="Username"
            className="rounded px-4 py-2 border border-gray-300 text-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded px-4 py-2 border border-gray-300 text-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded px-4 py-2 border border-gray-300 text-black"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-yellow-400 to-pink-500 px-8 py-4 text-lg rounded-full text-white font-semibold shadow-lg hover:scale-105 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-400">
          Already have an account?{' '}
          <Link href="/api/auth/login" className="text-yellow-300 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
}