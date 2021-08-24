export interface PokemonProps {
  thumbnailUrl: string;
  id: number;
  name: string;
  abilities: string[];
}

export interface PokemonsStateProps {
  pokemons: PokemonProps[];
}

function state(): PokemonsStateProps {
  return {
    pokemons: [],
  };
}

export default state;
