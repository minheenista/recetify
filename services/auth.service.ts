import { apolloClient } from "@/provider/apolloProvider";
import {
  CreateUserInput,
  LoginInput,
  login,
  createUser,
} from "~/gql/graphql";

class AuthService {
  async login(data: LoginInput) {
    return (
      await apolloClient.mutate({
        mutation: login,
        variables: {
          input: data,
        },
      })
    ).data.login;
  } 
  async createUser(data: CreateUserInput) {
    return (
      await apolloClient.mutate({
        mutation: createUser,
        variables: {
          create: data,
        },
      })
    ).data;
  }
}
export default new AuthService();