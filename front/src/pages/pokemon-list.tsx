import { Container, Input, Typography } from "@mui/material";
import { PokemonCard } from "../components/pokemon-card";
import { Pokemon, usePokemon } from "../providers/pokemon";
import { useState } from "react";

export const PokemonList = () => {
  const { pokemons } = usePokemon();

  const [filter, setFilter] = useState<string>("");

  const filterMethod = (pokemon: Pokemon) => {
    return filter.length >= 3
      ? pokemon.name.toLowerCase().includes(filter.toLowerCase())
      : true;
  };

  return (
    <Container>
      <Typography variant="h3">Pokemon App</Typography>
      <Input placeholder="Filter" onChange={(v) => setFilter(v.target.value)} />
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {pokemons
          .filter((pokemon) => filterMethod(pokemon))
          .map((pokemon) => (
            <li style={{ margin: 10 }}>
              <PokemonCard pokemon={pokemon} state="PICKING_PHASE" />
            </li>
          ))}
      </ul>
    </Container>
  );
};
