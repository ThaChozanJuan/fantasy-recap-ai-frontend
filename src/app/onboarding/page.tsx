'use client';

import { useState } from 'react';

export default function OnboardingForm() {
  const [league_name, setLeagueName] = useState('');
  const [league_format, setLeagueFormat] = useState('PPR');
  const [league_id, setLeagueId] = useState('');
  const [manager_notes, setManagerNotes] = useState('');
  const [league_lore, setLeagueLore] = useState('');
  const [roast_tone, setRoastTone] = useState('Light banter');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      league_name,
      league_format,
      league_id,
      manager_notes,
      league_lore,
      roast_tone,
      email,
    };

    try {
      const res = await fetch('http://127.0.0.1:8000/onboarding', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const data = await res.json();
        console.log('✅ Submission success:', data);
        alert('Form submitted! 🎉');
      } else {
        const error = await res.text();
        console.error('❌ Submission failed:', error);
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('⚠️ Submission error:', error);
      alert('Error submitting the form. Is the backend running?');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center px-4">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-yellow-400 flex items-center gap-2">
          🏈 League Onboarding Form
        </h2>

        <div className="mb-4">
          <label className="block mb-1 font-semibold text-sm text-gray-300">League Name</label>
          <input
            className="w-full p-3 rounded bg-gray-700 text-white"
            placeholder="e.g. The Gridiron Gronks"
            value={league_name}
            onChange={(e) => setLeagueName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold text-sm text-gray-300">League Format</label>
          <select
            className="w-full p-3 rounded bg-gray-700 text-white"
            value={league_format}
            onChange={(e) => setLeagueFormat(e.target.value)}
          >
            <option>PPR</option>
            <option>Standard</option>
            <option>Half-PPR</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold text-sm text-gray-300">League ID or Invite Link</label>
          <input
            className="w-full p-3 rounded bg-gray-700 text-white"
            placeholder="e.g. 3457821 or sleeper.com/league/..."
            value={league_id}
            onChange={(e) => setLeagueId(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold text-sm text-gray-300">Tell us about your managers</label>
          <textarea
            className="w-full p-3 rounded bg-gray-700 text-white"
            placeholder="e.g. Steve is a known auto-drafter. Ben hates Taysom Hill. Joel once traded Tyreek for a kicker."
            value={manager_notes}
            onChange={(e) => setManagerNotes(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold text-sm text-gray-300">League Lore or Inside Jokes</label>
          <textarea
            className="w-full p-3 rounded bg-gray-700 text-white"
            placeholder="e.g. The 'Chris Carson Incident'. Latty’s D/ST strategy. 9:15 Joel."
            value={league_lore}
            onChange={(e) => setLeagueLore(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold text-sm text-gray-300">Roast Tone Preference</label>
          <select
            className="w-full p-3 rounded bg-gray-700 text-white"
            value={roast_tone}
            onChange={(e) => setRoastTone(e.target.value)}
          >
            <option>Light banter</option>
            <option>Brutal honesty</option>
            <option>League-roasting chaos</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-semibold text-sm text-gray-300">Email for recaps</label>
          <input
            type="email"
            className="w-full p-3 rounded bg-gray-700 text-white"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-500 transition"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
}
