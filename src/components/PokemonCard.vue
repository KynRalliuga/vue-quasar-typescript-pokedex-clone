<template>
  <div class="card">
    <div class="thumbnail">
      <img :src="thumbnailUrl" alt="" />
    </div>
    <div class="id">{{ id }}</div>
    <div class="name">{{ name }}</div>
    <div class="abilities">
      <span class="ability" v-for="(ability, key) in abilities" :key="key">
        {{ ability }}
      </span>
    </div>
  </div>
</template>

<style scoped></style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PokemonCard',
  props: {
    id: {
      type: Number,
      required: true,
    },
    thumbnailUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    abilities: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    return { props };
  },
});
</script>
