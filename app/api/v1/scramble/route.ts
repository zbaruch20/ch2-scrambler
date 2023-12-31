import { NextRequest } from "next/server";
import FaceScrOutput from "./face-scr-output";

const scrambleLines = 5;

const faceMoves = ['R', 'U', 'F'];
const faceDirections = [' ', "'", '2'];

const cornerMoves = ['UFR', 'UFL', 'UBL', 'UBR', 'DFR', 'DFL', 'DBL', 'DBR'];
const numCornerMoves = 4;

const edgeMoves = ['UF', 'UL', 'UB', 'UR', 'FR', 'FL', 'BL', 'BR', 'DF', 'DL', 'DB', 'DR'];
const numEdgeMoves = 6; // doesn't account parity line, this is handled in scrEdges()

export function GET(request: NextRequest) {
  // parse and validate query params
  const params = request.nextUrl.searchParams;
  const n = Number(params.get('n') ?? 1);
  console.log("n", n);
  if (n < 1 || isNaN(n)) {
    return Response.json("Number of scrambles must be at least 1", {
      status: 400
    });
  }

  return Response.json(Array.from({ length: n }, () => scramble()));
}

function scramble(): string[] {
  let lastFace = '';

  return Array.from({ length: scrambleLines }, () => {
    const faceMoveOutput = scrFaces(lastFace);
    lastFace = faceMoveOutput.lastMove;
    const cornerMoves = scrCorners();
    const edgeMoves = scrEdges();

    return [...faceMoveOutput.moves, '', ...cornerMoves, '', ...edgeMoves].join(' ');
  });
}

function scrFaces(lastMove: string): FaceScrOutput {
  const scrambledFaceMoves = shuffle(faceMoves, lastMove);
  const newLast = scrambledFaceMoves[2];

  return {
    moves: scrambledFaceMoves.map(m => m + faceDirections[randomInt(3)]), // appends random direction to each face move
    lastMove: newLast,
  };
}

function scrCorners(): string[] {
  return nUniqueRandomInts(cornerMoves.length, numCornerMoves) // generate 4 indexes between 0 and 7
    .map(i => cornerMoves[i] + (!!randomInt(2) ? "'" : ' ')); // map index to corner move and apply random direction
}

function scrEdges(): string[] {
  return nUniqueRandomInts(edgeMoves.length, numEdgeMoves + randomInt(2)) // add 0 or 1 to number of moves to generate to account for parity lines
    .map(i => edgeMoves[i]);
}

function shuffle(array: any[], last?: any): any[] {
  const len = array.length;
  const shuffled: any[] = [];

  while (shuffled.length < len) {
    let next = array[randomInt(len)];
    const firstElementIsGivenLast = !!last && shuffled.length == 0 && last == next
    if (!shuffled.includes(next) && !firstElementIsGivenLast) {
      // only push if not already in shuffled array and its not the first element and matches last
      shuffled.push(next);
    }
  }

  return shuffled;
}

function nUniqueRandomInts(max: number, n: number): number[] {
  if (n < 0 || n > max) {
    console.error(`Number of random integers must be between 0 and ${max}`);
    return [];
  }

  const nArray = Array.from({ length: max }, (_, i) => i) // lazy way to create [0, 1, ..., n]
  return shuffle(nArray) // randomize indices
    .slice(0, n) // get first n
    .toSorted((a, b) => a - b); // sort in ascending order
}

function randomInt(max: number = 1) {
  if (max <= 0) {
    console.error("Max number must be at least 1");
    return -1;
  }

  return Math.floor(Math.random() * max);
}