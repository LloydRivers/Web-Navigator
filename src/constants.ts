export const Messages = {
  baseInfo: "\nEnter a url",
  backInfo: "B|b for back page",
  nextInfo: "N|n for next page",
  quitInfo: "Q|q for quit",
  question: "Where would you like to go today? ",
} as const;

export enum Actions {
  BACK = "B",
  NEXT = "N",
  QUIT = "Q",
}
