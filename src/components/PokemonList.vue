<template>
  <div class="row">
    <div class="col-12 col-md-3" v-for="(pokemon, key) in pokemons" :key="key">
      <PokemonCard :pokemon="pokemon" />
    </div>
  </div>
</template>

<style scoped>
.row {
  margin-left: -20px;
  margin-right: -20px;
}
</style>

<script lang="ts">
import PokemonCard from 'components/PokemonCard.vue';
import { PropType } from 'vue';
import { PokemonProps } from '../store/pokemons/state';

export default {
  name: 'PokemonList',
  components: { PokemonCard },
  props: {
    pokemons: {
      type: Array as PropType<PokemonProps[]>,
      required: true,
    },
  },
};
</script>
