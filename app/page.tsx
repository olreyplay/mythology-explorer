export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#140f0f] text-stone-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.12),transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-8">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-500">
              Mythology Explorer
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight">
              Ancient Legends
            </h1>
          </div>

          <button className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium backdrop-blur-sm transition hover:bg-white/10">
            Explore Myths
          </button>
        </header>

        <section className="pt-24">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-500">
            Ancient Stories
          </p>

          <h2 className="mt-6 max-w-5xl text-6xl font-bold leading-none tracking-tight md:text-8xl">
            Explore Gods, Monsters, And Forgotten Legends.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-400">
            Discover myths from different civilizations and explore stories
            filled with heroes, monsters, prophecies, and ancient battles.
          </p>
        </section>
      </div>
    </main>
  );
}
