 <template>
        <div class="container">
            <center>
                <div class="titulo">
                    <h1>
                        Gracias por registrarte
                    </h1>
                    <br>
                </div>
                <div class="subtitulo">
                <h3 class="subtitulo">Tus preferencias han sido guardadas</h3>
                <br>
                <br>
                
                </div>
                <h4 style="margin-bottom: 50px;">
                  Tus respuestas ayudaran a mejorar las recomendaciones.
                </h4>

                <div class="text-center">
                  <v-btn color=green @click="fullregistro()"
                    prepend-icon="mdi-check-circle"
                  >
                    <template v-slot:prepend>
                      <v-icon color="default"></v-icon>
                    </template>
              
                    Continuar
              
                  </v-btn>
                </div>
                
            </center>
    
        </div>
    </template>


<script>
export default {
    name: "Gracias",
    
    methods: {
      
      fullregistro(){
      this.$router.push('./recetas');
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
  margin-bottom: 20px;
}
.app{
  min-height: 00vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #00c1770e;
  padding: 30px;
  background: rgb(255,255,255);
  background: radial-gradient(circle, rgba(255,255,255,1) 74%, rgba(76,175,80,0.7344187675070029) 100%);
}
.container{
  position: relative;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 40px 30px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
  perspective: 2700px;
  top: 10%;
  background: rgb(255,255,255);
  background: radial-gradient(circle, rgba(255,255,255,1) 74%, rgba(76,175,80,0.7344187675070029) 100%);

}
.titulo{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
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