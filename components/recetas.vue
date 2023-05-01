<template>
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
      <v-card-title>Nombre <v-spacer></v-spacer>
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
        <span class="me-1">Tipo</span>
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
        <v-chip>tag</v-chip>

        <v-chip>tag</v-chip>

        <v-chip>tag</v-chip>

        <v-chip>tag</v-chip>
    </div>
    </v-card-text>

  <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Use Google's location service?
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
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
   

    
  </v-card>
</template>

<script>
import verReceta from './verReceta.vue';


export default {
  name: "recetas",
  components: {
    verReceta,
  },
  
  data () {
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