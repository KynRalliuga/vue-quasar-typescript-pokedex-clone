<template>
  <div class="card">
    <div class="thumbnail">
      <img :src="pokemon.thumbnailUrl" alt="" />
    </div>
    <div class="id">{{ `Nº${pokemon.id.toString().padStart(3, '0')}` }}</div>
    <div class="name">
      {{ `${pokemon.name[0].toUpperCase()}${pokemon.name.substring(1)}` }}
    </div>
    <div class="types">
      <span class="type" v-for="(type, key) in pokemon.types" :key="key">
        {{ `${type[0].toUpperCase()}${type.substring(1)}` }}
      </span>
    </div>
  </div>
</template>

<style scoped></style>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { PokemonProps } from '../store/pokemons/state';

export default defineComponent({
  name: 'PokemonCard',
  props: {
    pokemon: {
      type: Object as PropType<PokemonProps>,
      required: true,
    },
  },
  setup(props) {
    return { props };
  },
});
</script>
