import Vuex, { Store } from 'vuex';
import AuthModule from './modules/auth.module';

export interface RootState {}
export const store = new Vuex.Store<RootState>({
  actions: {
    nuxtServerInit: () => {},
  },
  modules: {
    AuthModule,

  },
});
const createStore = (): Store<RootState> => {
  return store;
};
export default createStore;