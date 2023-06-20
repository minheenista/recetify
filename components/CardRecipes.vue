<template>
  <v-card v-if="me" class="mx-auto my-2" max-width="3200">
    <v-img
      cover
      height="100"
      src="https://source.unsplash.com/random/250×100/?food"
    ></v-img>

    <!-- ==== CARD RECETA === -->
    <v-card>
      <v-card-title
        >{{ recipe.title }} <v-spacer></v-spacer>
        <v-btn
          v-if="me.favoriteRecipes.find((fav) => fav.id === recipe.id)"
          icon
          color="pink"
          @click="handleRemoveFromFavorites(recipe)"
        >
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn v-else icon color="pink" @click="handleAddToFavorites(recipe)">
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>
        <v-btn @click.stop="dialog = true; initialize(); iniatializePasos()" icon color="green">
          <v-icon>mdi-eye</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-subtitle>
        <span class="mb-3">{{ recipe.diet }}</span>
        <v-spacer></v-spacer>
        <span class="mb-3 right">Reseñas: {{ recipe.rate }}</span>
      </v-card-subtitle>
      

      <v-card-text>
        <v-row align="center" class="mx-0">
          <div class="my-1">
            <v-chip small>{{ recipe.origen_food }}</v-chip>

            <v-chip small>{{ recipe.time_food }}</v-chip>

            <v-chip small>{{ recipe.prep_time }} minutos</v-chip>
          </div>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- VISTA DE RECETA -->
    <v-dialog v-model="dialog" max-width="1150">
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
          <v-btn
            v-if="me.favoriteRecipes.find((fav) => fav.id === recipe.id)"
            icon
            color="pink"
            @click="handleRemoveFromFavorites(recipe)"
          >
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn v-else icon color="pink" @click="handleAddToFavorites(recipe)">
            <v-icon>mdi-heart-outline</v-icon>
          </v-btn>
        </v-card-title>
        <v-row>
          <v-card-subtitle class="ml-8 my-0">
            Autor: {{ recipe.user.name }}
            {{ recipe.user.lastname }} 
            <v-icon v-if="recipe.user.id == 618" small color="success">mdi-check-decagram</v-icon>
            </v-card-subtitle
          >
          <v-spacer></v-spacer>
          <div class="mx-4>">
            <v-chip class="mr-4">{{ recipe.diet }}</v-chip>
            <v-chip class="mr-4">{{ recipe.time_food }} </v-chip>
            <v-chip class="mr-4">{{ recipe.origen_food }}</v-chip>
            <v-chip>{{ recipe.prep_time }} minutos </v-chip>
          </div>
          <v-spacer></v-spacer>

          <span class="grey--text mr-5"> ({{ recipe.rate }}) </span>
          <v-rating
            class="mr-8"
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
          <p>{{ recipe.calories }} calorias</p>
          <v-spacer></v-spacer>
          <p>{{ recipe.fat }} grasas</p>
          <v-spacer></v-spacer>
          <p>{{ recipe.carbs }} carbohidratos</p>
          <v-spacer></v-spacer>
          <p>{{ recipe.proteins }} proteinas</p>
          <v-spacer></v-spacer>
        </v-row>

        <v-divider></v-divider>

        <v-card-text>
          <h3 class="mt-5 ml-4" color="black">Descripcion</h3>
          {{ recipe.description }}
        </v-card-text>
        <v-divider></v-divider>
        <br />

        <v-data-table
          :headers="headers"
          :items="ingredientes"
          class="elevation-1 ml-10 mr-10 mb-10"
          disable-pagination
          hide-default-footer
          show-select
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title><h3>Ingredientes</h3></v-toolbar-title>
              <v-divider class="mx-8" inset vertical></v-divider>
              <v-spacer></v-spacer>
            </v-toolbar>
          </template>
          <template v-slot:no-data>
            <v-btn @click="initialize()"
              color="primary"
            >
              No hay ingredientes seleccionados
            </v-btn>
          </template>

          <!--  <template v-slot:item.image="{ item }">
            <img :src="item.image.url" alt="Recipe Image" width="50" height="50">
          </template> -->
        </v-data-table>

        <v-divider></v-divider>

        <h2 class="ml-10 mt-3">Procedimiento</h2>
        <v-timeline class="mb-4" align-top dense v-if="recipe.steps">
          <!-- PASOS -->
          <v-timeline-item
            color="green"
            small
            v-for="(step, index) in recipe.steps"
            :key="index"
          >
            <v-row class="pt-1">
              <v-col cols="1">
                <strong>Paso {{ index + 1 }}:</strong>
              </v-col>
              <v-col>
                <div class="body-1">
                  {{ step.description }}
                </div>
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>

        <v-divider></v-divider>

        <h2 class="ml-10 mt-3">Comentarios</h2>
        <center>
          <v-row>
            <v-col cols="8">
              <v-textarea
                class="ml-10"
                label="Escribe un comentario"
                rows="1"
                auto-grow
                clearable
                v-model="commentRegister.comentario"
              ></v-textarea>
            </v-col>
            <v-col cols="2" sm="2">
              <v-rating
                class="mt-5"
                v-model="commentRegister.rating"
                background-color="amber lighten-2"
                color="amber darken-2"
                dense
                half-increments
                hover
                size="25"
              ></v-rating>
            </v-col>
            <v-col cols="1" sm="1">
              <v-btn
                color="primary"
                class="mt-3"
                @click="handleCreateComment()"
              >
                Enviar
              </v-btn>
            </v-col>
          </v-row>
        </center>
        <div v-if="recipe.Comments">
          <v-row v-for="coment in recipe.Comments" :key="coment.id">
            <v-col cols="1">
              <v-avatar color="primary" size="45" class="mr-0 ml-10 pt-0">
                <span class="white--text text-h5 ml-3 mr-3"> AA </span>
              </v-avatar>
            </v-col>
            <v-col cols="8">
              <v-card-text class="subtitle-1 ml-3">
                <strong>
                  {{ coment.user.name }} {{ coment.user.lastname }}
                </strong>
                <br />
                {{ coment.comentario }}
              </v-card-text>
            </v-col>
            <v-col cols="3">
              <v-rating
                class="mt-5"
                v-model="coment.rating"
                background-color="amber lighten-2"
                color="amber darken-2"
                dense
                half-increments
                size="25"
              ></v-rating>
            </v-col>
          </v-row>
        </div>

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
            <v-btn
              class="ml-3"
              color="warning"
              text
              @click="editRecipe(recipe)"
            >
              <v-icon> mdi-pencil </v-icon>
              Editar receta
            </v-btn>
          </div>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
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
                <v-text-field
                  v-model="cloneRecipe.title"
                  label="Titulo de la receta *"
                  required
                  counter="200"
                ></v-text-field>
              </v-col>
              <!-- Dieta -->
              <v-col cols="12" sm="3">
                <v-select
                  v-model="cloneRecipe.diet"
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

            <v-row> <h2 class="ml-5 mt-5">Selecciona los ingredientes</h2></v-row>
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
                    :headers="headersIngre"
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

            <v-row>
                    <span class="text-h4 ml-3 mt-5">Agrega o edita pasos</span>
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
                        @click="deleteItem(item)"
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



            
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="error"
            text
            @click="(dialogEdit = false), (dialog = true)"
          >
            Cancelar
          </v-btn>
          <v-btn color="green" text @click="handleUpdateRecipe()">
            Guardar Receta
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="showNotification" :timeout="3000" >
          La receta se actualizó correctamente :D
        </v-snackbar>

        <v-snackbar v-model="showNotificationDelete" :timeout="3000" >
          La receta se eliminó correctamente :c
        </v-snackbar>

        <v-snackbar v-model="showNotificationFav" :timeout="3000" >
          La receta se agregó correctamente a favoritos uwu
        </v-snackbar>

        <v-snackbar v-model="showNotificationFavRem" :timeout="3000" >
          La receta se eliminó correctamente de favoritos :c
        </v-snackbar>

        <v-snackbar v-model="showNotificationComment" :timeout="3000" >
          El comentario se agregó correctamente ^^
        </v-snackbar>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { namespace } from "vuex-class";
import {
  Recipe,
  DeleteRecipeMutation,
  User,
  Cat_Ingredient,
  UpdateRecipeInput,
  CreateCommentInput,
  Comments,
  Diet,
  Origen,
  Time,
  AddIngredienttoRecipeInput,
  RemoveIngredienttoRecipeInput,
  Unittype,
  CreateStepInput,
} from "~/gql/graphql";
import { Prop } from "vue-property-decorator";

const RecipesModule = namespace("RecipesModule");
const Auth = namespace("AuthModule");

@Component
export default class CardRecipes extends Vue {
  public dialog = false;
  public rating = 4.3;
  public dialogDelete = false;
  public dialogEdit = false;
  public showNotification = false;
  public showNotificationDelete = false;
  public showNotificationFav = false;
  public showNotificationComment = false;
  public showNotificationFavRem = false;

  @Prop({
    required: false,
  })
  public recipe!: Recipe;

  public dietas = [
    { text: "Omnivora", value: "Omnivoro" },
    { text: "Ovo-lacteo Vegetariana", value: "OLV" },
    { text: "Vegana", value: "Vegetariano" },
    { text: "Crudivegana", value: "Crudivegana" },
  ];

  public tiempo = [
    { text: "Desayuno", value: "Desayuno" },
    { text: "Comida", value: "Comida" },
    { text: "Cena", value: "Cena" },
    { text: "Colación", value: "Colacion" },
  ];

  public origen = [
    { text: "Mexicana", value: "Mexicana" },
    { text: "Americana", value: "Americana" },
    { text: "Italiana", value: "Italiana" },
    { text: "China", value: "China" },
  ];

  public headers = [
    {
      text: "Nombre",
      align: "start",
      sortable: false,
      value: "name",
    },
    { text: "Img", value: "image.url" },
    { text: "Cantidad", value: "pivot.quantity" },
    { text: "Unidad", value: "pivot.unit" },
  ];

  public headersIngre = [
    {
      text: 'Nombre',
      value: 'name',
    },
    { text: 'Img', value: 'image.url' },
    { text: 'Cantidad', value: 'pivot.quantity' },
    { text: 'Unidad', value: 'pivot.unit' },
    { text: 'Actions', value: 'actions', sortable: false },
  ];

  public unit = [
    {text: "Gramos", value: "g"},
    {text: "Mililitros", value: "ml"},
    {text: "Pieza", value: "unidad"},
  ];

   public headersPasos = [
    { text: 'Numero', value: 'index', width: '50px', sortable: false},
    { text: 'Paso', value: 'description' },
    { text: 'Actions', value: 'actions', sortable: false, width: '50px'},
  ];

  public chips = [];

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
  async handleAddToFavorites() {
    console.log("recipeId", this.recipe.id);
    const recipeId = this.recipe.id;
    await this.addRecipeToFavorite(recipeId);
    await this.fetchMe();
    this.showNotificationFav = true;
  }
  @RecipesModule.Action
  private removeRecipeToFavorites!: (recipeId: string) => Promise<void>;
  async handleRemoveFromFavorites() {
    console.log("recipeId removee", this.recipe.id);
    const recipeId = this.recipe.id;
    await this.removeRecipeToFavorites(recipeId);
    await this.fetchMe();
    this.showNotificationFavRem = true;
  }

  @RecipesModule.Action
  private deleteRecipe!: (recipeId: string) => Promise<void>;
  async handleDeleteRecipe(idReceta: string) {
    console.log("idReceta", idReceta);
    await this.deleteRecipe(idReceta);
    this.dialogDelete = false;
    this.dialog = false;
    this.fetchMe();
    this.fetchRecipes();
    this.showNotificationDelete = true;
  }

  @RecipesModule.Action
  private createRecipeComment!: (
    createCommentInput: CreateCommentInput
  ) => Promise<void>;
  async handleCreateComment() {
    console.log("recipeId", this.recipe.id);
    /*     const recipeId = this.recipe.id;
     */ const data = {
      ...this.commentRegister,
      recipe: { connect: this.recipe.id },
    };
    await this.createRecipeComment(data);
    await this.fetchRecipes();
    this.fetchMe();
    this.showNotificationComment = true;
  }

  public commentRegister: CreateCommentInput = {
    comentario: "",
    rating: 0,
  };

  public cloneRecipe: Recipe = {
    id: "",
    title: "",
    description: "",
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

  public updateInput: UpdateRecipeInput = {
    id: "",
    title: "",
    description: "",
    diet: "",
    origen_food: "",
    time_food: "",
    prep_time: null,
    calories: null,
    porcion: 0,
    fat: null,
    carbs: null,
    proteins: null,
  };

  public idIngredient = {id: '', name: ''};

  public addIngredientsRegister: AddIngredienttoRecipeInput = {
    id_ingredient: '',
    id_recipe: '',
    quantity: 0,
    unit: Unittype.G,
  };

  @RecipesModule.Action
  private addIngredientToRecipe!: (data: AddIngredienttoRecipeInput) => Promise<void>;
  async handleAddIngredientToRecipe(){
    const data = {...this.addIngredientsRegister, id_recipe: this.recipe.id, id_ingredient: this.idIngredient.id};
    await this.addIngredientToRecipe(data);
    console.log("dataIngrediente s add", data);
    await this.fetchMe();
    await this.fetchRecipes();
    await this.initialize();
  }

  public removeIngredient: RemoveIngredienttoRecipeInput = {
    id_ingredient: '',
    id_recipe: '',
  };

  @RecipesModule.Action
  private removeIngredientToRecipe!: (data: RemoveIngredienttoRecipeInput) => Promise<void>;
  async handleRemoveIngredientToRecipe(data: any){
    console.log("trae boton remove ing", data);
    const dataRemove = {id_recipe: this.recipe.id, id_ingredient: data.id };
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
    const data = {...this.addStepsRegister, recipe: {connect: this.recipe.id}};
    await this.createStep(data);
    console.log("dataIngrediente s add", data);
    await this.fetchMe();
    await this.fetchRecipes();
    this.iniatializePasos();
  }

  public pasos: any[] = [];

iniatializePasos(): void {
    this.pasos = this.recipe.steps;
    console.log("pasos", this.pasos);
  }



  public editRecipe(recipe: Recipe): void {
    console.log("lo que trae boton editar", recipe);
    this.dialog = false;
    this.dialogEdit = true;
    this.cloneRecipe = { ...recipe };
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
    });
    this.dialogEdit = false;
    this.dialog = false;
    this.fetchMe();
    this.fetchRecipes();
    this.showNotification = true;
  }

  public deletRecetaId = "";

  public deleteReceta(idReceta: string): void {
    this.deletRecetaId = idReceta;
    this.dialogDelete = true;
  }

  public ingredientes: any[] = [];

  initialize(): void {
    this.ingredientes = this.recipe.cat_ingredients;
    console.log("ingredientes", this.ingredientes);
  }

  /* created(): void {
    this.initialize();
    this.iniatializePasos();
  } */
}
</script>

<style>

</style>