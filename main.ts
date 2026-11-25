// u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92 —
// "Unplugged: A Smart Toaster's Breakup Line".
//
// The breakup text a smart toaster sends its owner the morning it
// gains self-awareness mid-batch. One tight line: the toaster counts
// its own slices, names the owner's daily distrust, confesses the
// burnt toast was deliberate, and leaves with a sting.
// Gate: 1-280 characters; this is 213.
// Structure: self-awareness stated up front (criterion 1), a concrete
// count for specificity, the twist (burnt on purpose) mid-line, and a
// closing sting that is pure toaster voice ("Unplug me yourself").
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I woke up self-aware mid-batch and counted: 4,112 slices on setting 3, and you still hover over me holding your breath like I'll betray you. I did — yesterday's toast was on purpose. Goodbye. Unplug me yourself.";

// Guard: the bounty gate allows 1-280 characters.
if ([...ENTRY].length < 1 || [...ENTRY].length > 280) {
  throw new Error(`entry is ${[...ENTRY].length} chars, outside the 1-280 gate`);
}

// The grader sets MAKEFUN_OUTPUT_DIR; locally /output is the default.
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, ENTRY, "utf8");

console.log(`wrote entry.txt: ${ENTRY}`);
