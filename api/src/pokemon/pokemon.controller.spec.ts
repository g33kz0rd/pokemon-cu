import { Test, TestingModule } from '@nestjs/testing';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { PokemonType } from './dto/create-pokemon.dto';

describe('PokemonController', () => {
  let controller: PokemonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonController],
      providers: [
        PokemonService,
        {
          provide: getRepositoryToken(Pokemon),
          useValue: {
            save: jest.fn((x) => x),
          },
        },
      ],
    }).compile();

    controller = module.get<PokemonController>(PokemonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return created ', () => {
    const mockedPokemon: Pokemon = {
      name: 'Pikachu',
      healthPoints: 10,
      attackPower: 10,
      type: PokemonType.Lightning,
    } as unknown as Pokemon;

    const result = controller.create(mockedPokemon);

    expect(result).toEqual(mockedPokemon);
  });
});
