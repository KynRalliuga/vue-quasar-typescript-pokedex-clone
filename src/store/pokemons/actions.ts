import axios, { AxiosResponse } from 'axios';
import { api } from 'boot/axios';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { PokemonsStateProps, PokemonsApi, PokemonSpecificApi } from './state';

const actions: ActionTree<PokemonsStateProps, StateInterface> = {
  getPokemons({ commit }) {
    api
      .get('/pokemon/')
      .then((response: AxiosResponse<PokemonsApi>) => {
        response.data.results.forEach((pokemon) => {
          axios
            .get(pokemon.url)
            .then((response: AxiosResponse<PokemonSpecificApi>) => {
              commit('addPokemons', response.data);
            })
            .catch(function () {
              // commit('setPokemons', []);
            });
        });
      })
      .catch(function () {
        // commit('addPokemons', []);
      });
  },
};

export default actions;
