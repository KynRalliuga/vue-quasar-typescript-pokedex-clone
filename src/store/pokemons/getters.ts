import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { PokemonsStateProps } from './state';

const getters: GetterTree<PokemonsStateProps, StateInterface> = {
  allPokemons: (state) => state.pokemons,
};

export default getters;
