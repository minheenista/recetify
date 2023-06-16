<template>
  <div class="container1" v-if="me">
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
          v-model="searchQuery"
          @click:append-inner="onClick"
        ></v-text-field>
        <ul>
          <li v-for="(recipe) in filteredRecipes" :key="recipe.id">
            {{ recipe.title }}
          </li>
        </ul>

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

                  
                  <v-row> <h3>Ingredientes</h3></v-row>
                  <v-row>
                    <template v-if="ingredients && ingredients.data">
                      <v-combobox
                        v-model="chips"
                        :items="ingredients.data"
                        chips
                        clearable
                        label="Selecciona Ingredientes o Busca por nombre"
                        multiple
                        item-text="name"
                        solo
                        prepend-inner-icon="mdi-magnify"
                      >
                      
                        <template v-slot:selection="{ attrs, item, select, selected }">
                          <v-chip
                            v-bind="attrs"
                            :input-value="selected"
                            close
                            @click="select"
                            @click:close="remove(item)"
                          >
                            <strong>{{ item.name }}</strong>&nbsp;
                          </v-chip>
                        </template>
                      </v-combobox>
                    </template>
                  </v-row>
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
        
          <!-- USER PROFILE -->
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
                    <span class="white--text text-h5 ml-3 mr-3"> {{ me.name[0] }}{{ me.lastname[0] }} </span>
                  </v-avatar>
                </v-btn>
              </template>
              <v-card>
                <v-list-item-content class="justify-center">
                  <div class="mx-auto text-center mx-3">
                    <v-avatar
                      color="primary"
                    >
                      <span class="white--text text-h5">{{ me.name[0] }}{{ me.lastname[0] }}</span>
                    </v-avatar>
                    <h3>{{ me.name }} {{me.lastname}}</h3>
                    <p class="text-caption mt-1">
                      {{ me.email }}
                    </p>
                    <v-divider class="my-3"></v-divider>
                    <!-- <v-btn
                      depressed
                      rounded
                      text
                    >
                      Mi perfil
                    </v-btn> -->
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

      </v-toolbar>

      <!-- ================= LISTA DE RECETAS ======================== -->
    </v-card>

    <p class="text-h5 text-center">Tus Recetas</p>
    <div class="d-flex justify-space-around bg-surface-variant">
     <v-row class="ml-12" v-if="me && me.recipes">
        <v-col cols="3" v-for="(recipe) in me.recipes" :key="recipe.id">
          <CardRecipes :recipe="recipe" />
        </v-col>
       
      </v-row>
    </div>

    <p class="text-h5 text-center">Recetas Recomendadas</p>
    <div class="d-flex justify-space-around bg-surface-variant">
     <v-row class="ml-12" v-if="recipes && recipes.data">
        <v-col cols="3" v-for="(recipe) in recipes.data" :key="recipe.id">
          <CardRecipes :recipe="recipe" />
        </v-col>
       
      </v-row>
    </div>

    
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from "vue-property-decorator";
import { namespace } from "vuex-class";

import { CreateRecipeInput, Recipe, Recipes, User, CatIngredientsQuery, Cat_Ingredient } from "~/gql/graphql";

import CardRecipes from "~/components/CardRecipes.vue";
import buttonStep from "~/components/buttonStep.vue";
import verReceta from '~/components/verReceta.vue';

const RecipesModule = namespace("RecipesModule");
const Auth = namespace("AuthModule");

@Component({
  components: {
    buttonStep,
    verReceta,
    CardRecipes,
  },
  layout(context){
    return "dashboard";
  }
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

  public chips = [
    
  ]

  public ingredientes = [
    {text: "Leche", value: "Leche"},
    {text: "Huevo", value: "Huevo"},
    {text: "Queso", value: "Queso"},
    {text: "Pollo", value: "Pollo"},
  ]; 

  public searchQuery = "";

  /* public remove (item) {
    this.chips.splice(this.chips.indexOf(item), 1)
  }; */

 

  @RecipesModule.Action
  private CreateRecipes!: (data: CreateRecipeInput) => Promise<void>;

  async handleCreateRecipe(){
    const data = {...this.recipeRegister, user: {connect: this.me.id}};
    await this.CreateRecipes(data);
    this.dialog = false;
    await this.fetchMe();
  }



   @RecipesModule.State("snackbarSucessCreateRecipe")
  public snackbarSucessCreateRecipe?: boolean;
  @RecipesModule.State("snackbarSucessMessageCreateRecipe")
  public snackbarSucessMessageCreateRecipe?: string;
  @RecipesModule.Action
  private changeStatusSnackbarCreateRecipe!: () => void; 
   @Auth.State("user")
  private user!: User;
  @Auth.Action
  private fetchMe!: () => Promise<void>;
  @RecipesModule.State("recipes")
  public recipes!: Recipe[];
  @RecipesModule.Action
  private fetchRecipes!: () => Promise<void>; 
  @Auth.State("me")
  private me!: User;
  @RecipesModule.Action
  private fetchIngredients!: () => Promise<void>;
  @RecipesModule.State("CatIngredients")
  public CatIngredients!: Cat_Ingredient[];
  @RecipesModule.State("ingredients")
  public ingredients!: Cat_Ingredient[];

  async onClick(){
    this.loading = true;
    setTimeout(() =>{
      this.loading = false
      this.loaded = true
    }, 2000)
  }

  async filteredRecipes(){
    const search = this.searchQuery;
      if (!search) return this.recipes;
      
      return this.recipes.filter(recipe => {
        console.log(recipe);
        const title = recipe.title;
        return title.includes(search);
      });
    
  }

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
    /* user: {
      connect: this.me.id,
     }   */
    /* FALTAN INGREDIENTES Y PASOS */
  };

  async created(){
    await this.fetchMe();
    await this.fetchRecipes();
    await this.fetchIngredients();
  } 

  async handleLogout(){
    this.$router.push('/')
  }
  
  
}



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