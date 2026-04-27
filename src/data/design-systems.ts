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
    name: "Webhook Inspector",
    url: "/designsystem/webhookinspector",
    video: "/videos/webhookinspector.webm",
    accentColor: "#818cf8",
  },
  {
    id: 4,
    name: "Lightning Design",
    url: "https://www.lightningdesignsystem.com",
    video: "/videos/lightning.mp4",
    accentColor: "#00A1E0",
  },
];

export const COLUMN_ORDERS: Record<number, number[]> = {
  0: [0, 1, 2, 3],
  1: [2, 0, 3, 1],
  2: [1, 2, 3, 0],
};

export const COLUMN_SPEEDS: Record<number, number> = {
  0: 40,
  1: 27,
  2: 56,
};
