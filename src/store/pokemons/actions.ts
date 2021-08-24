import { AxiosResponse } from 'axios';
import { api } from 'boot/axios';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { PokemonProps, PokemonsStateProps } from './state';

interface PokemonsApi {
  results: {
    name: string;
    url: string;
  }[];
}

const actions: ActionTree<PokemonsStateProps, StateInterface> = {
  getPokemons({ commit }) {
    api
      .get('/pokemon/')
      .then((response: AxiosResponse<PokemonsApi>) => {
        const pokemons: PokemonProps[] = [];
        response.data.results.forEach((pokemon, key) => {
          pokemons.push({
            name: pokemon.name,
            id: key,
            thumbnailUrl: '',
            abilities: [],
          });
        });
        commit('setPokemons', pokemons);
      })
      .catch(function () {
        commit('setPokemons', []);
      });
  },
};

export default actions;
