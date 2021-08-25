import axios, { AxiosResponse } from 'axios';
import { api } from 'boot/axios';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import {
  PokemonsStateProps,
  PokemonsApi,
  PokemonSpecificApi,
  PokemonSpecificSpeciesProps,
  PokemonGenderApis,
} from './state';
import { debounce } from 'quasar';

interface payloadGetPokemons {
  idx: number;
  // eslint-disable-next-line @typescript-eslint/ban-types
  done: Function;
}

interface payloadGetPokemon {
  name: string;
}

const actions: ActionTree<PokemonsStateProps, StateInterface> = {
  getPokemons({ commit, state }, payload: payloadGetPokemons) {
    if (!state.isLoading) {
      commit('activeLoading');

      const debounceClearLoading = debounce(() => {
        commit('clearLoading');
        if (payload !== undefined && !state.endPokemons) {
          payload.done();
        }
      }, 1000);

      const axiosFirstNextPage =
        state.nextPagePokemons === '/pokemon/' && !state.isActiveLoadMore
          ? api
          : axios;

      axiosFirstNextPage
        .get(state.nextPagePokemons)
        .then((response: AxiosResponse<PokemonsApi>) => {
          commit('setNextPagePokemons', response.data.next);

          if (response.data.results.length > 0) {
            response.data.results.forEach((pokemon) => {
              axios
                .get(pokemon.url)
                .then((response: AxiosResponse<PokemonSpecificApi>) => {
                  commit('addPokemons', response.data);
                  debounceClearLoading();
                })
                .catch(function () {
                  // commit('addPokemons', []);
                  debounceClearLoading();
                });
            });
          } else {
            commit('activeEndPokemons');
            commit('clearLoading');
          }
        })
        .catch(function () {
          // commit('addPokemons', []);
        });
    }
  },
  getPokemonSpecific({ commit }, payload: payloadGetPokemon) {
    if (payload !== undefined) {
      api
        .get(`/pokemon/${payload.name}/`)
        .then((response: AxiosResponse<PokemonSpecificApi>) => {
          commit('setPokemonSpecificGeneralInfo', response.data);
        })
        .catch(function () {
          commit('setPokemonSpecificGeneralInfo', null);
        });

      api
        .get(`/pokemon-species/${payload.name}/`)
        .then((response: AxiosResponse<PokemonSpecificSpeciesProps>) => {
          commit('setPokemonSpecificSpeciesInfo', response.data);
        })
        .catch(function () {
          commit('setPokemonSpecificSpeciesInfo', null);
        });

      api
        .get(`/gender/?name=${payload.name}/`)
        .then((response: AxiosResponse<PokemonGenderApis>) => {
          commit('setPokemonSpecificGenderInfo', response.data.results);
        })
        .catch(function () {
          commit('setPokemonSpecificGenderInfo', []);
        });
    }
  },
  resetPokemonSpecific({ commit }) {
    commit('clearPokemonSpecific');
  },
  loadMorePokemons({ commit, dispatch }) {
    commit('activeLoadMore');
    void dispatch('getPokemons');
  },
  loadMorePokemonsScroll({ state, dispatch }, payload: payloadGetPokemons) {
    const debounceDone = debounce(() => {
      if (payload !== undefined) {
        payload.done();
      }
    }, 1000);

    if (!state.isActiveLoadMore) {
      debounceDone();
    } else {
      void dispatch('getPokemons', payload);
    }
  },
  resetPokemons({ commit }) {
    commit('clearPokemons');
    commit('clearLoadMore');
    commit('clearLoading');
    commit('clearNextPagePokemons');
  },
};

export default actions;
