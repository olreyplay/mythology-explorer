type MythFiltersProps = {
  selectedVibe: string;
  selectedCharacterType: string;
  selectedRegion: string;
  onVibeChange: (vibe: string) => void;
  onCharacterTypeChange: (characterType: string) => void;
  onRegionChange: (region: string) => void;
};

const vibes = ["All", "Dark", "Heroic", "Tragic", "Mysterious", "Divine"];
const characterTypes = ["All", "God", "Hero", "Monster"];
const regions = ["All", "Greek", "Norse", "Egyptian", "Japanese", "Celtic"];

export default function MythFilters({
  selectedVibe,
  selectedCharacterType,
  selectedRegion,
  onVibeChange,
  onCharacterTypeChange,
  onRegionChange,
}: MythFiltersProps) {
  return (
    <div className="mt-10 grid gap-6 rounded-4xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:grid-cols-3">
      <div>
        <label className="text-sm uppercase tracking-[0.25em] text-amber-500">
          Vibe
        </label>

        <select
          value={selectedVibe}
          onChange={(event) => onVibeChange(event.target.value)}
          className="mt-3 w-full rounded-full border border-white/10 bg-[#140f0f] px-5 py-3 text-stone-100 outline-none transition focus:border-amber-500"
        >
          {vibes.map((vibe) => (
            <option key={vibe}>{vibe}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-sm uppercase tracking-[0.25em] text-amber-500">
          Character
        </label>

        <select
          value={selectedCharacterType}
          onChange={(event) => onCharacterTypeChange(event.target.value)}
          className="mt-3 w-full rounded-full border border-white/10 bg-[#140f0f] px-5 py-3 text-stone-100 outline-none transition focus:border-amber-500"
        >
          {characterTypes.map((characterType) => (
            <option key={characterType}>{characterType}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-sm uppercase tracking-[0.25em] text-amber-500">
          Region
        </label>

        <select
          value={selectedRegion}
          onChange={(event) => onRegionChange(event.target.value)}
          className="mt-3 w-full rounded-full border border-white/10 bg-[#140f0f] px-5 py-3 text-stone-100 outline-none transition focus:border-amber-500"
        >
          {regions.map((region) => (
            <option key={region}>{region}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
