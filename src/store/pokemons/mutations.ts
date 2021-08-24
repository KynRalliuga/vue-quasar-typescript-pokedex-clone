import { MutationTree } from 'vuex';
import { PokemonsStateProps, PokemonSpecificApi } from './state';

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
    });

    state.pokemons.sort((a, b) => (a.id > b.id ? 1 : -1));
  },
};

export default mutation;
