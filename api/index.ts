// THIS FILE IS GENERATED WITH `npm run generate`
import * as Scalar from '../scalars'
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
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
  DateTime: any;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  errors?: Maybe<Array<Maybe<ErrorPayload>>>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type Comment = {
  __typename?: 'Comment';
  author: User;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  post: Post;
  updatedAt: Scalars['DateTime'];
};

export type CommentCreateInput = {
  content: Scalars['String'];
  postId: Scalars['ID'];
};

export type CommentUpdateInput = {
  content: Scalars['String'];
};

export type ErrorPayload = {
  __typename?: 'ErrorPayload';
  code?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changeEmail?: Maybe<AuthPayload>;
  changePassword?: Maybe<AuthPayload>;
  createComment?: Maybe<Comment>;
  createDraft?: Maybe<Post>;
  deleteComment?: Maybe<Comment>;
  deletePost?: Maybe<Post>;
  incrementPostViewCount?: Maybe<Post>;
  login?: Maybe<AuthPayload>;
  signup?: Maybe<AuthPayload>;
  togglePublishPost?: Maybe<Post>;
  updateComment?: Maybe<Comment>;
  updatePost?: Maybe<Post>;
};


export type MutationChangeEmailArgs = {
  newEmail: Scalars['String'];
  password: Scalars['String'];
  redirectUrl?: InputMaybe<Scalars['String']>;
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationCreateCommentArgs = {
  data: CommentCreateInput;
};


export type MutationCreateDraftArgs = {
  data: PostCreateInput;
};


export type MutationDeleteCommentArgs = {
  id: Scalars['Int'];
};


export type MutationDeletePostArgs = {
  id: Scalars['Int'];
};


export type MutationIncrementPostViewCountArgs = {
  id: Scalars['Int'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignupArgs = {
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};


export type MutationTogglePublishPostArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateCommentArgs = {
  data: CommentUpdateInput;
  id: Scalars['Int'];
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  id: Scalars['Int'];
};

export type Post = {
  __typename?: 'Post';
  author: User;
  commentCount: Scalars['Int'];
  comments: Array<Maybe<Comment>>;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  viewCount: Scalars['Int'];
};

export type PostCreateInput = {
  comments?: InputMaybe<Array<CommentCreateInput>>;
  content: Scalars['String'];
  title: Scalars['String'];
};

export type PostOrderByUpdatedAtInput = {
  updatedAt: SortOrder;
};

export type PostUpdateInput = {
  content: Scalars['String'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  allUsers: Array<User>;
  commentsByPost?: Maybe<Array<Maybe<Comment>>>;
  draftsByUser?: Maybe<Array<Maybe<Post>>>;
  feed: Array<Maybe<Post>>;
  me?: Maybe<User>;
  postById?: Maybe<Post>;
};


export type QueryCommentsByPostArgs = {
  postId: Scalars['Int'];
};


export type QueryDraftsByUserArgs = {
  userUniqueInput: UserUniqueInput;
};


export type QueryFeedArgs = {
  orderBy?: InputMaybe<PostOrderByUpdatedAtInput>;
  searchString?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryPostByIdArgs = {
  id?: InputMaybe<Scalars['Int']>;
};

export type SortOrder =
  | 'asc'
  | 'desc';

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  lastName?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<Post>>>;
};

export type UserCreateInput = {
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<Array<PostCreateInput>>;
};

export type UserUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type CommentDetailsFragment = { __typename?: 'Comment', id: number, content: string, createdAt: any, updatedAt: any, author: { __typename?: 'User', id: number, firstName?: string | null, lastName?: string | null, email: string, avatar?: string | null } };

export type PostDetailsFragment = { __typename?: 'Post', id: number, createdAt: any, updatedAt: any, title: string, content: string, published: boolean, viewCount: number, commentCount: number, author: { __typename?: 'User', id: number, firstName?: string | null, lastName?: string | null, email: string, avatar?: string | null } };

export type UserDetailsFragment = { __typename?: 'User', id: number, firstName?: string | null, lastName?: string | null, email: string, avatar?: string | null };

export type ChangeEmailMutationVariables = Exact<{
  newEmail: Scalars['String'];
  password: Scalars['String'];
  redirectUrl?: InputMaybe<Scalars['String']>;
}>;


export type ChangeEmailMutation = { __typename?: 'Mutation', changeEmail?: { __typename?: 'AuthPayload', token?: string | null, user?: { __typename?: 'User', id: number, firstName?: string | null, lastName?: string | null, email: string, avatar?: string | null } | null, errors?: Array<{ __typename?: 'ErrorPayload', field?: string | null, message?: string | null, code?: string | null } | null> | null } | null };

export type ChangePasswordMutationVariables = Exact<{
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword?: { __typename?: 'AuthPayload', token?: string | null, user?: { __typename?: 'User', id: number, firstName?: string | null, lastName?: string | null, email: string, avatar?: string | null } | null, errors?: Array<{ __typename?: 'ErrorPayload', field?: string | null, message?: string | null, code?: string | null } | null> | null } | null };

export type CreateCommentMutationVariables = Exact<{
  data: CommentCreateInput;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment?: { __typename?: 'Comment', id: number, createdAt: any, updatedAt: any, content: string, author: { __typename?: 'User', id: number, firstName?: string | null, lastName?: string | null } } | null };

export type CreateDraftMutationVariables = Exact<{
  data: PostCreateInput;
}>;


export type CreateDraftMutation = { __typename?: 'Mutation', createDraft?: { __typename?: 'Post', id: number, createdAt: any, updatedAt: any, title: string, content: string, published: boolean, viewCount: number, author: { __typename?: 'User', id: number, firstName?: string | null, lastName?: string | null, email: string } } | null };

export type DeletePostMutationVariables = Exact<{
  deletePostId: Scalars['Int'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost?: { __typename?: 'Post', id: number, createdAt: any, updatedAt: any, title: string, content: string, published: boolean, viewCount: number, author: { __typename?: 'User', id: number, firstName?: string | null, lastName?: string | null, email: string } } | null };

export type IncreasePostViewCountMutationVariables = Exact<{
  incrementPostViewCountId: Scalars['Int'];
}>;


export type IncreasePostViewCountMutation = { __typename?: 'Mutation', incrementPostViewCount?: { __typename?: 'Post', id: number, createdAt: any, updatedAt: any, title: string, content: string, published: boolean, viewCount: number, author: { __typename?: 'User', id: number, firstName?: string | null, lastName?: string | null, email: string } } | null };

export type SignInMutationVariables = Exact<{
  loginEmail2: Scalars['String'];
  loginPassword2: Scalars['String'];
}>;


export type SignInMutation = { __typename?: 'Mutation', login?: { __typename?: 'AuthPayload', token?: string | null, user?: { __typename?: 'User', id: number, firstName?: string | null, lastName?: string | null, email: string, avatar?: string | null } | null, errors?: Array<{ __typename?: 'ErrorPayload', field?: string | null, message?: string | null, code?: string | null } | null> | null } | null };

export type SignUpMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signup?: { __typename?: 'AuthPayload', token?: string | null, user?: { __typename?: 'User', id: number, firstName?: string | null, lastName?: string | null, email: string, avatar?: string | null } | null, errors?: Array<{ __typename?: 'ErrorPayload', field?: string | null, message?: string | null, code?: string | null } | null> | null } | null };

export type TogglePublishPostMutationVariables = Exact<{
  togglePublishPostId: Scalars['Int'];
}>;


export type TogglePublishPostMutation = { __typename?: 'Mutation', togglePublishPost?: { __typename?: 'Post', id: number, createdAt: any, updatedAt: any, title: string, content: string, published: boolean, viewCount: number, commentCount: number, author: { __typename?: 'User', id: number, firstName?: string | null, lastName?: string | null, email: string, avatar?: string | null } } | null };

export type UpdatePostMutationVariables = Exact<{
  updatePostId: Scalars['Int'];
  data: PostUpdateInput;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost?: { __typename?: 'Post', id: number, createdAt: any, updatedAt: any, title: string, content: string, published: boolean, viewCount: number, author: { __typename?: 'User', id: number, firstName?: string | null, lastName?: string | null, email: string } } | null };

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { __typename?: 'Query', allUsers: Array<{ __typename?: 'User', id: number, firstName?: string | null, lastName?: string | null, email: string, avatar?: string | null }> };

export type CommentsByPostQueryVariables = Exact<{
  postId: Scalars['Int'];
}>;


export type CommentsByPostQuery = { __typename?: 'Query', commentsByPost?: Array<{ __typename?: 'Comment', id: number, content: string, createdAt: any, updatedAt: any, author: { __typename?: 'User', id: number, firstName?: string | null, lastName?: string | null, email: string, avatar?: string | null } } | null> | null };

export type CurrentUserDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserDetailsQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, firstName?: string | null, lastName?: string | null, email: string, avatar?: string | null } | null };

export type DraftsByUserQueryVariables = Exact<{
  userUniqueInput: UserUniqueInput;
}>;


export type DraftsByUserQuery = { __typename?: 'Query', draftsByUser?: Array<{ __typename?: 'Post', id: number, createdAt: any, updatedAt: any, title: string, content: string, published: boolean, viewCount: number, commentCount: number, author: { __typename?: 'User', id: number, firstName?: string | null, lastName?: string | null, email: string, avatar?: string | null } } | null> | null };

export type FeedQueryVariables = Exact<{
  searchString?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PostOrderByUpdatedAtInput>;
}>;


export type FeedQuery = { __typename?: 'Query', feed: Array<{ __typename?: 'Post', id: number, createdAt: any, updatedAt: any, title: string, content: string, published: boolean, viewCount: number, commentCount: number, author: { __typename?: 'User', id: number, firstName?: string | null, lastName?: string | null, email: string, avatar?: string | null } } | null> };

export type PostByIdQueryVariables = Exact<{
  postByIdId?: InputMaybe<Scalars['Int']>;
}>;


export type PostByIdQuery = { __typename?: 'Query', postById?: { __typename?: 'Post', id: number, createdAt: any, updatedAt: any, title: string, content: string, published: boolean, viewCount: number, commentCount: number, author: { __typename?: 'User', id: number, firstName?: string | null, lastName?: string | null, email: string, avatar?: string | null } } | null };

export const UserDetailsFragmentDoc = gql`
    fragment UserDetailsFragment on User {
  id
  firstName
  lastName
  email
  avatar
}
    `;
export const CommentDetailsFragmentDoc = gql`
    fragment CommentDetailsFragment on Comment {
  id
  author {
    ...UserDetailsFragment
  }
  content
  createdAt
  updatedAt
}
    ${UserDetailsFragmentDoc}`;
export const PostDetailsFragmentDoc = gql`
    fragment PostDetailsFragment on Post {
  id
  createdAt
  updatedAt
  title
  content
  published
  viewCount
  commentCount
  author {
    ...UserDetailsFragment
  }
}
    ${UserDetailsFragmentDoc}`;
export const ChangeEmailDocument = gql`
    mutation ChangeEmail($newEmail: String!, $password: String!, $redirectUrl: String) {
  changeEmail(newEmail: $newEmail, password: $password, redirectUrl: $redirectUrl) {
    token
    user {
      ...UserDetailsFragment
    }
    errors {
      field
      message
      code
    }
  }
}
    ${UserDetailsFragmentDoc}`;
export type ChangeEmailMutationFn = Apollo.MutationFunction<ChangeEmailMutation, ChangeEmailMutationVariables>;

/**
 * __useChangeEmailMutation__
 *
 * To run a mutation, you first call `useChangeEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeEmailMutation, { data, loading, error }] = useChangeEmailMutation({
 *   variables: {
 *      newEmail: // value for 'newEmail'
 *      password: // value for 'password'
 *      redirectUrl: // value for 'redirectUrl'
 *   },
 * });
 */
export function useChangeEmailMutation(baseOptions?: Apollo.MutationHookOptions<ChangeEmailMutation, ChangeEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeEmailMutation, ChangeEmailMutationVariables>(ChangeEmailDocument, options);
      }
export type ChangeEmailMutationHookResult = ReturnType<typeof useChangeEmailMutation>;
export type ChangeEmailMutationResult = Apollo.MutationResult<ChangeEmailMutation>;
export type ChangeEmailMutationOptions = Apollo.BaseMutationOptions<ChangeEmailMutation, ChangeEmailMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($oldPassword: String!, $newPassword: String!) {
  changePassword(oldPassword: $oldPassword, newPassword: $newPassword) {
    token
    user {
      ...UserDetailsFragment
    }
    errors {
      field
      message
      code
    }
  }
}
    ${UserDetailsFragmentDoc}`;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      oldPassword: // value for 'oldPassword'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const CreateCommentDocument = gql`
    mutation CreateComment($data: CommentCreateInput!) {
  createComment(data: $data) {
    id
    createdAt
    updatedAt
    content
    author {
      id
      firstName
      lastName
    }
  }
}
    `;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

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
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, options);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const CreateDraftDocument = gql`
    mutation CreateDraft($data: PostCreateInput!) {
  createDraft(data: $data) {
    id
    createdAt
    updatedAt
    title
    content
    published
    viewCount
    author {
      id
      firstName
      lastName
      email
    }
  }
}
    `;
export type CreateDraftMutationFn = Apollo.MutationFunction<CreateDraftMutation, CreateDraftMutationVariables>;

/**
 * __useCreateDraftMutation__
 *
 * To run a mutation, you first call `useCreateDraftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDraftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDraftMutation, { data, loading, error }] = useCreateDraftMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateDraftMutation(baseOptions?: Apollo.MutationHookOptions<CreateDraftMutation, CreateDraftMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDraftMutation, CreateDraftMutationVariables>(CreateDraftDocument, options);
      }
export type CreateDraftMutationHookResult = ReturnType<typeof useCreateDraftMutation>;
export type CreateDraftMutationResult = Apollo.MutationResult<CreateDraftMutation>;
export type CreateDraftMutationOptions = Apollo.BaseMutationOptions<CreateDraftMutation, CreateDraftMutationVariables>;
export const DeletePostDocument = gql`
    mutation DeletePost($deletePostId: Int!) {
  deletePost(id: $deletePostId) {
    id
    createdAt
    updatedAt
    title
    content
    published
    viewCount
    author {
      id
      firstName
      lastName
      email
    }
  }
}
    `;
export type DeletePostMutationFn = Apollo.MutationFunction<DeletePostMutation, DeletePostMutationVariables>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      deletePostId: // value for 'deletePostId'
 *   },
 * });
 */
export function useDeletePostMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument, options);
      }
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<DeletePostMutation, DeletePostMutationVariables>;
export const IncreasePostViewCountDocument = gql`
    mutation IncreasePostViewCount($incrementPostViewCountId: Int!) {
  incrementPostViewCount(id: $incrementPostViewCountId) {
    id
    createdAt
    updatedAt
    title
    content
    published
    viewCount
    author {
      id
      firstName
      lastName
      email
    }
  }
}
    `;
export type IncreasePostViewCountMutationFn = Apollo.MutationFunction<IncreasePostViewCountMutation, IncreasePostViewCountMutationVariables>;

/**
 * __useIncreasePostViewCountMutation__
 *
 * To run a mutation, you first call `useIncreasePostViewCountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useIncreasePostViewCountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [increasePostViewCountMutation, { data, loading, error }] = useIncreasePostViewCountMutation({
 *   variables: {
 *      incrementPostViewCountId: // value for 'incrementPostViewCountId'
 *   },
 * });
 */
export function useIncreasePostViewCountMutation(baseOptions?: Apollo.MutationHookOptions<IncreasePostViewCountMutation, IncreasePostViewCountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<IncreasePostViewCountMutation, IncreasePostViewCountMutationVariables>(IncreasePostViewCountDocument, options);
      }
export type IncreasePostViewCountMutationHookResult = ReturnType<typeof useIncreasePostViewCountMutation>;
export type IncreasePostViewCountMutationResult = Apollo.MutationResult<IncreasePostViewCountMutation>;
export type IncreasePostViewCountMutationOptions = Apollo.BaseMutationOptions<IncreasePostViewCountMutation, IncreasePostViewCountMutationVariables>;
export const SignInDocument = gql`
    mutation SignIn($loginEmail2: String!, $loginPassword2: String!) {
  login(email: $loginEmail2, password: $loginPassword2) {
    token
    user {
      ...UserDetailsFragment
    }
    errors {
      field
      message
      code
    }
  }
}
    ${UserDetailsFragmentDoc}`;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      loginEmail2: // value for 'loginEmail2'
 *      loginPassword2: // value for 'loginPassword2'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($email: String!, $password: String!, $firstName: String, $lastName: String) {
  signup(
    email: $email
    password: $password
    firstName: $firstName
    lastName: $lastName
  ) {
    token
    user {
      ...UserDetailsFragment
    }
    errors {
      field
      message
      code
    }
  }
}
    ${UserDetailsFragmentDoc}`;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const TogglePublishPostDocument = gql`
    mutation TogglePublishPost($togglePublishPostId: Int!) {
  togglePublishPost(id: $togglePublishPostId) {
    ...PostDetailsFragment
  }
}
    ${PostDetailsFragmentDoc}`;
export type TogglePublishPostMutationFn = Apollo.MutationFunction<TogglePublishPostMutation, TogglePublishPostMutationVariables>;

/**
 * __useTogglePublishPostMutation__
 *
 * To run a mutation, you first call `useTogglePublishPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTogglePublishPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [togglePublishPostMutation, { data, loading, error }] = useTogglePublishPostMutation({
 *   variables: {
 *      togglePublishPostId: // value for 'togglePublishPostId'
 *   },
 * });
 */
export function useTogglePublishPostMutation(baseOptions?: Apollo.MutationHookOptions<TogglePublishPostMutation, TogglePublishPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TogglePublishPostMutation, TogglePublishPostMutationVariables>(TogglePublishPostDocument, options);
      }
export type TogglePublishPostMutationHookResult = ReturnType<typeof useTogglePublishPostMutation>;
export type TogglePublishPostMutationResult = Apollo.MutationResult<TogglePublishPostMutation>;
export type TogglePublishPostMutationOptions = Apollo.BaseMutationOptions<TogglePublishPostMutation, TogglePublishPostMutationVariables>;
export const UpdatePostDocument = gql`
    mutation UpdatePost($updatePostId: Int!, $data: PostUpdateInput!) {
  updatePost(id: $updatePostId, data: $data) {
    id
    createdAt
    updatedAt
    title
    content
    published
    viewCount
    author {
      id
      firstName
      lastName
      email
    }
  }
}
    `;
export type UpdatePostMutationFn = Apollo.MutationFunction<UpdatePostMutation, UpdatePostMutationVariables>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      updatePostId: // value for 'updatePostId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdatePostMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePostMutation, UpdatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument, options);
      }
export type UpdatePostMutationHookResult = ReturnType<typeof useUpdatePostMutation>;
export type UpdatePostMutationResult = Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<UpdatePostMutation, UpdatePostMutationVariables>;
export const AllUsersDocument = gql`
    query AllUsers {
  allUsers {
    ...UserDetailsFragment
  }
}
    ${UserDetailsFragmentDoc}`;

/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
      }
export function useAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
        }
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersLazyQueryHookResult = ReturnType<typeof useAllUsersLazyQuery>;
export type AllUsersQueryResult = Apollo.QueryResult<AllUsersQuery, AllUsersQueryVariables>;
export const CommentsByPostDocument = gql`
    query CommentsByPost($postId: Int!) {
  commentsByPost(postId: $postId) {
    ...CommentDetailsFragment
  }
}
    ${CommentDetailsFragmentDoc}`;

/**
 * __useCommentsByPostQuery__
 *
 * To run a query within a React component, call `useCommentsByPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsByPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsByPostQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useCommentsByPostQuery(baseOptions: Apollo.QueryHookOptions<CommentsByPostQuery, CommentsByPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommentsByPostQuery, CommentsByPostQueryVariables>(CommentsByPostDocument, options);
      }
export function useCommentsByPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentsByPostQuery, CommentsByPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommentsByPostQuery, CommentsByPostQueryVariables>(CommentsByPostDocument, options);
        }
export type CommentsByPostQueryHookResult = ReturnType<typeof useCommentsByPostQuery>;
export type CommentsByPostLazyQueryHookResult = ReturnType<typeof useCommentsByPostLazyQuery>;
export type CommentsByPostQueryResult = Apollo.QueryResult<CommentsByPostQuery, CommentsByPostQueryVariables>;
export const CurrentUserDetailsDocument = gql`
    query CurrentUserDetails {
  me {
    ...UserDetailsFragment
  }
}
    ${UserDetailsFragmentDoc}`;

/**
 * __useCurrentUserDetailsQuery__
 *
 * To run a query within a React component, call `useCurrentUserDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserDetailsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserDetailsQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserDetailsQuery, CurrentUserDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserDetailsQuery, CurrentUserDetailsQueryVariables>(CurrentUserDetailsDocument, options);
      }
export function useCurrentUserDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserDetailsQuery, CurrentUserDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserDetailsQuery, CurrentUserDetailsQueryVariables>(CurrentUserDetailsDocument, options);
        }
export type CurrentUserDetailsQueryHookResult = ReturnType<typeof useCurrentUserDetailsQuery>;
export type CurrentUserDetailsLazyQueryHookResult = ReturnType<typeof useCurrentUserDetailsLazyQuery>;
export type CurrentUserDetailsQueryResult = Apollo.QueryResult<CurrentUserDetailsQuery, CurrentUserDetailsQueryVariables>;
export const DraftsByUserDocument = gql`
    query DraftsByUser($userUniqueInput: UserUniqueInput!) {
  draftsByUser(userUniqueInput: $userUniqueInput) {
    ...PostDetailsFragment
  }
}
    ${PostDetailsFragmentDoc}`;

/**
 * __useDraftsByUserQuery__
 *
 * To run a query within a React component, call `useDraftsByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useDraftsByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDraftsByUserQuery({
 *   variables: {
 *      userUniqueInput: // value for 'userUniqueInput'
 *   },
 * });
 */
export function useDraftsByUserQuery(baseOptions: Apollo.QueryHookOptions<DraftsByUserQuery, DraftsByUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DraftsByUserQuery, DraftsByUserQueryVariables>(DraftsByUserDocument, options);
      }
export function useDraftsByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DraftsByUserQuery, DraftsByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DraftsByUserQuery, DraftsByUserQueryVariables>(DraftsByUserDocument, options);
        }
export type DraftsByUserQueryHookResult = ReturnType<typeof useDraftsByUserQuery>;
export type DraftsByUserLazyQueryHookResult = ReturnType<typeof useDraftsByUserLazyQuery>;
export type DraftsByUserQueryResult = Apollo.QueryResult<DraftsByUserQuery, DraftsByUserQueryVariables>;
export const FeedDocument = gql`
    query Feed($searchString: String, $skip: Int, $take: Int, $orderBy: PostOrderByUpdatedAtInput) {
  feed(searchString: $searchString, skip: $skip, take: $take, orderBy: $orderBy) {
    ...PostDetailsFragment
  }
}
    ${PostDetailsFragmentDoc}`;

/**
 * __useFeedQuery__
 *
 * To run a query within a React component, call `useFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeedQuery({
 *   variables: {
 *      searchString: // value for 'searchString'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useFeedQuery(baseOptions?: Apollo.QueryHookOptions<FeedQuery, FeedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FeedQuery, FeedQueryVariables>(FeedDocument, options);
      }
export function useFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeedQuery, FeedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FeedQuery, FeedQueryVariables>(FeedDocument, options);
        }
export type FeedQueryHookResult = ReturnType<typeof useFeedQuery>;
export type FeedLazyQueryHookResult = ReturnType<typeof useFeedLazyQuery>;
export type FeedQueryResult = Apollo.QueryResult<FeedQuery, FeedQueryVariables>;
export const PostByIdDocument = gql`
    query PostById($postByIdId: Int) {
  postById(id: $postByIdId) {
    ...PostDetailsFragment
  }
}
    ${PostDetailsFragmentDoc}`;

/**
 * __usePostByIdQuery__
 *
 * To run a query within a React component, call `usePostByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostByIdQuery({
 *   variables: {
 *      postByIdId: // value for 'postByIdId'
 *   },
 * });
 */
export function usePostByIdQuery(baseOptions?: Apollo.QueryHookOptions<PostByIdQuery, PostByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostByIdQuery, PostByIdQueryVariables>(PostByIdDocument, options);
      }
export function usePostByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostByIdQuery, PostByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostByIdQuery, PostByIdQueryVariables>(PostByIdDocument, options);
        }
export type PostByIdQueryHookResult = ReturnType<typeof usePostByIdQuery>;
export type PostByIdLazyQueryHookResult = ReturnType<typeof usePostByIdLazyQuery>;
export type PostByIdQueryResult = Apollo.QueryResult<PostByIdQuery, PostByIdQueryVariables>;
export type AuthPayloadKeySpecifier = ('errors' | 'token' | 'user' | AuthPayloadKeySpecifier)[];
export type AuthPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentKeySpecifier = ('author' | 'content' | 'createdAt' | 'id' | 'post' | 'updatedAt' | CommentKeySpecifier)[];
export type CommentFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	post?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ErrorPayloadKeySpecifier = ('code' | 'field' | 'message' | ErrorPayloadKeySpecifier)[];
export type ErrorPayloadFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('changeEmail' | 'changePassword' | 'createComment' | 'createDraft' | 'deleteComment' | 'deletePost' | 'incrementPostViewCount' | 'login' | 'signup' | 'togglePublishPost' | 'updateComment' | 'updatePost' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	changeEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	changePassword?: FieldPolicy<any> | FieldReadFunction<any>,
	createComment?: FieldPolicy<any> | FieldReadFunction<any>,
	createDraft?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteComment?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePost?: FieldPolicy<any> | FieldReadFunction<any>,
	incrementPostViewCount?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	signup?: FieldPolicy<any> | FieldReadFunction<any>,
	togglePublishPost?: FieldPolicy<any> | FieldReadFunction<any>,
	updateComment?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePost?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostKeySpecifier = ('author' | 'commentCount' | 'comments' | 'content' | 'createdAt' | 'id' | 'published' | 'title' | 'updatedAt' | 'viewCount' | PostKeySpecifier)[];
export type PostFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	commentCount?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	viewCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('allUsers' | 'commentsByPost' | 'draftsByUser' | 'feed' | 'me' | 'postById' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	allUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	commentsByPost?: FieldPolicy<any> | FieldReadFunction<any>,
	draftsByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	feed?: FieldPolicy<any> | FieldReadFunction<any>,
	me?: FieldPolicy<any> | FieldReadFunction<any>,
	postById?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('avatar' | 'email' | 'firstName' | 'id' | 'lastName' | 'posts' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	avatar?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	posts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	AuthPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthPayloadKeySpecifier | (() => undefined | AuthPayloadKeySpecifier),
		fields?: AuthPayloadFieldPolicy,
	},
	Comment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentKeySpecifier | (() => undefined | CommentKeySpecifier),
		fields?: CommentFieldPolicy,
	},
	ErrorPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ErrorPayloadKeySpecifier | (() => undefined | ErrorPayloadKeySpecifier),
		fields?: ErrorPayloadFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Post?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostKeySpecifier | (() => undefined | PostKeySpecifier),
		fields?: PostFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;