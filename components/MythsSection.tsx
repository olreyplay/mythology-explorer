import MythCard from "@/components/MythCard";
import { myths } from "@/data/myths";

export default function MythsSection() {
  return (
    <section className="mt-24">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-amber-500">
          Myth Collection
        </p>

        <h2 className="mt-4 text-5xl font-bold tracking-tight">
          Explore Ancient Legends
        </h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {myths.map((myth) => (
          <MythCard key={myth.id} myth={myth} />
        ))}
      </div>
    </section>
  );
}
