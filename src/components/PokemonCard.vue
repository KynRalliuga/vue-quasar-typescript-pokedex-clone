<template>
  <div class="card">
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
  </div>
</template>

<style scoped>
.card {
  padding: 30px 20px;
}
.thumbnail {
  background-color: #f2f2f2;
  width: 100%;
  padding-top: 100%;
  position: relative;
  border-radius: 4px;
}
.thumbnail img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
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

.background-color-bug {
  background: -webkit-linear-gradient(180deg, #729f3f 50%, #729f3f 50%);
  background: -ms-linear-gradient(180deg, #729f3f 50%, #729f3f 50%);
  background: -moz-linear-gradient(180deg, #729f3f 50%, #729f3f 50%);
  background: -o-linear-gradient(180deg, #729f3f 50%, #729f3f 50%);
  background: linear-gradient(180deg, #729f3f 50%, #729f3f 50%);
  background-color: #729f3f;
  color: #fff;
}
.background-color-dark {
  background: -webkit-linear-gradient(180deg, #707070 50%, #707070 50%);
  background: -ms-linear-gradient(180deg, #707070 50%, #707070 50%);
  background: -moz-linear-gradient(180deg, #707070 50%, #707070 50%);
  background: -o-linear-gradient(180deg, #707070 50%, #707070 50%);
  background: linear-gradient(180deg, #707070 50%, #707070 50%);
  background-color: #707070;
  color: #fff;
}
.background-color-dragon {
  background: -webkit-linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
  background: -ms-linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
  background: -moz-linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
  background: -o-linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
  background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
  background-color: #53a4cf;
  color: #fff;
}
.background-color-electric {
  background: -webkit-linear-gradient(180deg, #eed535 50%, #eed535 50%);
  background: -ms-linear-gradient(180deg, #eed535 50%, #eed535 50%);
  background: -moz-linear-gradient(180deg, #eed535 50%, #eed535 50%);
  background: -o-linear-gradient(180deg, #eed535 50%, #eed535 50%);
  background: linear-gradient(180deg, #eed535 50%, #eed535 50%);
  background-color: #eed535;
  color: #212121;
}
.background-color-fairy {
  background: -webkit-linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%);
  background: -ms-linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%);
  background: -moz-linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%);
  background: -o-linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%);
  background: linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%);
  background-color: #fdb9e9;
  color: #212121;
}
.background-color-fighting {
  background: -webkit-linear-gradient(180deg, #d56723 50%, #d56723 50%);
  background: -ms-linear-gradient(180deg, #d56723 50%, #d56723 50%);
  background: -moz-linear-gradient(180deg, #d56723 50%, #d56723 50%);
  background: -o-linear-gradient(180deg, #d56723 50%, #d56723 50%);
  background: linear-gradient(180deg, #d56723 50%, #d56723 50%);
  background-color: #d56723;
  color: #fff;
}
.background-color-fire {
  background: -webkit-linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%);
  background: -ms-linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%);
  background: -moz-linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%);
  background: -o-linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%);
  background: linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%);
  background-color: #fd7d24;
  color: #fff;
}
.background-color-flying {
  background: -webkit-linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
  background: -ms-linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
  background: -moz-linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
  background: -o-linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
  background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
  background-color: #3dc7ef;
  color: #212121;
}
.background-color-ghost {
  background: -webkit-linear-gradient(180deg, #7b62a3 50%, #7b62a3 50%);
  background: -ms-linear-gradient(180deg, #7b62a3 50%, #7b62a3 50%);
  background: -moz-linear-gradient(180deg, #7b62a3 50%, #7b62a3 50%);
  background: -o-linear-gradient(180deg, #7b62a3 50%, #7b62a3 50%);
  background: linear-gradient(180deg, #7b62a3 50%, #7b62a3 50%);
  background-color: #7b62a3;
  color: #fff;
}
.background-color-grass {
  background: -webkit-linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%);
  background: -ms-linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%);
  background: -moz-linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%);
  background: -o-linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%);
  background: linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%);
  background-color: #9bcc50;
  color: #212121;
}
.background-color-ground {
  background: -webkit-linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
  background: -ms-linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
  background: -moz-linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
  background: -o-linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
  background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
  background-color: #f7de3f;
  color: #212121;
}
.background-color-ice {
  background: -webkit-linear-gradient(180deg, #51c4e7 50%, #51c4e7 50%);
  background: -ms-linear-gradient(180deg, #51c4e7 50%, #51c4e7 50%);
  background: -moz-linear-gradient(180deg, #51c4e7 50%, #51c4e7 50%);
  background: -o-linear-gradient(180deg, #51c4e7 50%, #51c4e7 50%);
  background: linear-gradient(180deg, #51c4e7 50%, #51c4e7 50%);
  background-color: #51c4e7;
  color: #212121;
}
.background-color-normal {
  background: -webkit-linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%);
  background: -ms-linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%);
  background: -moz-linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%);
  background: -o-linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%);
  background: linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%);
  background-color: #a4acaf;
  color: #212121;
}
.background-color-poison {
  background: -webkit-linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%);
  background: -ms-linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%);
  background: -moz-linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%);
  background: -o-linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%);
  background: linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%);
  background-color: #b97fc9;
  color: #fff;
}
.background-color-psychic {
  background: -webkit-linear-gradient(180deg, #f366b9 50%, #f366b9 50%);
  background: -ms-linear-gradient(180deg, #f366b9 50%, #f366b9 50%);
  background: -moz-linear-gradient(180deg, #f366b9 50%, #f366b9 50%);
  background: -o-linear-gradient(180deg, #f366b9 50%, #f366b9 50%);
  background: linear-gradient(180deg, #f366b9 50%, #f366b9 50%);
  background-color: #f366b9;
  color: #fff;
}
.background-color-rock {
  background: -webkit-linear-gradient(180deg, #a38c21 50%, #a38c21 50%);
  background: -ms-linear-gradient(180deg, #a38c21 50%, #a38c21 50%);
  background: -moz-linear-gradient(180deg, #a38c21 50%, #a38c21 50%);
  background: -o-linear-gradient(180deg, #a38c21 50%, #a38c21 50%);
  background: linear-gradient(180deg, #a38c21 50%, #a38c21 50%);
  background-color: #a38c21;
  color: #fff;
}
.background-color-steel {
  background: -webkit-linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%);
  background: -ms-linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%);
  background: -moz-linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%);
  background: -o-linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%);
  background: linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%);
  background-color: #9eb7b8;
  color: #212121;
}
.background-color-water {
  background: -webkit-linear-gradient(180deg, #4592c4 50%, #4592c4 50%);
  background: -ms-linear-gradient(180deg, #4592c4 50%, #4592c4 50%);
  background: -moz-linear-gradient(180deg, #4592c4 50%, #4592c4 50%);
  background: -o-linear-gradient(180deg, #4592c4 50%, #4592c4 50%);
  background: linear-gradient(180deg, #4592c4 50%, #4592c4 50%);
  background-color: #4592c4;
  color: #fff;
}
</style>

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
