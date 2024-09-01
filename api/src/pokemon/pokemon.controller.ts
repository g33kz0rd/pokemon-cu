import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { attack } from '../attack';

@ApiTags('Pokémon')
@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @ApiOkResponse({
    description: 'Returns the Pokémon just created with its id.',
    example: {
      name: 'Pikachu',
      attackPower: 20,
      healthPoints: 60,
      type: 'Lightning',
      weakness: 'Fighting',
      id: 10,
    },
  })
  @Post()
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.createPokemon(createPokemonDto);
  }

  @ApiOkResponse({
    description: 'Returns all the Pokémon.',
    isArray: true,
    example: [
      {
        name: 'Scizor',
        attackPower: 60,
        healthPoints: 120,
        type: 'Metal',
        resistance: 'Psychic',
        resistanceAmmount: '-20',
        weakness: 'Fighting',
        id: 9,
      },
      {
        name: 'Pikachu',
        attackPower: 20,
        healthPoints: 60,
        type: 'Lightning',
        weakness: 'Fighting',
        id: 10,
      },
    ],
  })
  @Get()
  findAll() {
    return this.pokemonService.findAllPokemon();
  }

  @ApiOkResponse({
    description: 'Returns final health points of attacked Pokémon.',
    example: '-10',
  })
  @Get('attack/:attackerId/:defendantId')
  async attack(
    @Param('attackerId') attackerId: string,
    @Param('defendantId') defendantId: string,
  ) {
    const attackerPokemon = await this.pokemonService.findPokemon(+attackerId);
    const defendantPokemon =
      await this.pokemonService.findPokemon(+defendantId);

    return attack(attackerPokemon, defendantPokemon);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pokemonService.findPokemon(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonService.updatePokemon(+id, updatePokemonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pokemonService.removePokemon(+id);
  }
}
