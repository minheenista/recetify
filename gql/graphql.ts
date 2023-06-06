import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Session', accessToken?: string | null, user: { __typename?: 'User', id: string, name: string, lastname: string, email: string, birthday: any } } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'Session', accessToken?: string | null } };

export type CommentQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type CommentQuery = { __typename?: 'Query', Comment?: { __typename?: 'Comment', id: string, comentario: string, rating?: number | null, Recipe: { __typename?: 'Recipe', id: string, title: string, description?: string | null, origen_food: Origen, time_food: Time, diet: Diet, prep_time: number, calories?: number | null, fat?: number | null, carbs?: number | null, proteins?: number | null, porcion: number, rate?: number | null, user?: { __typename?: 'User', id: string, name: string, email: string, birthday: any } | null } } | null };

export type CommentsQueryVariables = Exact<{
  comentario?: InputMaybe<Scalars['String']>;
}>;


export type CommentsQuery = { __typename?: 'Query', Comments: { __typename?: 'CommentPaginator', data: Array<{ __typename?: 'Comment', id: string, comentario: string, rating?: number | null }> } };

export type CreateCommentMutationVariables = Exact<{
  crearComentario: CreateCommentInput;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment: { __typename?: 'Comment', id: string, comentario: string, rating?: number | null, Recipe: { __typename?: 'Recipe', id: string, title: string, description?: string | null, origen_food: Origen, time_food: Time, diet: Diet, prep_time: number, calories?: number | null, fat?: number | null, carbs?: number | null, proteins?: number | null, porcion: number, rate?: number | null, user?: { __typename?: 'User', name: string, email: string } | null, steps: Array<{ __typename?: 'Step', description: string }>, Comments: Array<{ __typename?: 'Comment', comentario: string, rating?: number | null }> } } };

export type CreateRecipeMutationVariables = Exact<{
  input: CreateRecipeInput;
}>;


export type CreateRecipeMutation = { __typename?: 'Mutation', createRecipe: { __typename?: 'Recipe', id: string, title: string, description?: string | null, origen_food: Origen, time_food: Time, diet: Diet, prep_time: number, calories?: number | null, fat?: number | null, carbs?: number | null, proteins?: number | null } };

export type CreateStepMutationVariables = Exact<{
  crearPaso: CreateStepInput;
}>;


export type CreateStepMutation = { __typename?: 'Mutation', createStep: { __typename?: 'Step', description: string, Recipe: { __typename?: 'Recipe', id: string, title: string, description?: string | null, origen_food: Origen, time_food: Time, diet: Diet, prep_time: number, calories?: number | null, fat?: number | null, carbs?: number | null, proteins?: number | null, porcion: number, rate?: number | null, steps: Array<{ __typename?: 'Step', description: string }> } } };

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, name: string, email: string, email_verified_at?: any | null, created_at: any, updated_at: any, birthday: any, recipes: Array<{ __typename?: 'Recipe', id: string, title: string, description?: string | null, origen_food: Origen, time_food: Time, diet: Diet, prep_time: number, calories?: number | null, fat?: number | null, carbs?: number | null, proteins?: number | null, rate?: number | null }> } };

export type DeleteRecipeMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteRecipeMutation = { __typename?: 'Mutation', deleteRecipe: { __typename?: 'Recipe', id: string, title: string, description?: string | null, origen_food: Origen, time_food: Time, diet: Diet, prep_time: number, calories?: number | null, fat?: number | null, carbs?: number | null, proteins?: number | null, porcion: number, rate?: number | null, user?: { __typename?: 'User', id: string, name: string, lastname: string, email: string, email_verified_at?: any | null, created_at: any, updated_at: any, birthday: any } | null, steps: Array<{ __typename?: 'Step', description: string }>, Comments: Array<{ __typename?: 'Comment', comentario: string, rating?: number | null }> } };

export type DeleteStepMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteStepMutation = { __typename?: 'Mutation', deleteStep: { __typename?: 'Step', description: string, image: { __typename?: 'Image', url: string }, Recipe: { __typename?: 'Recipe', id: string, title: string, description?: string | null, origen_food: Origen, time_food: Time, diet: Diet, prep_time: number, calories?: number | null, fat?: number | null, carbs?: number | null, proteins?: number | null, porcion: number, rate?: number | null, user?: { __typename?: 'User', name: string, email: string } | null, steps: Array<{ __typename?: 'Step', description: string }> } } };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: { __typename?: 'User', id: string, name: string, email: string, email_verified_at?: any | null, created_at: any, updated_at: any, birthday: any, recipes: Array<{ __typename?: 'Recipe', id: string, title: string }> } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, name: string, email: string, birthday: any, recipes: Array<{ __typename?: 'Recipe', id: string, title: string, description?: string | null, origen_food: Origen, time_food: Time, diet: Diet, prep_time: number, calories?: number | null, fat?: number | null, carbs?: number | null, proteins?: number | null, porcion: number, rate?: number | null, user?: { __typename?: 'User', id: string, name: string } | null }> } };

export type RecipeQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type RecipeQuery = { __typename?: 'Query', recipe?: { __typename?: 'Recipe', id: string, title: string, description?: string | null, origen_food: Origen, time_food: Time, diet: Diet, prep_time: number, calories?: number | null, fat?: number | null, carbs?: number | null, proteins?: number | null, porcion: number, rate?: number | null, image: { __typename?: 'Image', url: string, imageable: { __typename: 'Recipe' } | { __typename: 'Step' } | { __typename: 'cat_ingredient' } }, user?: { __typename?: 'User', id: string, name: string, email: string, birthday: any } | null, steps: Array<{ __typename?: 'Step', description: string, image: { __typename?: 'Image', url: string, imageable: { __typename: 'Recipe' } | { __typename: 'Step' } | { __typename: 'cat_ingredient' } } }>, Comments: Array<{ __typename?: 'Comment', id: string, comentario: string, rating?: number | null }> } | null };

export type RecipesQueryVariables = Exact<{
  title?: InputMaybe<Scalars['String']>;
  origen_food?: InputMaybe<Origen>;
  time_food?: InputMaybe<Time>;
  diet?: InputMaybe<Scalars['String']>;
  prep_time?: InputMaybe<Scalars['Float']>;
  calories?: InputMaybe<Scalars['Float']>;
  rate?: InputMaybe<Scalars['Float']>;
}>;


export type RecipesQuery = { __typename?: 'Query', recipes: { __typename?: 'RecipePaginator', data: Array<{ __typename?: 'Recipe', id: string, title: string, description?: string | null, origen_food: Origen, time_food: Time, diet: Diet, prep_time: number, calories?: number | null, fat?: number | null, carbs?: number | null, proteins?: number | null, porcion: number, rate?: number | null, image: { __typename?: 'Image', url: string, imageable: { __typename: 'Recipe' } | { __typename: 'Step' } | { __typename: 'cat_ingredient' } }, user?: { __typename?: 'User', id: string, name: string, email: string, birthday: any } | null, steps: Array<{ __typename?: 'Step', description: string, image: { __typename?: 'Image', url: string, imageable: { __typename: 'Recipe' } | { __typename: 'Step' } | { __typename: 'cat_ingredient' } } }>, Comments: Array<{ __typename?: 'Comment', comentario: string, rating?: number | null }> }> } };

export type StepQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type StepQuery = { __typename?: 'Query', step?: { __typename?: 'Step', description: string, image: { __typename?: 'Image', url: string, imageable: { __typename: 'Recipe' } | { __typename: 'Step' } | { __typename: 'cat_ingredient' } }, Recipe: { __typename?: 'Recipe', id: string, title: string, description?: string | null, origen_food: Origen, time_food: Time, diet: Diet, prep_time: number, calories?: number | null, fat?: number | null, carbs?: number | null, proteins?: number | null, porcion: number, rate?: number | null, image: { __typename?: 'Image', url: string, imageable: { __typename: 'Recipe' } | { __typename: 'Step' } | { __typename: 'cat_ingredient' } } } } | null };

export type StepsQueryVariables = Exact<{
  description?: InputMaybe<Scalars['String']>;
}>;


export type StepsQuery = { __typename?: 'Query', steps: { __typename?: 'StepPaginator', data: Array<{ __typename?: 'Step', description: string, image: { __typename?: 'Image', url: string, imageable: { __typename: 'Recipe' } | { __typename: 'Step' } | { __typename: 'cat_ingredient' } } }> } };

export type UpdateRecipeMutationVariables = Exact<{
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  origen_food?: InputMaybe<Scalars['String']>;
  time_food?: InputMaybe<Scalars['String']>;
  diet?: InputMaybe<Scalars['String']>;
  prep_time?: InputMaybe<Scalars['Float']>;
  calories?: InputMaybe<Scalars['Float']>;
  fat?: InputMaybe<Scalars['Float']>;
  carbs?: InputMaybe<Scalars['Float']>;
  proteins?: InputMaybe<Scalars['Float']>;
  porcion?: InputMaybe<Scalars['Float']>;
}>;


export type UpdateRecipeMutation = { __typename?: 'Mutation', updateRecipe: { __typename?: 'Recipe', id: string, title: string, description?: string | null, origen_food: Origen, time_food: Time, diet: Diet, prep_time: number, calories?: number | null, fat?: number | null, carbs?: number | null, proteins?: number | null, porcion: number, rate?: number | null, image: { __typename?: 'Image', url: string, imageable: { __typename: 'Recipe' } | { __typename: 'Step' } | { __typename: 'cat_ingredient' } }, user?: { __typename?: 'User', id: string, name: string, email: string, email_verified_at?: any | null, created_at: any, updated_at: any, birthday: any } | null, steps: Array<{ __typename?: 'Step', description: string, image: { __typename?: 'Image', url: string, imageable: { __typename: 'Recipe' } | { __typename: 'Step' } | { __typename: 'cat_ingredient' } } }>, Comments: Array<{ __typename?: 'Comment', id: string, comentario: string, rating?: number | null }> } };

export type UpdateStepMutationVariables = Exact<{
  id: Scalars['ID'];
  description?: InputMaybe<Scalars['String']>;
}>;


export type UpdateStepMutation = { __typename?: 'Mutation', updateStep: { __typename?: 'Step', description: string, image: { __typename?: 'Image', url: string, imageable: { __typename: 'Recipe' } | { __typename: 'Step' } | { __typename: 'cat_ingredient' } }, Recipe: { __typename?: 'Recipe', id: string, title: string, description?: string | null, origen_food: Origen, time_food: Time, diet: Diet, prep_time: number, calories?: number | null, fat?: number | null, carbs?: number | null, proteins?: number | null, porcion: number, rate?: number | null, image: { __typename?: 'Image', url: string, imageable: { __typename: 'Recipe' } | { __typename: 'Step' } | { __typename: 'cat_ingredient' } }, user?: { __typename?: 'User', name: string, email: string } | null, steps: Array<{ __typename?: 'Step', description: string, image: { __typename?: 'Image', url: string, imageable: { __typename: 'Recipe' } | { __typename: 'Step' } | { __typename: 'cat_ingredient' } } }> } } };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['ID'];
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, name: string, email: string, email_verified_at?: any | null, created_at: any, updated_at: any, birthday: any, recipes: Array<{ __typename?: 'Recipe', id: string, title: string, description?: string | null, origen_food: Origen, time_food: Time, diet: Diet, prep_time: number, calories?: number | null, fat?: number | null, carbs?: number | null, proteins?: number | null, porcion: number, rate?: number | null, image: { __typename?: 'Image', url: string } }> } };

export type UserQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, name: string, email: string, birthday: any, recipes: Array<{ __typename?: 'Recipe', id: string, title: string, description?: string | null, origen_food: Origen, time_food: Time, diet: Diet, prep_time: number, calories?: number | null, fat?: number | null, carbs?: number | null, proteins?: number | null, porcion: number, rate?: number | null, image: { __typename?: 'Image', url: string, imageable: { __typename: 'Recipe' } | { __typename: 'Step' } | { __typename: 'cat_ingredient' } } }> } | null };

export type UsersQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
}>;


export type UsersQuery = { __typename?: 'Query', users: { __typename?: 'UserPaginator', data: Array<{ __typename?: 'User', id: string, name: string, email: string, email_verified_at?: any | null, created_at: any, updated_at: any }> } };


export const Login = gql`
    mutation Login($input: loginInput!) {
  login(input: $input) {
    accessToken
    user {
      id
      name
      lastname
      email
      birthday
    }
  }
}
    `;
export const Logout = gql`
    mutation Logout {
  logout {
    accessToken
  }
}
    `;
export const Comment = gql`
    query Comment($id: ID) {
  Comment(id: $id) {
    id
    comentario
    rating
    Recipe {
      id
      title
      description
      origen_food
      time_food
      diet
      prep_time
      calories
      fat
      carbs
      proteins
      porcion
      rate
      user {
        id
        name
        email
        birthday
      }
    }
  }
}
    `;
export const Comments = gql`
    query Comments($comentario: String) {
  Comments(comentario: $comentario) {
    data {
      id
      comentario
      rating
    }
  }
}
    `;
export const CreateComment = gql`
    mutation createComment($crearComentario: createCommentInput!) {
  createComment(input: $crearComentario) {
    id
    comentario
    rating
    Recipe {
      id
      title
      description
      origen_food
      time_food
      diet
      prep_time
      calories
      fat
      carbs
      proteins
      porcion
      rate
      user {
        name
        email
      }
      steps {
        description
      }
      Comments {
        comentario
        rating
      }
    }
  }
}
    `;
export const CreateRecipe = gql`
    mutation CreateRecipe($input: createRecipeInput!) {
  createRecipe(input: $input) {
    id
    title
    description
    origen_food
    time_food
    diet
    prep_time
    calories
    fat
    carbs
    proteins
  }
}
    `;
export const CreateStep = gql`
    mutation createStep($crearPaso: createStepInput!) {
  createStep(input: $crearPaso) {
    description
    Recipe {
      id
      title
      description
      origen_food
      time_food
      diet
      prep_time
      calories
      fat
      carbs
      proteins
      porcion
      rate
      steps {
        description
      }
    }
  }
}
    `;
export const CreateUser = gql`
    mutation CreateUser($input: createUserInput!) {
  createUser(input: $input) {
    id
    name
    email
    email_verified_at
    created_at
    updated_at
    birthday
    recipes {
      id
      title
      description
      origen_food
      time_food
      diet
      prep_time
      calories
      fat
      carbs
      proteins
      rate
    }
  }
}
    `;
export const DeleteRecipe = gql`
    mutation deleteRecipe($id: ID!) {
  deleteRecipe(id: $id) {
    id
    title
    description
    origen_food
    time_food
    diet
    prep_time
    calories
    fat
    carbs
    proteins
    porcion
    rate
    user {
      id
      name
      lastname
      email
      email_verified_at
      created_at
      updated_at
      birthday
    }
    steps {
      description
    }
    Comments {
      comentario
      rating
    }
  }
}
    `;
export const DeleteStep = gql`
    mutation deleteStep($id: ID!) {
  deleteStep(id: $id) {
    description
    image {
      url
    }
    Recipe {
      id
      title
      description
      origen_food
      time_food
      diet
      prep_time
      calories
      fat
      carbs
      proteins
      porcion
      rate
      user {
        name
        email
      }
      steps {
        description
      }
    }
  }
}
    `;
export const DeleteUser = gql`
    mutation deleteUser($id: ID!) {
  deleteUser(id: $id) {
    id
    name
    email
    email_verified_at
    created_at
    updated_at
    birthday
    recipes {
      id
      title
    }
  }
}
    `;
export const Me = gql`
    query Me {
  me {
    id
    name
    email
    birthday
    recipes {
      id
      title
      description
      origen_food
      time_food
      diet
      prep_time
      calories
      fat
      carbs
      proteins
      porcion
      rate
      user {
        id
        name
      }
    }
  }
}
    `;
export const Recipe = gql`
    query Recipe($id: ID) {
  recipe(id: $id) {
    id
    title
    description
    origen_food
    time_food
    diet
    prep_time
    calories
    fat
    carbs
    proteins
    porcion
    image {
      url
      imageable {
        __typename
      }
    }
    rate
    user {
      id
      name
      email
      birthday
    }
    steps {
      description
      image {
        url
        imageable {
          __typename
        }
      }
    }
    Comments {
      id
      comentario
      rating
    }
  }
}
    `;
export const Recipes = gql`
    query Recipes($title: String, $origen_food: origen, $time_food: time, $diet: String, $prep_time: Float, $calories: Float, $rate: Float) {
  recipes(
    title: $title
    origen_food: $origen_food
    time_food: $time_food
    diet: $diet
    prep_time: $prep_time
    calories: $calories
    rate: $rate
  ) {
    data {
      id
      title
      description
      origen_food
      time_food
      diet
      prep_time
      calories
      fat
      carbs
      proteins
      porcion
      image {
        url
        imageable {
          __typename
        }
      }
      rate
      user {
        id
        name
        email
        birthday
      }
      steps {
        description
        image {
          url
          imageable {
            __typename
          }
        }
      }
      Comments {
        comentario
        rating
      }
    }
  }
}
    `;
export const Step = gql`
    query Step($id: ID) {
  step(id: $id) {
    description
    image {
      url
      imageable {
        __typename
      }
    }
    Recipe {
      id
      title
      description
      origen_food
      time_food
      diet
      prep_time
      calories
      fat
      carbs
      proteins
      porcion
      image {
        url
        imageable {
          __typename
        }
      }
      rate
    }
  }
}
    `;
export const Steps = gql`
    query Steps($description: String) {
  steps(description: $description) {
    data {
      description
      image {
        url
        imageable {
          __typename
        }
      }
    }
  }
}
    `;
export const UpdateRecipe = gql`
    mutation updateRecipe($id: ID!, $title: String, $description: String, $origen_food: String, $time_food: String, $diet: String, $prep_time: Float, $calories: Float, $fat: Float, $carbs: Float, $proteins: Float, $porcion: Float) {
  updateRecipe(
    id: $id
    title: $title
    description: $description
    origen_food: $origen_food
    time_food: $time_food
    diet: $diet
    prep_time: $prep_time
    calories: $calories
    fat: $fat
    carbs: $carbs
    proteins: $proteins
    porcion: $porcion
  ) {
    id
    title
    description
    origen_food
    time_food
    diet
    prep_time
    calories
    fat
    carbs
    proteins
    porcion
    image {
      url
      imageable {
        __typename
      }
    }
    rate
    user {
      id
      name
      email
      email_verified_at
      created_at
      updated_at
      birthday
    }
    steps {
      description
      image {
        url
        imageable {
          __typename
        }
      }
    }
    Comments {
      id
      comentario
      rating
    }
  }
}
    `;
export const UpdateStep = gql`
    mutation updateStep($id: ID!, $description: String) {
  updateStep(id: $id, description: $description) {
    description
    image {
      url
      imageable {
        __typename
      }
    }
    Recipe {
      id
      title
      description
      origen_food
      time_food
      diet
      prep_time
      calories
      fat
      carbs
      proteins
      porcion
      image {
        url
        imageable {
          __typename
        }
      }
      rate
      user {
        name
        email
      }
      steps {
        description
        image {
          url
          imageable {
            __typename
          }
        }
      }
    }
  }
}
    `;
export const UpdateUser = gql`
    mutation updateUser($id: ID!, $email: String, $password: String) {
  updateUser(id: $id, email: $email, password: $password) {
    id
    name
    email
    email_verified_at
    created_at
    updated_at
    birthday
    recipes {
      id
      title
      description
      origen_food
      time_food
      diet
      prep_time
      calories
      fat
      carbs
      proteins
      porcion
      image {
        url
      }
      rate
    }
  }
}
    `;
export const User = gql`
    query User($id: ID, $email: String) {
  user(id: $id, email: $email) {
    id
    name
    email
    birthday
    recipes {
      id
      title
      description
      origen_food
      time_food
      diet
      prep_time
      calories
      fat
      carbs
      proteins
      porcion
      image {
        url
        imageable {
          __typename
        }
      }
      rate
    }
  }
}
    `;
export const Users = gql`
    query Users($name: String) {
  users(name: $name) {
    data {
      id
      name
      email
      email_verified_at
      created_at
      updated_at
    }
  }
}
    `;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Upload: any;
};

/** Comentarios */
export type Comment = {
  __typename?: 'Comment';
  /** receta */
  Recipe: Recipe;
  /** Comentario */
  comentario: Scalars['String'];
  /** Id */
  id: Scalars['ID'];
  /** Calificacion */
  rating?: Maybe<Scalars['Float']>;
};

/** A paginated list of Comment items. */
export type CommentPaginator = {
  __typename?: 'CommentPaginator';
  /** A list of Comment items. */
  data: Array<Comment>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type CreateRecipeBelongsTo = {
  connect?: InputMaybe<Scalars['ID']>;
  create?: InputMaybe<CreateRecipeInput>;
};

export type CreateUserBelongsTo = {
  connect?: InputMaybe<Scalars['ID']>;
  create?: InputMaybe<CreateUserInput>;
};

export type Image = {
  __typename?: 'Image';
  /** Tipo de la imagen */
  imageable: Imageable;
  /** Ruta de la imagen */
  url: Scalars['String'];
};

export type Imageable = Recipe | Step | Cat_Ingredient;

export type IngredientRecipePivot = {
  __typename?: 'IngredientRecipePivot';
  /** Cantidad del ingrediente en la receta */
  quantity?: Maybe<Scalars['Float']>;
  /** Unidad de la receta */
  unit: Unittype;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** agregar una alergia a un usuario */
  addAllergytoUser?: Maybe<Cat_Ingredient>;
  /** agregar un ingrediente a una receta */
  addIngredienttoRecipe?: Maybe<Cat_Ingredient>;
  /** crear un comentario en una receta */
  createComment: Comment;
  /** Mutación para crear receta */
  createRecipe: Recipe;
  /** Crear un paso de la receta */
  createStep: Step;
  /** Crea un Usuario Nuevo */
  createUser: User;
  /** eliminar un comentario */
  deleteComment: Comment;
  /** Elimina una Receta */
  deleteRecipe: Recipe;
  /** eliminar un paso */
  deleteStep: Step;
  /** Elimina un Usuario */
  deleteUser: User;
  /** Mutación para Iniciar Sesión en la App Web */
  login: Session;
  /** Mutación para Cerrar Sesión */
  logout: Session;
  /** Eliminar una alergia de un usuario */
  removeAllergytoUser?: Maybe<Cat_Ingredient>;
  /** eliminar un ingrediente a una receta */
  removeIngredienttoRecipe?: Maybe<Cat_Ingredient>;
  /** actualizar un comentario ya existente */
  updateComment: Comment;
  /** Actualiza una Receta Ya Existente */
  updateRecipe: Recipe;
  /** actualizar un paso ya existente */
  updateStep: Step;
  /** Actualiza un Usuario Ya Existente */
  updateUser: User;
  /** Subir imagen una receta */
  uploadImageRecipe: Recipe;
  /** Subir imagen un paso */
  uploadImageStep: Step;
};


export type MutationAddAllergytoUserArgs = {
  id: Scalars['ID'];
};


export type MutationAddIngredienttoRecipeArgs = {
  id_ingredient: Scalars['ID'];
  id_recipe: Scalars['ID'];
  quantity: Scalars['Float'];
  unit: Unittype;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationCreateRecipeArgs = {
  input: CreateRecipeInput;
};


export type MutationCreateStepArgs = {
  input: CreateStepInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRecipeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteStepArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRemoveAllergytoUserArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveIngredienttoRecipeArgs = {
  id_ingredient: Scalars['ID'];
  id_recipe: Scalars['ID'];
};


export type MutationUpdateCommentArgs = {
  comentario?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  rating?: InputMaybe<Scalars['Float']>;
};


export type MutationUpdateRecipeArgs = {
  calories?: InputMaybe<Scalars['Float']>;
  carbs?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  diet?: InputMaybe<Scalars['String']>;
  fat?: InputMaybe<Scalars['Float']>;
  id: Scalars['ID'];
  origen_food?: InputMaybe<Scalars['String']>;
  porcion?: InputMaybe<Scalars['Float']>;
  prep_time?: InputMaybe<Scalars['Float']>;
  proteins?: InputMaybe<Scalars['Float']>;
  time_food?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateStepArgs = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};


export type MutationUpdateUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  password?: InputMaybe<Scalars['String']>;
};


export type MutationUploadImageRecipeArgs = {
  id: Scalars['ID'];
  image: Scalars['Upload'];
};


export type MutationUploadImageStepArgs = {
  id: Scalars['ID'];
  image: Scalars['Upload'];
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = 'COUNT'
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = 'AVG',
  /** Amount of items. */
  Count = 'COUNT',
  /** Maximum. */
  Max = 'MAX',
  /** Minimum. */
  Min = 'MIN',
  /** Sum. */
  Sum = 'SUM'
}

/** Information about pagination using a Relay style cursor connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Number of nodes in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** The cursor to continue paginating forwards. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Index of the last available page. */
  lastPage: Scalars['Int'];
  /** The cursor to continue paginating backwards. */
  startCursor?: Maybe<Scalars['String']>;
  /** Total number of nodes in the paginated connection. */
  total: Scalars['Int'];
};

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Index of the last available page. */
  lastPage: Scalars['Int'];
  /** Number of items per page. */
  perPage: Scalars['Int'];
  /** Number of total available items. */
  total: Scalars['Int'];
};

/** Indicates what fields are available at the top level of a query operation. */
export type Query = {
  __typename?: 'Query';
  Comment?: Maybe<Comment>;
  Comments: CommentPaginator;
  cat_ingredient?: Maybe<Cat_Ingredient>;
  cat_ingredients: Cat_IngredientPaginator;
  /** Regresa el Usuario Actual Loggeado */
  me: User;
  /** Find a single Recipe by an identifying attribute. */
  recipe?: Maybe<Recipe>;
  recipes: RecipePaginator;
  step?: Maybe<Step>;
  steps: StepPaginator;
  /** Find a single user by an identifying attribute. */
  user?: Maybe<User>;
  /** List multiple users. */
  users: UserPaginator;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryCommentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryCommentsArgs = {
  comentario?: InputMaybe<Scalars['String']>;
  first?: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryCat_IngredientArgs = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryCat_IngredientsArgs = {
  first?: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryRecipeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryRecipesArgs = {
  calories?: InputMaybe<Scalars['Float']>;
  diet?: InputMaybe<Scalars['String']>;
  first?: Scalars['Int'];
  origen_food?: InputMaybe<Origen>;
  page?: InputMaybe<Scalars['Int']>;
  porcion?: InputMaybe<Scalars['Float']>;
  prep_time?: InputMaybe<Scalars['Float']>;
  rate?: InputMaybe<Scalars['Float']>;
  time_food?: InputMaybe<Time>;
  title?: InputMaybe<Scalars['String']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryStepArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryStepsArgs = {
  description?: InputMaybe<Scalars['String']>;
  first?: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryUsersArgs = {
  first?: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
};

/** Receta */
export type Recipe = {
  __typename?: 'Recipe';
  /** Comentarios de la receta */
  Comments: Array<Comment>;
  /** Cantidad de calorias que contiene la receta */
  calories?: Maybe<Scalars['Float']>;
  /** Cantidad de carbohidratos que contiene la receta */
  carbs?: Maybe<Scalars['Float']>;
  /** Ingredientes de la receta */
  cat_ingredients: Array<Cat_Ingredient>;
  /** Descripcion de la receta */
  description?: Maybe<Scalars['String']>;
  /** Tipo de dieta de la receta. Ej, Omnivoro */
  diet: Diet;
  /** Cantidad de grasas que contiene la receta */
  fat?: Maybe<Scalars['Float']>;
  /** Id */
  id: Scalars['ID'];
  /** Imagen principal de la receta */
  image: Image;
  /** De donde es la Receta. Ej, Mexicana */
  origen_food: Origen;
  /** Cuantas Porciones o para cuantas personas alcanza la receta. */
  porcion: Scalars['Float'];
  /** Tiempo de preparación de la receta en Float. */
  prep_time: Scalars['Float'];
  /** Cantidad de proteinas que contiene la receta */
  proteins?: Maybe<Scalars['Float']>;
  /** Calificación promedio de la receta */
  rate?: Maybe<Scalars['Float']>;
  /** Los pasos */
  steps: Array<Step>;
  /** En que tiempo es la receta. Ej, Desayuno */
  time_food: Time;
  /** Titulo de la receta */
  title: Scalars['String'];
  /** El usuario que creo la receta */
  user?: Maybe<User>;
};

/** A paginated list of Recipe items. */
export type RecipePaginator = {
  __typename?: 'RecipePaginator';
  /** A list of Recipe items. */
  data: Array<Recipe>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Sesión */
export type Session = {
  __typename?: 'Session';
  /** El token de acceso a la App Web */
  accessToken?: Maybe<Scalars['String']>;
  /** Usuario obligatorio */
  user: User;
};

/** Information about pagination using a simple paginator. */
export type SimplePaginatorInfo = {
  __typename?: 'SimplePaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Number of items per page. */
  perPage: Scalars['Int'];
};

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type Step = {
  __typename?: 'Step';
  /** Receta */
  Recipe: Recipe;
  /** descripcion */
  description: Scalars['String'];
  /** Imagen del paso */
  image: Image;
};

/** A paginated list of Step items. */
export type StepPaginator = {
  __typename?: 'StepPaginator';
  /** A list of Step items. */
  data: Array<Step>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

/** Account of a person who utilizes this application. */
export type User = {
  __typename?: 'User';
  /** La fecha de cumpleaños */
  birthday: Scalars['Date'];
  /** Tiene Muchas alergias */
  cat_ingredients: Array<Cat_Ingredient>;
  /** When the account was created. */
  created_at: Scalars['DateTime'];
  /** Unique email address. */
  email: Scalars['String'];
  /** When the email was verified. */
  email_verified_at?: Maybe<Scalars['DateTime']>;
  /** Unique primary key. */
  id: Scalars['ID'];
  /** el apellido */
  lastname: Scalars['String'];
  /** Non-unique name. */
  name: Scalars['String'];
  /** Tiene muchas tareas */
  recipes: Array<Recipe>;
  /** When the account was last updated. */
  updated_at: Scalars['DateTime'];
};

/** A paginated list of User items. */
export type UserPaginator = {
  __typename?: 'UserPaginator';
  /** A list of User items. */
  data: Array<User>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type Cat_Ingredient = {
  __typename?: 'cat_ingredient';
  /** Id */
  id: Scalars['ID'];
  /** imagen del ingrediente */
  image?: Maybe<Image>;
  /** Nombre del ingrediente */
  name: Scalars['String'];
  pivot?: Maybe<IngredientRecipePivot>;
};

/** A paginated list of cat_ingredient items. */
export type Cat_IngredientPaginator = {
  __typename?: 'cat_ingredientPaginator';
  /** A list of cat_ingredient items. */
  data: Array<Cat_Ingredient>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type CreateCommentInput = {
  comentario: Scalars['String'];
  rating?: InputMaybe<Scalars['Float']>;
  recipe?: InputMaybe<CreateRecipeBelongsTo>;
};

export type CreateRecipeHasMany = {
  create: Array<CreateRecipeInput>;
};

export type CreateRecipeInput = {
  /** Cantidad de calorias en la receta */
  calories?: InputMaybe<Scalars['Float']>;
  /** Cantidad de carbohidratos en la receta */
  carbs?: InputMaybe<Scalars['Float']>;
  /** descripcion de la receta */
  description?: InputMaybe<Scalars['String']>;
  /** Tipo de dieta. Ej. Vegano */
  diet: Scalars['String'];
  /** Cantidad de grasas en la receta */
  fat?: InputMaybe<Scalars['Float']>;
  /** Origen de comida. Ej, Mexicana */
  origen_food: Scalars['String'];
  /** Cuantas Porciones o para cuantas personas alcanza la receta. */
  porcion: Scalars['Float'];
  /** Tiempo de preparacion para la receta */
  prep_time?: InputMaybe<Scalars['Float']>;
  /** cantidad de proteinas en la receta */
  proteins?: InputMaybe<Scalars['Float']>;
  /** Tiempo de comida. Ej, Desayuno */
  time_food: Scalars['String'];
  /** Titulo de la receta */
  title: Scalars['String'];
  /** El usuario que creo la receta */
  user?: InputMaybe<CreateUserBelongsTo>;
};

export type CreateStepHasMany = {
  create: Array<CreateStepInput>;
};

export type CreateStepInput = {
  description: Scalars['String'];
  recipe?: InputMaybe<CreateRecipeBelongsTo>;
};

export type CreateUserInput = {
  /** Una fecha de cumpleaños de formato 'Año-Mes-Dia', Ej. '2002-02-11'.  */
  birthday: Scalars['Date'];
  /** Un correo electronico valido y unico */
  email: Scalars['String'];
  /** Apellido(s) del usuario */
  lastname: Scalars['String'];
  /** Nombre del usuario */
  name: Scalars['String'];
  /** Una contraseña con minimo de 6 caracteres, una mayuscula, una minuscula y un caracter especial */
  password: Scalars['String'];
};

export enum Diet {
  /** Dieta Crudivegana */
  Crudivegetariana = 'Crudivegetariana',
  /** Dieta Ovo-Lactea Vegetariana */
  Olv = 'OLV',
  /** Dieta Omnivora */
  Omnivoro = 'Omnivoro',
  /** Dieta vegetariana */
  Vegetariano = 'Vegetariano'
}

export type LoginInput = {
  /** Un correo electronico valido */
  email: Scalars['String'];
  /** La contraseña */
  password: Scalars['String'];
};

/** Tipos de comida, dependiendo de su origen */
export enum Origen {
  /** Comida Americana. */
  Americana = 'Americana',
  /** Comida China. */
  China = 'China',
  /** Comida Italiana. */
  Italiana = 'Italiana',
  /** Comida Mexiana. */
  Mexicana = 'Mexicana'
}

/** Los tiempos de la comida. Ej, Desayuno. */
export enum Time {
  /** Tiempo Cena */
  Cena = 'Cena',
  /** Tiempo Colación */
  Colacion = 'Colacion',
  /** Tiempo Comida */
  Comida = 'Comida',
  /** Tiempo Desayuno */
  Desayuno = 'Desayuno'
}

export enum Unittype {
  /** Gramos */
  G = 'g',
  /** MiliLitos */
  Ml = 'ml',
  /** unidad */
  Unidad = 'unidad'
}
