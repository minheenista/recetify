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
                <v-stepper
                  v-model="e6"
                  vertical
                >
                <!-- ======== INFO RECETA========= -->
                  <v-stepper-step
                    :complete="e6 > 1"
                    step="1"
                  >
                  <h2> Informacion básica de la receta</h2>
                  </v-stepper-step>

                  <v-stepper-content step="1">
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

                    <v-btn
                      :disabled="!recipeRegister.title || !recipeRegister.diet || !recipeRegister.time_food || !recipeRegister.prep_time || !recipeRegister.porcion || !recipeRegister.origen_food || !recipeRegister.calories || !recipeRegister.fat || !recipeRegister.carbs || !recipeRegister.proteins || !recipeRegister.description"
                      color="primary"
                      @click="handleCreateRecipe()"
                      class="mb-3"
                    >
                      Siguiente
                    </v-btn>
                    <v-btn text class="mb-3 ml-3"
                      @click="dialog=false; e6 = 1"
                    >
                      Cancelar
                    </v-btn>
                  </v-stepper-content>

                  <!-- ======= INGREDIENTES ======= -->
                  <v-stepper-step
                    :complete="e6 > 2"
                    step="2"
                  >
                    <h2> Ingredientes de la receta</h2>
                  </v-stepper-step>
                  <v-stepper-content step="2">
                  <v-row> <h4 class="ml-5 mt-5">Selecciona los ingredientes</h4></v-row>
                  <v-row>
                    <v-col cols="6">
                      <template v-if="ingredients && ingredients.data">
                        <v-combobox class="ml-5 mt-5 mr-3"
                          :items="ingredients.data"
                          chips
                          
                          label="Selecciona Ingredientes o Busca por nombre"
                          item-text="name"
                          item-value="id"
                          color="primary"
                          prepend-inner-icon="mdi-magnify"
                          v-model="idIngredient"
                        >
                        
                          <template v-slot:selection="{ attrs, item, select, selected }">
                            <v-chip :itemid="item.id"
                              v-bind="attrs"
                              :input-value="selected"
                              v-model="addIngredientsRegister.ingredients_id"
                              @click="select"
                              :key="item.id"
                            >
                              <strong>{{ item.name}}</strong>&nbsp;
                            </v-chip>
                          </template>
                        </v-combobox>
                      </template>
                    </v-col>
                    <v-col cols="2">
                      <v-text-field class="mt-6"
                        label="Cantidad"
                        type="number"
                        v-model.number="addIngredientsRegister.quantity"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="2" >
                      <v-select class="mt-6"
                        :items="unit"
                        label="Unidad*"
                        required
                        v-model="addIngredientsRegister.unit"
                      ></v-select>
                    </v-col>
                  
                    <v-col
                      cols="1"
                      sm="1"
                    > 
                      <v-btn
                        class="mx-2 mr-1 mt-6"
                        fab
                        dark
                        small
                        color="primary"
                        @click="handleAddIngredientToRecipe()"
                      >
                        <v-icon>
                          mdi-plus
                        </v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                  <!-- ======= TABLA INGREDIENTES =========== -->
                  <v-data-table
                    :headers="headers"
                    :items="ingredientes"
                    class="elevation-1 ml-6 mr-6 mb-10"
                  >
                    <template v-slot:top>
                      <v-toolbar
                        flat
                      >
                        <v-toolbar-title>Ingredientes Seleccionados</v-toolbar-title>
                        <v-divider
                          class="mx-4"
                          inset
                          vertical
                        ></v-divider>
                        <v-spacer></v-spacer>
                        
                      </v-toolbar>
                    </template>
                    <template v-slot:item.actions="{ item }">
                      <!-- <v-icon
                        small
                        class="mr-2"
                        @click="editItem(item)"
                      >
                        mdi-pencil
                      </v-icon> -->
                      <v-icon
                        small
                        @click="handleRemoveIngredientToRecipe(item)"
                      >
                        mdi-delete
                      </v-icon>
                    </template>
                    <template v-slot:no-data>
                      <v-btn @click="initialize()"
                        color="primary"
                      >
                        No hay ingredientes seleccionados
                      </v-btn>
                    </template>
                  </v-data-table>


                  <!-- BOTON SIGUIENTE -->
                  <v-btn class="mb-3 ml-3"
                    color="primary"
                    @click="e6 = 3"
                    :disabled="!ingredientes.length"
                  >
                    Siguiente
                  </v-btn>
                  <v-btn text class="mb-3 ml-3"
                    @click="handleDeleteRecipe(idTemp); dialog=false; e6 = 1"
                  >
                    Cancelar
                  </v-btn>
                </v-stepper-content>

                <v-stepper-step
                  :complete="e6 > 3"
                  step="3"
                >
                  <h2> Procedimiento de la receta</h2>
                </v-stepper-step>
                <!-- ===== PROCEDIMIENTO ======= -->
                <v-stepper-content step="3">
                  <v-row>
                    <span class="text-h4 ml-3 mt-5">Agrega pasos</span>
                  </v-row>
                  <v-row>
                    <v-col cols="7" sm="7" class="ml-0">
                      <v-text-field label="Descripcion del paso *" required
                      v-model="addStepsRegister.description"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="3" >
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
                    <v-col cols="1" >
                      <v-btn
                        class="mx-2 mr-1 mt-6"
                        
                        small
                        color="primary"
                        @click="handleCreateStep()"
                      >
                        <v-icon>
                          mdi-plus
                        </v-icon>
                        Paso
                      </v-btn>
                    </v-col>
                  </v-row>
                  

                  <!-- ======= TABLA PROCEDIMIENTO =========== -->
                  <v-data-table
                    :headers="headersPasos"
                    :items="pasos"
                    class="elevation-1 ml-3 mr-3 mb-10"
                  >
                    <template v-slot:top>
                      <v-toolbar
                        flat
                      >
                        <v-toolbar-title> Pasos creados</v-toolbar-title>
                        <v-divider
                          class="mx-4"
                          inset
                          vertical
                        ></v-divider>
                        <v-spacer></v-spacer>
                        
                      </v-toolbar>
                    </template>
                    <template v-slot:item.index="{ item, index }">
                       {{ index + 1 }}
                    </template>
                    <template v-slot:item.actions="{ item }">
                      <!-- <v-icon
                        small
                        class="mr-2"
                        @click="editItem(item)"
                      >
                        mdi-pencil
                      </v-icon> -->
                      <v-icon
                        small
                        @click="handleRemoveStep(item)"
                      >
                        mdi-delete
                      </v-icon>
                    </template>
                    <template v-slot:no-data>
                      <v-btn @click="iniatializePasos()"
                        color="primary"
                      >
                        No hay pasos agregados
                      </v-btn>
                    </template>
                  </v-data-table>

                  <v-btn class="mt-5"
                    color="primary"
                    :disabled="!pasos.length"
                    @click="e6 = 1; dialog = false; fetchMe(); fetchRecipes();"
                  >
                    Guardar Receta 
                  </v-btn>
                  <v-btn text @click="handleDeleteRecipe(idTemp); dialog=false; e6 = 1" class="mt-4 ml-3">
                    Cancelar
                  </v-btn>
                </v-stepper-content>
                  </v-stepper>
                </v-container>
              </v-card-text>

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

import { CreateRecipeInput, Recipe, Recipes, User, CatIngredientsQuery, Cat_Ingredient, AddIngredienttoRecipeInput, RemoveIngredient, RemoveIngredienttoRecipeInput, Unittype, CreateStepInput, Diet, Origen, Time  } from "~/gql/graphql";

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
  public e6 = 1;
  public indexTemp = 0;
  public idTemp = '';
  public recipeTemp: Recipe ={
    id: '',
    title: '',
    diet: Diet.Omnivoro,
    origen_food: Origen.Mexicana,
    time_food: Time.Desayuno,
    prep_time: 0,
    calories: null,
    porcion: 0,
    fat: null,
    carbs: null,
    proteins: null,
    cat_ingredients: [],
    Comments: [],
    steps: [],
    favoriteby: [],
  };

   public desserts = [];

  public dietas = [
    {text: "Omnivora", value: "Omnivoro"},
    {text: "Ovo-lacteo Vegetariana", value: "OLV"},
    {text: "Vegana", value: "Vegetariano"},
    {text: "Crudivegana", value: "Crudivegana"},
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

  public unit = [
    {text: "Gramos", value: "g"},
    {text: "Mililitros", value: "ml"},
    {text: "Pieza", value: "unidad"},
  ];

  /* public chips = [
    
  ] */
 public headers = [
    {
      text: 'Nombre',
      value: 'name',
    },
    { text: 'Img', value: 'image.url' },
    { text: 'Cantidad', value: 'pivot.quantity' },
    { text: 'Unidad', value: 'pivot.unit' },
    { text: 'Actions', value: 'actions', sortable: false },
  ];

  public headersPasos = [
    { text: 'Numero', value: 'index', width: '50px', sortable: false},
    { text: 'Paso', value: 'description' },
    { text: 'Actions', value: 'actions', sortable: false, width: '50px'},
  ];

  public searchQuery = "";

 /*  public remove (item) {
    this.chips.splice(this.chips.indexOf(item), 1)
  }; */

 

  @RecipesModule.Action
  private CreateRecipes!: (data: CreateRecipeInput) => Promise<void>;

  async handleCreateRecipe(){
    const data = {...this.recipeRegister, user: {connect: this.me.id}};
    await this.CreateRecipes(data);
    await this.fetchMe();
    this.e6 = 2;
    this.indexTemp = this.me.recipes.length - 1;
    this.idTemp = this.me.recipes[this.indexTemp].id;
    this.recipeTemp = this.me.recipes[this.indexTemp];
    console.log(this.idTemp);
    console.log(this.recipeTemp);
    this.recipeRegister = {
      title: '',
      diet: Diet.Omnivoro,
      origen_food: Origen.Mexicana,
      time_food: Time.Desayuno,
      prep_time: 0,
      calories: null,
      porcion: 0,
      fat: null,
      carbs: null,
      proteins: null,
    };
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
  @RecipesModule.Action
  private deleteRecipe!: (recipeId: string) => Promise<void>;
  async handleDeleteRecipe(idReceta: string) {
    console.log("idReceta", idReceta);
    await this.deleteRecipe(idReceta);
    this.dialog = false;
    this.fetchMe();
    this.fetchRecipes();
  }

  public addIngredientsRegister: AddIngredienttoRecipeInput = {
    id_ingredient: '',
    id_recipe: '',
    quantity: 0,
    unit: Unittype.G,
  };

  public idIngredient = {id: '', name: ''};

  @RecipesModule.Action
  private addIngredientToRecipe!: (data: AddIngredienttoRecipeInput) => Promise<void>;
  async handleAddIngredientToRecipe(){
    const data = {...this.addIngredientsRegister, id_recipe: this.idTemp, id_ingredient: this.idIngredient.id};
    await this.addIngredientToRecipe(data);
    console.log("dataIngrediente s add", data);
    await this.fetchMe();
    await this.fetchRecipes();
    await this.initialize();
    this.addIngredientsRegister = {
      id_ingredient: '',
      id_recipe: '',
      quantity: 0,
      unit: Unittype.G,
    };
  }

  public removeIngredient: RemoveIngredienttoRecipeInput = {
    id_ingredient: '',
    id_recipe: '',
  };

  @RecipesModule.Action
  private removeIngredientToRecipe!: (data: RemoveIngredienttoRecipeInput) => Promise<void>;
  async handleRemoveIngredientToRecipe(data: any){
    console.log("trae boton remove ing", data);
    const dataRemove = {id_recipe: this.idTemp, id_ingredient: data.id };
    await this.removeIngredientToRecipe(dataRemove);
    
    await this.fetchMe();
    await this.fetchRecipes();
    await this.initialize();
  }

  public addStepsRegister: CreateStepInput = {
    description: '',
  };

  @RecipesModule.Action
  private createStep!: (data: CreateStepInput) => Promise<void>;
  async handleCreateStep(){
    const data = {...this.addStepsRegister, recipe: {connect: this.idTemp}};
    await this.createStep(data);
    console.log("dataIngrediente s add", data);
    await this.fetchMe();
    await this.fetchRecipes();
    this.iniatializePasos();
    this.addStepsRegister.description = '';
  }

  @RecipesModule.Action
  private deleteStep!: (stepId: string) => Promise<void>;
  async handleRemoveStep(data: any) {
    console.log("idStep", data);
    await this.deleteStep(data.id);
    this.fetchMe();
    this.fetchRecipes();
    this.iniatializePasos();
  }

  public ingredientes: any[] = [];

  public pasos: any[] = [];

  initialize(): void {
    this.ingredientes = this.me.recipes[this.indexTemp].cat_ingredients;
    console.log("ingredientes", this.ingredientes);
  }

  iniatializePasos(): void {
    this.pasos = this.me.recipes[this.indexTemp].steps;
    console.log("pasos", this.pasos);
  }

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
    this.fetchMe();
    this.fetchRecipes();
    this.fetchIngredients();
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