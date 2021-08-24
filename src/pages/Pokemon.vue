<template>
  <div class="container q-py-lg">
    <div class="row">
      <div class="col col-md-12">Pokémons</div>
    </div>
    <div class="infinite-scroll-pokemons" ref="allPokemons">
      <q-infinite-scroll
        @load="loadMorePokemonsScrollMethod"
        scroll-target="body"
        :offset="20"
      >
        <PokemonList :pokemons="allPokemons" />
      </q-infinite-scroll>
    </div>
    <div class="row q-py-md">
      <div class="col text-center">
        <q-btn
          color="primary"
          label="Carregar mais Pokémons"
          @click="loadMorePokemons"
          v-if="!getIsActiveLoadMore && !getIsLoading"
        />
        <q-spinner color="primary" size="3em" v-if="getIsLoading" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import PokemonList from 'components/PokemonList.vue';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { useStore } from 'src/store';

export default {
  name: 'PagePokemon',
  components: { PokemonList },
  computed: {
    ...mapGetters('PokemonsModule', ['allPokemons']),
    ...mapGetters('PokemonsModule', ['getIsActiveLoadMore']),
    ...mapGetters('PokemonsModule', ['getIsLoading']),
    ...mapGetters('PokemonsModule', ['getEndPokemons']),
  },
  methods: {
    ...mapMutations('PokemonsModule', ['activeLoadMore']),

    ...mapActions('PokemonsModule', ['loadMorePokemons']),
    ...mapActions('PokemonsModule', ['loadMorePokemonsScroll']),
  },
  created() {
    const $store = useStore();
    void $store.dispatch('PokemonsModule/resetPokemons');
  },
  mounted() {
    const $store = useStore();
    void $store.dispatch('PokemonsModule/getPokemons');
  },
  setup() {
    const store = useStore();
    return {
      store,
      // eslint-disable-next-line @typescript-eslint/ban-types
      loadMorePokemonsScrollMethod: function (idx: number, done: Function) {
        void store.dispatch('PokemonsModule/loadMorePokemonsScroll', {
          idx,
          done,
        });
      },
    };
  },
};
</script>
