/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /**
   * The `BigInt` scalar type represents non-fractional whole numeric values.
   * `BigInt` is not constrained to 32-bit like the `Int` type and thus is a less
   * compatible type.
   */
  BigInt: { input: any; output: any };
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: { input: any; output: any };
  /** The `Decimal` scalar type represents a python Decimal. */
  Decimal: { input: any; output: any };
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: { input: any; output: any };
};

/** An enumeration. */
export enum AccountsUserRoleChoices {
  /** Administrator */
  Admin = "ADMIN",
  /** Client */
  Client = "CLIENT",
  /** Collector */
  Collector = "COLLECTOR",
}

export type AddAdminToRouteInput = {
  adminEmail: Scalars["String"]["input"];
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  routeId: Scalars["String"]["input"];
};

export type AddAdminToRoutePayload = {
  __typename?: "AddAdminToRoutePayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  route?: Maybe<RouteNode>;
};

export type AdminNode = Node & {
  __typename?: "AdminNode";
  collectors: CollectorNodeConnection;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  managers: ManagerNodeConnection;
  routesAsAdmin: RouteNodeConnection;
  user: UserNode;
};

export type AdminNodeCollectorsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  fullName?: InputMaybe<Scalars["String"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AdminNodeManagersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AdminNodeRoutesAsAdminArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AdminNodeConnection = {
  __typename?: "AdminNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AdminNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `AdminNode` and its cursor. */
export type AdminNodeEdge = {
  __typename?: "AdminNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<AdminNode>;
};

export type CityNode = Node & {
  __typename?: "CityNode";
  alternateNames?: Maybe<Scalars["String"]["output"]>;
  displayName: Scalars["String"]["output"];
  featureCode?: Maybe<Scalars["String"]["output"]>;
  geonameId?: Maybe<Scalars["Int"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  latitude?: Maybe<Scalars["Decimal"]["output"]>;
  longitude?: Maybe<Scalars["Decimal"]["output"]>;
  name: Scalars["String"]["output"];
  nameAscii: Scalars["String"]["output"];
  population?: Maybe<Scalars["BigInt"]["output"]>;
  region?: Maybe<RegionNode>;
  routes: RouteNodeConnection;
  searchNames: Scalars["String"]["output"];
  slug: Scalars["String"]["output"];
  timezone?: Maybe<Scalars["String"]["output"]>;
};

export type CityNodeRoutesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CityNodeConnection = {
  __typename?: "CityNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CityNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CityNode` and its cursor. */
export type CityNodeEdge = {
  __typename?: "CityNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<CityNode>;
};

export type ClientNode = Node & {
  __typename?: "ClientNode";
  addressLine1: Scalars["String"]["output"];
  addressLine2?: Maybe<Scalars["String"]["output"]>;
  alias?: Maybe<Scalars["String"]["output"]>;
  collector: CollectorNode;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  identityDocument: Scalars["String"]["output"];
  isActive: Scalars["Boolean"]["output"];
  neighborhood: Scalars["String"]["output"];
  user: UserNode;
};

export type ClientNodeConnection = {
  __typename?: "ClientNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ClientNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ClientNode` and its cursor. */
export type ClientNodeEdge = {
  __typename?: "ClientNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ClientNode>;
};

export type CollectorNode = Node & {
  __typename?: "CollectorNode";
  admin: AdminNode;
  clients: ClientNodeConnection;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isActive: Scalars["Boolean"]["output"];
  routesAsCollector: RouteNodeConnection;
  user: UserNode;
};

export type CollectorNodeClientsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CollectorNodeRoutesAsCollectorArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CollectorNodeConnection = {
  __typename?: "CollectorNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CollectorNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars["Int"]["output"]>;
};

/** A Relay edge containing a `CollectorNode` and its cursor. */
export type CollectorNodeEdge = {
  __typename?: "CollectorNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<CollectorNode>;
};

export type CreateAdminInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  fullName: Scalars["String"]["input"];
  invitationCode: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  phoneNumber1: Scalars["String"]["input"];
  phoneNumber2?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateAdminPayload = {
  __typename?: "CreateAdminPayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<UserNode>;
};

export type CreateClientInput = {
  addressLine1: Scalars["String"]["input"];
  addressLine2?: InputMaybe<Scalars["String"]["input"]>;
  alias?: InputMaybe<Scalars["String"]["input"]>;
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  fullName: Scalars["String"]["input"];
  identityDocument: Scalars["String"]["input"];
  neighborhood: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  phoneNumber1: Scalars["String"]["input"];
  phoneNumber2?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateClientPayload = {
  __typename?: "CreateClientPayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<UserNode>;
};

export type CreateCollectorInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  fullName: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  phoneNumber1: Scalars["String"]["input"];
  phoneNumber2?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateCollectorPayload = {
  __typename?: "CreateCollectorPayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  collector?: Maybe<CollectorNode>;
};

export type CreateManagerInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  fullName: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  phoneNumber1: Scalars["String"]["input"];
  phoneNumber2?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateManagerPayload = {
  __typename?: "CreateManagerPayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  manager?: Maybe<ManagerNode>;
};

export type CreateRouteInput = {
  cityId: Scalars["String"]["input"];
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  collectorId: Scalars["String"]["input"];
  initialValue: Scalars["Decimal"]["input"];
  managerId: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
};

export type CreateRoutePayload = {
  __typename?: "CreateRoutePayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  route?: Maybe<RouteNode>;
};

export type EditCollectorInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  fullName: Scalars["String"]["input"];
  isActive: Scalars["Boolean"]["input"];
  phoneNumber1: Scalars["String"]["input"];
  phoneNumber2?: InputMaybe<Scalars["String"]["input"]>;
  userId: Scalars["String"]["input"];
};

export type EditCollectorPayload = {
  __typename?: "EditCollectorPayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<UserNode>;
};

export type EditRouteInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  collectorId: Scalars["String"]["input"];
  managerId: Scalars["String"]["input"];
  routeId: Scalars["String"]["input"];
};

export type EditRoutePayload = {
  __typename?: "EditRoutePayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  route?: Maybe<RouteNode>;
};

export type ManagerNode = Node & {
  __typename?: "ManagerNode";
  admin: AdminNode;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isActive: Scalars["Boolean"]["output"];
  routesAsManager: RouteNodeConnection;
  user: UserNode;
};

export type ManagerNodeRoutesAsManagerArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ManagerNodeConnection = {
  __typename?: "ManagerNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ManagerNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ManagerNode` and its cursor. */
export type ManagerNodeEdge = {
  __typename?: "ManagerNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ManagerNode>;
};

export type Mutation = {
  __typename?: "Mutation";
  addAdminToRoute?: Maybe<AddAdminToRoutePayload>;
  createAdmin?: Maybe<CreateAdminPayload>;
  createClient?: Maybe<CreateClientPayload>;
  createCollector?: Maybe<CreateCollectorPayload>;
  createManager?: Maybe<CreateManagerPayload>;
  createRoute?: Maybe<CreateRoutePayload>;
  editCollector?: Maybe<EditCollectorPayload>;
  editRoute?: Maybe<EditRoutePayload>;
  refreshToken?: Maybe<Refresh>;
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  verifyToken?: Maybe<Verify>;
};

export type MutationAddAdminToRouteArgs = {
  input: AddAdminToRouteInput;
};

export type MutationCreateAdminArgs = {
  input: CreateAdminInput;
};

export type MutationCreateClientArgs = {
  input: CreateClientInput;
};

export type MutationCreateCollectorArgs = {
  input: CreateCollectorInput;
};

export type MutationCreateManagerArgs = {
  input: CreateManagerInput;
};

export type MutationCreateRouteArgs = {
  input: CreateRouteInput;
};

export type MutationEditCollectorArgs = {
  input: EditCollectorInput;
};

export type MutationEditRouteArgs = {
  input: EditRouteInput;
};

export type MutationRefreshTokenArgs = {
  token?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationTokenAuthArgs = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationVerifyTokenArgs = {
  token?: InputMaybe<Scalars["String"]["input"]>;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object */
  id: Scalars["ID"]["output"];
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: "ObtainJSONWebToken";
  payload: Scalars["GenericScalar"]["output"];
  refreshExpiresIn: Scalars["Int"]["output"];
  token: Scalars["String"]["output"];
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]["output"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"]["output"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"]["output"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]["output"]>;
};

export type Query = {
  __typename?: "Query";
  cities?: Maybe<CityNodeConnection>;
  city?: Maybe<CityNode>;
  clientsByAdmin?: Maybe<ClientNodeConnection>;
  collectorsByAdmin?: Maybe<CollectorNodeConnection>;
  managersByAdmin?: Maybe<ManagerNodeConnection>;
  me?: Maybe<UserNode>;
  region?: Maybe<RegionNode>;
  regions?: Maybe<RegionNodeConnection>;
  route?: Maybe<RouteNode>;
  routesByAdmin?: Maybe<RouteNodeConnection>;
  routesByCollector?: Maybe<RouteNodeConnection>;
  transactions?: Maybe<TransactionNodeConnection>;
};

export type QueryCitiesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  searchNames?: InputMaybe<Scalars["String"]["input"]>;
  searchNames_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryClientsByAdminArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryCollectorsByAdminArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  fullName?: InputMaybe<Scalars["String"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryManagersByAdminArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryRegionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryRouteArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryRoutesByAdminArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryRoutesByCollectorArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryTransactionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  routeId?: InputMaybe<Scalars["String"]["input"]>;
};

export type Refresh = {
  __typename?: "Refresh";
  payload: Scalars["GenericScalar"]["output"];
  refreshExpiresIn: Scalars["Int"]["output"];
  token: Scalars["String"]["output"];
};

export type RegionNode = Node & {
  __typename?: "RegionNode";
  alternateNames?: Maybe<Scalars["String"]["output"]>;
  citySet: CityNodeConnection;
  displayName: Scalars["String"]["output"];
  geonameCode?: Maybe<Scalars["String"]["output"]>;
  geonameId?: Maybe<Scalars["Int"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  nameAscii: Scalars["String"]["output"];
  slug: Scalars["String"]["output"];
};

export type RegionNodeCitySetArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  searchNames?: InputMaybe<Scalars["String"]["input"]>;
  searchNames_Icontains?: InputMaybe<Scalars["String"]["input"]>;
};

export type RegionNodeConnection = {
  __typename?: "RegionNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<RegionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `RegionNode` and its cursor. */
export type RegionNodeEdge = {
  __typename?: "RegionNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<RegionNode>;
};

export type RouteNode = Node & {
  __typename?: "RouteNode";
  administrators: AdminNodeConnection;
  city: CityNode;
  collector?: Maybe<CollectorNode>;
  createdAt: Scalars["DateTime"]["output"];
  currentBalance?: Maybe<Scalars["Decimal"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  manager?: Maybe<ManagerNode>;
  name: Scalars["String"]["output"];
  startingBalance?: Maybe<Scalars["Decimal"]["output"]>;
  transactions?: Maybe<Array<Maybe<TransactionNode>>>;
  updatedAt: Scalars["DateTime"]["output"];
};

export type RouteNodeAdministratorsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type RouteNodeConnection = {
  __typename?: "RouteNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<RouteNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `RouteNode` and its cursor. */
export type RouteNodeEdge = {
  __typename?: "RouteNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<RouteNode>;
};

export type TransactionNode = Node & {
  __typename?: "TransactionNode";
  amount: Scalars["Decimal"]["output"];
  associatedProfile?: Maybe<UserNode>;
  createdAt: Scalars["DateTime"]["output"];
  description: Scalars["String"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  maker?: Maybe<UserNode>;
  objectId: Scalars["Int"]["output"];
  transactionType: TransactionsTransactionTransactionTypeChoices;
  updatedAt: Scalars["DateTime"]["output"];
  voided: Scalars["Boolean"]["output"];
};

export type TransactionNodeConnection = {
  __typename?: "TransactionNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TransactionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `TransactionNode` and its cursor. */
export type TransactionNodeEdge = {
  __typename?: "TransactionNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<TransactionNode>;
};

/** An enumeration. */
export enum TransactionsTransactionTransactionTypeChoices {
  /** Adjustment */
  Adjustment = "ADJUSTMENT",
  /** Cash out */
  CashOut = "CASH_OUT",
  /** Expense */
  Expense = "EXPENSE",
  /** Loan disbursement */
  LoanDisbursement = "LOAN_DISBURSEMENT",
  /** Loan payment */
  LoanPayment = "LOAN_PAYMENT",
  /** Route initial */
  RouteInitial = "ROUTE_INITIAL",
  /** Route refund */
  RouteRefund = "ROUTE_REFUND",
}

export type UserNode = Node & {
  __typename?: "UserNode";
  adminProfile?: Maybe<AdminNode>;
  clientProfile?: Maybe<ClientNode>;
  collectorProfile?: Maybe<CollectorNode>;
  dateJoined: Scalars["DateTime"]["output"];
  email: Scalars["String"]["output"];
  fullName: Scalars["String"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isActive: Scalars["Boolean"]["output"];
  isStaff: Scalars["Boolean"]["output"];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars["Boolean"]["output"];
  lastLogin?: Maybe<Scalars["DateTime"]["output"]>;
  managerProfile?: Maybe<ManagerNode>;
  password: Scalars["String"]["output"];
  phoneNumber1: Scalars["String"]["output"];
  phoneNumber2?: Maybe<Scalars["String"]["output"]>;
  role: AccountsUserRoleChoices;
  transactionsAssociated: TransactionNodeConnection;
  transactionsMade: TransactionNodeConnection;
  updatedAt: Scalars["DateTime"]["output"];
};

export type UserNodeTransactionsAssociatedArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  routeId?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserNodeTransactionsMadeArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  routeId?: InputMaybe<Scalars["String"]["input"]>;
};

export type Verify = {
  __typename?: "Verify";
  payload: Scalars["GenericScalar"]["output"];
};

export type CreateAdminMutationMutationVariables = Exact<{
  email: Scalars["String"]["input"];
  fullName: Scalars["String"]["input"];
  phoneNumber1: Scalars["String"]["input"];
  phoneNumber2: Scalars["String"]["input"];
  invitationCode: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}>;

export type CreateAdminMutationMutation = {
  __typename?: "Mutation";
  createAdmin?: {
    __typename?: "CreateAdminPayload";
    user?: { __typename?: "UserNode"; id: string } | null;
  } | null;
};

export type LoginMutationMutationVariables = Exact<{
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}>;

export type LoginMutationMutation = {
  __typename?: "Mutation";
  tokenAuth?: {
    __typename?: "ObtainJSONWebToken";
    token: string;
    payload: any;
    refreshExpiresIn: number;
  } | null;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: "Query";
  me?: {
    __typename?: "UserNode";
    id: string;
    email: string;
    fullName: string;
    isActive: boolean;
  } | null;
};

export type ClientsByAdminQueryVariables = Exact<{ [key: string]: never }>;

export type ClientsByAdminQuery = {
  __typename?: "Query";
  clientsByAdmin?: {
    __typename?: "ClientNodeConnection";
    edges: Array<{
      __typename?: "ClientNodeEdge";
      node?: {
        __typename?: "ClientNode";
        id: string;
        addressLine1: string;
        alias?: string | null;
        isActive: boolean;
        user: { __typename?: "UserNode"; id: string; fullName: string };
      } | null;
    } | null>;
    pageInfo: {
      __typename?: "PageInfo";
      startCursor?: string | null;
      endCursor?: string | null;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
  } | null;
};

export type CreateCollectorMutationMutationVariables = Exact<{
  email: Scalars["String"]["input"];
  fullName: Scalars["String"]["input"];
  phoneNumber1: Scalars["String"]["input"];
  phoneNumber2?: InputMaybe<Scalars["String"]["input"]>;
  password: Scalars["String"]["input"];
}>;

export type CreateCollectorMutationMutation = {
  __typename?: "Mutation";
  createCollector?: {
    __typename?: "CreateCollectorPayload";
    collector?: { __typename?: "CollectorNode"; id: string } | null;
  } | null;
};

export type EditCollectorMutationVariables = Exact<{
  userId: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  fullName: Scalars["String"]["input"];
  phoneNumber1: Scalars["String"]["input"];
  phoneNumber2?: InputMaybe<Scalars["String"]["input"]>;
  isActive: Scalars["Boolean"]["input"];
}>;

export type EditCollectorMutation = {
  __typename?: "Mutation";
  editCollector?: {
    __typename?: "EditCollectorPayload";
    user?: {
      __typename?: "UserNode";
      id: string;
      collectorProfile?: { __typename?: "CollectorNode"; id: string } | null;
    } | null;
  } | null;
};

export type CollectorByAdminQueryQueryVariables = Exact<{
  fullName?: InputMaybe<Scalars["String"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
}>;

export type CollectorByAdminQueryQuery = {
  __typename?: "Query";
  collectorsByAdmin?: {
    __typename?: "CollectorNodeConnection";
    totalCount?: number | null;
    pageInfo: {
      __typename?: "PageInfo";
      startCursor?: string | null;
      endCursor?: string | null;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
    edges: Array<{
      __typename?: "CollectorNodeEdge";
      node?: {
        __typename?: "CollectorNode";
        id: string;
        isActive: boolean;
        user: {
          __typename?: "UserNode";
          email: string;
          id: string;
          fullName: string;
          phoneNumber1: string;
          phoneNumber2?: string | null;
        };
      } | null;
    } | null>;
  } | null;
};

export type CreateManagerMutationVariables = Exact<{
  input: CreateManagerInput;
}>;

export type CreateManagerMutation = {
  __typename?: "Mutation";
  createManager?: {
    __typename?: "CreateManagerPayload";
    manager?: {
      __typename?: "ManagerNode";
      id: string;
      isActive: boolean;
      user: {
        __typename?: "UserNode";
        id: string;
        email: string;
        fullName: string;
        phoneNumber1: string;
      };
    } | null;
  } | null;
};

export type ManagersByAdminQueryVariables = Exact<{ [key: string]: never }>;

export type ManagersByAdminQuery = {
  __typename?: "Query";
  managersByAdmin?: {
    __typename?: "ManagerNodeConnection";
    edges: Array<{
      __typename?: "ManagerNodeEdge";
      node?: {
        __typename?: "ManagerNode";
        id: string;
        isActive: boolean;
        user: {
          __typename?: "UserNode";
          id: string;
          email: string;
          fullName: string;
          phoneNumber1: string;
        };
      } | null;
    } | null>;
    pageInfo: {
      __typename?: "PageInfo";
      startCursor?: string | null;
      endCursor?: string | null;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
  } | null;
};

export type AddAdminToRouteMutationMutationVariables = Exact<{
  input: AddAdminToRouteInput;
}>;

export type AddAdminToRouteMutationMutation = {
  __typename?: "Mutation";
  addAdminToRoute?: {
    __typename?: "AddAdminToRoutePayload";
    route?: {
      __typename?: "RouteNode";
      id: string;
      name: string;
      startingBalance?: any | null;
      createdAt: any;
      updatedAt: any;
      city: { __typename?: "CityNode"; id: string; name: string };
      administrators: {
        __typename?: "AdminNodeConnection";
        edges: Array<{
          __typename?: "AdminNodeEdge";
          node?: {
            __typename?: "AdminNode";
            id: string;
            user: {
              __typename?: "UserNode";
              id: string;
              fullName: string;
              isActive: boolean;
            };
          } | null;
        } | null>;
      };
      collector?: {
        __typename?: "CollectorNode";
        id: string;
        user: {
          __typename?: "UserNode";
          id: string;
          fullName: string;
          isActive: boolean;
        };
      } | null;
    } | null;
  } | null;
};

export type CreateMutationMutationMutationVariables = Exact<{
  input: CreateRouteInput;
}>;

export type CreateMutationMutationMutation = {
  __typename?: "Mutation";
  createRoute?: {
    __typename?: "CreateRoutePayload";
    route?: { __typename?: "RouteNode"; id: string } | null;
  } | null;
};

export type CitiesQueryVariables = Exact<{
  searchNames_Icontains?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type CitiesQuery = {
  __typename?: "Query";
  cities?: {
    __typename?: "CityNodeConnection";
    edges: Array<{
      __typename?: "CityNodeEdge";
      node?: {
        __typename?: "CityNode";
        id: string;
        name: string;
        region?: { __typename?: "RegionNode"; name: string } | null;
      } | null;
    } | null>;
  } | null;
};

export type RouteByIdQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type RouteByIdQuery = {
  __typename?: "Query";
  route?: {
    __typename?: "RouteNode";
    id: string;
    name: string;
    startingBalance?: any | null;
    createdAt: any;
    updatedAt: any;
    city: { __typename?: "CityNode"; id: string; name: string };
    administrators: {
      __typename?: "AdminNodeConnection";
      edges: Array<{
        __typename?: "AdminNodeEdge";
        node?: {
          __typename?: "AdminNode";
          id: string;
          user: {
            __typename?: "UserNode";
            id: string;
            fullName: string;
            isActive: boolean;
          };
        } | null;
      } | null>;
    };
    collector?: {
      __typename?: "CollectorNode";
      id: string;
      user: {
        __typename?: "UserNode";
        id: string;
        fullName: string;
        isActive: boolean;
      };
    } | null;
  } | null;
};

export type RoutesByAdminQueryQueryVariables = Exact<{ [key: string]: never }>;

export type RoutesByAdminQueryQuery = {
  __typename?: "Query";
  routesByAdmin?: {
    __typename?: "RouteNodeConnection";
    pageInfo: {
      __typename?: "PageInfo";
      startCursor?: string | null;
      endCursor?: string | null;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
    edges: Array<{
      __typename?: "RouteNodeEdge";
      node?: {
        __typename?: "RouteNode";
        id: string;
        name: string;
        startingBalance?: any | null;
        createdAt: any;
        updatedAt: any;
        city: { __typename?: "CityNode"; id: string; name: string };
        administrators: {
          __typename?: "AdminNodeConnection";
          edges: Array<{
            __typename?: "AdminNodeEdge";
            node?: {
              __typename?: "AdminNode";
              id: string;
              user: { __typename?: "UserNode"; id: string; fullName: string };
            } | null;
          } | null>;
        };
        collector?: {
          __typename?: "CollectorNode";
          id: string;
          user: { __typename?: "UserNode"; id: string; fullName: string };
        } | null;
      } | null;
    } | null>;
  } | null;
};

export type TransactionsByRouteIdQueryVariables = Exact<{
  routeId?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type TransactionsByRouteIdQuery = {
  __typename?: "Query";
  transactions?: {
    __typename?: "TransactionNodeConnection";
    edges: Array<{
      __typename?: "TransactionNodeEdge";
      node?: {
        __typename?: "TransactionNode";
        id: string;
        description: string;
        transactionType: TransactionsTransactionTransactionTypeChoices;
        amount: any;
        createdAt: any;
        updatedAt: any;
      } | null;
    } | null>;
    pageInfo: {
      __typename?: "PageInfo";
      startCursor?: string | null;
      endCursor?: string | null;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
  } | null;
};

export const CreateAdminMutationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateAdminMutation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "email" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "fullName" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "phoneNumber1" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "phoneNumber2" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "invitationCode" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "password" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createAdmin" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "email" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "email" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "fullName" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "fullName" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "phoneNumber1" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "phoneNumber1" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "phoneNumber2" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "phoneNumber2" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "invitationCode" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "invitationCode" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "password" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "password" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateAdminMutationMutation,
  CreateAdminMutationMutationVariables
>;
export const LoginMutationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "LoginMutation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "email" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "password" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "tokenAuth" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "email" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "email" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "password" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "password" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "token" } },
                { kind: "Field", name: { kind: "Name", value: "payload" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "refreshExpiresIn" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  LoginMutationMutation,
  LoginMutationMutationVariables
>;
export const MeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Me" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "me" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "fullName" } },
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const ClientsByAdminDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "ClientsByAdmin" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "clientsByAdmin" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "user" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "fullName" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "addressLine1" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "alias" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isActive" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pageInfo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "startCursor" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "endCursor" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "hasNextPage" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "hasPreviousPage" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ClientsByAdminQuery, ClientsByAdminQueryVariables>;
export const CreateCollectorMutationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateCollectorMutation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "email" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "fullName" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "phoneNumber1" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "phoneNumber2" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "password" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createCollector" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "email" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "email" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "fullName" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "fullName" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "phoneNumber1" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "phoneNumber1" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "phoneNumber2" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "phoneNumber2" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "password" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "password" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "collector" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateCollectorMutationMutation,
  CreateCollectorMutationMutationVariables
>;
export const EditCollectorDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "EditCollector" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "email" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "fullName" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "phoneNumber1" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "phoneNumber2" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "isActive" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "Boolean" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "editCollector" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "userId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "userId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "email" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "email" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "fullName" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "fullName" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "phoneNumber1" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "phoneNumber1" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "phoneNumber2" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "phoneNumber2" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "isActive" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "isActive" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "collectorProfile" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  EditCollectorMutation,
  EditCollectorMutationVariables
>;
export const CollectorByAdminQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "CollectorByAdminQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "fullName" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "isActive" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "collectorsByAdmin" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "fullName" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "fullName" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "isActive" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "isActive" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pageInfo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "startCursor" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "endCursor" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "hasNextPage" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "hasPreviousPage" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "totalCount" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isActive" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "user" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "email" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "fullName" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "phoneNumber1",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "phoneNumber2",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CollectorByAdminQueryQuery,
  CollectorByAdminQueryQueryVariables
>;
export const CreateManagerDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateManager" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CreateManagerInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createManager" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "manager" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isActive" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "user" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "email" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fullName" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "phoneNumber1" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateManagerMutation,
  CreateManagerMutationVariables
>;
export const ManagersByAdminDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "ManagersByAdmin" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "managersByAdmin" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isActive" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "user" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "email" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "fullName" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "phoneNumber1",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pageInfo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "startCursor" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "endCursor" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "hasNextPage" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "hasPreviousPage" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ManagersByAdminQuery,
  ManagersByAdminQueryVariables
>;
export const AddAdminToRouteMutationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "addAdminToRouteMutation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AddAdminToRouteInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "addAdminToRoute" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "route" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "startingBalance" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "city" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "administrators" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "edges" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "node" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "user" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "fullName",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "isActive",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "collector" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "user" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "fullName" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "isActive" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AddAdminToRouteMutationMutation,
  AddAdminToRouteMutationMutationVariables
>;
export const CreateMutationMutationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "createMutationMutation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CreateRouteInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createRoute" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "route" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateMutationMutationMutation,
  CreateMutationMutationMutationVariables
>;
export const CitiesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Cities" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "searchNames_Icontains" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "cities" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "searchNames_Icontains" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "searchNames_Icontains" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "region" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "name" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CitiesQuery, CitiesQueryVariables>;
export const RouteByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "RouteById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "route" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "startingBalance" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "city" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "administrators" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "edges" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "node" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "user" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "fullName",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "isActive",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "collector" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "user" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "fullName" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isActive" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RouteByIdQuery, RouteByIdQueryVariables>;
export const RoutesByAdminQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "RoutesByAdminQuery" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "routesByAdmin" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pageInfo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "startCursor" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "endCursor" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "hasNextPage" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "hasPreviousPage" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "city" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "name" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "startingBalance" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "administrators" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "edges" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "node" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "id",
                                                },
                                              },
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "user",
                                                },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "id",
                                                      },
                                                    },
                                                    {
                                                      kind: "Field",
                                                      name: {
                                                        kind: "Name",
                                                        value: "fullName",
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "collector" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "user" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "fullName",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RoutesByAdminQueryQuery,
  RoutesByAdminQueryQueryVariables
>;
export const TransactionsByRouteIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "TransactionsByRouteId" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "routeId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "transactions" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "routeId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "routeId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "description" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "transactionType" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pageInfo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "startCursor" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "endCursor" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "hasNextPage" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "hasPreviousPage" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  TransactionsByRouteIdQuery,
  TransactionsByRouteIdQueryVariables
>;
