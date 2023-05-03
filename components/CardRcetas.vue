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
        <v-spacer></v-spacer>

        
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
   </div>
    </v-card-text>

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
          AAAAAAAAAAAAA
        </v-card-title>
        <v-row>
        <v-card-subtitle class="ml-8 my-0"> AUTOR </v-card-subtitle>
        <v-spacer></v-spacer>
        <div class="mx-4>">
        <v-chip class="mr-4">Dieta</v-chip>
        <v-chip class="mr-4">Tiempo</v-chip>
        <v-chip class="mr-4">Origen</v-chip>
        <v-chip>Prep time</v-chip>
        </div>
        <v-spacer></v-spacer>

        <span class="grey--text mr-5">
        ({{ rating }})
      </span>
      <v-rating class="mr-8"
        v-model="rating"
        background-color="white"
        color="yellow accent-4"
        dense
        half-increments
        hover
        size="25"
      ></v-rating>

        </v-row>

        <v-row>
          <h4 class="ml-10">Informacion nutrimental</h4>
          <v-spacer></v-spacer>
          <p>3547 calorias</p>
          <v-spacer></v-spacer>
          <p>3547 grasas</p>
          <v-spacer></v-spacer>
          <p>3547 carbohidratos</p>
          <v-spacer></v-spacer>
          <p>3547 proteinas</p>
          <v-spacer></v-spacer>
          

        </v-row>

        <v-divider></v-divider>


        <v-card-text>
        <h3 class="mt-5 ml-4"  color="black">Descripcion</h3>
        Hola
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
            v-model="checkbox"
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
            v-model="checkbox"
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
            v-model="checkbox"
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
      rating: 4.3,
       pictures: ["https://source.unsplash.com/random/1150×250/?food"],
      picToShow: "https://source.unsplash.com/random/1150×250/?food",
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