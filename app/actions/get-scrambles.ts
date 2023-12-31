"use server";

export interface SetScramblesFunc {
  (scrambles: string[][]): any;
}

export default async function getScrambles(path: string): Promise<string[][]> {
  console.log("calling getScrambles")
  return await fetch(path, {
    cache: 'no-store'
  })
    .then(res => res.json())
    .then(body => {
      console.log(body);
      return body as string[][];
    });
}