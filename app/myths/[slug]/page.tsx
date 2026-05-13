import { myths } from "@/data/myths";

type MythPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function MythPage({ params }: MythPageProps) {
  const { slug } = await params;

  const myth = myths.find((myth) => myth.slug === slug);

  if (!myth) {
    return (
      <main className="min-h-screen bg-[#140f0f] px-6 py-16 text-stone-100">
        <h1 className="text-4xl font-bold">Myth Not Found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#140f0f] text-stone-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.12),transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-500">
          {myth.region} Mythology
        </p>

        <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          {myth.title}
        </h1>

        <div className="mt-8 flex flex-wrap gap-3">
          <span className="rounded-full bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
            {myth.vibe}
          </span>

          <span className="rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-300">
            {myth.characterType}
          </span>
        </div>

        <p className="mt-10 text-xl leading-9 text-stone-300">{myth.summary}</p>

        <article className="mt-12 rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <p className="leading-8 text-stone-400">{myth.story}</p>
        </article>
      </div>
    </main>
  );
}
