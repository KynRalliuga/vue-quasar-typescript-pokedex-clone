<template>
  <div class="card">
    <div class="thumbnail">
      <img :src="thumbnailUrl" alt="" />
    </div>
    <div class="id">{{ id }}</div>
    <div class="name">{{ name }}</div>
    <div class="types">
      <span class="type" v-for="(type, key) in types" :key="key">
        {{ type }}
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
    types: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    return { props };
  },
});
</script>
