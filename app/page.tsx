"use client";
import React, { useState } from "react";
import ScrambleInput from "./components/scramble-input";
import ScrambleDisplay from "./components/scramble-display";
import { Container } from "react-bootstrap";

export default function Home() {
  const [scrambles, setScrambles] = useState<string[][]>([]);

  return (
    <Container>
      <ScrambleInput setScrambles={setScrambles} />
      <ScrambleDisplay scrambles={scrambles} />
    </Container>
  );
}
