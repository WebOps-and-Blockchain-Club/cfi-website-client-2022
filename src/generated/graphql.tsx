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
  author?: Maybe<Scalars['String']>;
  club?: Maybe<Club>;
  content?: Maybe<Scalars['String']>;
  createdBy: User;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Image>;
  readingTime?: Maybe<Scalars['Float']>;
  status: BlogStatus;
  tags?: Maybe<Array<Tag>>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  views: Scalars['Float'];
};

export enum BlogStatus {
  Approved = 'APPROVED',
  ApprovedByClub = 'APPROVED_BY_CLUB',
  Draft = 'DRAFT',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
  RejectedByClub = 'REJECTED_BY_CLUB'
}

export type Club = {
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  projects: Array<Project>;
};

export type Comment = {
  createdAt: Scalars['DateTime'];
  createdBy: User;
  description: Scalars['String'];
  id: Scalars['String'];
};

export type CreateBlogInput = {
  author?: InputMaybe<Scalars['String']>;
  clubId?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  imageData?: InputMaybe<Scalars['Upload']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  readingTime?: InputMaybe<Scalars['Float']>;
  status: BlogStatus;
  tagIds?: InputMaybe<Array<Scalars['String']>>;
  title: Scalars['String'];
};

export type CreateClubInput = {
  email: Scalars['String'];
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
  status: ProjectStatus;
  title: Scalars['String'];
};

export type CreateTagInput = {
  name: Scalars['String'];
};

export type EditTagInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type FilterBlog = {
  clubId?: InputMaybe<Array<Scalars['String']>>;
  clubName?: InputMaybe<Array<Scalars['String']>>;
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
  loginType: LoginType;
  token: Scalars['String'];
};

export enum LoginType {
  Admin = 'ADMIN',
  Blog = 'BLOG',
  Sip = 'SIP'
}

export type Mutation = {
  createBlog: Blog;
  createClub: Scalars['Boolean'];
  createComment: Comment;
  createProject: Project;
  createTag: Scalars['Boolean'];
  deleteAllProjects: Scalars['Boolean'];
  deleteComment: Scalars['Boolean'];
  editTag: Scalars['Boolean'];
  login: User;
  logout: Scalars['Boolean'];
  suggestEdit: Scalars['Boolean'];
  toggleLikeProject: Scalars['Boolean'];
  updateBlogStatus: Scalars['Boolean'];
  updateViews?: Maybe<Scalars['Boolean']>;
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
};


export type MutationCreateProjectArgs = {
  CreateProjectInput: CreateProjectInput;
};


export type MutationCreateTagArgs = {
  CreateTagInput: CreateTagInput;
};


export type MutationDeleteAllProjectsArgs = {
  ProjectId: Scalars['String'];
};


export type MutationDeleteCommentArgs = {
  CommentId: Scalars['String'];
};


export type MutationEditTagArgs = {
  EditTagInput: EditTagInput;
  TagId: Scalars['String'];
};


export type MutationLoginArgs = {
  LoginInputs: LoginInput;
};


export type MutationSuggestEditArgs = {
  BlogId: Scalars['String'];
  Content: Scalars['String'];
};


export type MutationToggleLikeProjectArgs = {
  ProjectId: Scalars['String'];
};


export type MutationUpdateBlogStatusArgs = {
  BlogId: Scalars['String'];
  BlogStatus: Scalars['String'];
};


export type MutationUpdateViewsArgs = {
  BlogId: Scalars['String'];
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
  isLiked: Scalars['Boolean'];
  likeCount: Scalars['Float'];
  q1?: Maybe<Scalars['String']>;
  q2?: Maybe<Scalars['String']>;
  q3?: Maybe<Scalars['String']>;
  q4?: Maybe<Scalars['String']>;
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


export type CreateBlogMutation = { createBlog: { id: string, status: BlogStatus } };

export type UpdateBlogStatusMutationVariables = Exact<{
  blogStatus: Scalars['String'];
  updateBlogStatusBlogId: Scalars['String'];
}>;


export type UpdateBlogStatusMutation = { updateBlogStatus: boolean };

export type SuggestEditMutationVariables = Exact<{
  content: Scalars['String'];
  blogId: Scalars['String'];
}>;


export type SuggestEditMutation = { suggestEdit: boolean };

export type UpdateViewsMutationVariables = Exact<{
  blogId: Scalars['String'];
}>;


export type UpdateViewsMutation = { updateViews?: boolean | null };

export type CreateTagMutationVariables = Exact<{
  createTagInput: CreateTagInput;
}>;


export type CreateTagMutation = { createTag: boolean };

export type CreateProjectMutationVariables = Exact<{
  createProjectInput: CreateProjectInput;
}>;


export type CreateProjectMutation = { createProject: { id: string, status: ProjectStatus } };

export type ToggleLikeProjectMutationVariables = Exact<{
  projectId: Scalars['String'];
}>;


export type ToggleLikeProjectMutation = { toggleLikeProject: boolean };

export type CreateCommentMutationVariables = Exact<{
  createCommentInput: CreateCommentInput;
}>;


export type CreateCommentMutation = { createComment: { id: string } };

export type UploadImageMutationVariables = Exact<{
  image: Array<Scalars['Upload']> | Scalars['Upload'];
}>;


export type UploadImageMutation = { uploadImage: Array<{ url: string }> };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { getMe: { id: string, email: string, name: string, role: UserRole } };

export type GetMeSipQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeSipQuery = { getMe: { id: string, email: string, name: string, role: UserRole, projects?: Array<{ id: string, title: string, status: ProjectStatus, updatedAt: any, likeCount: number, isLiked: boolean, clubs: Array<{ id: string, name: string }> }> | null } };

export type GetMeBlogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeBlogsQuery = { getMe: { blogs?: Array<{ id: string, title: string, description?: string | null, author?: string | null, views: number, readingTime?: number | null, status: BlogStatus, updatedAt: any, image?: { name: string, url: string } | null, club?: { id: string, name: string, email: string } | null, tags?: Array<{ id: string, name: string }> | null, createdBy: { id: string, name: string } }> | null } };

export type GetBlogsQueryVariables = Exact<{
  filters?: InputMaybe<FilterBlog>;
}>;


export type GetBlogsQuery = { getBlogs: { blogs?: Array<{ id: string, title: string, description?: string | null, author?: string | null, views: number, readingTime?: number | null, status: BlogStatus, updatedAt: any, image?: { name: string, url: string } | null, club?: { id: string, name: string, email: string } | null, tags?: Array<{ id: string, name: string }> | null, createdBy: { id: string, name: string } }> | null } };

export type GetBlogQueryVariables = Exact<{
  blogId: Scalars['String'];
}>;


export type GetBlogQuery = { getBlog?: { id: string, title: string, description?: string | null, author?: string | null, views: number, readingTime?: number | null, status: BlogStatus, updatedAt: any, content?: string | null, image?: { name: string, url: string } | null, club?: { id: string, name: string, email: string } | null, tags?: Array<{ id: string, name: string }> | null, createdBy: { id: string, name: string } } | null };

export type GetTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTagsQuery = { getTags?: Array<{ id: string, name: string }> | null };

export type GetProjectsQueryVariables = Exact<{
  filters?: InputMaybe<FilterProject>;
}>;


export type GetProjectsQuery = { getProjects: { count: number, projects?: Array<{ id: string, title: string, updatedAt: any, likeCount: number, isLiked: boolean, clubs: Array<{ id: string, name: string }>, createdBy: { name: string } }> | null } };

export type GetProjectQueryVariables = Exact<{
  projectId: Scalars['String'];
}>;


export type GetProjectQuery = { getProject?: { id: string, title: string, q1?: string | null, q2?: string | null, q3?: string | null, q4?: string | null, status: ProjectStatus, updatedAt: any, likeCount: number, isLiked: boolean, clubs: Array<{ id: string, name: string }>, createdBy: { name: string }, comments: Array<{ id: string, description: string, createdBy: { name: string } }> } | null };

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
    status
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
export const SuggestEditDocument = gql`
    mutation SuggestEdit($content: String!, $blogId: String!) {
  suggestEdit(Content: $content, BlogId: $blogId)
}
    `;
export type SuggestEditMutationFn = ApolloReactCommon.MutationFunction<SuggestEditMutation, SuggestEditMutationVariables>;

/**
 * __useSuggestEditMutation__
 *
 * To run a mutation, you first call `useSuggestEditMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSuggestEditMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [suggestEditMutation, { data, loading, error }] = useSuggestEditMutation({
 *   variables: {
 *      content: // value for 'content'
 *      blogId: // value for 'blogId'
 *   },
 * });
 */
export function useSuggestEditMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SuggestEditMutation, SuggestEditMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<SuggestEditMutation, SuggestEditMutationVariables>(SuggestEditDocument, options);
      }
export type SuggestEditMutationHookResult = ReturnType<typeof useSuggestEditMutation>;
export type SuggestEditMutationResult = ApolloReactCommon.MutationResult<SuggestEditMutation>;
export type SuggestEditMutationOptions = ApolloReactCommon.BaseMutationOptions<SuggestEditMutation, SuggestEditMutationVariables>;
export const UpdateViewsDocument = gql`
    mutation UpdateViews($blogId: String!) {
  updateViews(BlogId: $blogId)
}
    `;
export type UpdateViewsMutationFn = ApolloReactCommon.MutationFunction<UpdateViewsMutation, UpdateViewsMutationVariables>;

/**
 * __useUpdateViewsMutation__
 *
 * To run a mutation, you first call `useUpdateViewsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateViewsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateViewsMutation, { data, loading, error }] = useUpdateViewsMutation({
 *   variables: {
 *      blogId: // value for 'blogId'
 *   },
 * });
 */
export function useUpdateViewsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateViewsMutation, UpdateViewsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateViewsMutation, UpdateViewsMutationVariables>(UpdateViewsDocument, options);
      }
export type UpdateViewsMutationHookResult = ReturnType<typeof useUpdateViewsMutation>;
export type UpdateViewsMutationResult = ApolloReactCommon.MutationResult<UpdateViewsMutation>;
export type UpdateViewsMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateViewsMutation, UpdateViewsMutationVariables>;
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
export const ToggleLikeProjectDocument = gql`
    mutation ToggleLikeProject($projectId: String!) {
  toggleLikeProject(ProjectId: $projectId)
}
    `;
export type ToggleLikeProjectMutationFn = ApolloReactCommon.MutationFunction<ToggleLikeProjectMutation, ToggleLikeProjectMutationVariables>;

/**
 * __useToggleLikeProjectMutation__
 *
 * To run a mutation, you first call `useToggleLikeProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleLikeProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleLikeProjectMutation, { data, loading, error }] = useToggleLikeProjectMutation({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useToggleLikeProjectMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ToggleLikeProjectMutation, ToggleLikeProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ToggleLikeProjectMutation, ToggleLikeProjectMutationVariables>(ToggleLikeProjectDocument, options);
      }
export type ToggleLikeProjectMutationHookResult = ReturnType<typeof useToggleLikeProjectMutation>;
export type ToggleLikeProjectMutationResult = ApolloReactCommon.MutationResult<ToggleLikeProjectMutation>;
export type ToggleLikeProjectMutationOptions = ApolloReactCommon.BaseMutationOptions<ToggleLikeProjectMutation, ToggleLikeProjectMutationVariables>;
export const CreateCommentDocument = gql`
    mutation CreateComment($createCommentInput: CreateCommentInput!) {
  createComment(CreateCommentInput: $createCommentInput) {
    id
  }
}
    `;
export type CreateCommentMutationFn = ApolloReactCommon.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      createCommentInput: // value for 'createCommentInput'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, options);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = ApolloReactCommon.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const UploadImageDocument = gql`
    mutation UploadImage($image: [Upload!]!) {
  uploadImage(Image: $image) {
    url
  }
}
    `;
export type UploadImageMutationFn = ApolloReactCommon.MutationFunction<UploadImageMutation, UploadImageMutationVariables>;

/**
 * __useUploadImageMutation__
 *
 * To run a mutation, you first call `useUploadImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadImageMutation, { data, loading, error }] = useUploadImageMutation({
 *   variables: {
 *      image: // value for 'image'
 *   },
 * });
 */
export function useUploadImageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UploadImageMutation, UploadImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UploadImageMutation, UploadImageMutationVariables>(UploadImageDocument, options);
      }
export type UploadImageMutationHookResult = ReturnType<typeof useUploadImageMutation>;
export type UploadImageMutationResult = ApolloReactCommon.MutationResult<UploadImageMutation>;
export type UploadImageMutationOptions = ApolloReactCommon.BaseMutationOptions<UploadImageMutation, UploadImageMutationVariables>;
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
export const GetMeSipDocument = gql`
    query GetMeSIP {
  getMe {
    id
    email
    name
    role
    projects {
      id
      title
      status
      updatedAt
      likeCount
      isLiked
      clubs {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useGetMeSipQuery__
 *
 * To run a query within a React component, call `useGetMeSipQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeSipQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeSipQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeSipQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMeSipQuery, GetMeSipQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetMeSipQuery, GetMeSipQueryVariables>(GetMeSipDocument, options);
      }
export function useGetMeSipLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMeSipQuery, GetMeSipQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetMeSipQuery, GetMeSipQueryVariables>(GetMeSipDocument, options);
        }
export type GetMeSipQueryHookResult = ReturnType<typeof useGetMeSipQuery>;
export type GetMeSipLazyQueryHookResult = ReturnType<typeof useGetMeSipLazyQuery>;
export type GetMeSipQueryResult = ApolloReactCommon.QueryResult<GetMeSipQuery, GetMeSipQueryVariables>;
export function refetchGetMeSipQuery(variables?: GetMeSipQueryVariables) {
      return { query: GetMeSipDocument, variables: variables }
    }
export const GetMeBlogsDocument = gql`
    query GetMeBlogs {
  getMe {
    blogs {
      id
      title
      description
      image {
        name
        url
      }
      author
      views
      readingTime
      status
      updatedAt
      club {
        id
        name
        email
      }
      tags {
        id
        name
      }
      createdBy {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useGetMeBlogsQuery__
 *
 * To run a query within a React component, call `useGetMeBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeBlogsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeBlogsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMeBlogsQuery, GetMeBlogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetMeBlogsQuery, GetMeBlogsQueryVariables>(GetMeBlogsDocument, options);
      }
export function useGetMeBlogsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMeBlogsQuery, GetMeBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetMeBlogsQuery, GetMeBlogsQueryVariables>(GetMeBlogsDocument, options);
        }
export type GetMeBlogsQueryHookResult = ReturnType<typeof useGetMeBlogsQuery>;
export type GetMeBlogsLazyQueryHookResult = ReturnType<typeof useGetMeBlogsLazyQuery>;
export type GetMeBlogsQueryResult = ApolloReactCommon.QueryResult<GetMeBlogsQuery, GetMeBlogsQueryVariables>;
export function refetchGetMeBlogsQuery(variables?: GetMeBlogsQueryVariables) {
      return { query: GetMeBlogsDocument, variables: variables }
    }
export const GetBlogsDocument = gql`
    query GetBlogs($filters: FilterBlog) {
  getBlogs(Filters: $filters) {
    blogs {
      id
      title
      description
      image {
        name
        url
      }
      author
      views
      readingTime
      status
      updatedAt
      club {
        id
        name
        email
      }
      tags {
        id
        name
      }
      createdBy {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useGetBlogsQuery__
 *
 * To run a query within a React component, call `useGetBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useGetBlogsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetBlogsQuery, GetBlogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetBlogsQuery, GetBlogsQueryVariables>(GetBlogsDocument, options);
      }
export function useGetBlogsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetBlogsQuery, GetBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetBlogsQuery, GetBlogsQueryVariables>(GetBlogsDocument, options);
        }
export type GetBlogsQueryHookResult = ReturnType<typeof useGetBlogsQuery>;
export type GetBlogsLazyQueryHookResult = ReturnType<typeof useGetBlogsLazyQuery>;
export type GetBlogsQueryResult = ApolloReactCommon.QueryResult<GetBlogsQuery, GetBlogsQueryVariables>;
export function refetchGetBlogsQuery(variables?: GetBlogsQueryVariables) {
      return { query: GetBlogsDocument, variables: variables }
    }
export const GetBlogDocument = gql`
    query GetBlog($blogId: String!) {
  getBlog(BlogId: $blogId) {
    id
    title
    description
    image {
      name
      url
    }
    author
    views
    readingTime
    status
    updatedAt
    club {
      id
      name
      email
    }
    tags {
      id
      name
    }
    createdBy {
      id
      name
    }
    content
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
      updatedAt
      likeCount
      isLiked
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
    status
    updatedAt
    likeCount
    isLiked
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
      createdBy {
        name
      }
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