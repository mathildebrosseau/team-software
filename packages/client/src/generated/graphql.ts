/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Author = {
  __typename?: 'Author';
  _id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  reviews: Array<Review>;
  verified: Scalars['Boolean']['output'];
};

export type Book = {
  __typename?: 'Book';
  _id: Scalars['ID']['output'];
  length: Scalars['Float']['output'];
  reviews?: Maybe<Array<Review>>;
  title: Scalars['String']['output'];
};

export type CreateAuthorInput = {
  /** Author name */
  title: Scalars['String']['input'];
  /** Indicates if the author is verified or not */
  verified: Scalars['Boolean']['input'];
};

export type CreateBookInput = {
  /** Number of pages in the book */
  length: Scalars['Float']['input'];
  /** Title of the book */
  title: Scalars['String']['input'];
};

export type CreateReviewInput = {
  /** Content of the review */
  content: Scalars['String']['input'];
  /** Rating of the review */
  rating: Scalars['Float']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAuthor: Author;
  createBook: Book;
  createReview: Review;
  removeAuthor: Author;
  removeBook: Book;
  removeReview: Review;
  updateAuthor: Author;
  updateBook: Book;
  updateReview: Review;
};


export type MutationCreateAuthorArgs = {
  createAuthorInput: CreateAuthorInput;
};


export type MutationCreateBookArgs = {
  createBookInput: CreateBookInput;
};


export type MutationCreateReviewArgs = {
  createReviewInput: CreateReviewInput;
};


export type MutationRemoveAuthorArgs = {
  authorId: Scalars['String']['input'];
};


export type MutationRemoveBookArgs = {
  bookId: Scalars['String']['input'];
};


export type MutationRemoveReviewArgs = {
  reviewId: Scalars['String']['input'];
};


export type MutationUpdateAuthorArgs = {
  updateAuthorInput: UpdateAuthorInput;
};


export type MutationUpdateBookArgs = {
  updateBookInput: UpdateBookInput;
};


export type MutationUpdateReviewArgs = {
  updateReviewInput: UpdateReviewInput;
};

export type Query = {
  __typename?: 'Query';
  author: Author;
  authors: Array<Author>;
  book: Book;
  books: Array<Book>;
  review: Review;
  reviews: Array<Review>;
};


export type QueryAuthorArgs = {
  authorId: Scalars['String']['input'];
};


export type QueryBookArgs = {
  bookId: Scalars['ID']['input'];
};


export type QueryReviewArgs = {
  reviewId: Scalars['String']['input'];
};

export type Review = {
  __typename?: 'Review';
  _id: Scalars['ID']['output'];
  author: Author;
  book: Book;
  content: Scalars['String']['output'];
  rating: Scalars['Float']['output'];
};

export type UpdateAuthorInput = {
  _id: Scalars['ID']['input'];
  /** Author name */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Indicates if the author is verified or not */
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateBookInput = {
  _id: Scalars['ID']['input'];
  /** Number of pages in the book */
  length?: InputMaybe<Scalars['Float']['input']>;
  /** Title of the book */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateReviewInput = {
  _id: Scalars['ID']['input'];
  /** Content of the review */
  content?: InputMaybe<Scalars['String']['input']>;
  /** Rating of the review */
  rating?: InputMaybe<Scalars['Float']['input']>;
};

export type FindAllBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllBooksQuery = { __typename?: 'Query', books: Array<{ __typename?: 'Book', _id: string, title: string }> };


export const FindAllBooksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindAllBooks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"books"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<FindAllBooksQuery, FindAllBooksQueryVariables>;