<template>
    <div class="container">
      <!-- Animacion flip -->
      <input type="checkbox" id="flip" />
      <div class="cover">
        <div class="front">
          <img src="https://source.unsplash.com/random/900×700/?food" alt="" />
        </div>
        <div class="back">
          <img
            class="backImg"
            src="https://source.unsplash.com/random/900×700/?food"
            alt=""
          />
        </div>
      </div>
      <!-- LOGIN FORM -->
      <div class="forms">
        <div class="form-content">
          <div class="login-form">
            <center>
              <img src="../assets/recetifylogo.jpeg" />
              <div class="title">Inicio de sesión</div>
            </center>

            <v-form ref="form">
              <div class="input-boxes">
                <v-text-field
                  v-model="dataLogin.email"
                  :rules="rulesLogin.emailRules"
                  label="Correo electronico"
                  variant="underlined"
                  color="green"
                  prepend-inner-icon="mdi-account"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="dataLogin.password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.passRules.required, rules.passRules.min]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="Contraseña"
                  variant="underlined"
                  color="green"
                  prepend-inner-icon="mdi-lock"
                  hint="Se requieren al menos 8 caracteres"
                  @click:append="show1 = !show1"
                ></v-text-field>
              </div>

              <div class="text sign-up-text">
                <a href="#">Olvidaste tu contraseña?</a>
              </div>
              <div class="text sign-up-text">
                No tienes una cuenta? <label for="flip">Registrate aquí</label>
              </div>
              <br />

              <v-btn
                class="mx-auto col-md-11"
                color="primary"
                dense
                block
                height="45"
                @click="handleLogin()"
              >
                Iniciar Sesión
              </v-btn>
            </v-form>
          </div>

          <!-- REGISTER FORM -->

          <div class="signup-form">
            <center>
              <img src="../assets/recetifylogo.jpeg" />
              <div class="title">Registro de usuario</div>
            </center>

            <form action="#">
              <div class="input-boxes">
                <v-form ref="form">
                  <div class="input-boxes">
                    <v-text-field
                      v-model="dataRegister.name"
                      :rules="rules.nameRules"
                      :counter="50"
                      label="Primer Nombre"
                      variant="underlined"
                      color="green"
                      prepend-inner-icon="mdi-account-box"
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model="dataRegister.lastname"
                      :rules="rules.lastnameRules"
                      :counter="50"
                      label="Apellidos"
                      variant="underlined"
                      color="green"
                      prepend-inner-icon="mdi-account-box"
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model="dataRegister.email"
                      :rules="rules.emailRulesReg"
                      label="Correo electronico"
                      variant="underlined"
                      color="green"
                      prepend-inner-icon="mdi-email"
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model="dataRegister.password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.passRules.required, rules.passRules.min]"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      label="Contraseña"
                      variant="underlined"
                      color="green"
                      prepend-inner-icon="mdi-lock"
                      hint="Se requieren al menos 8 caracteres"
                      @click:append="show1 = !show1"
                    ></v-text-field>

                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :return-value.sync="date"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="dataRegister.birthday"
                          label="Picker in menu"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="dataRegister.birthday"
                        no-title
                        scrollable
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="menu = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.menu.save(date)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-menu>
                  </div>
                  <br />
                  <v-btn
                    class="mx-auto col-md-11"
                    color="primary"
                    dense
                    block
                    @click="handleRegister()"
                    height="45"
                  >
                    Registrar
                  </v-btn>
                </v-form>
                <br />
                <div class="text sign-up-text">
                  Ya tienes una cuenta?
                  <label for="flip">Inicia sesión aquí</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

import Component from "vue-class-component";
import { namespace } from "vuex-class";
import { CreateUserInput } from "~/gql/graphql";
import { LoginInput } from "~/gql/graphql";

const Auth = namespace("AuthModule");
@Component
export default class Register extends Vue {
  public show1 = false;
  public show2 = true;

  public menu = false;
  public modal = false;
  public menu2 = false;
  date = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10);
     /*  menu: false,
      modal: false,
      menu2: false, */

  public rules = {
    passRules: {
      required: (value: string) => !!value || "Required.",
      min: (v: string) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
    },
    nameRules: [
      (value: string) => {
        if (value) return true;

        return "Se requiere el nombre.";
      },
      (value: string) => {
        if (value?.length <= 50) return true;

        return "El nombre debe contener menos de 50 caracteres";
      },
    ],
    lastnameRules: [
      (value: string) => {
        if (value) return true;

        return "Se requiere el apellido.";
      },
      (value: string) => {
        if (value?.length <= 50) return true;

        return "El apellido debe contener menos de 50 caracteres";
      },
    ],
    emailRulesReg: [
      (value: string) => {
        if (value) return true;

        return "E-mail is requred.";
      },
      (value: string) => {
        if (/.+@.+\..+/.test(value)) return true;

        return "No es un correo valido";
      },
    ],
  };

  public rulesLogin = {
    passRules: {
      required: (value: string) => !!value || "Required.",
      min: (v: string) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
    },

    emailRules: [
      (value: string) => {
        if (value) return true;

        return "E-mail is requred.";
      },
      (value: string) => {
        if (/.+@.+\..+/.test(value)) return true;

        return "No es un correo valido";
      },
    ],
  };

  public dataRegister: CreateUserInput = {
    name: "",
    lastname: "",
    email: "",
    password: "",
    birthday: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
  };

  public dataLogin: LoginInput = {
    email: "",
    password: "",
  };

  @Auth.Action
  private createUser!: (data: CreateUserInput) => Promise<void>;

  async handleRegister() {
    await this.createUser(this.dataRegister);
  }

  @Auth.State("errorMessage")
  public errorMessage?: string;
  @Auth.State("loadingLoginStatus")
  public loadingLoginStatus?: boolean;
  @Auth.Action
  private login!: (data: LoginInput) => Promise<void>;
  async handleLogin() {
    await this.login(this.dataLogin);
  }
}

</script>

<style>
/* Google Font Link */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins" , sans-serif;
}
.app{
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #00c1770e;
  padding: 30px;
}
a {
  color: #00a33f;
}
.container{
  position: relative;
  max-width: 1150px;
  width: 100%;
  background: #fff;
  padding: 40px 30px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
  perspective: 2700px;
  top: 10%;

}
.container .cover{
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  width: 50%;
  z-index: 98;
  transition: all 1s ease;
  transform-origin: left;
  transform-style: preserve-3d;
}
.container #flip:checked ~ .cover{
  transform: rotateY(-180deg);
}
 .container .cover .front,
 .container .cover .back{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.cover .back{
  transform: rotateY(180deg);
  backface-visibility: hidden;
}
.container .cover::before,
.container .cover::after{
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  background: #fafffd;
  opacity: 0.0;
  z-index: 12;
}
.container .cover::after{
  opacity: 0.0;
  transform: rotateY(180deg);
  backface-visibility: hidden;
}
.container .cover img{
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 10;
}
.container .cover .text{
  position: absolute;
  z-index: 130;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.cover .text .text-1,
.cover .text .text-2{
  font-size: 26px;
  font-weight: 600;
  color: #fff;
  text-align: center;
}
.cover .text .text-2{
  font-size: 15px;
  font-weight: 500;
}
.container .forms{
  height: 100%;
  width: 100%;
  background: #fff;
}
.container .form-content{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.container .signup-form img,
.container .login-form img{
  display: flex ;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 25%;
 
}
.form-content .login-form,
.form-content .signup-form{
  width: calc(100% / 2 - 25px);
}

.form-content .signup-form img{
  align-items: center;
  width: 20%;
  height: 20%;
}
.forms .form-content .title{
  position: relative;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 15px;
  color: #333;
}
.forms .form-content .title:before{
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 100%;
  margin-top: 15px;
  background: #00c176;
}
.forms .signup-form  .title:before{
  width: 100%;
}
.forms .form-content .input-boxes{
  margin-top: 30px;
}
.forms .form-content .input-box{
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  margin: 10px 0;
  position: relative;
}
.form-content .input-box input{
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  padding: 0 30px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 2px solid rgba(0,0,0,0.2);
  transition: all 0.3s ease;
}
.form-content .input-box input:focus,
.form-content .input-box input:valid{
  border-color: #00c176;
}
.form-content .input-box i{
  position: absolute;
  color: #00c176;
  font-size: 17px;
}
.forms .form-content .text{
  font-size: 14px;
  font-weight: 500;
  color: #333;
}
.forms .form-content .text a{
  text-decoration: none;
}
.forms .form-content .text a:hover{
  text-decoration: underline;
}
.forms .form-content .button{
  color: #fff;
  margin-top: 40px;
}
.forms .form-content .button input{
  color: #fff;
  background: #00c176;
  border-radius: 6px;
  padding: 0;
  cursor: pointer;
  transition: all 0.4s ease;
}
.forms .form-content .button input:hover{
  background: #00a33f;
}
.forms .form-content label{
  color: #00a33f;
  cursor: pointer;
}
a{
  color: #00a33f;
}
.forms .form-content label:hover{
  text-decoration: underline;
}
.forms .form-content .login-text,
.forms .form-content .sign-up-text{
  text-align: center;
  margin-bottom: 15px;
}
.container #flip{
  display: none;
}
@media (max-width: 730px) {
  .container .cover{
    display: none;
  }
  .form-content .login-form,
  .form-content .signup-form{
    width: 100%;
  }
  .form-content .signup-form{
    display: none;
  }
  .container #flip:checked ~ .forms .signup-form{
    display: block;
  }
  .container #flip:checked ~ .forms .login-form{
    display: none;
  }
}

</style>