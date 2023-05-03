import { apolloClient } from "@/provider/apolloProvider";
import { 
    CreateRecipe, 
    CreateRecipeInput,
    Recipes,
    Recipe,
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
  }
  
  export default new RecipesService();