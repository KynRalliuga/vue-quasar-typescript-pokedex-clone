import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { PokemonsStateProps } from './state';

const getters: GetterTree<PokemonsStateProps, StateInterface> = {
  allPokemons: (state) => state.pokemons,
  getIsActiveLoadMore: (state) => state.isActiveLoadMore,
  getIsLoading: (state) => state.isLoading,
  getEndPokemons: (state) => state.endPokemons,
};

export default getters;
