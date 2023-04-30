<template>
<div>  
    <v-card
    class="pa-5"
    flat
    width="1200"
    min-width="1200"
  >
    <v-toolbar
      
      floating
    >
    <v-img
        :width="40"
        cover
        src="../../assets/recetifylogo.jpeg"
      ></v-img>

      <v-text-field 
            :loading="loading"
            density="compact"
            variant="solo"
            label="Search templates"
            append-icon="mdi-magnify"
            single-line
            hide-details
            @click:append-inner="onClick"
          ></v-text-field>

          <v-spacer></v-spacer>
<!-- ======================= modal crear receta ============================= -->
          <v-row justify="center">
            <v-dialog
              v-model="dialog"
              persistent
              max-width="1100px"
            >
            <!-- BOTON CREAR RECETA -->
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="ml-8 mr-8"
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  Nueva receta
                </v-btn>
              </template>
              <!-- MODAL -->
              <v-card>
                <v-card-title>
                  <span class="text-h5">Crear receta</span>
                </v-card-title>
                <v-card-text>
                  <v-container>

                    <v-row class="my-0">
                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <v-text-field
                          label="Titulo de la receta *"
                          required
                          counter="200"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="3"
                      >
                        <v-select
                          :items="['Omnivora', 'Vegetariana', 'Vegana', 'Crudivegana']"
                          label="Dieta*"
                          required
                        ></v-select>
                      </v-col>

                      <v-col
                        cols="12"
                        sm="3"
                      >
                        <v-select
                          :items="['Desayuno', 'Almuerzo', 'Colacion', 'Cena']"
                          label="Tiempo de comida*"
                          required
                        ></v-select>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col
                        cols="12"
                        sm="2"
                      >
                        <v-select
                          :items="['Mexicana', 'Italiana', 'China', 'Americana']"
                          label="Origen*"
                          required
                        ></v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="2"
                      >
                      <v-text-field
                        label="Tiempo de preparacion"
                        type="number"
                        suffix="mins."
                      ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="2"
                      >
                      <v-text-field
                        label="Calorias"
                        type="number"
                        suffix="cals"
                      ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="2"
                      >
                      <v-text-field
                        label="Grasas"
                        type="number"
                        suffix="ag"
                      ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="2"
                      >
                      <v-text-field
                        label="Carbohidratos"
                        type="number"
                        suffix="carbs"
                      ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="2"
                      >
                      <v-text-field
                        label="Proteinas"
                        type="number"
                        suffix="P"
                      ></v-text-field>
                      </v-col>
                    </v-row>
<!--  , tiempo prep, calo, grasas, carbos y proteinas -->
                    <v-row class="my-0">
                      <v-col cols="12">
                        <v-textarea
                          counter="1000"
                          label="Descripcion"
                          :rules="rules"
                          :value="value"
                        ></v-textarea>
                      </v-col>
                    </v-row>
                    <v-row>
                      <span class="text-h5">Procedimiento</span>
                    </v-row>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="8"
                      >
                        <v-text-field
                        label="Paso 1 *"
                        required
                      ></v-text-field>
                      </v-col>
                      <v-col
                      cols="12"
                      sm="3"
                      >
                      <!-- <v-btn
                        icon
                      >
                        <v-icon>mdi-camera</v-icon>
                      </v-btn> -->
                      <v-file-input
                        v-model="files"
                        color=""
                        counter
                        
                        
                        placeholder=""
                        prepend-icon="mdi-camera"
                        
                        :show-size="10"
                      >
                        <template v-slot:selection="{ index, text }">
                          <v-chip
                            v-if="index < 2"
                            color=""
                            dark
                            label
                            small
                          >
                            {{ text }}
                          </v-chip>

                        </template>
                      </v-file-input>
                    </v-col>
                     
                    </v-row>
                    <v-row>
                      <v-col
                      cols="12"
                      sm="3"
                    >
                    <v-btn
                    color="primary"
                    elevation="2"
                  > + paso</v-btn>
                    </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog = false"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>

          <!-- <v-btn color=green class="ml-6"
            prepend-icon="mdi-plus" v-bind="attrs"
            v-on="on"
          >
          <template v-slot:prepend>
            <v-icon color="default"></v-icon>
          </template>
            Crear receta
          </v-btn> -->

          <!-- <template v-slot:activator="{ on, attrs }"> -->
            
          <!-- </template> -->

    </v-toolbar>
  </v-card>
     <!-- <div class="nav-bar">
      
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


     </div> -->
     <p class="text-h5 text-center">
      Recetas recomendadas
    </p>
     <div class="d-flex justify-space-around bg-surface-variant">
      <v-row class="ml-12">
        <v-col sm="2" md="2" lg="2" xl="2" cols="10">
          <recetas></recetas>
        </v-col>
        <v-col sm="2" md="2" lg="2" xl="2" cols="10">
          <recetas></recetas>
        </v-col>
        <v-col sm="2" md="2" lg="2" xl="2" cols="10">
          <recetas></recetas>
        </v-col>
        <v-col sm="2" md="2" lg="2" xl="2" cols="10">
          <recetas></recetas>
        </v-col>
        <v-col sm="2" md="2" lg="2" xl="2" cols="10">
          <recetas></recetas>
        </v-col>
       </v-row>
     </div>

     <p class="text-h5 text-center">
      Recetas mejor valoradas
    </p>
     <div class="d-flex justify-space-around bg-surface-variant">
      <v-row class="ml-12">
        <v-col sm="2" md="2" lg="2" xl="2" cols="10">
          <recetas></recetas>
        </v-col>
        <v-col sm="2" md="2" lg="2" xl="2" cols="10">
          <recetas></recetas>
        </v-col>
        <v-col sm="2" md="2" lg="2" xl="2" cols="10">
          <recetas></recetas>
        </v-col>
        <v-col sm="2" md="2" lg="2" xl="2" cols="10">
          <recetas></recetas>
        </v-col>
        <v-col sm="2" md="2" lg="2" xl="2" cols="10">
          <recetas></recetas>
        </v-col>
       </v-row>
     </div>

     <p class="text-h5 text-center">
      En menos de 15 minutos!
    </p>
     <div class="d-flex justify-space-around bg-surface-variant">
      <v-row class="ml-12">
        <v-col sm="2" md="2" lg="2" xl="2" cols="10">
          <recetas></recetas>
        </v-col>
        <v-col sm="2" md="2" lg="2" xl="2" cols="10">
          <recetas></recetas>
        </v-col>
        <v-col sm="2" md="2" lg="2" xl="2" cols="10">
          <recetas></recetas>
        </v-col>
        <v-col sm="2" md="2" lg="2" xl="2" cols="10">
          <recetas></recetas>
        </v-col>
        <v-col sm="2" md="2" lg="2" xl="2" cols="10">
          <recetas></recetas>
        </v-col>
       </v-row>
     </div>

     <p class="text-h5 text-center">
      Postres y snacks
    </p>
     <div class="d-flex justify-space-around bg-surface-variant">
      <v-row class="ml-12">
        <v-col sm="2" md="2" lg="2" xl="2" cols="10">
          <recetas></recetas>
        </v-col>
        <v-col sm="2" md="2" lg="2" xl="2" cols="10">
          <recetas></recetas>
        </v-col>
        <v-col sm="2" md="2" lg="2" xl="2" cols="10">
          <recetas></recetas>
        </v-col>
        <v-col sm="2" md="2" lg="2" xl="2" cols="10">
          <recetas></recetas>
        </v-col>
        <v-col sm="2" md="2" lg="2" xl="2" cols="10">
          <recetas></recetas>
        </v-col>
       </v-row>
     </div>

   </div>  
     
</template>

<script>
import Recetas from '~/components/recetas.vue';
export default {
    name: "Inicio",
    Recetas,
      data: () => ({
        dialog: false,
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