<template>
    <v-card v-if="me"
    class="mx-auto my-2"
    max-width="250"
  >
    <v-img
      cover
      height="100"
      src="https://source.unsplash.com/random/250×100/?food"
    ></v-img>

    <v-card>
      <v-card-title>{{ recipe.title }} <v-spacer></v-spacer>
      <v-btn v-if="me.favoriteRecipes.find(fav => fav.id === recipe.id)"
        icon
        color="pink" 
        @click="handleRemoveFromFavorites(recipe)"
      > 
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn v-else
        icon
        color="pink" 
        @click="handleAddToFavorites(recipe)"
      >
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>
      <v-btn @click.stop="dialog = true"
        icon
        color="green"
      >
        <v-icon>mdi-eye</v-icon>
      </v-btn>
      </v-card-title>
      <v-card-subtitle>
        <span class="mb-3">{{ recipe.diet }}</span>
        
      </v-card-subtitle>
    
      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <div class="my-1">
          <v-chip small>{{ recipe.origen_food }}</v-chip>

          <v-chip small>{{ recipe.time_food }}</v-chip>

          <v-chip small>{{ recipe.prep_time }}</v-chip>
        </div>
        </v-row>

        
      </v-card-text>
      </v-card>

    <!-- VISTA DE RECETA -->
    <v-dialog
      v-model="dialog"
      max-width="1150"
    >
      <v-card>
        <!-- <v-card-title class="text-h5">
          {{title}}
        </v-card-title> -->
        <v-img
          height="350"
          src="https://source.unsplash.com/random/1150×250/?food"
        ></v-img>

        <v-card-title class="text-h5">
          {{ recipe.title }}
          <v-btn v-if="me.favoriteRecipes.find(fav => fav.id === recipe.id)"
            icon
            color="pink" 
            @click="handleRemoveFromFavorites(recipe)"
          > 
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn v-else
            icon
            color="pink" 
            @click="handleAddToFavorites(recipe)"
          >
            <v-icon>mdi-heart-outline</v-icon>
          </v-btn>
        </v-card-title>
        <v-row>
        <v-card-subtitle class="ml-8 my-0" > Autor: {{recipe.user.name}} {{recipe.user.lastname}}</v-card-subtitle>
        <v-spacer></v-spacer>
        <div class="mx-4>">
        <v-chip class="mr-4">{{recipe.diet}}</v-chip>
        <v-chip class="mr-4">{{ recipe.time_food }}</v-chip>
        <v-chip class="mr-4">{{ recipe.origen_food }}</v-chip>
        <v-chip>{{ recipe.prep_time }}</v-chip>
        </div>
        <v-spacer></v-spacer>

        <span class="grey--text mr-5">
        ({{ recipe.rate }})
      </span>
      <v-rating class="mr-8"
        v-model="recipe.rate"
        background-color="yellow accent-4"
        color="yellow accent-4"
        dense
        half-increments
        size="25"
      ></v-rating>

        </v-row>

        <v-row>
          <h4 class="ml-10">Informacion nutrimental</h4>
          <v-spacer></v-spacer>
          <p>{{recipe.calories}} calorias</p>
          <v-spacer></v-spacer>
          <p>{{recipe.fat}} grasas</p>
          <v-spacer></v-spacer>
          <p>{{ recipe.carbs }} carbohidratos</p>
          <v-spacer></v-spacer>
          <p>{{ recipe.proteins }} proteinas</p>
          <v-spacer></v-spacer>
          

        </v-row>

        <v-divider></v-divider>


        <v-card-text>
        <h3 class="mt-5 ml-4"  color="black">Descripcion</h3>
        {{ recipe.description }}
        </v-card-text>
        <v-divider></v-divider>
        <br>
        <v-row>
        <h3 class="ml-10 mr-12">Ingredientes</h3>
        <v-spacer></v-spacer>
        <v-select class="mr-10"
          :items="['1', '2', '3', '4', '5']"
          label="Porciones"
          
        ></v-select>
        <v-spacer></v-spacer>
        <v-btn 
          class="ma-2 mr-10"
          color="primary"
          dark
        >
          Accept
          <v-icon
            right
          >
            mdi-cart-variant
          </v-icon>
        </v-btn>
        <v-spacer></v-spacer>

        </v-row>

        
        <div class="my-2">
        <v-row> 
          <v-icon class="ml-15"
            dense
          >
            mdi-domain
          </v-icon>
          <v-col cols="12" sm="3"><v-checkbox 
            label="Ingrediente 1"
          ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="1"> Cantidad </v-col>
          <v-col cols="12" sm="6">  </v-col>
        </v-row>
        <v-row> 
          <v-icon class="ml-15"
            dense
          >
            mdi-domain
          </v-icon>
          <v-col cols="12" sm="3"><v-checkbox 
            label="Ingrediente 1"
          ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="1"> Cantidad </v-col>
          <v-col cols="12" sm="6">  </v-col>
        </v-row>
        <v-row> 
          <v-icon class="ml-15"
            dense
          >
            mdi-domain
          </v-icon>
          <v-col cols="12" sm="3"><v-checkbox 
            label="Ingrediente 1"
          ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="1"> Cantidad </v-col>
          <v-col cols="12" sm="6">  </v-col>
        </v-row>
        </div>

        <v-divider></v-divider>



        <h1 class="ml-10">Procedimiento</h1>
        <v-timeline
          align-top
          dense
        >
        <!-- PASOS -->
          <v-timeline-item
            color="green"
            small
          >
            <v-row class="pt-1">
              <v-col cols="1">
                <strong>Paso 1</strong>
              </v-col>
              <v-col>
                <div class="body-1">
                  lalalalllalall alalallala
                </div>
              </v-col>
               
            </v-row>
            
          </v-timeline-item>

          <v-timeline-item
            color="green"
            small
          >
            <v-row class="pt-1">
              <v-col cols="1">
                <strong>Paso 2</strong>
              </v-col>
              <v-col>
                <div class="body-1">
                  sisisisisisi sisisisisi
                </div>
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item
            color="green"
            small
          >
            <v-row class="pt-1">
              <v-col cols="1">
                <strong>Paso 3</strong>
              </v-col>
              <v-col>
                <div class="body-1">
                  nanananan nanananan
                </div>
              </v-col>
            </v-row>
          </v-timeline-item>

          <!-- <v-timeline-item
            color="teal lighten-3"
            small
          >
            <v-row class="pt-1">
              <v-col cols="3">
                <strong>3-4pm</strong>
              </v-col>
              <v-col>
                <strong>Design Stand Up</strong>
                <div class="text-caption mb-2">
                  Hangouts
                </div>
                <v-avatar>
                  <v-img
                    src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                  ></v-img>
                </v-avatar>
                <v-avatar>
                  <v-img
                    src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                  ></v-img>
                </v-avatar>
                <v-avatar>
                  <v-img
                    src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                  ></v-img>
                </v-avatar>
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item
            color="pink"
            small
          >
            <v-row class="pt-1">
              <v-col cols="3">
                <strong>12pm</strong>
              </v-col>
              <v-col>
                <strong>Lunch break</strong>
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item
            color="teal lighten-3"
            small
          >
            <v-row class="pt-1">
              <v-col cols="3">
                <strong>9-11am</strong>
              </v-col>
              <v-col>
                <strong>Finish Home Screen</strong>
                <div class="text-caption">
                  Web App
                </div>
              </v-col>
            </v-row>
          </v-timeline-item> -->
        </v-timeline>

        <v-divider></v-divider>



        <v-card-actions>
          <div v-if="recipe.user.id == me.id">
            <!-- ELIMINAR RECETA MODAL Y BOTON -->
            <v-dialog v-model="dialogDelete" max-width="450px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="ma-4 mr-3 ml-3"
                  v-bind="attrs"
                  v-on="on"
                  color="red"
                  icon
                  @click="dialogDelete = false"
                >
                  <v-icon> mdi-delete-empty </v-icon> 
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="text-h5">
                  Seguro que desea eliminar la receta? </v-card-title
                ><br />

                <v-card-actions>
                  <v-btn
                    color="red"
                    text
                    @click="handleDeleteRecipe(recipe.id)"
                  >
                    Confirmar
                  </v-btn>
                  <v-btn color="green" text @click="dialogDelete = false">
                    Cancelar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <!-- BOTON EDITAR -->
            <v-btn class="ml-3"
              color="warning"
              text 
              @click="editRecipe(recipe)"
            >
              <v-icon>
                mdi-pencil
              </v-icon>
                Editar receta
            </v-btn>
          </div>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- EDITAR RECETA MODAL -->
    <v-dialog v-model="dialogEdit" persistent max-width="1150px">
      <!-- MODAL -->
      <v-card>
        <v-card-title>
          <span class="text-h5">Editar receta</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <!-- TITULO, DIETA, TIEMPO -->
            <v-row class="my-0">
            <!-- Titulo -->
              <v-col cols="12" sm="6">
                <v-text-field v-model="cloneRecipe.title"
                  label="Titulo de la receta *"
                  required
                  counter="200"
                ></v-text-field>
              </v-col>
              <!-- Dieta -->
              <v-col cols="12" sm="3">
                <v-select v-model="cloneRecipe.diet"
                  :items="dietas"
                  label="Dieta*"
                  required
                ></v-select>
              </v-col>
              <!-- Tiempo de comida -->
              <v-col cols="12" sm="3">
                <v-select 
                  :items="tiempo"
                  label="Tiempo de comida*"
                  v-model="cloneRecipe.time_food"
                  required
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
                  v-model.number="cloneRecipe.prep_time"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="3">
                <v-text-field 
                  label="Porciones"
                  type="number"
                  suffix=""
                  v-model.number="cloneRecipe.porcion"
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
                  v-model="cloneRecipe.origen_food"
                ></v-select>
              </v-col>

              <v-col cols="12" sm="2">
                <v-text-field
                  label="Calorias"
                  type="number"
                  suffix="cals"
                  v-model.number="cloneRecipe.calories"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2">
                <v-text-field
                  label="Grasas"
                  type="number"
                  suffix="ag"
                  v-model.number="cloneRecipe.fat"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2">
                <v-text-field
                  label="Carbohidratos"
                  type="number"
                  suffix="carbs"
                  v-model.number="cloneRecipe.carbs"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2">
                <v-text-field
                  label="Proteinas"
                  type="number"
                  suffix="P"
                  v-model.number="cloneRecipe.proteins"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row class="my-0">
              <v-col cols="12">
                <v-textarea
                  counter="1000"
                  label="Descripcion"
                  v-model="cloneRecipe.description"
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
          <v-btn color="error" text @click="dialogEdit = false, dialog=true">
            Cancelar
          </v-btn>
          <v-btn color="green" text @click="handleUpdateRecipe()">
            Guardar Receta Updateada
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    
   

    
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { namespace } from 'vuex-class';
import { Recipe, DeleteRecipeMutation, User, Cat_Ingredient, UpdateRecipeInput } from '~/gql/graphql';
import { Prop } from "vue-property-decorator";

const RecipesModule = namespace("RecipesModule");
const Auth = namespace("AuthModule");

@Component
export default class CardRecipes extends Vue{
  public dialog = false;
  public rating = 4.3;
  public dialogDelete = false;
  public dialogEdit = false;

  @Prop({
    required: false,
  })
  public recipe!: Recipe;

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


  /*  @RecipesModule.State("snackbarSucessCreateRecipe")
  public snackbarSucessCreateRecipe?: boolean;
  @RecipesModule.State("snackbarSucessMessageCreateRecipe")
  public snackbarSucessMessageCreateRecipe?: string; */
  /* @RecipesModule.Action
  private changeStatusSnackbarCreateRecipe!: () => void;  */
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
  private addRecipeToFavorite!: (recipeId: string) => Promise<void>;
  async handleAddToFavorites(){
    console.log("recipeId", this.recipe.id);
    const recipeId = this.recipe.id;
    await this.addRecipeToFavorite(recipeId);
    await this.fetchMe();
  }
  @RecipesModule.Action
  private removeRecipeToFavorites!: (recipeId: string) => Promise<void>;
  async handleRemoveFromFavorites(){
    console.log("recipeId removee", this.recipe.id);
    const recipeId = this.recipe.id;
    await this.removeRecipeToFavorites(recipeId);
    await this.fetchMe();
  }

  @RecipesModule.Action
  private deleteRecipe!: (recipeId: string) => Promise<void>;
  async handleDeleteRecipe(idReceta: string) {
    console.log("idReceta", idReceta);
    await this.deleteRecipe(idReceta);
    this.dialogDelete = false;
    this.dialog = false;
    this.fetchMe();

  }

 

  public cloneRecipe: Recipe = {
    id: "",
    title: "",
    description: "",
    diet: '',
    origen_food: '',
    time_food: '',
    prep_time: null,
    calories: null,
    porcion: 0,
    fat: null,
    carbs: null,
    proteins: null,
  }; 

  public updateInput: UpdateRecipeInput = {
    id: "",
    title: "",
    description: "",
    diet: '',
    origen_food: '',
    time_food: '',
    prep_time: null,
    calories: null,
    porcion: 0,
    fat: null,
    carbs: null,
    proteins: null,
  };

  public editRecipe(recipe: Recipe): void{
    console.log("lo que trae boton editar", recipe);
    this.dialog = false;
    this.dialogEdit = true;
    this.cloneRecipe = {...recipe};
  }

  @RecipesModule.Action
  private updateRecipe!: (data: UpdateRecipeInput) => Promise<void>;
  async handleUpdateRecipe() {
    await this.updateRecipe({
      id: this.cloneRecipe.id,
      title: this.cloneRecipe.title,
      description: this.cloneRecipe.description,
      origen_food: this.cloneRecipe.origen_food,
      time_food: this.cloneRecipe.time_food,
      diet: this.cloneRecipe.diet,
      prep_time: this.cloneRecipe.prep_time,
      calories: this.cloneRecipe.calories,
      fat: this.cloneRecipe.fat,
      carbs: this.cloneRecipe.carbs,
      proteins: this.cloneRecipe.proteins,
      porcion: this.cloneRecipe.porcion,
    } );
    this.dialogEdit = false;
    this.dialog = false;
    this.fetchMe();
  } 

  public deletRecetaId = "";
    
  public deleteReceta(idReceta: string): void {
    this.deletRecetaId = idReceta;
    this.dialogDelete = true;
  }




}

</script>

<style>

</style>