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
                <h3 class="subtitulo">Cuales son tus alergias?</h3>
                <br>
                <br>
               </div>
               <!-- CHIPS ALERGIAS PRE -->
                <v-row justify="space-around">
                    <v-col cols="auto">
                        <v-sheet
                            elevation="0"
                            class="py-4 px-4"
                        >
                            <v-chip-group 
                            multiple
                            selected-class="text-primary"
                            >
                                <v-chip size="x-large"
                                    v-for="tag in tags"
                                    :key="tag"
                                >
                                    {{ tag }}
                                </v-chip>
                            </v-chip-group>
                        </v-sheet>
                    </v-col>
                </v-row>

            
                <center>
                    <v-card
                        class="mx-auto"
                        max-width="500"
                    >

                        <v-container width="500">
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
                            <v-chip
                                :disabled="loading"
                                closable
                                @click:close="selected.splice(i, 1)"
                            >
                                <v-icon
                                :icon="selection.icon"
                                start
                                ></v-icon>

                                {{ selection.text }}
                            </v-chip>
                            </v-col>

                            <v-col max-width="500"
                            cols="12"
                            >
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

                        <v-list>
                        <template v-for="item in categories">
                            <v-list-item
                            v-if="!selected.includes(item)"
                            :key="item.text"
                            :disabled="loading"
                            @click="selected.push(item)"
                            >
                            <template v-slot:prepend>
                                <v-icon
                                :disabled="loading"
                                :icon="item.icon"
                                ></v-icon>
                            </template>

                            <v-list-item-title v-text="item.text"></v-list-item-title>
                            </v-list-item>
                        </template>
                        </v-list>

                        <v-divider></v-divider>
                    </v-card>
                </center>
                    
            </center>
                
        </div>
    </v-app>
</template>

<script>
export default {
    name: "Preferencias",
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