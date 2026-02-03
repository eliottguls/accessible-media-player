import React from 'react';

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center gap-8 px-6 text-center">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-xl">
          <h1 className="mb-3 text-4xl font-bold tracking-tight text-emerald-400">
            Tailwind actif ✅
          </h1>
          <p className="text-lg text-slate-200">
            Si ce texte est vert, Tailwind fonctionne.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Fichier : <span className="rounded bg-slate-800 px-2 py-1">src/App.tsx</span>
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-full bg-rose-500 px-3 py-1 text-sm font-semibold text-white">
            Rouge
          </span>
          <span className="rounded-full bg-amber-400 px-3 py-1 text-sm font-semibold text-slate-900">
            Jaune
          </span>
          <span className="rounded-full bg-sky-500 px-3 py-1 text-sm font-semibold text-white">
            Bleu
          </span>
          <span className="rounded-full bg-violet-500 px-3 py-1 text-sm font-semibold text-white">
            Violet
          </span>
        </div>

        <a
          className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-emerald-300 transition hover:bg-emerald-500/20"
          href="https://tailwindcss.com/docs/utility-first"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir la doc Tailwind
        </a>
      </section>
    </main>
  );
}

export default App;
