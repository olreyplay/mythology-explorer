import { Myth } from "@/data/myths";

type MythCardProps = {
  myth: Myth;
};

export default function MythCard({ myth }: MythCardProps) {
  return (
    <article className="overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:border-amber-500/30 hover:bg-white/[0.07]">
      <div className="flex flex-wrap gap-3">
        <span className="rounded-full bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
          {myth.region}
        </span>

        <span className="rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-300">
          {myth.vibe}
        </span>

        <span className="rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-300">
          {myth.characterType}
        </span>
      </div>

      <h3 className="mt-8 text-3xl font-bold leading-tight">{myth.title}</h3>

      <p className="mt-6 leading-7 text-stone-400">{myth.summary}</p>
    </article>
  );
}
