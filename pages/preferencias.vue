
<template>
  <div class="container1">
    <center>
      <div class="titulo">
          <h1>
              Queremos conocerte mas ^^
          </h1>
          <br>
      </div>
      <div class="subtitulo">
        <h3 class="subtitulo">Cuales son tus alergias?</h3>
        <br>
        <br>
      </div>
        <!-- CHIPS ALERGIAS PRE -->
        <v-row justify="space-around">
            <v-col cols="auto">
                <!-- <v-sheet
                    elevation="0"
                    class="mr-3"
                > -->
                    <v-chip-group 
                    multiple
                    selected-class="text-primary"
                    >
                        <v-chip size="x-large"
                            v-for="alergia in alergias"
                            :key="alergia.item"
                        >
                            {{ alergia.text }}
                        </v-chip>
                    </v-chip-group>
<!--                 </v-sheet>
 -->            </v-col>
        </v-row>
    </center>
      <br>
        <!-- BUsqueda de alergias -->

      
          <v-container>
            <v-row
              align="center"
              justify="start"
            >
              <v-col
                v-for="(selection, i) in selections"
                :key="selection.text"
                cols="auto"
                class="py-1 pe-0"
              >
                <v-chip closable
                  :disabled="loading"
                  @click:close="selected.splice(i, 1)"
                >
                  <v-icon
                    :icon="selection.icon"
                    start
                  ></v-icon>
      
                  {{ selection.text }}
                </v-chip>
              </v-col>
      
              <v-col  cols="12">
                <v-text-field
                  ref="search"
                  v-model="search"
                  hide-details
                  label="Search"
                  single-line
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
      
          <v-divider ></v-divider>
      {{ingredients}}
          <v-list>
            <template v-for="ingrediente in ingredients">
              <v-list-item
                v-if="!selected.includes(item)"
                :key="item.id"
                :disabled="loading"
                @click="selected.push(item)"
              >
                <template v-slot:prepend>
                  <v-icon
                    :disabled="loading"
                    :icon="item.icon"
                  ></v-icon>
                </template>
      
                <v-list-item-title v-text="item.name"></v-list-item-title>
              </v-list-item>
            </template>
          </v-list>


          <br>
          <br>
          <div class="text-center">
            <v-btn color=green @click="alimentacion()"
              prepend-icon="mdi-check-circle"
            >
              <template v-slot:prepend>
                <v-icon color="default"></v-icon>
              </template>
        
              Continuar
        
            </v-btn>
          </div>

    </div>
</template>


<script lang='ts'>
/* import Vue from "vue";
import Component from "vue-class-component"; */
import { Component, Vue, Watch } from "vue-property-decorator";
import { namespace } from "vuex-class";

import { Cat_Ingredient, Recipe, User } from "~/gql/graphql";
import { CatIngredients,  } from "~/gql/graphql";

const RecipesModule = namespace("RecipesModule");
const Auth = namespace("AuthModule");

export default class Preferencias extends Vue {

  
  
  public alergias = [
    {text: 'Nuez', value: 'Nuez'},
    {text: 'Cacahuate', value: 'Cacahuate'},
    {text: 'Huevo', value: 'Huevo'},
    {text: 'Gluten', value: 'Gluten'},        
    {text: 'Soja', value: 'Soja'},
    {text: 'Manzana', value: 'Manzana'},
    {text: 'Sesamo', value: 'Sesamo'},
    {text: 'Melon', value: 'Melon'},
    {text: 'Piña', value: 'Piña'},
  ];

  public items = [
    {
      text: 'Nature',
      icon: 'mdi-nature',
    },
    {
      text: 'Nightlife',
      icon: 'mdi-glass-wine',
    },
    {
      text: 'November',
      icon: 'mdi-calendar-range',
    },
    {
      text: 'Portland',
      icon: 'mdi-map-marker',
    },
    {
      text: 'Biking',
      icon: 'mdi-bike',
    },
  ];

  public loading = false;
  public search = '';
  public selected = [];

  allSelected(): boolean {
  return this.selected.length === this.items.length;
  };
  categories(): any[] {
    const search = this.search.toLowerCase();

    if (!search) return this.items;

    return this.items.filter((item: any) => {
      const text = item.text.toLowerCase();

      return text.indexOf(search) > -1;
    });
  };
  selections(): any[] {
    const selections: any[] = [];

    for (const selection of this.selected) {
      selections.push(selection);
    }

    return selections;
  };

  /* get selected(): void {
      this.search = '';
  }; */
  
  next () {
    this.loading = true

    setTimeout(() => {
      this.search = ''
      this.selected = []
      this.loading = false
    }, 2000)
  };
  alimentacion(){
    this.$router.push('./gracias');
  };

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

  async mounted() {
     this.fetchMe();
     this.fetchIngredients();
    console.log(this.me);
    console.log(this.ingredients);
  }

 
/* 
    data: () => ({
      tags: [
        {text: 'Nuez', value: 'Nuez'},
        {text: 'Cacahuate', value: 'Cacahuate'},
        {text: 'Huevo', value: 'Huevo'},
        {text: 'Gluten', value: 'Gluten'},        
        {text: 'Soja', value: 'Soja'},
        {text: 'Manzana', value: 'Manzana'},
        {text: 'Sesamo', value: 'Sesamo'},
        {text: 'Melon', value: 'Melon'},
        {text: 'Piña', value: 'Piña'},
      ],
      items: [
        {
          text: 'Nature',
          icon: 'mdi-nature',
        },
        {
          text: 'Nightlife',
          icon: 'mdi-glass-wine',
        },
        {
          text: 'November',
          icon: 'mdi-calendar-range',
        },
        {
          text: 'Portland',
          icon: 'mdi-map-marker',
        },
        {
          text: 'Biking',
          icon: 'mdi-bike',
        },
      ],
      loading: false,
      search: '',
      selected: [],
    }), */
    /* computed: {
      allSelected () {
        return this.selected.length === this.items.length
      },
      categories () {
        const search = this.search.toLowerCase()

        if (!search) return this.items

        return this.items.filter(item => {
          const text = item.text.toLowerCase()

          return text.indexOf(search) > -1
        })
      },
      selections () {
        const selections = []

        for (const selection of this.selected) {
          selections.push(selection)
        }

        return selections
      },
    },
 */
    /* watch: {
      selected () {
        this.search = ''
      },
    },

    methods: {
      next () {
        this.loading = true

        setTimeout(() => {
          this.search = ''
          this.selected = []
          this.loading = false
        }, 2000)
      },
      alimentacion(){
      this.$router.push('./alimentacion');
    }
    }, */
  }
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{  
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins" , sans-serif;
  align-content: center;
  align-items: center;
}
.app{
  min-height: 00vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  padding: 30px;
}
.container{
  position: relative;
  justify-content: center;
  max-width: fit-content;
  width: 100%;
   background-image: ('https://source.unsplash.com/random/1600x800/?food');
  padding: 40px 30px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
  perspective: 2700px;
  top: 10%;

}
.container1{
  position: relative;
  display: grid;
  place-items: center;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
  align-content: center;
  align-items: center;
  margin-top: 50px;

}
.titulo{
    display: flex;
    justify-content: center;
    align-items: center;
}
.subtitulo{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #00a33f;
}


.v-chip-group .v-chip {
    margin: 6px 10px 6px 0;
  }
  .v-chip-group .v-chip--active {
    color: #00a33f;
  }
 
  
</style>