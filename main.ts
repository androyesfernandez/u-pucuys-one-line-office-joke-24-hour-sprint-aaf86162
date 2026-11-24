// One-Line Office Joke: 24-Hour Sprint.
//
// This program writes one single-line joke about office life to
// /output/entry.txt. The joke is a fixed line chosen by duelling
// drafts against the competition judge's brief: one concrete scene,
// setup and punchline on one line, no explanation, no preamble.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "The intern fixed in ten minutes the bug a steering committee had studied for a year, and the committee thanked her by inviting her to present it to the committee that studies committees.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
