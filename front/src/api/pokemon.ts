import { Pokemon } from "../providers/pokemon";

export const getPokemons = async (): Promise<Pokemon[]> => {
  const url = "http://localhost:3000/pokemon";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const json = await response.json();
  return json as Pokemon[];
};

export const getBattleResult = async (
  attackerId: number,
  defendantId: number
): Promise<number> => {
  const url = `http://localhost:3000/pokemon/attack/${attackerId}/${defendantId}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const json = await response.json();
  return json as number;
};
