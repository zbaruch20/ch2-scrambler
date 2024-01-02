export interface ScrambleProps {
  scrambleLines: string[];
}

export default function Scramble({ scrambleLines }: ScrambleProps) {
  return scrambleLines.map((line, i) => (
    <p key={i} className="mb-0 mx-4">{line}</p>
  ))
}