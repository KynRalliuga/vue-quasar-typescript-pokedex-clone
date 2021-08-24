import { MutationTree } from 'vuex';
import { PokemonsStateProps, PokemonProps } from './state';

const mutation: MutationTree<PokemonsStateProps> = {
  setPokemons(state: PokemonsStateProps, pokemons: PokemonProps[]) {
    state.pokemons = pokemons;
  },
};

export default mutation;
