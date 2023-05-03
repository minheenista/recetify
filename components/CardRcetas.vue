<template>
<v-col sm="2" md="2" lg="2" xl="2" cols="10">
    <v-card
    class="mx-auto my-2"
    max-width="230"
  >
    <v-img
      cover
      height="100"
      src="https://source.unsplash.com/random/250×100/?food"
    ></v-img>

    <v-card-item>
      <v-card-title>{{title}} <v-spacer></v-spacer>
      <v-btn
        icon
        color="pink"
      >
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn @click.stop="dialog = true"
        icon
        color="green"
      >
        <v-icon>mdi-eye</v-icon>
      </v-btn>
      </v-card-title>
      <v-card-subtitle>
        <span class="me-1">{{diet}}</span>
        <v-spacer></v-spacer><span class="me-1">4.5 (413)</span>
      </v-card-subtitle>
    </v-card-item>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <!-- <div class="text-grey">
          4.5 (413)
        </div> -->
      </v-row>

      <div class="my-1">
        <v-chip>{{origen}}</v-chip>

        <v-chip>{{time_food}}</v-chip>

        <v-chip>{{prep_time}}</v-chip>

<!--         <v-chip>tag</v-chip>
 -->    </div>
    </v-card-text>

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          {{title}}
        </v-card-title>

        <v-card-text>
          Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Cerrar
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Oka
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
   

    
  </v-card>
</v-col>
</template>

<script >
/* import { component, prop, PropSync, Ref, Vue } from 'vue-property-decorator';
 */import verReceta from './verReceta.vue';
/* import { component } from 'vue/types/umd';
 */

export default {
  name: "recetas",
  components: {
    verReceta,
  },

  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    openDialog() {
      this.$refs.verReceta.dialog = true;
    },
  },
};
</script>

<style>

</style>