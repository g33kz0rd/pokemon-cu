import { PokemonType } from './pokemon/dto/create-pokemon.dto';
import { Pokemon } from './pokemon/entities/pokemon.entity';

export const attack = (attacker: Pokemon, defendant: Pokemon) => {
  const attackResisted =
    attacker.attackPower +
    calculateResistance(
      attacker.type,
      defendant.resistance,
      defendant.resistanceCount,
    );

  const attackAmplyfied =
    attackResisted * calculateWeakness(attacker.type, defendant.weakness);

  return defendant.healthPoints - attackAmplyfied;
};

const calculateResistance = (
  attackerType: PokemonType,
  defendantResistanceType: PokemonType,
  defendantResistanceCount: number,
) => (defendantResistanceType == attackerType ? defendantResistanceCount : 0);

const calculateWeakness = (
  attackerType: PokemonType,
  defendantWeaknessType: PokemonType,
) => (attackerType == defendantWeaknessType ? 2 : 1);
