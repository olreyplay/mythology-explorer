"use client";

import { useState } from "react";
import MythCard from "@/components/MythCard";
import MythFilters from "@/components/MythFilters";
import MythRecommendation from "@/components/MythRecommendation";
import { myths } from "@/data/myths";

export default function MythsSection() {
  const [selectedVibe, setSelectedVibe] = useState("All");
  const [selectedCharacterType, setSelectedCharacterType] = useState("All");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  const filteredMyths = myths.filter((myth) => {
    const query = searchQuery.toLowerCase();

    const matchesSearch =
      myth.title.toLowerCase().includes(query) ||
      myth.region.toLowerCase().includes(query) ||
      myth.vibe.toLowerCase().includes(query) ||
      myth.characterType.toLowerCase().includes(query);

    const matchesVibe = selectedVibe === "All" || myth.vibe === selectedVibe;

    const matchesCharacterType =
      selectedCharacterType === "All" ||
      myth.characterType === selectedCharacterType;

    const matchesRegion =
      selectedRegion === "All" || myth.region === selectedRegion;

    return (
      matchesSearch && matchesVibe && matchesCharacterType && matchesRegion
    );
  });

  function toggleFavorite(id: number) {
    if (favoriteIds.includes(id)) {
      setFavoriteIds(favoriteIds.filter((favoriteId) => favoriteId !== id));
      return;
    }

    setFavoriteIds([...favoriteIds, id]);
  }

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

      <MythFilters
        selectedVibe={selectedVibe}
        selectedCharacterType={selectedCharacterType}
        selectedRegion={selectedRegion}
        onVibeChange={setSelectedVibe}
        onCharacterTypeChange={setSelectedCharacterType}
        onRegionChange={setSelectedRegion}
      />

      <div className="mt-6">
        <input
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          type="text"
          placeholder="Search by title, region, vibe, or character..."
          className="w-full rounded-full border border-white/10 bg-white/5 px-6 py-4 text-stone-100 outline-none backdrop-blur-sm transition placeholder:text-stone-500 focus:border-amber-500"
        />
      </div>

      <p className="mt-4 text-sm text-stone-500">
        {favoriteIds.length} favorite myths saved.
      </p>

      <MythRecommendation
        selectedVibe={selectedVibe}
        selectedCharacterType={selectedCharacterType}
        selectedRegion={selectedRegion}
        resultsCount={filteredMyths.length}
      />

      {filteredMyths.length === 0 && (
        <div className="mt-12 rounded-4xl border border-dashed border-white/10 bg-white/5 p-10 text-center">
          <p className="text-stone-400">No myths match these filters yet.</p>
        </div>
      )}

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {filteredMyths.map((myth) => (
          <MythCard
            key={myth.id}
            myth={myth}
            isFavorite={favoriteIds.includes(myth.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </section>
  );
}
