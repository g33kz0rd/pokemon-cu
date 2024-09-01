import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
  ) {}

  createPokemon(createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    const pokemon: Pokemon = new Pokemon();
    pokemon.name = createPokemonDto.name;
    pokemon.attackPower = createPokemonDto.attackPower;
    pokemon.healthPoints = createPokemonDto.healthPoints;
    pokemon.type = createPokemonDto.type;
    pokemon.resistance = createPokemonDto.resistance;
    pokemon.resistanceCount = createPokemonDto.resistanceCount;
    pokemon.weakness = createPokemonDto.weakness;
    return this.pokemonRepository.save(pokemon);
  }

  findAllPokemon(): Promise<Pokemon[]> {
    return this.pokemonRepository.find();
  }

  findPokemon(id: number): Promise<Pokemon> {
    return this.pokemonRepository.findOneBy({ id });
  }

  updatePokemon(
    id: number,
    updatePokemonDto: UpdatePokemonDto,
  ): Promise<Pokemon> {
    const pokemon: Pokemon = new Pokemon();
    pokemon.name = updatePokemonDto.name;
    pokemon.attackPower = updatePokemonDto.attackPower;
    pokemon.healthPoints = updatePokemonDto.healthPoints;
    pokemon.type = updatePokemonDto.type;
    pokemon.resistance = updatePokemonDto.resistance;
    pokemon.resistanceCount = updatePokemonDto.resistanceCount;
    pokemon.weakness = updatePokemonDto.weakness;
    pokemon.id = id;
    return this.pokemonRepository.save(pokemon);
  }

  removePokemon(id: number): Promise<{ affected?: number }> {
    return this.pokemonRepository.delete(id);
  }
}
