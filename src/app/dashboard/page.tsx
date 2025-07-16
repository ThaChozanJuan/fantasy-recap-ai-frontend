'use client';

import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-950 text-white font-sans flex">
      {/* Sidebar */}
      <aside className="w-64 h-screen bg-gray-900 border-r border-yellow-500 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-yellow-400 mb-8">Recapr</h2>
          <nav className="space-y-4">
            {['Home', 'Matchups', 'Recaps', 'League Banter'].map((item, i) => (
              <button
                key={i}
                onClick={() => router.push(`/${item.toLowerCase().replace(' ', '')}`)}
                className="block text-left w-full text-gray-300 hover:text-yellow-400 hover:pl-2 transition-all"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
        <button
          onClick={() => router.push('/api/auth/logout')}
          className="mt-12 text-sm text-gray-400 hover:text-red-400"
        >
          Log Out
        </button>
      </aside>

      {/* Content */}
      <section className="flex-1 p-10">
        <h1 className="text-4xl font-bold text-yellow-300 mb-4">Welcome back, Coach</h1>
        <p className="text-gray-400 mb-10">Here’s your fantasy breakdown for the week:</p>

        {/* Mock Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Biggest Blowout', value: 'Lick My Tatum 🔥' },
            { title: 'Biggest Choke', value: 'The Doomed Dogs 🫣' },
            { title: 'Top Scorer', value: 'Gun Show - 1457 pts 🏆' },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-700 p-6 rounded-lg shadow-md hover:shadow-yellow-500/30 transition"
            >
              <h3 className="text-yellow-400 font-semibold mb-2">{stat.title}</h3>
              <p className="text-xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
