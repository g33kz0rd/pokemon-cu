import { Pokemon } from "../providers/pokemon";

const BASE_URL = "https://sorry-allsun-g33kz0rd-ca6d9814.koyeb.app";

export const getPokemons = async (): Promise<Pokemon[]> => {
  const url = `${BASE_URL}/pokemon`;
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
  const url = `${BASE_URL}/pokemon/attack/${attackerId}/${defendantId}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const json = await response.json();
  return json as number;
};
