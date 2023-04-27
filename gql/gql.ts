/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query Comment($id: ID) {\n  Comment(id: $id) {\n    id\n    comentario\n    rating\n    Recipe {\n      id\n      title\n      description\n      image_pf_path\n      origen_food\n      time_food\n      diet\n      prep_time\n      calories\n      fat\n      carbs\n      proteins\n      rate\n      user {\n        id\n        name\n        email\n        birthday\n      }\n    }\n  }\n}": types.CommentDocument,
    "query Comments($comentario: String) {\n  Comments(comentario: $comentario) {\n    data {\n      id\n      comentario\n      rating\n    }\n  }\n}": types.CommentsDocument,
    "mutation CreateUser($CrearUsuario: createUserInput!) {\n  createUser(input: $CrearUsuario) {\n    id\n    name\n    email\n    email_verified_at\n    created_at\n    updated_at\n    birthday\n    recipes {\n      id\n      title\n      description\n      image_pf_path\n      origen_food\n      time_food\n      diet\n      prep_time\n      calories\n      fat\n      carbs\n      proteins\n      rate\n    }\n  }\n}": types.CreateUserDocument,
    "query Me {\n  me {\n    id\n    name\n    email\n    birthday\n    recipes {\n      id\n      title\n      description\n      image_pf_path\n      origen_food\n      time_food\n      diet\n      prep_time\n      calories\n      fat\n      carbs\n      proteins\n      rate\n    }\n  }\n}": types.MeDocument,
    "query Recipe($id: ID) {\n  recipe(id: $id) {\n    id\n    title\n    description\n    image_pf_path\n    origen_food\n    time_food\n    diet\n    prep_time\n    calories\n    fat\n    carbs\n    proteins\n    rate\n    user {\n      id\n      name\n      email\n      birthday\n    }\n    steps {\n      description\n      imagen_path\n    }\n    Comments {\n      id\n      comentario\n      rating\n    }\n  }\n}": types.RecipeDocument,
    "query Recipes($title: String, $origen_food: origen, $time_food: time, $diet: String, $prep_time: Float, $calories: Float, $rate: Float) {\n  recipes(\n    title: $title\n    origen_food: $origen_food\n    time_food: $time_food\n    diet: $diet\n    prep_time: $prep_time\n    calories: $calories\n    rate: $rate\n  ) {\n    data {\n      id\n      title\n      description\n      image_pf_path\n      origen_food\n      time_food\n      diet\n      prep_time\n      calories\n      fat\n      carbs\n      proteins\n      rate\n      user {\n        id\n        name\n        email\n        birthday\n      }\n    }\n  }\n}": types.RecipesDocument,
    "query Step($id: ID) {\n  step(id: $id) {\n    description\n    imagen_path\n    Recipe {\n      id\n      title\n      description\n      image_pf_path\n      origen_food\n      time_food\n      diet\n      prep_time\n      calories\n      fat\n      carbs\n      proteins\n      rate\n    }\n  }\n}": types.StepDocument,
    "query Steps($description: String) {\n  steps(description: $description) {\n    data {\n      description\n      imagen_path\n    }\n  }\n}": types.StepsDocument,
    "mutation updateUser($id: ID!, $email: String, $password: String) {\n  updateUser(id: $id, email: $email, password: $password) {\n    id\n    name\n    email\n    email_verified_at\n    created_at\n    updated_at\n    birthday\n    recipes {\n      id\n      title\n      description\n      image_pf_path\n      origen_food\n      time_food\n      diet\n      prep_time\n      calories\n      fat\n      carbs\n      proteins\n      rate\n    }\n  }\n}": types.UpdateUserDocument,
    "query User($id: ID, $email: String) {\n  user(id: $id, email: $email) {\n    id\n    name\n    email\n    birthday\n    recipes {\n      id\n      title\n      description\n      image_pf_path\n      origen_food\n      time_food\n      diet\n      prep_time\n      calories\n      fat\n      carbs\n      proteins\n      rate\n    }\n  }\n}": types.UserDocument,
    "query Users($name: String) {\n  users(name: $name) {\n    data {\n      id\n      name\n      email\n      email_verified_at\n      created_at\n      updated_at\n    }\n  }\n}": types.UsersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Comment($id: ID) {\n  Comment(id: $id) {\n    id\n    comentario\n    rating\n    Recipe {\n      id\n      title\n      description\n      image_pf_path\n      origen_food\n      time_food\n      diet\n      prep_time\n      calories\n      fat\n      carbs\n      proteins\n      rate\n      user {\n        id\n        name\n        email\n        birthday\n      }\n    }\n  }\n}"): (typeof documents)["query Comment($id: ID) {\n  Comment(id: $id) {\n    id\n    comentario\n    rating\n    Recipe {\n      id\n      title\n      description\n      image_pf_path\n      origen_food\n      time_food\n      diet\n      prep_time\n      calories\n      fat\n      carbs\n      proteins\n      rate\n      user {\n        id\n        name\n        email\n        birthday\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Comments($comentario: String) {\n  Comments(comentario: $comentario) {\n    data {\n      id\n      comentario\n      rating\n    }\n  }\n}"): (typeof documents)["query Comments($comentario: String) {\n  Comments(comentario: $comentario) {\n    data {\n      id\n      comentario\n      rating\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateUser($CrearUsuario: createUserInput!) {\n  createUser(input: $CrearUsuario) {\n    id\n    name\n    email\n    email_verified_at\n    created_at\n    updated_at\n    birthday\n    recipes {\n      id\n      title\n      description\n      image_pf_path\n      origen_food\n      time_food\n      diet\n      prep_time\n      calories\n      fat\n      carbs\n      proteins\n      rate\n    }\n  }\n}"): (typeof documents)["mutation CreateUser($CrearUsuario: createUserInput!) {\n  createUser(input: $CrearUsuario) {\n    id\n    name\n    email\n    email_verified_at\n    created_at\n    updated_at\n    birthday\n    recipes {\n      id\n      title\n      description\n      image_pf_path\n      origen_food\n      time_food\n      diet\n      prep_time\n      calories\n      fat\n      carbs\n      proteins\n      rate\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Me {\n  me {\n    id\n    name\n    email\n    birthday\n    recipes {\n      id\n      title\n      description\n      image_pf_path\n      origen_food\n      time_food\n      diet\n      prep_time\n      calories\n      fat\n      carbs\n      proteins\n      rate\n    }\n  }\n}"): (typeof documents)["query Me {\n  me {\n    id\n    name\n    email\n    birthday\n    recipes {\n      id\n      title\n      description\n      image_pf_path\n      origen_food\n      time_food\n      diet\n      prep_time\n      calories\n      fat\n      carbs\n      proteins\n      rate\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Recipe($id: ID) {\n  recipe(id: $id) {\n    id\n    title\n    description\n    image_pf_path\n    origen_food\n    time_food\n    diet\n    prep_time\n    calories\n    fat\n    carbs\n    proteins\n    rate\n    user {\n      id\n      name\n      email\n      birthday\n    }\n    steps {\n      description\n      imagen_path\n    }\n    Comments {\n      id\n      comentario\n      rating\n    }\n  }\n}"): (typeof documents)["query Recipe($id: ID) {\n  recipe(id: $id) {\n    id\n    title\n    description\n    image_pf_path\n    origen_food\n    time_food\n    diet\n    prep_time\n    calories\n    fat\n    carbs\n    proteins\n    rate\n    user {\n      id\n      name\n      email\n      birthday\n    }\n    steps {\n      description\n      imagen_path\n    }\n    Comments {\n      id\n      comentario\n      rating\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Recipes($title: String, $origen_food: origen, $time_food: time, $diet: String, $prep_time: Float, $calories: Float, $rate: Float) {\n  recipes(\n    title: $title\n    origen_food: $origen_food\n    time_food: $time_food\n    diet: $diet\n    prep_time: $prep_time\n    calories: $calories\n    rate: $rate\n  ) {\n    data {\n      id\n      title\n      description\n      image_pf_path\n      origen_food\n      time_food\n      diet\n      prep_time\n      calories\n      fat\n      carbs\n      proteins\n      rate\n      user {\n        id\n        name\n        email\n        birthday\n      }\n    }\n  }\n}"): (typeof documents)["query Recipes($title: String, $origen_food: origen, $time_food: time, $diet: String, $prep_time: Float, $calories: Float, $rate: Float) {\n  recipes(\n    title: $title\n    origen_food: $origen_food\n    time_food: $time_food\n    diet: $diet\n    prep_time: $prep_time\n    calories: $calories\n    rate: $rate\n  ) {\n    data {\n      id\n      title\n      description\n      image_pf_path\n      origen_food\n      time_food\n      diet\n      prep_time\n      calories\n      fat\n      carbs\n      proteins\n      rate\n      user {\n        id\n        name\n        email\n        birthday\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Step($id: ID) {\n  step(id: $id) {\n    description\n    imagen_path\n    Recipe {\n      id\n      title\n      description\n      image_pf_path\n      origen_food\n      time_food\n      diet\n      prep_time\n      calories\n      fat\n      carbs\n      proteins\n      rate\n    }\n  }\n}"): (typeof documents)["query Step($id: ID) {\n  step(id: $id) {\n    description\n    imagen_path\n    Recipe {\n      id\n      title\n      description\n      image_pf_path\n      origen_food\n      time_food\n      diet\n      prep_time\n      calories\n      fat\n      carbs\n      proteins\n      rate\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Steps($description: String) {\n  steps(description: $description) {\n    data {\n      description\n      imagen_path\n    }\n  }\n}"): (typeof documents)["query Steps($description: String) {\n  steps(description: $description) {\n    data {\n      description\n      imagen_path\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation updateUser($id: ID!, $email: String, $password: String) {\n  updateUser(id: $id, email: $email, password: $password) {\n    id\n    name\n    email\n    email_verified_at\n    created_at\n    updated_at\n    birthday\n    recipes {\n      id\n      title\n      description\n      image_pf_path\n      origen_food\n      time_food\n      diet\n      prep_time\n      calories\n      fat\n      carbs\n      proteins\n      rate\n    }\n  }\n}"): (typeof documents)["mutation updateUser($id: ID!, $email: String, $password: String) {\n  updateUser(id: $id, email: $email, password: $password) {\n    id\n    name\n    email\n    email_verified_at\n    created_at\n    updated_at\n    birthday\n    recipes {\n      id\n      title\n      description\n      image_pf_path\n      origen_food\n      time_food\n      diet\n      prep_time\n      calories\n      fat\n      carbs\n      proteins\n      rate\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query User($id: ID, $email: String) {\n  user(id: $id, email: $email) {\n    id\n    name\n    email\n    birthday\n    recipes {\n      id\n      title\n      description\n      image_pf_path\n      origen_food\n      time_food\n      diet\n      prep_time\n      calories\n      fat\n      carbs\n      proteins\n      rate\n    }\n  }\n}"): (typeof documents)["query User($id: ID, $email: String) {\n  user(id: $id, email: $email) {\n    id\n    name\n    email\n    birthday\n    recipes {\n      id\n      title\n      description\n      image_pf_path\n      origen_food\n      time_food\n      diet\n      prep_time\n      calories\n      fat\n      carbs\n      proteins\n      rate\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Users($name: String) {\n  users(name: $name) {\n    data {\n      id\n      name\n      email\n      email_verified_at\n      created_at\n      updated_at\n    }\n  }\n}"): (typeof documents)["query Users($name: String) {\n  users(name: $name) {\n    data {\n      id\n      name\n      email\n      email_verified_at\n      created_at\n      updated_at\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;