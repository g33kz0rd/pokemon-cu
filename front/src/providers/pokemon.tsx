import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { getPokemons } from "../api/pokemon";

export enum PokemonType {
  Grass = "Grass",
  Fire = "Fire",
  Water = "Water",
  Lightning = "Lightning",
  Fighting = "Fighting",
  Psychic = "Psychic",
  Darkness = "Darkness",
  Metal = "Metal",
}

export interface Pokemon {
  id: number;
  name: string;
  healthPoints: number;
  attackPower: number;
  type: PokemonType;
  resistance: PokemonType;
  resistanceCount: number;
  weakness: PokemonType;
}

type PokemonContextType = {
  pokemons: Pokemon[];
};

export const PokemonContext = createContext<PokemonContextType>({
  pokemons: [],
});

export default function PokemonProvider({ children }: { children: ReactNode }) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    getPokemons().then((x) => {
      console.log("asd");
      setPokemons(x);
      setLoaded(true);
    });
  }, []);

  const contextValue: PokemonContextType = {
    pokemons: pokemons,
  };

  return (
    <PokemonContext.Provider value={contextValue}>
      {loaded && children}
    </PokemonContext.Provider>
  );
}

export const usePokemon = () => useContext(PokemonContext);
