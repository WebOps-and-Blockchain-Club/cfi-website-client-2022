import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Blog = {
  author: Scalars['String'];
  blogs: Array<Tag>;
  club: ClubEnum;
  content: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['String'];
  readingTime: Scalars['String'];
  status: BlogStatus;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  views: Scalars['Float'];
};

export enum BlogStatus {
  Approved = 'APPROVED',
  Draft = 'DRAFT',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type Club = {
  id: Scalars['String'];
  name: Scalars['String'];
  projects: Array<Project>;
};

export enum ClubEnum {
  AeroClub = 'AERO_CLUB',
  AnalyticsClub = 'ANALYTICS_CLUB',
  Cvi = 'CVI',
  ElectronicsClub = 'ELECTRONICS_CLUB',
  Horizon = 'HORIZON',
  Ibot = 'IBOT',
  Igem = 'IGEM',
  ProductDesignClub = 'PRODUCT_DESIGN_CLUB',
  ProgrammingClub = 'PROGRAMMING_CLUB',
  TeamEnvisage = 'TEAM_ENVISAGE',
  TeamSahaay = 'TEAM_SAHAAY',
  ThreedPrintingClub = 'THREED_PRINTING_CLUB',
  WebopsAndBlockchainClub = 'WEBOPS_AND_BLOCKCHAIN_CLUB'
}

export type Comment = {
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
};

export type CreateBlogInput = {
  author: Scalars['String'];
  club: ClubEnum;
  content: Scalars['String'];
  description: Scalars['String'];
  readingTime: Scalars['String'];
  tagIds: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type CreateClubInput = {
  name: Scalars['String'];
};

export type CreateCommentInput = {
  description: Scalars['String'];
  projectId: Scalars['String'];
};

export type CreateProjectInput = {
  clubIds: Array<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  q1?: InputMaybe<Scalars['String']>;
  q2?: InputMaybe<Scalars['String']>;
  q3?: InputMaybe<Scalars['String']>;
  q4?: InputMaybe<Scalars['String']>;
  q5?: InputMaybe<Scalars['String']>;
  q6?: InputMaybe<Scalars['String']>;
  q7?: InputMaybe<Scalars['String']>;
  status: ProjectStatus;
  title: Scalars['String'];
};

export type CreateTagInput = {
  name: Scalars['String'];
};

export type EditBlogInput = {
  author?: InputMaybe<Scalars['String']>;
  club?: InputMaybe<ClubEnum>;
  content?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  readingTime?: InputMaybe<Scalars['String']>;
  tagIds?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditTagInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type FilterBlog = {
  search?: InputMaybe<Scalars['String']>;
  tagIds?: InputMaybe<Array<Scalars['String']>>;
  tagNames?: InputMaybe<Array<Scalars['String']>>;
};

export type FilterProject = {
  clubIds?: InputMaybe<Array<Scalars['String']>>;
  clubNames?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
};

export type GetBlogsOutput = {
  blogs?: Maybe<Array<Blog>>;
  count: Scalars['Float'];
};

export type GetProjectsOutput = {
  count: Scalars['Float'];
  projects?: Maybe<Array<Project>>;
};

export type Image = {
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  url: Scalars['String'];
};

export type LoginInput = {
  token: Scalars['String'];
};

export type Mutation = {
  createBlog: Blog;
  createClub: Scalars['Boolean'];
  createComment: Comment;
  createProject: Project;
  createTag: Scalars['Boolean'];
  editBlog: Scalars['Boolean'];
  editTag: Scalars['Boolean'];
  login: User;
  logout: Scalars['Boolean'];
  updateBlogStatus: Scalars['Boolean'];
  uploadImage: Array<Image>;
};


export type MutationCreateBlogArgs = {
  CreateBlogInput: CreateBlogInput;
};


export type MutationCreateClubArgs = {
  CreateClubInput: CreateClubInput;
};


export type MutationCreateCommentArgs = {
  CreateCommentInput: CreateCommentInput;
  ProjectId: Scalars['String'];
};


export type MutationCreateProjectArgs = {
  CreateProjectInput: CreateProjectInput;
};


export type MutationCreateTagArgs = {
  CreateTagInput: CreateTagInput;
};


export type MutationEditBlogArgs = {
  BlogId: Scalars['String'];
  EditBlogInput: EditBlogInput;
};


export type MutationEditTagArgs = {
  EditTagInput: EditTagInput;
  TagId: Scalars['String'];
};


export type MutationLoginArgs = {
  LoginInputs: LoginInput;
};


export type MutationUpdateBlogStatusArgs = {
  BlogId: Scalars['String'];
  BlogStatus: Scalars['String'];
};


export type MutationUploadImageArgs = {
  Image: Array<Scalars['Upload']>;
};

export type Pagination = {
  skip: Scalars['Float'];
  take: Scalars['Float'];
};

export type Project = {
  clubs: Array<Club>;
  comments: Array<Comment>;
  createdBy: User;
  id: Scalars['String'];
  q1?: Maybe<Scalars['String']>;
  q2?: Maybe<Scalars['String']>;
  q3?: Maybe<Scalars['String']>;
  q4?: Maybe<Scalars['String']>;
  q5?: Maybe<Scalars['String']>;
  q6?: Maybe<Scalars['String']>;
  q7?: Maybe<Scalars['String']>;
  status: ProjectStatus;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export enum ProjectStatus {
  Draft = 'DRAFT',
  Public = 'PUBLIC'
}

export type Query = {
  deleteImage: Scalars['Boolean'];
  getBlog?: Maybe<Blog>;
  getBlogs: GetBlogsOutput;
  getClubs: Array<Club>;
  getMe: User;
  getProject?: Maybe<Project>;
  getProjects: GetProjectsOutput;
  getTag?: Maybe<Tag>;
  getTags?: Maybe<Array<Tag>>;
  updateViews?: Maybe<Scalars['Boolean']>;
};


export type QueryDeleteImageArgs = {
  ImageName: Scalars['String'];
};


export type QueryGetBlogArgs = {
  BlogId: Scalars['String'];
};


export type QueryGetBlogsArgs = {
  Filters?: InputMaybe<FilterBlog>;
  Pagination?: InputMaybe<Pagination>;
};


export type QueryGetProjectArgs = {
  ProjectId: Scalars['String'];
};


export type QueryGetProjectsArgs = {
  Filters?: InputMaybe<FilterProject>;
  Pagination?: InputMaybe<Pagination>;
};


export type QueryGetTagArgs = {
  TagId?: InputMaybe<Scalars['String']>;
  TagName?: InputMaybe<Scalars['String']>;
};


export type QueryUpdateViewsArgs = {
  BlogId: Scalars['String'];
};

export type Tag = {
  blogs: GetBlogsOutput;
  id: Scalars['String'];
  name: Scalars['String'];
};


export type TagBlogsArgs = {
  Filters?: InputMaybe<FilterBlog>;
  Pagination?: InputMaybe<Pagination>;
};

export type User = {
  blogs?: Maybe<Array<Blog>>;
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  projects?: Maybe<Array<Project>>;
  role: UserRole;
};

export enum UserRole {
  Admin = 'ADMIN',
  Dev = 'DEV',
  Member = 'MEMBER',
  User = 'USER'
}

export type LoginMutationVariables = Exact<{
  loginInputs: LoginInput;
}>;


export type LoginMutation = { login: { id: string, role: UserRole, email: string, name: string } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { logout: boolean };

export type CreateBlogMutationVariables = Exact<{
  createBlogInput: CreateBlogInput;
}>;


export type CreateBlogMutation = { createBlog: { id: string } };

export type EditBlogMutationVariables = Exact<{
  editBlogInput: EditBlogInput;
  editBlogBlogId: Scalars['String'];
}>;


export type EditBlogMutation = { editBlog: boolean };

export type UpdateBlogStatusMutationVariables = Exact<{
  blogStatus: Scalars['String'];
  updateBlogStatusBlogId: Scalars['String'];
}>;


export type UpdateBlogStatusMutation = { updateBlogStatus: boolean };

export type CreateTagMutationVariables = Exact<{
  createTagInput: CreateTagInput;
}>;


export type CreateTagMutation = { createTag: boolean };

export type CreateProjectMutationVariables = Exact<{
  createProjectInput: CreateProjectInput;
}>;


export type CreateProjectMutation = { createProject: { id: string, status: ProjectStatus } };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { getMe: { id: string, email: string, name: string, role: UserRole } };

export type GetBlogQueryVariables = Exact<{
  blogId: Scalars['String'];
}>;


export type GetBlogQuery = { getBlog?: { id: string, title: string, description: string, readingTime: string, views: number, content: string, author: string, club: ClubEnum, status: BlogStatus, updatedAt: any, blogs: Array<{ id: string, name: string }> } | null };

export type GetTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTagsQuery = { getTags?: Array<{ id: string, name: string }> | null };

export type GetProjectsQueryVariables = Exact<{
  filters?: InputMaybe<FilterProject>;
}>;


export type GetProjectsQuery = { getProjects: { count: number, projects?: Array<{ id: string, title: string, clubs: Array<{ id: string, name: string }>, createdBy: { name: string } }> | null } };

export type GetProjectQueryVariables = Exact<{
  projectId: Scalars['String'];
}>;


export type GetProjectQuery = { getProject?: { id: string, title: string, q1?: string | null, q2?: string | null, q3?: string | null, q4?: string | null, q5?: string | null, q6?: string | null, q7?: string | null, status: ProjectStatus, updatedAt: any, clubs: Array<{ id: string, name: string }>, createdBy: { name: string }, comments: Array<{ id: string, description: string, createdAt: any }> } | null };

export type GetClubsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetClubsQuery = { getClubs: Array<{ id: string, name: string }> };


export const LoginDocument = gql`
    mutation Login($loginInputs: LoginInput!) {
  login(LoginInputs: $loginInputs) {
    id
    role
    email
    name
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginInputs: // value for 'loginInputs'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const CreateBlogDocument = gql`
    mutation CreateBlog($createBlogInput: CreateBlogInput!) {
  createBlog(CreateBlogInput: $createBlogInput) {
    id
  }
}
    `;
export type CreateBlogMutationFn = ApolloReactCommon.MutationFunction<CreateBlogMutation, CreateBlogMutationVariables>;

/**
 * __useCreateBlogMutation__
 *
 * To run a mutation, you first call `useCreateBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBlogMutation, { data, loading, error }] = useCreateBlogMutation({
 *   variables: {
 *      createBlogInput: // value for 'createBlogInput'
 *   },
 * });
 */
export function useCreateBlogMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateBlogMutation, CreateBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateBlogMutation, CreateBlogMutationVariables>(CreateBlogDocument, options);
      }
export type CreateBlogMutationHookResult = ReturnType<typeof useCreateBlogMutation>;
export type CreateBlogMutationResult = ApolloReactCommon.MutationResult<CreateBlogMutation>;
export type CreateBlogMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateBlogMutation, CreateBlogMutationVariables>;
export const EditBlogDocument = gql`
    mutation EditBlog($editBlogInput: EditBlogInput!, $editBlogBlogId: String!) {
  editBlog(EditBlogInput: $editBlogInput, BlogId: $editBlogBlogId)
}
    `;
export type EditBlogMutationFn = ApolloReactCommon.MutationFunction<EditBlogMutation, EditBlogMutationVariables>;

/**
 * __useEditBlogMutation__
 *
 * To run a mutation, you first call `useEditBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editBlogMutation, { data, loading, error }] = useEditBlogMutation({
 *   variables: {
 *      editBlogInput: // value for 'editBlogInput'
 *      editBlogBlogId: // value for 'editBlogBlogId'
 *   },
 * });
 */
export function useEditBlogMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditBlogMutation, EditBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<EditBlogMutation, EditBlogMutationVariables>(EditBlogDocument, options);
      }
export type EditBlogMutationHookResult = ReturnType<typeof useEditBlogMutation>;
export type EditBlogMutationResult = ApolloReactCommon.MutationResult<EditBlogMutation>;
export type EditBlogMutationOptions = ApolloReactCommon.BaseMutationOptions<EditBlogMutation, EditBlogMutationVariables>;
export const UpdateBlogStatusDocument = gql`
    mutation UpdateBlogStatus($blogStatus: String!, $updateBlogStatusBlogId: String!) {
  updateBlogStatus(BlogStatus: $blogStatus, BlogId: $updateBlogStatusBlogId)
}
    `;
export type UpdateBlogStatusMutationFn = ApolloReactCommon.MutationFunction<UpdateBlogStatusMutation, UpdateBlogStatusMutationVariables>;

/**
 * __useUpdateBlogStatusMutation__
 *
 * To run a mutation, you first call `useUpdateBlogStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBlogStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBlogStatusMutation, { data, loading, error }] = useUpdateBlogStatusMutation({
 *   variables: {
 *      blogStatus: // value for 'blogStatus'
 *      updateBlogStatusBlogId: // value for 'updateBlogStatusBlogId'
 *   },
 * });
 */
export function useUpdateBlogStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateBlogStatusMutation, UpdateBlogStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateBlogStatusMutation, UpdateBlogStatusMutationVariables>(UpdateBlogStatusDocument, options);
      }
export type UpdateBlogStatusMutationHookResult = ReturnType<typeof useUpdateBlogStatusMutation>;
export type UpdateBlogStatusMutationResult = ApolloReactCommon.MutationResult<UpdateBlogStatusMutation>;
export type UpdateBlogStatusMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateBlogStatusMutation, UpdateBlogStatusMutationVariables>;
export const CreateTagDocument = gql`
    mutation CreateTag($createTagInput: CreateTagInput!) {
  createTag(CreateTagInput: $createTagInput)
}
    `;
export type CreateTagMutationFn = ApolloReactCommon.MutationFunction<CreateTagMutation, CreateTagMutationVariables>;

/**
 * __useCreateTagMutation__
 *
 * To run a mutation, you first call `useCreateTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTagMutation, { data, loading, error }] = useCreateTagMutation({
 *   variables: {
 *      createTagInput: // value for 'createTagInput'
 *   },
 * });
 */
export function useCreateTagMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTagMutation, CreateTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateTagMutation, CreateTagMutationVariables>(CreateTagDocument, options);
      }
export type CreateTagMutationHookResult = ReturnType<typeof useCreateTagMutation>;
export type CreateTagMutationResult = ApolloReactCommon.MutationResult<CreateTagMutation>;
export type CreateTagMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTagMutation, CreateTagMutationVariables>;
export const CreateProjectDocument = gql`
    mutation CreateProject($createProjectInput: CreateProjectInput!) {
  createProject(CreateProjectInput: $createProjectInput) {
    id
    status
  }
}
    `;
export type CreateProjectMutationFn = ApolloReactCommon.MutationFunction<CreateProjectMutation, CreateProjectMutationVariables>;

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *      createProjectInput: // value for 'createProjectInput'
 *   },
 * });
 */
export function useCreateProjectMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateProjectMutation, CreateProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateProjectMutation, CreateProjectMutationVariables>(CreateProjectDocument, options);
      }
export type CreateProjectMutationHookResult = ReturnType<typeof useCreateProjectMutation>;
export type CreateProjectMutationResult = ApolloReactCommon.MutationResult<CreateProjectMutation>;
export type CreateProjectMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateProjectMutation, CreateProjectMutationVariables>;
export const GetMeDocument = gql`
    query GetMe {
  getMe {
    id
    email
    name
    role
  }
}
    `;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
      }
export function useGetMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
        }
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeQueryResult = ApolloReactCommon.QueryResult<GetMeQuery, GetMeQueryVariables>;
export function refetchGetMeQuery(variables?: GetMeQueryVariables) {
      return { query: GetMeDocument, variables: variables }
    }
export const GetBlogDocument = gql`
    query GetBlog($blogId: String!) {
  getBlog(BlogId: $blogId) {
    id
    title
    description
    readingTime
    views
    content
    author
    club
    status
    updatedAt
    blogs {
      id
      name
    }
  }
}
    `;

/**
 * __useGetBlogQuery__
 *
 * To run a query within a React component, call `useGetBlogQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogQuery({
 *   variables: {
 *      blogId: // value for 'blogId'
 *   },
 * });
 */
export function useGetBlogQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetBlogQuery, GetBlogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetBlogQuery, GetBlogQueryVariables>(GetBlogDocument, options);
      }
export function useGetBlogLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetBlogQuery, GetBlogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetBlogQuery, GetBlogQueryVariables>(GetBlogDocument, options);
        }
export type GetBlogQueryHookResult = ReturnType<typeof useGetBlogQuery>;
export type GetBlogLazyQueryHookResult = ReturnType<typeof useGetBlogLazyQuery>;
export type GetBlogQueryResult = ApolloReactCommon.QueryResult<GetBlogQuery, GetBlogQueryVariables>;
export function refetchGetBlogQuery(variables: GetBlogQueryVariables) {
      return { query: GetBlogDocument, variables: variables }
    }
export const GetTagsDocument = gql`
    query GetTags {
  getTags {
    id
    name
  }
}
    `;

/**
 * __useGetTagsQuery__
 *
 * To run a query within a React component, call `useGetTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTagsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTagsQuery, GetTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetTagsQuery, GetTagsQueryVariables>(GetTagsDocument, options);
      }
export function useGetTagsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTagsQuery, GetTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetTagsQuery, GetTagsQueryVariables>(GetTagsDocument, options);
        }
export type GetTagsQueryHookResult = ReturnType<typeof useGetTagsQuery>;
export type GetTagsLazyQueryHookResult = ReturnType<typeof useGetTagsLazyQuery>;
export type GetTagsQueryResult = ApolloReactCommon.QueryResult<GetTagsQuery, GetTagsQueryVariables>;
export function refetchGetTagsQuery(variables?: GetTagsQueryVariables) {
      return { query: GetTagsDocument, variables: variables }
    }
export const GetProjectsDocument = gql`
    query GetProjects($filters: FilterProject) {
  getProjects(Filters: $filters) {
    projects {
      id
      title
      clubs {
        id
        name
      }
      createdBy {
        name
      }
    }
    count
  }
}
    `;

/**
 * __useGetProjectsQuery__
 *
 * To run a query within a React component, call `useGetProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useGetProjectsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProjectsQuery, GetProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetProjectsQuery, GetProjectsQueryVariables>(GetProjectsDocument, options);
      }
export function useGetProjectsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProjectsQuery, GetProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetProjectsQuery, GetProjectsQueryVariables>(GetProjectsDocument, options);
        }
export type GetProjectsQueryHookResult = ReturnType<typeof useGetProjectsQuery>;
export type GetProjectsLazyQueryHookResult = ReturnType<typeof useGetProjectsLazyQuery>;
export type GetProjectsQueryResult = ApolloReactCommon.QueryResult<GetProjectsQuery, GetProjectsQueryVariables>;
export function refetchGetProjectsQuery(variables?: GetProjectsQueryVariables) {
      return { query: GetProjectsDocument, variables: variables }
    }
export const GetProjectDocument = gql`
    query GetProject($projectId: String!) {
  getProject(ProjectId: $projectId) {
    id
    title
    q1
    q2
    q3
    q4
    q5
    q6
    q7
    status
    updatedAt
    clubs {
      id
      name
    }
    createdBy {
      name
    }
    comments {
      id
      description
      createdAt
    }
  }
}
    `;

/**
 * __useGetProjectQuery__
 *
 * To run a query within a React component, call `useGetProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useGetProjectQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetProjectQuery, GetProjectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetProjectQuery, GetProjectQueryVariables>(GetProjectDocument, options);
      }
export function useGetProjectLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProjectQuery, GetProjectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetProjectQuery, GetProjectQueryVariables>(GetProjectDocument, options);
        }
export type GetProjectQueryHookResult = ReturnType<typeof useGetProjectQuery>;
export type GetProjectLazyQueryHookResult = ReturnType<typeof useGetProjectLazyQuery>;
export type GetProjectQueryResult = ApolloReactCommon.QueryResult<GetProjectQuery, GetProjectQueryVariables>;
export function refetchGetProjectQuery(variables: GetProjectQueryVariables) {
      return { query: GetProjectDocument, variables: variables }
    }
export const GetClubsDocument = gql`
    query GetClubs {
  getClubs {
    id
    name
  }
}
    `;

/**
 * __useGetClubsQuery__
 *
 * To run a query within a React component, call `useGetClubsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClubsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClubsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetClubsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetClubsQuery, GetClubsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetClubsQuery, GetClubsQueryVariables>(GetClubsDocument, options);
      }
export function useGetClubsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetClubsQuery, GetClubsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetClubsQuery, GetClubsQueryVariables>(GetClubsDocument, options);
        }
export type GetClubsQueryHookResult = ReturnType<typeof useGetClubsQuery>;
export type GetClubsLazyQueryHookResult = ReturnType<typeof useGetClubsLazyQuery>;
export type GetClubsQueryResult = ApolloReactCommon.QueryResult<GetClubsQuery, GetClubsQueryVariables>;
export function refetchGetClubsQuery(variables?: GetClubsQueryVariables) {
      return { query: GetClubsDocument, variables: variables }
    }