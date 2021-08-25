<template>
  <div class="container q-py-lg">
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-12 text-center">
        <h2 v-if="isLoadedInformationPokemon">
          {{
            `${getPokemonSpecific.generalInfo?.name
              .toString()[0]
              .toUpperCase()}${getPokemonSpecific.generalInfo?.name
              .toString()
              .substring(1)} Nº${getPokemonSpecific.generalInfo?.id
              .toString()
              .padStart(3, '0')}`
          }}
        </h2>
        <div class="q-pt-lg q-mt-md" v-if="!isLoadedInformationPokemon">
          <q-spinner color="primary" size="3em" />
        </div>
      </div>
      <div class="col-12 col-md-6" v-if="isLoadedInformationPokemon">
        <div class="thumbnail">
          <img
            :src="getPokemonSpecific.generalInfo?.sprites.front_default"
            alt=""
          />
        </div>
      </div>
      <div class="col-12 col-md-6" v-if="isLoadedInformationPokemon">
        <div class="description">
          {{ getFlavorTextEnglish }}
        </div>
        <div class="blue-block">
          <div class="row q-col-gutter-md">
            <div class="col-12 col-md-6">
              <div class="attribute-group">
                <div class="attribute-label">Height</div>
                <div class="attribute-description">
                  {{ `${getPokemonSpecific.generalInfo?.height / 10} m` }}
                </div>
              </div>

              <div class="attribute-group">
                <div class="attribute-label">Weight</div>
                <div class="attribute-description">
                  {{ `${getPokemonSpecific.generalInfo?.weight / 10} Kg` }}
                </div>
              </div>

              <div class="attribute-group">
                <div class="attribute-label">Gender</div>
                <div class="attribute-description attribute-description-gender">
                  <span
                    v-for="gender in getPokemonSpecific.gendersInfo"
                    :key="gender.name"
                    class="span-gender"
                  >
                    <q-icon
                      :name="gender.name"
                      v-if="gender.name !== 'genderless'"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="attribute-group">
                <div class="attribute-label">Category</div>
                <div class="attribute-description">
                  {{ getPokemonSpecific.speciesInfo?.genera?.[7]?.genus }}
                </div>
              </div>

              <div class="attribute-group">
                <div class="attribute-label">Abilities</div>
                <div
                  class="attribute-description"
                  v-if="getPokemonSpecific.generalInfo?.abilities?.length > 0"
                >
                  <span
                    v-for="ability in getPokemonSpecific.generalInfo?.abilities"
                    :key="ability.ability.name"
                    class="span-ability"
                  >
                    {{
                      !ability.is_hidden
                        ? `${ability.ability.name
                            .toString()[0]
                            .toUpperCase()}${ability.ability.name
                            .toString()
                            .substring(1)}`
                        : ''
                    }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="types-group">
          <div class="types-label">Type</div>
          <div class="types-description">
            <span
              :class="`type background-color-${type.type.name.toLocaleLowerCase()}`"
              v-for="(type, key) in getPokemonSpecific.generalInfo?.types"
              :key="key"
            >
              {{
                `${type.type.name[0].toUpperCase()}${type.type.name.substring(
                  1
                )}`
              }}
            </span>
          </div>
        </div>

        <div class="weaknesses-group">
          <div class="weaknesses-label">Weaknesses</div>
          <div class="weaknesses-description">
            <span
              :class="`weakness background-color-${type.type.name.toLocaleLowerCase()}`"
              v-for="(type, key) in getPokemonSpecific.generalInfo?.weaknesses"
              :key="key"
            >
              {{
                `${type.type.name[0].toUpperCase()}${type.type.name.substring(
                  1
                )}`
              }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.description {
  font-size: 18px;
  padding-top: 10px;
}
.blue-block {
  background-color: #30a7d7;
  color: #fff;
  border-radius: 10px;
  padding: 10px 20px;
  margin-top: 30px;
}
.attribute-label {
  font-size: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.attribute-description {
  color: #212121;
  font-size: 18px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.attribute-description-gender {
  font-size: 28px;
  padding-top: 0;
}
.span-ability {
  display: inline-block;
  margin-right: 4px;
}
.types-label {
  font-size: 20px;
  padding-top: 20px;
  padding-bottom: 15px;
}
.type {
  border-radius: 3px;
  line-height: 30px;
  max-width: 110px;
  margin: 0 1.5625% 0 0;
  width: 38.4375%;
  display: inline-block;
  text-transform: none;
  font-size: 16px;
  text-align: center;
}
.weaknesses-label {
  font-size: 20px;
  padding-top: 20px;
  padding-bottom: 15px;
}
.weakness {
  border-radius: 3px;
  line-height: 30px;
  max-width: 110px;
  margin: 0 1.5625% 0 0;
  width: 38.4375%;
  display: inline-block;
  text-transform: none;
  font-size: 16px;
  text-align: center;
}
</style>

<script lang="ts">
import { useStore } from 'src/store';
import { useRouter } from 'vue-router';
import { mapGetters } from 'vuex';

export default {
  name: 'PagePokemonSpecification',
  components: {},
  computed: {
    ...mapGetters('PokemonsModule', ['getPokemonSpecific']),
    ...mapGetters('PokemonsModule', ['isLoadedInformationPokemon']),
    ...mapGetters('PokemonsModule', ['getFlavorTextEnglish']),
  },
  created() {
    const $store = useStore();
    void $store.dispatch('PokemonsModule/resetPokemonSpecific');
  },
  mounted() {
    const $store = useStore();
    const $router = useRouter();

    void $store.dispatch('PokemonsModule/getPokemonSpecific', {
      name: $router.currentRoute.value.params.name.toString(),
    });
  },
};
</script>
