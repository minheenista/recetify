import { apolloClient } from "@/provider/apolloProvider";
import {
  CreateUser,
  CreateUserInput,
  Login,
  LoginInput,
  Me,
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
  async createUser(data: CreateUserInput) {
    return (
      await apolloClient.mutate({
        mutation: CreateUser,
        variables: {
          input: data,
        },
      })
    ).data;
  }

  async currentUser() {
    return (
      await apolloClient.query({
        query: Me,
        fetchPolicy: "network-only",
      })
    ).data;
  }
}
export default new AuthService();