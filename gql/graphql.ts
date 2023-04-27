/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string with format 'y-m-d'. e.g. '2002-12-22.' */
  Date: any;
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: any;
  /** A upload string */
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

export type Mutation = {
  __typename?: 'Mutation';
  /** crear un comentario en una receta */
  createComment: Comment;
  /** Mutación para crear receta */
  createRecipe: Recipe;
  /** Crear un paso de la receta */
  createStep: Step;
  /** Crea un Usuario Nuevo */
  createUser: User;
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
  /** Actualiza una Receta Ya Existente */
  updateRecipe: Recipe;
  /** actualizar un paso ya existente */
  updateStep: Step;
  /** Actualiza un Usuario Ya Existente */
  updateUser: User;
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


export type MutationDeleteRecipeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteStepArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationUpdateRecipeArgs = {
  calories?: InputMaybe<Scalars['Float']>;
  carbs?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  diet?: InputMaybe<Scalars['String']>;
  fat?: InputMaybe<Scalars['Float']>;
  id: Scalars['ID'];
  origen_food?: InputMaybe<Scalars['String']>;
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
  /** Descripcion de la receta */
  description?: Maybe<Scalars['String']>;
  /** Tipo de dieta de la receta. Ej, Omnivoro */
  diet: Diet;
  /** Cantidad de grasas que contiene la receta */
  fat?: Maybe<Scalars['Float']>;
  /** Id */
  id: Scalars['ID'];
  /** Imagen principal de la receta */
  image_pf_path?: Maybe<Scalars['String']>;
  /** De donde es la Receta. Ej, Mexicana */
  origen_food: Origen;
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
  Recipe: Recipe;
  /** descripcion */
  description: Scalars['String'];
  /** Direccion de Imagen */
  imagen_path?: Maybe<Scalars['String']>;
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
  /** Imagen Principal de la receta */
  image_pf_path?: InputMaybe<Scalars['Upload']>;
  /** Origen de comida. Ej, Mexicana */
  origen_food: Scalars['String'];
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

export type CommentQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type CommentQuery = { __typename?: 'Query', Comment?: { __typename?: 'Comment', id: string, comentario: string, rating?: number | null, Recipe: { __typename?: 'Recipe', id: string, title: string, description?: string | null, image_pf_path?: string | null, origen_food: Origen, time_food: Time, diet: Diet, prep_time: number, calories?: number | null, fat?: number | null, carbs?: number | null, proteins?: number | null, rate?: number | null, user?: { __typename?: 'User', id: string, name: string, email: string, birthday: any } | null } } | null };

export type CommentsQueryVariables = Exact<{
  comentario?: InputMaybe<Scalars['String']>;
}>;


export type CommentsQuery = { __typename?: 'Query', Comments: { __typename?: 'CommentPaginator', data: Array<{ __typename?: 'Comment', id: string, comentario: string, rating?: number | null }> } };

export type CreateUserMutationVariables = Exact<{
  CrearUsuario: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, name: string, email: string, email_verified_at?: any | null, created_at: any, updated_at: any, birthday: any, recipes: Array<{ __typename?: 'Recipe', id: string, title: string, description?: string | null, image_pf_path?: string | null, origen_food: Origen, time_food: Time, diet: Diet, prep_time: number, calories?: number | null, fat?: number | null, carbs?: number | null, proteins?: number | null, rate?: number | null }> } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, name: string, email: string, birthday: any, recipes: Array<{ __typename?: 'Recipe', id: string, title: string, description?: string | null, image_pf_path?: string | null, origen_food: Origen, time_food: Time, diet: Diet, prep_time: number, calories?: number | null, fat?: number | null, carbs?: number | null, proteins?: number | null, rate?: number | null }> } };

export type RecipeQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type RecipeQuery = { __typename?: 'Query', recipe?: { __typename?: 'Recipe', id: string, title: string, description?: string | null, image_pf_path?: string | null, origen_food: Origen, time_food: Time, diet: Diet, prep_time: number, calories?: number | null, fat?: number | null, carbs?: number | null, proteins?: number | null, rate?: number | null, user?: { __typename?: 'User', id: string, name: string, email: string, birthday: any } | null, steps: Array<{ __typename?: 'Step', description: string, imagen_path?: string | null }>, Comments: Array<{ __typename?: 'Comment', id: string, comentario: string, rating?: number | null }> } | null };

export type RecipesQueryVariables = Exact<{
  title?: InputMaybe<Scalars['String']>;
  origen_food?: InputMaybe<Origen>;
  time_food?: InputMaybe<Time>;
  diet?: InputMaybe<Scalars['String']>;
  prep_time?: InputMaybe<Scalars['Float']>;
  calories?: InputMaybe<Scalars['Float']>;
  rate?: InputMaybe<Scalars['Float']>;
}>;


export type RecipesQuery = { __typename?: 'Query', recipes: { __typename?: 'RecipePaginator', data: Array<{ __typename?: 'Recipe', id: string, title: string, description?: string | null, image_pf_path?: string | null, origen_food: Origen, time_food: Time, diet: Diet, prep_time: number, calories?: number | null, fat?: number | null, carbs?: number | null, proteins?: number | null, rate?: number | null, user?: { __typename?: 'User', id: string, name: string, email: string, birthday: any } | null }> } };

export type StepQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type StepQuery = { __typename?: 'Query', step?: { __typename?: 'Step', description: string, imagen_path?: string | null, Recipe: { __typename?: 'Recipe', id: string, title: string, description?: string | null, image_pf_path?: string | null, origen_food: Origen, time_food: Time, diet: Diet, prep_time: number, calories?: number | null, fat?: number | null, carbs?: number | null, proteins?: number | null, rate?: number | null } } | null };

export type StepsQueryVariables = Exact<{
  description?: InputMaybe<Scalars['String']>;
}>;


export type StepsQuery = { __typename?: 'Query', steps: { __typename?: 'StepPaginator', data: Array<{ __typename?: 'Step', description: string, imagen_path?: string | null }> } };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['ID'];
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, name: string, email: string, email_verified_at?: any | null, created_at: any, updated_at: any, birthday: any, recipes: Array<{ __typename?: 'Recipe', id: string, title: string, description?: string | null, image_pf_path?: string | null, origen_food: Origen, time_food: Time, diet: Diet, prep_time: number, calories?: number | null, fat?: number | null, carbs?: number | null, proteins?: number | null, rate?: number | null }> } };

export type UserQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, name: string, email: string, birthday: any, recipes: Array<{ __typename?: 'Recipe', id: string, title: string, description?: string | null, image_pf_path?: string | null, origen_food: Origen, time_food: Time, diet: Diet, prep_time: number, calories?: number | null, fat?: number | null, carbs?: number | null, proteins?: number | null, rate?: number | null }> } | null };

export type UsersQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
}>;


export type UsersQuery = { __typename?: 'Query', users: { __typename?: 'UserPaginator', data: Array<{ __typename?: 'User', id: string, name: string, email: string, email_verified_at?: any | null, created_at: any, updated_at: any }> } };


export const CommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Comment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Comment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"comentario"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"Recipe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image_pf_path"}},{"kind":"Field","name":{"kind":"Name","value":"origen_food"}},{"kind":"Field","name":{"kind":"Name","value":"time_food"}},{"kind":"Field","name":{"kind":"Name","value":"diet"}},{"kind":"Field","name":{"kind":"Name","value":"prep_time"}},{"kind":"Field","name":{"kind":"Name","value":"calories"}},{"kind":"Field","name":{"kind":"Name","value":"fat"}},{"kind":"Field","name":{"kind":"Name","value":"carbs"}},{"kind":"Field","name":{"kind":"Name","value":"proteins"}},{"kind":"Field","name":{"kind":"Name","value":"rate"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"birthday"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CommentQuery, CommentQueryVariables>;
export const CommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Comments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"comentario"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"comentario"},"value":{"kind":"Variable","name":{"kind":"Name","value":"comentario"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"comentario"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}}]}}]}}]}}]} as unknown as DocumentNode<CommentsQuery, CommentsQueryVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"CrearUsuario"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"createUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"CrearUsuario"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"email_verified_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"birthday"}},{"kind":"Field","name":{"kind":"Name","value":"recipes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image_pf_path"}},{"kind":"Field","name":{"kind":"Name","value":"origen_food"}},{"kind":"Field","name":{"kind":"Name","value":"time_food"}},{"kind":"Field","name":{"kind":"Name","value":"diet"}},{"kind":"Field","name":{"kind":"Name","value":"prep_time"}},{"kind":"Field","name":{"kind":"Name","value":"calories"}},{"kind":"Field","name":{"kind":"Name","value":"fat"}},{"kind":"Field","name":{"kind":"Name","value":"carbs"}},{"kind":"Field","name":{"kind":"Name","value":"proteins"}},{"kind":"Field","name":{"kind":"Name","value":"rate"}}]}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"birthday"}},{"kind":"Field","name":{"kind":"Name","value":"recipes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image_pf_path"}},{"kind":"Field","name":{"kind":"Name","value":"origen_food"}},{"kind":"Field","name":{"kind":"Name","value":"time_food"}},{"kind":"Field","name":{"kind":"Name","value":"diet"}},{"kind":"Field","name":{"kind":"Name","value":"prep_time"}},{"kind":"Field","name":{"kind":"Name","value":"calories"}},{"kind":"Field","name":{"kind":"Name","value":"fat"}},{"kind":"Field","name":{"kind":"Name","value":"carbs"}},{"kind":"Field","name":{"kind":"Name","value":"proteins"}},{"kind":"Field","name":{"kind":"Name","value":"rate"}}]}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const RecipeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Recipe"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recipe"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image_pf_path"}},{"kind":"Field","name":{"kind":"Name","value":"origen_food"}},{"kind":"Field","name":{"kind":"Name","value":"time_food"}},{"kind":"Field","name":{"kind":"Name","value":"diet"}},{"kind":"Field","name":{"kind":"Name","value":"prep_time"}},{"kind":"Field","name":{"kind":"Name","value":"calories"}},{"kind":"Field","name":{"kind":"Name","value":"fat"}},{"kind":"Field","name":{"kind":"Name","value":"carbs"}},{"kind":"Field","name":{"kind":"Name","value":"proteins"}},{"kind":"Field","name":{"kind":"Name","value":"rate"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"birthday"}}]}},{"kind":"Field","name":{"kind":"Name","value":"steps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imagen_path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"comentario"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}}]}}]}}]}}]} as unknown as DocumentNode<RecipeQuery, RecipeQueryVariables>;
export const RecipesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Recipes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"origen_food"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"origen"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"time_food"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"time"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"diet"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"prep_time"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"calories"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recipes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"origen_food"},"value":{"kind":"Variable","name":{"kind":"Name","value":"origen_food"}}},{"kind":"Argument","name":{"kind":"Name","value":"time_food"},"value":{"kind":"Variable","name":{"kind":"Name","value":"time_food"}}},{"kind":"Argument","name":{"kind":"Name","value":"diet"},"value":{"kind":"Variable","name":{"kind":"Name","value":"diet"}}},{"kind":"Argument","name":{"kind":"Name","value":"prep_time"},"value":{"kind":"Variable","name":{"kind":"Name","value":"prep_time"}}},{"kind":"Argument","name":{"kind":"Name","value":"calories"},"value":{"kind":"Variable","name":{"kind":"Name","value":"calories"}}},{"kind":"Argument","name":{"kind":"Name","value":"rate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image_pf_path"}},{"kind":"Field","name":{"kind":"Name","value":"origen_food"}},{"kind":"Field","name":{"kind":"Name","value":"time_food"}},{"kind":"Field","name":{"kind":"Name","value":"diet"}},{"kind":"Field","name":{"kind":"Name","value":"prep_time"}},{"kind":"Field","name":{"kind":"Name","value":"calories"}},{"kind":"Field","name":{"kind":"Name","value":"fat"}},{"kind":"Field","name":{"kind":"Name","value":"carbs"}},{"kind":"Field","name":{"kind":"Name","value":"proteins"}},{"kind":"Field","name":{"kind":"Name","value":"rate"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"birthday"}}]}}]}}]}}]}}]} as unknown as DocumentNode<RecipesQuery, RecipesQueryVariables>;
export const StepDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Step"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"step"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imagen_path"}},{"kind":"Field","name":{"kind":"Name","value":"Recipe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image_pf_path"}},{"kind":"Field","name":{"kind":"Name","value":"origen_food"}},{"kind":"Field","name":{"kind":"Name","value":"time_food"}},{"kind":"Field","name":{"kind":"Name","value":"diet"}},{"kind":"Field","name":{"kind":"Name","value":"prep_time"}},{"kind":"Field","name":{"kind":"Name","value":"calories"}},{"kind":"Field","name":{"kind":"Name","value":"fat"}},{"kind":"Field","name":{"kind":"Name","value":"carbs"}},{"kind":"Field","name":{"kind":"Name","value":"proteins"}},{"kind":"Field","name":{"kind":"Name","value":"rate"}}]}}]}}]}}]} as unknown as DocumentNode<StepQuery, StepQueryVariables>;
export const StepsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Steps"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"steps"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imagen_path"}}]}}]}}]}}]} as unknown as DocumentNode<StepsQuery, StepsQueryVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"email_verified_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"birthday"}},{"kind":"Field","name":{"kind":"Name","value":"recipes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image_pf_path"}},{"kind":"Field","name":{"kind":"Name","value":"origen_food"}},{"kind":"Field","name":{"kind":"Name","value":"time_food"}},{"kind":"Field","name":{"kind":"Name","value":"diet"}},{"kind":"Field","name":{"kind":"Name","value":"prep_time"}},{"kind":"Field","name":{"kind":"Name","value":"calories"}},{"kind":"Field","name":{"kind":"Name","value":"fat"}},{"kind":"Field","name":{"kind":"Name","value":"carbs"}},{"kind":"Field","name":{"kind":"Name","value":"proteins"}},{"kind":"Field","name":{"kind":"Name","value":"rate"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"birthday"}},{"kind":"Field","name":{"kind":"Name","value":"recipes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image_pf_path"}},{"kind":"Field","name":{"kind":"Name","value":"origen_food"}},{"kind":"Field","name":{"kind":"Name","value":"time_food"}},{"kind":"Field","name":{"kind":"Name","value":"diet"}},{"kind":"Field","name":{"kind":"Name","value":"prep_time"}},{"kind":"Field","name":{"kind":"Name","value":"calories"}},{"kind":"Field","name":{"kind":"Name","value":"fat"}},{"kind":"Field","name":{"kind":"Name","value":"carbs"}},{"kind":"Field","name":{"kind":"Name","value":"proteins"}},{"kind":"Field","name":{"kind":"Name","value":"rate"}}]}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Users"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"email_verified_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;