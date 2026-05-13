type MythRecommendationProps = {
  selectedVibe: string;
  selectedCharacterType: string;
  selectedRegion: string;
  resultsCount: number;
};

export default function MythRecommendation({
  selectedVibe,
  selectedCharacterType,
  selectedRegion,
  resultsCount,
}: MythRecommendationProps) {
  function formatFilterValue(value: string) {
    if (value === "All") {
      return "any";
    }

    return value.toLowerCase();
  }

  return (
    <div className="mt-8 rounded-4xl border border-amber-500/20 bg-amber-500/10 p-6">
      <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
        Recommended Myths
      </p>

      <h3 className="mt-3 text-2xl font-bold">
        {resultsCount} stories match your selection.
      </h3>

      <p className="mt-3 text-stone-400">
        Showing {formatFilterValue(selectedVibe)} myths with{" "}
        {formatFilterValue(selectedCharacterType)} characters from{" "}
        {formatFilterValue(selectedRegion)} mythology.
      </p>
    </div>
  );
}
