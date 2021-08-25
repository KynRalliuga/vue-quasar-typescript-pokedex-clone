export interface PokemonsApi {
  results: {
    name: string;
    url: string;
  }[];
  next: string;
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
  weight: number;
}

export interface PokemonProps {
  thumbnailUrl: string;
  id: number;
  name: string;
  types: string[];
  path: string;
}

export interface PokemonFlavorTextProps {
  flavor_text: string;
  language: {
    name: string;
  };
  version: {
    name: string;
  };
}

export interface PokemonSpecificSpeciesProps {
  flavor_text_entries: PokemonFlavorTextProps[];
  genera: {
    genus: string;
  }[];
}

export interface PokemonGenderProps {
  name: string;
}

export interface PokemonGenderApis {
  results: PokemonGenderProps[];
}

export interface PokemonSpecificProps {
  generalInfo: PokemonSpecificApi | null;
  speciesInfo: PokemonSpecificSpeciesProps | null;
  gendersInfo: PokemonGenderProps[];
}

export interface PokemonsStateProps {
  pokemons: PokemonProps[];
  isActiveLoadMore: boolean;
  isLoading: boolean;
  endPokemons: boolean;
  nextPagePokemons: string;
  pokemonSpecific: PokemonSpecificProps;
}

function state(): PokemonsStateProps {
  return {
    pokemons: [],
    isActiveLoadMore: false,
    isLoading: false,
    endPokemons: false,
    nextPagePokemons: '/pokemon/',
    pokemonSpecific: {
      generalInfo: null,
      speciesInfo: null,
      gendersInfo: [],
    },
  };
}

export default state;
