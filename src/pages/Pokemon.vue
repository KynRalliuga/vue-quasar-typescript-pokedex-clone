<template>
  <div class="container q-py-lg">
    <div class="row">
      <div class="col col-md-12">Pokémons</div>
    </div>
    <PokemonList :pokemons="allPokemons" />
  </div>
</template>

<script lang="ts">
import PokemonList from 'components/PokemonList.vue';
import { mapGetters, mapActions } from 'vuex';
import { useStore } from 'src/store';

export default {
  name: 'PagePokemon',
  components: { PokemonList },
  computed: {
    ...mapGetters('PokemonsModule', ['allPokemons']),
  },
  methods: {
    ...mapActions('PokemonsModule', ['getPokemons']),
  },
  mounted() {
    const $store = useStore();
    void $store.dispatch('PokemonsModule/getPokemons');
  },
};
</script>
