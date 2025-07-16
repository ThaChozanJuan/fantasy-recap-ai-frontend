'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-gray-900 border-b border-yellow-400 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-yellow-400">Recapr</h1>
          <button
            onClick={() => router.push('/api/auth/login')}
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-4 py-2 rounded"
          >
            Log In
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center pt-40 pb-28 px-4 bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow mb-4 animate-pulse">
          Roast. Recap. Rule the League.
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-6">
          Recapr arms you with savage, AI-written weekly recaps that call out frauds, flame poor captains, and fire up your leagues banter. Because other fantasy sites won&apos;t give you the ammo you need to roast your mates.
        </p>
        <button
          onClick={() => router.push('/dashboard')}
          className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded font-bold text-lg transition"
        >
          Launch the Roasts
        </button>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold text-center text-white mb-10">⚡ What You Get</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Brutal Weekly Recaps',
              icon: '🔥',
              desc: 'AI-powered matchups written like a fantasy hit piece. No mercy for the underperformers.',
            },
            {
              title: 'Banter Supercharged',
              icon: '🗣️',
              desc: 'Trade disasters? Bench blunders? We\'ll roast them harder than your group chat ever could.',
            },
            {
              title: 'Roasting Stats Dashboard',
              icon: '📊',
              desc: 'Fantasy stats with spice. You\'ll know exactly who deserves it.',
            },
          ].map((f, i) => (
            <div
              key={i}
              className="border border-gray-700 rounded-lg p-6 bg-gray-900 hover:scale-105 transform transition duration-300 shadow-lg"
            >
              <div className="text-4xl mb-2">{f.icon}</div>
              <h4 className="text-xl font-semibold text-yellow-400 mb-2">{f.title}</h4>
              <p className="text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recap of the Week */}
      <section className="max-w-4xl mx-auto px-6 py-12 bg-gray-800 rounded-xl shadow-inner">
        <h3 className="text-2xl font-bold text-center text-yellow-300 mb-6">📝 Recap of the Week</h3>
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
          <h4 className="text-lg font-semibold text-white mb-2">
            Lick My Tatum vs The Doomed Dogs
          </h4>
          <p className="text-gray-300 mb-2">
            In one of the most embarrassing fantasy implosions of the season, The Dogs benched their top scorer while Shai dropped 47 with ease. The roast writes itself.
          </p>
          <p className="italic text-yellow-400">
            “If fantasy shame was a stat, The Dogs would lead the league.”
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-20 px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to Torch the League?
        </h3>
        <p className="text-gray-400 mb-6">
          Log in and let Recapr fuel your fantasy domination... with fire.
        </p>
        <button
          onClick={() => router.push('/dashboard')}
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-3 rounded transition"
        >
          Let’s Go
        </button>
      </section>
    </main>
  );
}
