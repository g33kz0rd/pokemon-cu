import { Button, Container, MenuItem, Select, Typography } from "@mui/material";
import { PokemonCard } from "../components/pokemon-card";
import { Pokemon, usePokemon } from "../providers/pokemon";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBattleResult } from "../api/pokemon";

export const PokemonFight = () => {
  const { pokemons } = usePokemon();
  const { attackerId } = useParams();

  const [attacker, setAttacker] = useState<Pokemon>();
  const [defendant, setDefendant] = useState<number>();
  const [battling, setBattling] = useState<boolean>(false);
  const [result, setResult] = useState<string>();

  useEffect(() => {
    const attacker = pokemons.find((pokemon) => pokemon.id == +attackerId!);

    if (!attacker) return;

    setAttacker(attacker);
  }, []);

  const handleBattle = async () => {
    if (!attacker || !defendant || battling) return;
    setBattling(true);
    setResult(undefined);
    try {
      const result = await getBattleResult(attacker?.id, defendant);
      setResult(
        result > 0 ? "The Pokémon survived the attack" : "You won the battle!"
      );
    } catch (error) {
    } finally {
      setBattling(false);
    }
  };

  const battleDisabled = !attacker || !defendant;

  return (
    <Container>
      <Typography variant="h3">{attacker?.name}</Typography>
      {attacker && (
        <Container
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Container style={{ margin: 25 }}>
            <PokemonCard pokemon={attacker} state="IDLE" />
          </Container>
          <Typography variant="h2">VS</Typography>
          <Container style={{ margin: 25 }}>
            <Select
              placeholder="Defendant"
              style={{ width: "100%" }}
              value={defendant}
              onChange={(defendantId) => {
                setDefendant(+defendantId.target.value!);
                setResult(undefined);
              }}
            >
              {pokemons.map((pokemon) => (
                <MenuItem value={pokemon.id}>{pokemon.name}</MenuItem>
              ))}
            </Select>
            {attacker && defendant && (
              <Button
                variant="contained"
                style={{ margin: 25 }}
                onClick={handleBattle}
                disabled={battleDisabled}
              >
                Battle!
              </Button>
            )}
            <Typography>{result}</Typography>
          </Container>
        </Container>
      )}
    </Container>
  );
};
