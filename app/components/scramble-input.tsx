import { Button } from "react-bootstrap";
import getScrambles, { SetScramblesFunc } from "../actions/get-scrambles";

export interface ScrambleInputProps {
  setScrambles: SetScramblesFunc
}

async function handleScrambles(data: FormData, setScrambles: SetScramblesFunc) {
  const { protocol, host } = window.location;
  const n = data.get('nInput');
  const path = `${protocol}/${host}/api/v1/scramble?n=${n}`;

  !!n && setScrambles((await getScrambles(path)));
}

export default function ScrambleInput({ setScrambles }: ScrambleInputProps) {
  return (
    <form action={(data) => handleScrambles(data, setScrambles)}>
      <div className="mt-4">
        <label htmlFor="nInput">Number of scrambles:</label>
        <input type="number" name="nInput" min="1" className="mx-2" />
      </div>
      <div className="mb-4">
        <Button type="submit" variant="primary">Scramble</Button>
      </div>
    </form>
  );
}