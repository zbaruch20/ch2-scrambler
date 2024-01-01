"use server";

export interface SetScramblesFunc {
  (scrambles: string[][]): any;
}

export default async function getScrambles(path: string): Promise<string[][]> {
  return await fetch(path, {
    cache: 'no-store'
  })
    .then(res => res.json())
    .then(body =>  body as string[][]);
}