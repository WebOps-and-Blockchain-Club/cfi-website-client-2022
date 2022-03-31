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
};

export type Blog = {
  author: Scalars['String'];
  blogs: Array<Tag>;
  club: Club;
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

export enum Club {
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

export type CreateBlogInput = {
  author: Scalars['String'];
  club: Club;
  content: Scalars['String'];
  description: Scalars['String'];
  readingTime: Scalars['String'];
  tagIds: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type CreateTagInput = {
  description: Scalars['String'];
  name: Scalars['String'];
};

export type EditBlogInput = {
  author?: InputMaybe<Scalars['String']>;
  club?: InputMaybe<Club>;
  content?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  readingTime?: InputMaybe<Scalars['String']>;
  tagIds?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditTagInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterBlog = {
  search?: InputMaybe<Scalars['String']>;
  tagIds?: InputMaybe<Array<Scalars['String']>>;
  tagNames?: InputMaybe<Array<Scalars['String']>>;
};

export type GetBlogsOutput = {
  blogs?: Maybe<Array<Blog>>;
  count: Scalars['Float'];
};

export type LoginInput = {
  token: Scalars['String'];
};

export type Mutation = {
  createBlog: Scalars['Boolean'];
  createTag: Scalars['Boolean'];
  editBlog: Scalars['Boolean'];
  editTag: Scalars['Boolean'];
  login: User;
  logout: Scalars['Boolean'];
  updateBlogStatus: Scalars['Boolean'];
};


export type MutationCreateBlogArgs = {
  CreateBlogInput: CreateBlogInput;
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

export type Pagination = {
  skip: Scalars['Float'];
  take: Scalars['Float'];
};

export type Query = {
  getBlog?: Maybe<Blog>;
  getBlogs: GetBlogsOutput;
  getMe: User;
  getTag?: Maybe<Tag>;
  getTags?: Maybe<Array<Tag>>;
  updateViews?: Maybe<Scalars['Boolean']>;
};


export type QueryGetBlogArgs = {
  BlogId: Scalars['String'];
};


export type QueryGetBlogsArgs = {
  Filters?: InputMaybe<FilterBlog>;
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
  description: Scalars['String'];
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

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { getMe: { id: string, email: string, name: string, role: UserRole } };


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