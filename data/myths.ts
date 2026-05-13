export type Myth = {
  id: number;
  title: string;
  region: string;
  vibe: string;
  characterType: string;
  summary: string;
};

export const myths: Myth[] = [
  {
    id: 1,
    title: "Medusa And The Hero Perseus",
    region: "Greek",
    vibe: "Dark",
    characterType: "Monster",
    summary:
      "A cursed figure with serpents for hair becomes part of one of the most famous monster-slaying stories in Greek mythology.",
  },
  {
    id: 2,
    title: "Thor And The Midgard Serpent",
    region: "Norse",
    vibe: "Heroic",
    characterType: "God",
    summary:
      "Thor faces the world-encircling serpent in a myth filled with strength, danger, and cosmic scale.",
  },
  {
    id: 3,
    title: "Isis And Osiris",
    region: "Egyptian",
    vibe: "Tragic",
    characterType: "God",
    summary:
      "A story of betrayal, loss, and restoration centered around two of the most important gods in Egyptian mythology.",
  },
  {
    id: 4,
    title: "The Minotaur In The Labyrinth",
    region: "Greek",
    vibe: "Mysterious",
    characterType: "Monster",
    summary:
      "A terrifying creature waits inside a maze until a young hero enters the labyrinth to face it.",
  },
  {
    id: 5,
    title: "Amaterasu And The Hidden Sun",
    region: "Japanese",
    vibe: "Divine",
    characterType: "God",
    summary:
      "The sun goddess hides away from the world, leaving the heavens and earth in darkness.",
  },
  {
    id: 6,
    title: "Cú Chulainn And The Warrior Trial",
    region: "Celtic",
    vibe: "Heroic",
    characterType: "Hero",
    summary:
      "A legendary warrior proves his courage through impossible battles and fierce loyalty.",
  },
];
