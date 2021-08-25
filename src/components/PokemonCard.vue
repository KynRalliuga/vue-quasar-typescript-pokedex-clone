<template>
  <div class="card">
    <router-link class="link" :to="pokemon.path">
      <div class="thumbnail">
        <img :src="pokemon.thumbnailUrl" alt="" />
      </div>
      <div class="id">{{ `Nº${pokemon.id.toString().padStart(3, '0')}` }}</div>
      <div class="name">
        <h5>
          {{ `${pokemon.name[0].toUpperCase()}${pokemon.name.substring(1)}` }}
        </h5>
      </div>
      <div class="types">
        <span
          :class="`type background-color-${type.toLocaleLowerCase()}`"
          v-for="(type, key) in pokemon.types"
          :key="key"
        >
          {{ `${type[0].toUpperCase()}${type.substring(1)}` }}
        </span>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.card {
  padding-bottom: 30px;
}
.link {
  text-decoration: none !important;
  cursor: pointer;
}
.name h5 {
  margin-top: 10px;
  margin-bottom: 2px;
  color: #313131;
}
.id {
  margin-top: 2px;
  color: #919191;
  font-size: 12px;
}
.type {
  border-radius: 3px;
  line-height: 18px;
  max-width: 110px;
  margin: 0 1.5625% 0 0;
  width: 38.4375%;
  float: left;
  text-transform: none;
  font-size: 11px;
  text-align: center;
}
</style>

<script lang="ts">
import { PropType } from 'vue';
import { PokemonProps } from '../store/pokemons/state';

export default {
  name: 'PokemonCard',
  props: {
    pokemon: {
      type: Object as PropType<PokemonProps>,
      required: true,
    },
  },
};
</script>
