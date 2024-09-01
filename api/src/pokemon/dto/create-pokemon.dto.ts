import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  ValidateIf,
} from 'class-validator';

export enum PokemonType {
  Grass = 'Grass',
  Fire = 'Fire',
  Water = 'Water',
  Lightning = 'Lightning',
  Fighting = 'Fighting',
  Psychic = 'Psychic',
  Darkness = 'Darkness',
  Metal = 'Metal',
}

export class CreatePokemonDto {
  @ApiProperty({ description: 'The name of your Pokémon', example: 'Scizor' })
  @IsString()
  @IsNotEmpty({ message: 'Name must not be empty.' })
  name: string;

  @ApiProperty({
    description: 'Ammount of healh points your Pokémon will have',
    example: 120,
  })
  @IsInt()
  @Min(1)
  healthPoints: number;

  @ApiProperty({
    description: 'Damage your Pokémon will deal on attack',
    example: 60,
  })
  @IsInt()
  @Min(1)
  attackPower: number;

  @ApiProperty({
    description:
      'Type of your Pokémon. This will be used to calculate both resistance and weakness against other Pokémon',
    enum: PokemonType,
    example: PokemonType.Metal,
  })
  @IsString()
  @IsEnum(PokemonType)
  type: PokemonType;

  @ApiProperty({
    description: 'Pokémon type your Pokémon will be resistant to',
    example: PokemonType.Psychic,
  })
  @IsString()
  @IsEnum(PokemonType, { message: 'ajka' })
  @IsOptional()
  resistance: PokemonType;

  @ApiProperty({
    description: 'Ammouont of power reduced against the resisted type',
    example: -20,
  })
  @IsInt()
  @IsOptional()
  @ValidateIf((o) => o.resistance !== undefined)
  resistanceCount: number;

  @ApiProperty({
    description:
      'Pokémon type your Pokémon will be weak to, receiving x2 damage against it',
    example: PokemonType.Fighting,
  })
  @IsString()
  @IsEnum(PokemonType)
  @IsOptional()
  weakness: PokemonType;
}
