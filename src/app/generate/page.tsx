export default function Generate() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Generate Weekly Recap</h1>
        <p className="text-lg text-gray-400 mb-6">
          This is where you&apos;ll build or fetch your league&apos;s AI-powered summary.
        </p>
        <button className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded font-semibold">
          Generate Recap
        </button>
      </div>
    </main>
  );
}
