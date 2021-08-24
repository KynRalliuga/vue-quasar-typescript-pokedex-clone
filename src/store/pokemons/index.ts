import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { PokemonsStateProps } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const PokemonsModule: Module<PokemonsStateProps, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default PokemonsModule;
