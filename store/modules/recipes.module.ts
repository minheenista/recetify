import { ApolloError } from "@apollo/client/errors";
import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { CreateRecipeInput, Recipe } from "~/gql/graphql";

import RecipesService from "~/services/recipes.service";

@Module({ namespaced: true })
class RecipesModule extends VuexModule{
    public recipes?: Recipe[] = undefined;
    public recipe?: Recipe = undefined;
    public loadingRecipeStatus = false;
    public loadingRecipesStatus = false;
    public snackbarSucessCreateRecipe = false;
    public snackbarSucessMessageCreateRecipe = "";
    /* @Action
    async fetchRecipes() {
        this.context.commit("loadingRecipes", true);
        return await RecipesService.getRecipes()
        .then((recipes: Recipe[]) => {
            console.log(recipes);
            this.context.commit("recipesSuccess", recipes);
            this.context.commit("loadingRecipes", false);
        })
        .catch((error) => {
            console.log(error);
        });
    } */
    @Action
    async CreateRecipes(data: CreateRecipeInput) {
        this.context.commit("loadingCreate", true);
        console.log("aver")
        return await RecipesService.createRecipe(data)
        .then((recipes: Recipe) => {
            console.log(recipes);
            this.context.commit("CreateSuccess", recipes);
            this.context.commit("loadingCreate", false);
            this.context.commit("setsnackbarSucessMessageCreateRecipe");
            this.context.commit("setsnackbarSucessCreateRecipe");
        })
        .catch((error) => {
            //console.log(error);
            console.log(JSON.stringify(error, null, 2));
        });
    }

    @Mutation
    public recipesSuccess(recipes: Recipe[]): void {
        this.recipes = recipes;
    }
    @Mutation
    public loadingRecipes(status: boolean) {
        this.loadingRecipeStatus = status;
    }
    @Mutation
    public CreateSuccess(recipes: Recipe): void {
        if (this.recipes) {
        this.recipes = [recipes, ...this.recipes];
        }
    }
    @Mutation
    public loadingCreate(status: boolean) {
        this.loadingRecipeStatus = status;
    }
    get isLoadingCreate(): boolean {
        return this.loadingRecipesStatus;
    }
    get isLoadingRecipes(): boolean {
        return this.loadingRecipesStatus;
    }
    get isLoadingRecipe(): boolean {
        return this.loadingRecipesStatus;
    }
}
export default RecipesModule;