import { ApolloError } from "@apollo/client/errors";
import Vue from "vue";
import { Action, Module, Mutation, MutationAction, VuexModule } from "vuex-module-decorators";
import {CreateUserInput, LoginInput, Recipe, User, Comment, AddIngredienttoRecipeInput, CreateStepInput } from "~/gql/graphql";

import AuthService from "~/services/auth.service";

@Module({ namespaced: true })
class AuthModule extends VuexModule {
  public user?: User = undefined;
  public me?: User = undefined;
  public comments?: Comment[] = undefined;
  public loadingLoginStatus = false;
  public loadingRegisterStatus = false;
  public loadingUserStatus = false;
  public userFailure = undefined
  public errorMessage?: string = undefined;
  public errorMessageReg?: string = undefined;
  public nextPage = false;
  context: any;

  @Action
  async login(data: LoginInput): Promise<void> {
    this.context.commit("loadingLogin", true);
    this.context.commit("resetErrorMessage");
    return await AuthService.login(data)
      .then((auth: any) => {
        console.log(auth);
        console.log("hola auth noseee");
        this.context.commit("loginSuccess", auth);
        this.context.commit("loadingLogin", false);
        window.$nuxt.$router.push("./recetas");
      })
      .catch((error) => {
        console.log(error.message);
        this.context.commit("loginFaile", error);
        this.context.commit("loadingLogin", false);
      });
  }


  @Mutation
  public loginSuccess(auth: any): void {
    console.log(auth);
    this.nextPage = true;
    window.$nuxt.$cookies.set("token", auth.accessToken, {
      path: "/",
    });
    window.$nuxt.$router.push("./preferencias");
    const token = window.$nuxt.$cookies.get("token");
/*     const userID = auth.User.ID
 */  }

 @Mutation
  public loginFaile(error: any) {
    if (error.message === "Tus datos son incorrectos") {
      this.errorMessage = "Tus datos son incorrectos";
    } else if (error.message === "No Used found") {
      this.errorMessage = "Usuario no encontrado";
    } else if (error.message === "Argument Validation Error") {
      this.errorMessage = "Argumentos Invalidos";
    } else {
      this.errorMessage = "Datos incorrectos";
    }
  }

  @Mutation
  public registerFaile(error: any) {
    if (error.message === "Tus datos son incorrectos") {
      this.errorMessageReg = "Tus datos son incorrectos";
    } else if (error.message === "No Used found") {
      this.errorMessageReg = "Usuario no encontrado";
    } else if (error.message === "Argument Validation Error") {
      this.errorMessageReg = "Argumentos Invalidos";
    } else {
      this.errorMessageReg = "Ha ocurrido un error";
    }
  }

  @Action({ rawError: true })
  async logout(): Promise<void> {
    return await AuthService.logout()
      .then((logoutSuccess: boolean) => {
        if (logoutSuccess) {
          this.context.commit('logoutSuccess');
        } else {
          this.context.commit('logoutFailure');
        }
      })
      .catch(() => {
        this.context.commit('logoutFailure');
      });
  }

  @Mutation
  public logoutSuccess(): void {
    window.$nuxt.$cookies.remove('token');
    this.nextPage = false;
  }

  @Mutation
  public logoutFailure(): void {
    /*  this.status.logged = false; */
  }
 
  @Mutation
  public resetErrorMessage() {
    this.errorMessage = undefined;
  } 
  
  @Mutation
  public removeCookies() {
    window.$nuxt.$cookies.remove("token");
    window.$nuxt.$router.push("/");
  }

/*   @Action({ rawError: true })
  logout(): void {
    this.context.commit("removeCookies");
  } */

  @Action
  async createUser(data: CreateUserInput) {
    this.context.commit("loadingRegister", true);
    return await AuthService.createUser(data)
      .then(async () => {
        return await AuthService.login({
          email: data.email,
          password: data.password,
        })
          .then((auth: any) => {
            console.log(auth);
            this.context.commit("loginSuccess", auth);
            this.context.commit("loadingRegister", false);
            window.$nuxt.$router.push("/preferencias");

          })
          .catch((error: string) => {
            console.log(error);
            this.context.commit("registerFaile", error);
            this.context.commit("loadingRegister", false);
          });
      })
      .catch((error) => {
        console.log(error);
        window.$nuxt.$router.push("/");
        this.context.commit("registerFaile", error);
        this.context.commit("loadingRegister", false);
      });
  }

  @Mutation
  public loadingLogin(status: boolean) {
    this.loadingLoginStatus = status;
  }

  @Mutation
  public loadingRegister(status: boolean) {
    this.loadingRegisterStatus = status;
  }

  get isLoadingLogin(): boolean {
    return this.loadingLoginStatus;
  }

  get isLoadingRegister(): boolean {
    return this.loadingRegisterStatus;
  }

  get getUser(): User | undefined {
    return this.user;
  }

  get getAuthToken(): string | null {
    return window.$nuxt.$cookies.get('token');
  }

  @Action
  async fetchMe(){
    this.context.commit("loadingUser", true);
    return await AuthService.currentUser()
    .then((user: User) =>{
      console.log(user);
      this.context.commit("userSuccess", user);
      this.context.commit("loadingUser", false);
    })
    .catch((error) =>{
      console.log(error.message);
      this.context.commit("userFailure", error);
      this.context.commit("loadingUser", false);
    })
  }

  /* SET DELETE RECIPES */

  @Mutation
  public setCreateRecipe(data: Recipe){
    console.log("lleho set recipe");
    if(this.user){
      const copyUser = {...this.user};
      copyUser.recipes = [...copyUser.recipes];
      copyUser.recipes.push(data);
      this.user = copyUser;
    }
  }

  @Mutation
  public setDeleteRecipe(data: {id: string}){
    console.log("lleho set delete recipe");
    if(this.me){
      const index = this.me.recipes.findIndex((recipe) => {
        return recipe.id === data.id
      });
      if(index != -1){
        const copyUser = {...this.me};
        copyUser.recipes = [...copyUser.recipes];

        Vue.delete(copyUser.recipes, index);
/*         copyUser.recipes.splice(index, 1);
 */        this.me = copyUser;
      }
    }
  }

  @Mutation
  public updateRecipeSuccess(updaterecipe: Recipe): void{
    if(this.me){
      const index = this.me.recipes.findIndex((recipe) => {
        return recipe.id === updaterecipe.id;
      });
      if(index != -1){
        const copyUser = {...this.me};
        copyUser.recipes = [...copyUser.recipes];
        copyUser.recipes[index] = updaterecipe;
        this.me = copyUser;
      }
    }
  }

  @Mutation
  public userSuccess(user: User){
    this.me = user;
  }

  @Mutation
  public loadingUser(status: boolean) {
    this.loadingUserStatus = status;
}

@Mutation
public addRecipeToFavoritesSuccess(recipeId: Recipe){
  if(this.me){
    const copyUser = {...this.me};
    copyUser.favoriteRecipes = [...copyUser.favoriteRecipes];
    copyUser.favoriteRecipes.push(recipeId);
    this.me = copyUser;
  }
}

@Mutation
public removeRecipeToFavoritesSuccess(recipeId: Recipe){
  if(this.me){
    const index = this.me.favoriteRecipes.findIndex((recipe) => {
      return recipe.id === recipeId.id
    });
    if(index != -1){
      const copyUser = {...this.me};
      copyUser.favoriteRecipes = [...copyUser.favoriteRecipes];

      Vue.delete(copyUser.favoriteRecipes, index);
    }
  }
}

@Mutation
public addIngredientSuccess(data: AddIngredienttoRecipeInput){
  if(this.me){
    const index = this.me.recipes.findIndex((recipe) => {
      return recipe.id === data.id_recipe
    });
    if(index != -1){
      const copyUser = {...this.me};
      copyUser.recipes = [...copyUser.recipes];
      copyUser.recipes[index].cat_ingredients.push(data);
      this.me = copyUser;
    }
  }
}

@Mutation
public removeIngredientSuccess(data: AddIngredienttoRecipeInput){
  if(this.me){
    const index = this.me.recipes.findIndex((recipe) => {
      return recipe.id === data.id_recipe
    });
    if(index != -1){
      const copyUser = {...this.me};
      copyUser.recipes = [...copyUser.recipes];
      const indexIngredient = copyUser.recipes[index].cat_ingredients.findIndex((ingredient) => {
        return ingredient.id === data.id_ingredient
      });
      if(indexIngredient != -1){
        copyUser.recipes[index].cat_ingredients.splice(indexIngredient, 1);
        this.me = copyUser;
      }
    }
  }
}

@Mutation
public createStepSuccess(data: CreateStepInput){
  if(this.me){
    const index = this.me.recipes.findIndex((recipe) => {
      return recipe.id === data.recipe
    });
    if(index != -1){
      const copyUser = {...this.me};
      copyUser.recipes = [...copyUser.recipes];
      copyUser.recipes[index].steps.push(data);
      this.me = copyUser;
    }
  }
}

/* @Mutation
public createCommentSuccess(data: Comment){

} */




}
export default AuthModule;