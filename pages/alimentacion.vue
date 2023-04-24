 <template>
    <v-app>
            <div class="container">
                <center>
                    <div class="titulo">
                        <h1>
                            Queremos conocerte mas ^^
                        </h1>
                        <br>
                    </div>
                   <div class="subtitulo">
                    <h3 class="subtitulo">Cual es tu tipo de alimentacion?</h3>
                    <br>
                    <br>
                   </div>
                   <!-- CHIPS ALIMENTACION PRE -->
                   <div class="d-flex justify-space-around">
    
                    <v-chip-group 
                      multiple
                      selected-class="text-primary"
                    >
                    <!-- chips -->
                      <v-chip size="x-large" >
                        Omnivoro
                        <v-tooltip
                          activator="openOnHover"
                          location="bottom"
                          >Come vegetales, cereales y derivados animales
                        </v-tooltip>
                      </v-chip>

                      <v-chip size="x-large" >
                        Ovo-lacteo vegetariano
                        <v-tooltip
                          activator="openOnHover"
                          location="bottom"
                          >Come vegetales, cereales, huevo y lacteos
                        </v-tooltip>
                      </v-chip>

                      <v-chip size="x-large" >
                        Vegetariano estricto
                        <v-tooltip
                          activator="openOnHover"
                          location="bottom"
                          >Come vegetales y cereales
                        </v-tooltip>
                      </v-chip>
                    </v-chip-group>
                  
                  </div>
              </center>
              <br>
              <!-- Preguntas -->
              <v-radio-group
                v-model="inline"
                inline 
              >
                <p class="text-left">
                  Consumes lacteos?
                </p>
                <v-radio
                  label="Si"
                  value="radio-1"
                ></v-radio>
                <v-radio
                  label="No"
                  value="radio-2"
                ></v-radio>
              </v-radio-group>

              <v-radio-group
                v-model="inline"
                inline 
              >
                <p class="text-left">
                  Eres intolerante a la lactosa?
                </p>
                <v-radio
                  label="Si"
                  value="radio-1"
                ></v-radio>
                <v-radio
                  label="No"
                  value="radio-2"
                ></v-radio>
              </v-radio-group>
              <v-radio-group
                v-model="inline"
                inline 
              >
                <p class="text-left">
                  Haces uso de leches alternas?
                </p>
                <v-radio
                  label="Si"
                  value="radio-1"
                ></v-radio>
                <v-radio
                  label="No"
                  value="radio-2"
                ></v-radio>
              </v-radio-group>

              <br>
              <br>
              <div class="text-center">
                <v-btn color=green @click="gracias()"
                  prepend-icon="mdi-check-circle"
                >
                  <template v-slot:prepend>
                    <v-icon color="default"></v-icon>
                  </template>
            
                  Continuar
            
                </v-btn>
              </div>
    
            </div>
        </v-app>       
    </template>


<script>
export default {
    name: "Alimentacion",
    data: () => ({
      tags: [
        'Work',
        'Home Improvement',
        'Vacation',
        'Food',
        'Drawers',
        'Shopping',
        'Art',
        'Tech',
        'Creative Writing',
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
    }),
    computed: {
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

    watch: {
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
      gracias(){
      this.$router.push('./gracias');
    }
    },
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
  background: #00c1770e;
  padding: 30px;
}
.container{
  position: relative;
  justify-content: center;
  max-width: fit-content;
  width: 100%;
  background: #fff;
  padding: 40px 30px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
  perspective: 2700px;
  top: 10%;

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