import { Button, Paper, Typography } from "@mui/material";
import { Pokemon } from "../providers/pokemon";

interface PokemonCardProps {
  pokemon: Pokemon;
  state: "PICKING_PHASE" | "IDLE";
}

export const PokemonCard = ({ pokemon, state }: PokemonCardProps) => {
  return (
    <Paper style={{ padding: "32px", width: "230px", height: "440px" }}>
      <Typography variant="h4">{pokemon.name}</Typography>
      <Typography>HP: {pokemon.healthPoints}</Typography>
      <Typography>AP: {pokemon.attackPower}</Typography>
      <Typography>Type: {pokemon.type}</Typography>
      {state == "PICKING_PHASE" && <Button variant="contained">Choose</Button>}
    </Paper>
  );
};
