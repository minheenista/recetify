import { apolloClient } from "@/provider/apolloProvider";
import { 
    CreateRecipe, 
    CreateRecipeInput,
    Recipes,
    Recipe,
    User,
    CatIngredients,
    DeleteRecipe,
    UpdateRecipe,
    UpdateRecipeInput,
    AddRecipeToFavorites,
    RemoveRecipeToFavorites
 } from "~/gql/graphql";

 class RecipesService {
    async getRecipes() {
      return (
        await apolloClient.query({
          query: Recipes,
          fetchPolicy: "network-only",
        })
      ).data.recipes;
    }
    async getRecipe(id: string) {
      return (
        await apolloClient.query({
          query: Recipe,
          fetchPolicy: "network-only",
          variables: {
            id,
          },
        })
      ).data;
    }
    async createRecipe(data: CreateRecipeInput) {
      return (
        await apolloClient.mutate({
          mutation: CreateRecipe,
          variables: {
            input: data,
          },
        })
      ).data.CreateRecipe;
    }
    async updateRecipe(data: UpdateRecipeInput) {
      return(
        await apolloClient.mutate({
          mutation: UpdateRecipe,
          variables:{
            UpdateRecipeInput: data,
          }
        })
      )
    }
    async getIngredients() {
      return (
        await apolloClient.query({
          query: CatIngredients,
          fetchPolicy: "network-only",
        })
      ).data.cat_ingredients;
    }
    async deleteRecipe(recipeId: string): Promise<Recipe>{
      console.log("id receta:", recipeId)
      return (
        await apolloClient.mutate({
          mutation: DeleteRecipe,
          variables: {
            id: recipeId,
          },
        })
      ).data?.deleteRecipe;
    }
    async addRecipeToFavorites(recipeId: string){
      console.log("id receta: favs", recipeId)
      return (
        await apolloClient.mutate({
          mutation: AddRecipeToFavorites,
          fetchPolicy: "network-only",
          variables: {
            id: recipeId,
          }
        })
      ).data.addRecipeToFavorites;
    }

    async removeRecipesToFavorites(recipeId: string){
      console.log("id receta: desfavs", recipeId)
      return (
        await apolloClient.mutate({
          mutation: RemoveRecipeToFavorites,
          fetchPolicy: "network-only",
          variables: {
            id: recipeId,
          }
        })
      ).data.removeRecipesToFavorites;
    }
  }
  
  export default new RecipesService();