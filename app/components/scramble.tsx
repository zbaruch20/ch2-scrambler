export interface ScrambleProps {
  scrambleLines: string[];
}

export default function Scramble({ scrambleLines }: ScrambleProps) {
  return scrambleLines.map(line => (
    <p className="mb-0 mx-4">{line}</p>
  ))
}