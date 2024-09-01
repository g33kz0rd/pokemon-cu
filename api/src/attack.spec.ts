import { Pokemon } from './pokemon/entities/pokemon.entity';
import { attack } from './attack';
import { PokemonType } from './pokemon/dto/create-pokemon.dto';

describe('PokemonService', () => {
  const pokemons: Pokemon[] = [
    {
      id: 0,
      name: 'Charizard',
      healthPoints: 180,
      attackPower: 120,
      type: PokemonType.Fire,
      resistance: null,
      resistanceCount: null,
      weakness: PokemonType.Water,
    },
    {
      id: 0,
      name: 'Onix',
      healthPoints: 90,
      attackPower: 40,
      type: PokemonType.Fighting,
      resistance: null,
      resistanceCount: null,
      weakness: PokemonType.Grass,
    },
    {
      id: 0,
      name: 'Feraligatr',
      healthPoints: 180,
      attackPower: 160,
      type: PokemonType.Water,
      resistance: null,
      resistanceCount: null,
      weakness: PokemonType.Lightning,
    },
    {
      id: 0,
      name: 'Sneasel',
      healthPoints: 70,
      attackPower: 20,
      type: PokemonType.Darkness,
      resistance: null,
      resistanceCount: null,
      weakness: PokemonType.Grass,
    },
    {
      id: 0,
      name: 'Treecko',
      healthPoints: 40,
      attackPower: 10,
      type: PokemonType.Psychic,
      resistance: PokemonType.Water,
      resistanceCount: null,
      weakness: PokemonType.Fire,
    },
    {
      id: 0,
      name: 'Scizor',
      healthPoints: 120,
      attackPower: 60,
      type: PokemonType.Metal,
      resistance: PokemonType.Psychic,
      resistanceCount: -20,
      weakness: PokemonType.Fighting,
    },
    {
      id: 0,
      name: 'Pikachu',
      healthPoints: 60,
      attackPower: 20,
      type: PokemonType.Lightning,
      resistance: PokemonType.Metal,
      resistanceCount: -20,
      weakness: PokemonType.Fighting,
    },
  ];

  it.each([
    ['Feraligatr', 'Charizard'],
    ['Onix', 'Pikachu'],
    ['Onix', 'Treecko'],
  ])('%s should win against %s', (attacker, defendant) => {
    expect(
      attack(
        pokemons.find((x) => x.name === attacker),
        pokemons.find((x) => x.name === defendant),
      ) <= 0,
    ).toBeTruthy();
  });

  it.each([
    ['Pikachu', 'Onix'],
    ['Sneasel', 'Scizor'],
    ['Scizor', 'Pikachu'],
  ])('%s should lose against %s', (attacker, defendant) => {
    expect(
      attack(
        pokemons.find((x) => x.name === attacker),
        pokemons.find((x) => x.name === defendant),
      ) <= 0,
    ).toBeFalsy();
  });
});
