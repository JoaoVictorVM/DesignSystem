export interface DesignSystem {
  id: number;
  name: string;
  url: string;
  video: string;
  accentColor: string;
}

export const designSystems: DesignSystem[] = [
  {
    id: 1,
    name: "Dev Roast",
    url: "/designsystem/devroast",
    video: "/videos/devroast.webm",
    accentColor: "#22c55e",
  },
  {
    id: 2,
    name: "Pomodoro Idle Game",
    url: "/designsystem/pomodoroidlegame",
    video: "/videos/pomodoroidlegame.webm",
    accentColor: "#5E81AC",
  },
  {
    id: 3,
    name: "Fluent 2",
    url: "https://fluent2.microsoft.design",
    video: "/videos/fluent.mp4",
    accentColor: "#0078D4",
  },
  {
    id: 4,
    name: "Lightning Design",
    url: "https://www.lightningdesignsystem.com",
    video: "/videos/lightning.mp4",
    accentColor: "#00A1E0",
  },
];

// Ordem por coluna conforme spec:
// Col 0: 1→2→3→4  (índices 0,1,2,3)
// Col 1: 3→1→4→2  (índices 2,0,3,1)
// Col 2: 2→3→4→1  (índices 1,2,3,0)
export const COLUMN_ORDERS: Record<number, number[]> = {
  0: [0, 1, 2, 3],
  1: [2, 0, 3, 1],
  2: [1, 2, 3, 0],
};

// Velocidade em px/s por coluna
// Col 0: média | Col 1: mais lenta | Col 2: mais rápida
export const COLUMN_SPEEDS: Record<number, number> = {
  0: 40,
  1: 27,
  2: 56,
};
