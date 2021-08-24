export interface PokemonsApi {
  results: {
    name: string;
    url: string;
  }[];
}

export interface PokemonSpecificApi {
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  height: number;
  id: number;
  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];
  name: string;
  sprites: {
    back_default: string;
    front_default: string;
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
}

export interface PokemonProps {
  thumbnailUrl: string;
  id: number;
  name: string;
  types: string[];
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
