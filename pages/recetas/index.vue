<template>
  <v-app>
     <div class="nav-bar">
      
      <v-card
        class="mx-auto"
        color="grey-lighten-3"
        max-width="1200"
      >
      <v-img
        :width="40"
        cover
        src="../../assets/recetifylogo.jpeg"
      ></v-img>
        <v-card-text>
          <v-text-field
            :loading="loading"
            density="compact"
            variant="solo"
            label="Search templates"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
            @click:append-inner="onClick"
          ></v-text-field>
        </v-card-text>
      </v-card>
     </div>
     <v-row>
      <v-col sm="1" md="1" lg="1" xl="1" cols="12">
      </v-col>
      <v-col sm="2" md="2" lg="2" xl="2" cols="12">
        <recetas></recetas>
      </v-col>
      <v-col sm="2" md="2" lg="2" xl="2" cols="12">
        <recetas></recetas>
      </v-col>
      <v-col sm="2" md="2" lg="2" xl="2" cols="12">
        <recetas></recetas>
      </v-col>
      <v-col sm="2" md="2" lg="2" xl="2" cols="12">
        <recetas></recetas>
      </v-col>
      <v-col sm="2" md="2" lg="2" xl="2" cols="12">
        <recetas></recetas>
      </v-col>
      <v-col sm="1" md="1" lg="1" xl="1" cols="12">
      </v-col>
     </v-row>
</v-app>
</template>

<script>
import Recetas from '~/components/recetas.vue';
export default {
    name: "Inicio",
    Recetas,
      data: () => ({
      drawer: false,
      group: null,
      loaded: false,
      loading: false,
      
      items: [
        {
          title: 'Foo',
          value: 'foo',
        },
        {
          title: 'Bar',
          value: 'bar',
        },
        {
          title: 'Fizz',
          value: 'fizz',
        },
        {
          title: 'Buzz',
          value: 'buzz',
        },
      ],
    }),
    
    methods: {
      onClick () {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
      },
    },

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>

<style scoped>

</style>