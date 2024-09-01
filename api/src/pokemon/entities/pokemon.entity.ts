import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PokemonType } from '../dto/create-pokemon.dto';

@Entity()
export class Pokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column({ type: 'int' })
  healthPoints: number;

  @Column({ type: 'int' })
  attackPower: number;

  @Column({ type: 'enum', enum: PokemonType })
  type: PokemonType;

  @Column({ type: 'enum', enum: PokemonType, nullable: true })
  resistance: PokemonType;

  @Column({ type: 'int', nullable: true })
  resistanceCount: number;

  @Column({ type: 'enum', enum: PokemonType, nullable: true })
  weakness: PokemonType;
}
