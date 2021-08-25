import { MutationTree } from 'vuex';
import {
  PokemonsStateProps,
  PokemonSpecificApi,
  PokemonSpecificSpeciesProps,
  PokemonGenderProps,
} from './state';

const mutation: MutationTree<PokemonsStateProps> = {
  addPokemons(state: PokemonsStateProps, pokemon: PokemonSpecificApi) {
    const types: string[] = [];
    pokemon.types.forEach((type) => {
      types.push(type.type.name);
    });

    state.pokemons.push({
      thumbnailUrl: pokemon.sprites.front_default,
      id: pokemon.id,
      name: pokemon.name,
      types,
      path: `/pokemon/${pokemon.name}/`,
    });

    state.pokemons.sort((a, b) => (a.id > b.id ? 1 : -1));
  },
  clearPokemons(state: PokemonsStateProps) {
    state.pokemons = [];
  },
  toggleLoadMore(state: PokemonsStateProps) {
    state.isActiveLoadMore = !state.isActiveLoadMore;
  },
  activeLoadMore(state: PokemonsStateProps) {
    state.isActiveLoadMore = true;
  },
  clearLoadMore(state: PokemonsStateProps) {
    state.isActiveLoadMore = false;
  },
  setNextPagePokemons(state: PokemonsStateProps, nextPage: string) {
    state.nextPagePokemons = nextPage;
  },
  clearNextPagePokemons(state: PokemonsStateProps) {
    state.nextPagePokemons = '/pokemon/';
  },
  toggleLoading(state: PokemonsStateProps) {
    state.isLoading = !state.isLoading;
  },
  activeLoading(state: PokemonsStateProps) {
    state.isLoading = true;
  },
  clearLoading(state: PokemonsStateProps) {
    state.isLoading = false;
  },
  activeEndPokemons(state: PokemonsStateProps) {
    state.endPokemons = true;
  },
  setPokemonSpecificGeneralInfo(
    state: PokemonsStateProps,
    pokemon: PokemonSpecificApi
  ) {
    state.pokemonSpecific.generalInfo = pokemon;
  },
  setPokemonSpecificSpeciesInfo(
    state: PokemonsStateProps,
    pokemon: PokemonSpecificSpeciesProps
  ) {
    state.pokemonSpecific.speciesInfo = pokemon;
  },
  setPokemonSpecificGenderInfo(
    state: PokemonsStateProps,
    pokemon: PokemonGenderProps[]
  ) {
    state.pokemonSpecific.gendersInfo = pokemon;
  },
  clearPokemonSpecific(state: PokemonsStateProps) {
    state.pokemonSpecific = {
      generalInfo: null,
      speciesInfo: null,
      gendersInfo: [],
    };
  },
};

export default mutation;
