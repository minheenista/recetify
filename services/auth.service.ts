import { apolloClient } from "@/provider/apolloProvider";
import {
  CreateUserInput,
  CurrentUser,
  Login,
  LoginInput,
  RegisterUser,
} from "~/gql/graphql";

class AuthService {
  async login(data: LoginInput) {
    return (
      await apolloClient.mutate({
        mutation: Login,
        variables: {
          input: data,
        },
      })
    ).data.login;
  }
  async registerUser(data: CreateUserInput) {
    return (
      await apolloClient.mutate({
        mutation: RegisterUser,
        variables: {
          create: data,
        },
      })
    ).data;
  }
  async currentUser() {
    return (
      await apolloClient.query({
        query: CurrentUser,
        fetchPolicy: "network-only",
      })
    ).data;
  }
}
export default new AuthService();