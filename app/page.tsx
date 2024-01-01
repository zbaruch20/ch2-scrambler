"use client";
import React, { useState } from "react";
import ScrambleInput from "./components/scramble-input";
import ScrambleDisplay from "./components/scramble-display";

export default function Home() {
  const [scrambles, setScrambles] = useState<string[][]>([]);

  return (
    <main>
      <h1>Corner Helicopter 2x2 Scrambler</h1>

      <ScrambleInput setScrambles={setScrambles} />
      <ScrambleDisplay scrambles={scrambles} />
    </main>
  );
}
