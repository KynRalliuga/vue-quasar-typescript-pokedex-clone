import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { PokemonsStateProps } from './state';

const getters: GetterTree<PokemonsStateProps, StateInterface> = {
  allPokemons: (state) => state.pokemons,
  getIsActiveLoadMore: (state) => state.isActiveLoadMore,
  getIsLoading: (state) => state.isLoading,
  getEndPokemons: (state) => state.endPokemons,
  getPokemonSpecific: (state) => state.pokemonSpecific,
  isLoadedInformationPokemon: (state) =>
    state.pokemonSpecific.generalInfo !== null &&
    state.pokemonSpecific.speciesInfo !== null,
  getFlavorTextEnglish: (state) => {
    let englishFlavorText = '';

    state.pokemonSpecific.speciesInfo?.flavor_text_entries.forEach(
      (flavorText) => {
        if (flavorText.language.name === 'en' && englishFlavorText === '') {
          englishFlavorText = flavorText.flavor_text;
        }
      }
    );

    return englishFlavorText;
  },
};

export default getters;
