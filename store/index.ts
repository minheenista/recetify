import Vuex, { Store } from "vuex";
import AuthModule from "./modules/auth.module";
//import RecipesModule from "./modules/recipes.module";
export interface RootState {}
export const store = new Vuex.Store<RootState>({
  actions: {
    nuxtServerInit: () => {},
  },
  modules: {
    AuthModule,
    //RecipesModule,
  },
});
const createStore = (): Store<RootState> => {
  return store;
};
export default createStore;