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
};

export type Message = {
  __typename?: 'Message';
  content?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
};

export type MessageInput = {
  content: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  surname: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createMessage?: Maybe<Message>;
  deleteMessage?: Maybe<Scalars['String']>;
};


export type MutationCreateMessageArgs = {
  captcha: Scalars['String'];
  message: MessageInput;
};


export type MutationDeleteMessageArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  message?: Maybe<Message>;
  messages?: Maybe<Array<Maybe<Message>>>;
};


export type QueryMessageArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type MessageFragment = { __typename?: 'Message', content?: string | null, name?: string | null, surname?: string | null, email?: string | null };

export type CreateMessageMutationVariables = Exact<{
  message: MessageInput;
  captcha: Scalars['String'];
}>;


export type CreateMessageMutation = { __typename?: 'Mutation', createMessage?: { __typename?: 'Message', content?: string | null, name?: string | null, surname?: string | null, email?: string | null } | null };


      export type PossibleTypesResultData = {
  "possibleTypes": {}
};
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    