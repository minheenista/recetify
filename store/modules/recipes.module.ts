import { ApolloError } from "@apollo/client/errors";
import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { 
    CreateRecipeInput, 
    Recipe, 
    Recipes, 
    User,  
    CatIngredients, 
    Ingredient, 
    DeleteRecipe, 
    Cat_Ingredient, 
    UpdateRecipeInput, 
    CreateCommentInput, 
    Comment, 
    Comments,
    AddIngredientToRecipe,
    AddIngredienttoRecipeInput,
    CreateStepInput
} from "~/gql/graphql";

import RecipesService from "~/services/recipes.service";

@Module({ namespaced: true })
class RecipesModule extends VuexModule{
    public recipes?: Recipe[] = undefined;
    public recipe?: Recipe[] = undefined;
    public user: User[] | null = null;
    public ingredients?: Cat_Ingredient[] = undefined;
    public comments?: Comment[] = undefined;
    public comment?: Comment[] = undefined;
    public loadingRecipeStatus = false;
    public loadingRecipesStatus = false;
    public snackbarSucessCreateRecipe = false;
    public snackbarSucessMessageCreateRecipe = "";
    public loadingIngredientsStatus = false;
    public loadingAddToFavsRecipeStatus = false;
    public loadingdelete = false;
  public successdelete = false;
    @Action
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
    } 
    @Action
    async fetchIngredients(){
        console.log("aver")
        this.context.commit("loadingRecipes", true);
        return RecipesService.getIngredients()
        .then((ingredients: Cat_Ingredient[]) => {
            console.log(ingredients);
            this.context.commit("ingredientsSuccess", ingredients);
            this.context.commit("loadingRecipes", false);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    @Action
    async CreateRecipes(data: CreateRecipeInput) {
        this.context.commit("loadingCreate", true);
        console.log("aver")
        return await RecipesService.createRecipe(data)
        .then((recipes: Recipe) => {
            console.log(recipes);
            this.context.commit("CreateSuccess", recipes);
            this.context.commit("loadingCreate", false);
            /* this.context.commit("setsnackbarSucessMessageCreateRecipe");
            this.context.commit("setsnackbarSucessCreateRecipe"); */
        })
        .catch((error) => {
            //console.log(error);
            console.log(JSON.stringify(error, null, 2));
        });
    }

    @Action({ rawError: true })
    async deleteRecipe(recipeId: string): Promise<void> {
        this.context.commit("setLoadingDelete", true);
        this.context.commit("setSuccessDelete", false);
        console.log(recipeId);
        return await RecipesService.deleteRecipe(recipeId)
        .then((data) => {
            console.log(" llego");
            console.log(data);
            this.context.commit("AuthModule/setSuccessDelete", data, { 
                root: true,
            });
            this.context.commit("setLoadingDelete", false);
            this.context.commit("setSuccessDelete", true);
        })
        .catch((error) => {
            this.context.commit("setLoadingDelete", false);
            console.log(error);
        });
    }

    @Action
    async updateRecipe(data: UpdateRecipeInput){
        this.context.commit("loadingUpdateRecipe", true);
        console.log("updatedata", data);
        try{
            const updateRecipe = await RecipesService.updateRecipe(data);
            console.log("updateRecipe", updateRecipe);
            this.context.commit("AuthModule/updateRecipeSuccess", updateRecipe, {
                root: true,
            });
            this.context.commit("loadingUpdateRecipe", false);
            return updateRecipe;
        } catch (error) {
            console.log(error);
        }
    }

    @Action
    async addRecipeToFavorite(recipeId: string){
        this.context.commit("loadingUpdateFavoriteRecipe", true);
        console.log("updatedata favs", recipeId);
        try{
            const addTofavs = await RecipesService.addRecipeToFavorites(recipeId);
            console.log("addTofavs", addTofavs);
            this.context.commit("AuthModule/addRecipeToFavoritesSuccess", addTofavs, {
                root: true,
            });
            this.context.commit("loadingUpdateFavoriteRecipe", false);
            return addTofavs;
        } catch (error) {
            console.log(error);
        }
    }

    @Action
    async removeRecipeToFavorites(recipeId: string){
        this.context.commit("loadingUpdateFavoriteRecipe", true);
        console.log("updatedata favs", recipeId);
        try{
            const removeToFavs = await RecipesService.removeRecipesToFavorites(recipeId);
            console.log("removeToFavs", removeToFavs);
            this.context.commit("AuthModule/removeRecipeToFavoritesSuccess", removeToFavs, {
                root: true,
            });
            this.context.commit("loadingUpdateFavoriteRecipe", false);
            return removeToFavs;
        } catch (error) {
            console.log(error);
        }
    }

    @Action 
    async createRecipeComment(data: CreateCommentInput){
        this.context.commit("loadingCreateComment", true);
        console.log("createComment", data);
        return await RecipesService.createRecipeComment(data)
        .then((comment: Comment) => {
            console.log(comment);
            this.context.commit("createCommentSuccess", comment);
            this.context.commit("loadingCreateComment", false);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    @Action
    async addIngredientToRecipe(data: AddIngredienttoRecipeInput){
        this.context.commit("loadingUpdateRecipe", true);
        console.log("ingredientadd", data);
        try{
            const addIngredients = await RecipesService.addIngredientToRecipe(data);
            console.log("updateRecipe", data);
            this.context.commit("AuthModule/addIngredientSuccess", data, {
                root: true,
            });
            this.context.commit("loadingUpdateRecipe", false);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    @Action
    async createStep(data: CreateStepInput){
        this.context.commit("loadingUpdateRecipe", true);
        console.log("step", data);
        try{
            const addStep = await RecipesService.createStep(data);
            console.log("updateRecipe", data);
            this.context.commit("AuthModule/createStepSuccess", data, {
                root: true,
            });
            this.context.commit("loadingUpdateRecipe", false);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    @Mutation
    public createCommentSuccess(comments: Comment): void {
        if (this.comments) {
        this.comments = [comments, ...this.comments];
        }
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
    @Mutation
    public ingredientsSuccess(data: Cat_Ingredient[]): void {
        this.ingredients = data;
    }
    @Mutation
    public loadingIngredients(status: boolean) {
        this.loadingIngredientsStatus = status;
    }
    @Mutation
    public setLoadingDelete(status: boolean) {
        this.loadingdelete = status;
    }
    @Mutation
    public setSuccessDelete(status: boolean) {
        this.successdelete = status;
    }

    @Mutation
    public loadingUpdateFavoriteRecipe(status: boolean) {
        this.loadingAddToFavsRecipeStatus = status;
    }

}
export default RecipesModule;