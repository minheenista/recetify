<template>
  <div class="container1">
    <v-card class="pa-5" flat width="100%" min-width="1600">
      <v-toolbar floating>
      <v-avatar class="ml-3 mr-4">
        <v-img src="logo.png"></v-img>
      </v-avatar>

        <h2 class="ml-3 mr-8" style="color: #00C853">RECETIFY</h2>

        <v-text-field
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
          <v-dialog v-model="dialog" persistent max-width="1150px">
            <!-- BOTON CREAR RECETA -->
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="ml-8 mr-8"
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
                v-model="dialog"
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
                  <!-- TITULO, DIETA, TIEMPO -->
                  <v-row class="my-0">
                  <!-- Titulo -->
                    <v-col cols="12" sm="6">
                      <v-text-field
                        label="Titulo de la receta *"
                        required
                        counter="200"
                        v-model="recipeRegister.title"
                      ></v-text-field>
                    </v-col>
                    <!-- Dieta -->
                    <v-col cols="12" sm="3">
                      <v-select
                        :items="dietas"
                        label="Dieta*"
                        required
                        v-model="recipeRegister.diet"
                      ></v-select>
                    </v-col>
                    <!-- Tiempo de comida -->
                    <v-col cols="12" sm="3">
                      <v-select
                        :items="tiempo"
                        label="Tiempo de comida*"
                        required
                        v-model="recipeRegister.time_food"
                      ></v-select>
                    </v-col>
                  </v-row>
                  <!-- TIMEPO DE PREPARACION,  PORCIONES, FOTO -->
                  <v-row class="my-0">
                    <v-col cols="12" sm="3">
                      <v-text-field
                        label="Tiempo de preparacion"
                        type="number"
                        suffix="mins."
                        v-model.number="recipeRegister.prep_time"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="3">
                      <v-text-field v-model.number="recipeRegister.porcion"
                        label="Porciones"
                        type="number"
                        suffix=""
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-file-input
                        
                        color=""
                        counter
                        placeholder="Imagen de receta"
                        prepend-icon="mdi-camera"
                      >
                        <template v-slot:selection="{ index, text }">
                          <v-chip v-if="index < 2" color="" dark label small>
                            {{ text }}
                          </v-chip>
                        </template>
                      </v-file-input>
                    </v-col>
                  </v-row>
                  <!-- ORIGEN, CALORIAS, GRASAS, CARBOHIDRATOS, PROTEINAS -->
                  <h3>Informacion nutricional</h3>
                  <v-row>
                    <v-col cols="12" sm="3">
                      <v-select
                        :items="origen"
                        label="Origen*"
                        required
                        v-model="recipeRegister.origen_food"
                      ></v-select>
                    </v-col>

                    <v-col cols="12" sm="2">
                      <v-text-field
                        label="Calorias"
                        type="number"
                        suffix="cals"
                        v-model.number="recipeRegister.calories"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="2">
                      <v-text-field
                        label="Grasas"
                        type="number"
                        suffix="ag"
                        v-model.number="recipeRegister.fat"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="2">
                      <v-text-field
                        label="Carbohidratos"
                        type="number"
                        suffix="carbs"
                        v-model.number="recipeRegister.carbs"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="2">
                      <v-text-field
                        label="Proteinas"
                        type="number"
                        suffix="P"
                        v-model.number="recipeRegister.proteins"
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row class="my-0">
                    <v-col cols="12">
                      <v-textarea
                        counter="1000"
                        label="Descripcion"
                        v-model="recipeRegister.description"
                      ></v-textarea>
                    </v-col>
                  </v-row>

                  <h3>Ingredientes</h3>
                  <v-row> LOS FUCKING INGREDIENTES </v-row>
                  <v-row>
                    <span class="text-h5">Procedimiento</span>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="7">
                      <v-text-field label="Paso 1 *" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-file-input
                        color=""
                        counter
                        placeholder=""
                        prepend-icon="mdi-camera"
                      >
                        <template v-slot:selection="{ index, text }">
                          <v-chip v-if="index < 2" color="" dark label small>
                            {{ text }}
                          </v-chip>
                        </template>
                      </v-file-input>
                    </v-col>
                  </v-row>

                  <!-- PASOS -->

                  <button-step />
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" text @click="dialog = false">
                  Cancelar
                </v-btn>
                <v-btn color="green" text @click="handleCreateRecipe()">
                  Guardar Receta
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>

        <!-- <v-snackbar v-model="snackbarSucessCreateRecipe">
          {{ snackbarSucessMessageCreateRecipe }}

          <template v-slot:action="{ attrs }">
            <v-btn
              color="green"
              text
              v-bind="attrs"
              @click="changeStatusSnackbarCreateRecipe()"
            >
              Close
            </v-btn>
          </template>
        </v-snackbar> -->

        <!-- <v-btn class="mx-auto" color="gray" dense @click="handleLogout()">
          Cerrar Sesión
        </v-btn> -->

        <!-- <v-container
          fluid
          style="height: 300px"
        > -->
            <v-menu
              bottom
              min-width="200px"
              rounded
              offset-y
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  x-large
                  v-on="on"
                >
                  <v-avatar
                    color="primary"
                    size="45"
                    class="mr-3"
                  >
                    <span class="white--text text-h5"> AA </span>
                  </v-avatar>
                </v-btn>
              </template>
              <v-card>
                <v-list-item-content class="justify-center">
                  <div class="mx-auto text-center">
                    <v-avatar
                      color="primary"
                    >
                      <span class="white--text text-h5">{{ userProfile.initials }}</span>
                    </v-avatar>
                    <h3>{{ userProfile.fullName }}</h3>
                    <p class="text-caption mt-1">
                      {{ userProfile.email }}
                    </p>
                    <v-divider class="my-3"></v-divider>
                    <v-btn
                      depressed
                      rounded
                      text
                    >
                      Mi perfil
                    </v-btn>
                    <v-divider class="my-3"></v-divider>
                    <v-btn @click="handleLogout()"
                      depressed
                      rounded
                      text
                    >
                      Cerrar Sesion
                    </v-btn>
                  </div>
                </v-list-item-content>
              </v-card>
            </v-menu>
<!--         </v-container>
 -->
      </v-toolbar>

      <!-- ================= LISTA DE RECETAS ======================== -->
    </v-card>

    <p class="text-h5 text-center">Recetas recomendadas</p>
    <div class="d-flex justify-space-around bg-surface-variant">
      <v-row class="ml-12">
      <card-recetas></card-recetas>
        <!-- <v-col sm="2" md="2" lg="2" xl="2" cols="10">
          <card-recetas></card-recetas>
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
        </v-col> -->
      </v-row>
    </div>

    <p class="text-h5 text-center">Recetas mejor valoradas</p>
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

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { namespace } from "vuex-class";
import { CreateRecipeInput, Recipe, LoginInput, User } from "~/gql/graphql";

import CardRecetas from '~/components/CardRcetas.vue';
import buttonStep from "~/components/buttonStep.vue";
import verReceta from '~/components/verReceta.vue';

const RecipesModule = namespace("RecipesModule");
const Auth = namespace("AuthModule");

@Component({
  components: {
    buttonStep,
    verReceta,
    CardRecetas,
  },
})
export default class Principal extends Vue{
  public dialog = false;
  public drawer = false;
  public group = null;
  public loaded = false;
  public loading = false;

  public userProfile = {
        initials: 'JD',
        fullName: 'John Doe',
        email: 'john.doe@doe.com',
      };
  public dietas = [
    {text: "Omnivora", value: "Omnivoro"},
    {text: "Ovo-lacteo Vegetariana", value: "OLV"},
    {text: "Vegana", value: "Vegetariano"},
    {text: "Crudivegana", value: "Crudivegetariana"},
  ];

  public tiempo = [
    {text: "Desayuno", value: "Desayuno"},
    {text: "Comida", value: "Comida"},
    {text: "Cena", value: "Cena"},
    {text: "Colación", value: "Colacion"},
  ];

  public origen = [
    {text: "Mexicana", value: "Mexicana"},
    {text: "Americana", value: "Americana"},
    {text: "Italiana", value: "Italiana"},
    {text: "China", value: "China"},
  ];

  public recipeRegister: CreateRecipeInput ={
    title: '',
    diet: '',
    origen_food: '',
    time_food: '',
    prep_time: null,
    calories: null,
    porcion: 0,
    fat: null,
    carbs: null,
    proteins: null,
    user: {
      connect: "8",
     }
    /* FALTAN INGREDIENTES Y PASOS */
  };
/*   @RecipesModule.State("recipes")
  private recipes!: Recipe[];

  @RecipesModule.Action
  private fetchRecipes!: () => Promise<void>;
  async created() {
    await this.fetchRecipes();
  }  */
  @RecipesModule.Action
  private CreateRecipes!: (data: CreateRecipeInput) => Promise<void>;

  async handleCreateRecipe(){
    await this.CreateRecipes(this.recipeRegister);
    this.dialog = false;
  }

  /* @Auth.Getter
  private UserID! () => Promise<void>; */
/* 
  @Auth.Action
  private CerrarSesion!: () => void; */

  @RecipesModule.State("snackbarSucessCreateRecipe")
  public snackbarSucessCreateRecipe?: boolean;
  @RecipesModule.State("snackbarSucessMessageCreateRecipe")
  public snackbarSucessMessageCreateRecipe?: string;
  @RecipesModule.Action
  private changeStatusSnackbarCreateRecipe!: () => void;

  async onClick(){
    this.loading = true;
    setTimeout(() =>{
      this.loading = false
      this.loaded = true
    }, 2000)
  }

  async handleLogout(){
    this.$router.push('/')
  }
  
}


/* export default {
  name: "Inicio",
   components: {
    buttonStep,
    verReceta,
    Recetas,
  }, 
 

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
    onClick() {
      this.loading = true

      setTimeout(() => {
        this.loading = false
        this.loaded = true
      }, 2000)
    },
    openDialog(recipe) {
      this.$refs.modalRecipe[recipe.id].dialog = true;
    },
    handleLogout() {
      this.$router.push('/');
    }
  },

  watch: {
    group() {
      this.drawer = false
    },
  },
} */
</script>

<style scoped>
.container1{
  position: relative;
  width: 100%;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
  align-content: center;
  align-items: center;

}

</style>