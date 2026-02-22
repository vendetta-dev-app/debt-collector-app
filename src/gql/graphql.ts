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
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: { input: any; output: any };
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
  /** Manager */
  Manager = "MANAGER",
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

export type ApproveLoanInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  loanId: Scalars["String"]["input"];
};

/**
 * Approves a pending loan and creates disbursement transactions.
 * Only admins can approve loans.
 */
export type ApproveLoanPayload = {
  __typename?: "ApproveLoanPayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  loan?: Maybe<LoanNode>;
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
  loans: LoanNodeConnection;
  neighborhood: Scalars["String"]["output"];
  user: UserNode;
};

export type ClientNodeLoansArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
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
  loans: LoanNodeConnection;
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

export type CollectorNodeLoansArgs = {
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
  collectorId: Scalars["String"]["input"];
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

export type CreateLoanInput = {
  amount: Scalars["Decimal"]["input"];
  clientId: Scalars["String"]["input"];
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Due date in YYYY-MM-DD format */
  dueDate?: InputMaybe<Scalars["String"]["input"]>;
  interestRate: Scalars["Decimal"]["input"];
  routeId: Scalars["String"]["input"];
};

/**
 * Creates a new loan request in PENDING status.
 * The loan must be approved by an admin before disbursement.
 */
export type CreateLoanPayload = {
  __typename?: "CreateLoanPayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  loan?: Maybe<LoanNode>;
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

export type CreatePaymentInput = {
  amount: Scalars["Decimal"]["input"];
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  loanId: Scalars["String"]["input"];
  notes?: InputMaybe<Scalars["String"]["input"]>;
  paymentDate: Scalars["String"]["input"];
  paymentMethod: Scalars["String"]["input"];
};

export type CreatePaymentPayload = {
  __typename?: "CreatePaymentPayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  loan?: Maybe<LoanNode>;
  payment?: Maybe<PaymentNode>;
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

export type LoanNode = Node & {
  __typename?: "LoanNode";
  amount: Scalars["Decimal"]["output"];
  approvedAt?: Maybe<Scalars["DateTime"]["output"]>;
  approvedBy?: Maybe<UserNode>;
  client: ClientNode;
  collector: CollectorNode;
  createdAt: Scalars["DateTime"]["output"];
  daysOverdue?: Maybe<Scalars["Int"]["output"]>;
  dueDate?: Maybe<Scalars["Date"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  /** Cantidad de cuotas (mínimo 1, máximo 90) */
  installments: Scalars["Int"]["output"];
  /** Tasa de interés permitida: 0%, 10% o 20% */
  interestRate: LoansLoanInterestRateChoices;
  isApproved: Scalars["Boolean"]["output"];
  isFullyPaid?: Maybe<Scalars["Boolean"]["output"]>;
  isOverdue?: Maybe<Scalars["Boolean"]["output"]>;
  isRejected: Scalars["Boolean"]["output"];
  /** Frecuencia de pagos: Diaria, Semanal o Mensual */
  paymentFrequency: LoansLoanPaymentFrequencyChoices;
  payments?: Maybe<Array<Maybe<PaymentNode>>>;
  pendingBalance?: Maybe<Scalars["Decimal"]["output"]>;
  rejectionReason: Scalars["String"]["output"];
  route: RouteNode;
  status?: Maybe<Scalars["String"]["output"]>;
  totalAmount?: Maybe<Scalars["Decimal"]["output"]>;
  totalPaid?: Maybe<Scalars["Decimal"]["output"]>;
  transactions?: Maybe<Array<Maybe<TransactionNode>>>;
  updatedAt: Scalars["DateTime"]["output"];
};

export type LoanNodeApprovedByArgs = {
  id: Scalars["ID"]["input"];
};

export type LoanNodeConnection = {
  __typename?: "LoanNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LoanNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `LoanNode` and its cursor. */
export type LoanNodeEdge = {
  __typename?: "LoanNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<LoanNode>;
};

/** An enumeration. */
export enum LoansLoanInterestRateChoices {
  /** 0% */
  A_0 = "A_0",
  /** 10% */
  A_10 = "A_10",
  /** 20% */
  A_20 = "A_20",
}

/** An enumeration. */
export enum LoansLoanPaymentFrequencyChoices {
  /** Diaria */
  Daily = "DAILY",
  /** Mensual */
  Monthly = "MONTHLY",
  /** Semanal */
  Weekly = "WEEKLY",
}

/** An enumeration. */
export enum LoansPaymentPaymentMethodChoices {
  /** Efectivo */
  Cash = "CASH",
  /** Otro */
  Other = "OTHER",
  /** Transferencia */
  Transfer = "TRANSFER",
}

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
  /**
   * Approves a pending loan and creates disbursement transactions.
   * Only admins can approve loans.
   */
  approveLoan?: Maybe<ApproveLoanPayload>;
  createAdmin?: Maybe<CreateAdminPayload>;
  createClient?: Maybe<CreateClientPayload>;
  createCollector?: Maybe<CreateCollectorPayload>;
  /**
   * Creates a new loan request in PENDING status.
   * The loan must be approved by an admin before disbursement.
   */
  createLoan?: Maybe<CreateLoanPayload>;
  createManager?: Maybe<CreateManagerPayload>;
  createPayment?: Maybe<CreatePaymentPayload>;
  createRoute?: Maybe<CreateRoutePayload>;
  editCollector?: Maybe<EditCollectorPayload>;
  editRoute?: Maybe<EditRoutePayload>;
  refreshToken?: Maybe<Refresh>;
  /**
   * Rejects a pending loan request.
   * Only admins can reject loans.
   */
  rejectLoan?: Maybe<RejectLoanPayload>;
  tokenAuth?: Maybe<ObtainJsonWebTokenPayload>;
  updateClient?: Maybe<UpdateClientPayload>;
  verifyToken?: Maybe<Verify>;
  /**
   * Voids a payment and creates reversal transaction on the route.
   * Only admins can void payments.
   */
  voidPayment?: Maybe<VoidPaymentPayload>;
};

export type MutationAddAdminToRouteArgs = {
  input: AddAdminToRouteInput;
};

export type MutationApproveLoanArgs = {
  input: ApproveLoanInput;
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

export type MutationCreateLoanArgs = {
  input: CreateLoanInput;
};

export type MutationCreateManagerArgs = {
  input: CreateManagerInput;
};

export type MutationCreatePaymentArgs = {
  input: CreatePaymentInput;
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

export type MutationRejectLoanArgs = {
  input: RejectLoanInput;
};

export type MutationTokenAuthArgs = {
  input: ObtainJsonWebTokenInput;
};

export type MutationUpdateClientArgs = {
  input: UpdateClientInput;
};

export type MutationVerifyTokenArgs = {
  token?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationVoidPaymentArgs = {
  input: VoidPaymentInput;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object */
  id: Scalars["ID"]["output"];
};

export type ObtainJsonWebTokenInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type ObtainJsonWebTokenPayload = {
  __typename?: "ObtainJSONWebTokenPayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  payload: Scalars["GenericScalar"]["output"];
  refreshExpiresIn: Scalars["Int"]["output"];
  token: Scalars["String"]["output"];
  user?: Maybe<UserNode>;
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

export type PaymentNode = Node & {
  __typename?: "PaymentNode";
  amount: Scalars["Decimal"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isVoided?: Maybe<Scalars["Boolean"]["output"]>;
  loan: LoanNode;
  notes: Scalars["String"]["output"];
  paymentDate: Scalars["Date"]["output"];
  paymentMethod: LoansPaymentPaymentMethodChoices;
  transactions?: Maybe<Array<Maybe<TransactionNode>>>;
  updatedAt: Scalars["DateTime"]["output"];
  voidReason: Scalars["String"]["output"];
  voidedAt?: Maybe<Scalars["DateTime"]["output"]>;
  voidedBy?: Maybe<UserNode>;
};

export type PaymentNodeConnection = {
  __typename?: "PaymentNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PaymentNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `PaymentNode` and its cursor. */
export type PaymentNodeEdge = {
  __typename?: "PaymentNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<PaymentNode>;
};

export type Query = {
  __typename?: "Query";
  cities?: Maybe<CityNodeConnection>;
  city?: Maybe<CityNode>;
  clientsByAdmin?: Maybe<ClientNodeConnection>;
  collectorsByAdmin?: Maybe<CollectorNodeConnection>;
  loan?: Maybe<LoanNode>;
  loansByClient?: Maybe<LoanNodeConnection>;
  loansByCollector?: Maybe<LoanNodeConnection>;
  loansByRoute?: Maybe<LoanNodeConnection>;
  managersByAdmin?: Maybe<ManagerNodeConnection>;
  me?: Maybe<UserNode>;
  /** Loans past their due date */
  overdueLoans?: Maybe<LoanNodeConnection>;
  payment?: Maybe<PaymentNode>;
  paymentsByLoan?: Maybe<PaymentNodeConnection>;
  /** Loans pending approval */
  pendingLoans?: Maybe<LoanNodeConnection>;
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

export type QueryLoanArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryLoansByClientArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  clientId: Scalars["String"]["input"];
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryLoansByCollectorArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  collectorId?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryLoansByRouteArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  routeId: Scalars["String"]["input"];
};

export type QueryManagersByAdminArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryOverdueLoansArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryPaymentArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryPaymentsByLoanArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  loanId: Scalars["String"]["input"];
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryPendingLoansArgs = {
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
  id: Scalars["String"]["input"];
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

export type RejectLoanInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  loanId: Scalars["String"]["input"];
  /** Reason for rejection */
  reason: Scalars["String"]["input"];
};

/**
 * Rejects a pending loan request.
 * Only admins can reject loans.
 */
export type RejectLoanPayload = {
  __typename?: "RejectLoanPayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  loan?: Maybe<LoanNode>;
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
  loans: LoanNodeConnection;
  loansCount?: Maybe<Scalars["Int"]["output"]>;
  manager?: Maybe<ManagerNode>;
  name: Scalars["String"]["output"];
  pendingLoansCount?: Maybe<Scalars["Int"]["output"]>;
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

export type RouteNodeLoansArgs = {
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
  /** Payment void */
  PaymentVoid = "PAYMENT_VOID",
  /** Route initial */
  RouteInitial = "ROUTE_INITIAL",
  /** Route refund */
  RouteRefund = "ROUTE_REFUND",
}

export type UpdateClientInput = {
  addressLine1?: InputMaybe<Scalars["String"]["input"]>;
  addressLine2?: InputMaybe<Scalars["String"]["input"]>;
  alias?: InputMaybe<Scalars["String"]["input"]>;
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  fullName?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["String"]["input"];
  neighborhood?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber1?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber2?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateClientPayload = {
  __typename?: "UpdateClientPayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<UserNode>;
};

export type UserNode = Node & {
  __typename?: "UserNode";
  adminProfile?: Maybe<AdminNode>;
  approvedLoans: LoanNodeConnection;
  clientProfile?: Maybe<ClientNode>;
  collectorProfile?: Maybe<CollectorNode>;
  dateJoined: Scalars["DateTime"]["output"];
  email: Scalars["String"]["output"];
  fullName: Scalars["String"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isActive: Scalars["Boolean"]["output"];
  isAdmin?: Maybe<Scalars["Boolean"]["output"]>;
  isClient?: Maybe<Scalars["Boolean"]["output"]>;
  isCollector?: Maybe<Scalars["Boolean"]["output"]>;
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
  voidedPayments: PaymentNodeConnection;
};

export type UserNodeApprovedLoansArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
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

export type UserNodeVoidedPaymentsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Verify = {
  __typename?: "Verify";
  payload: Scalars["GenericScalar"]["output"];
};

export type VoidPaymentInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  paymentId: Scalars["String"]["input"];
  /** Reason for voiding the payment */
  reason: Scalars["String"]["input"];
};

/**
 * Voids a payment and creates reversal transaction on the route.
 * Only admins can void payments.
 */
export type VoidPaymentPayload = {
  __typename?: "VoidPaymentPayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  loan?: Maybe<LoanNode>;
  payment?: Maybe<PaymentNode>;
};

export type LoginMutationMutationVariables = Exact<{
  input: ObtainJsonWebTokenInput;
}>;

export type LoginMutationMutation = {
  __typename?: "Mutation";
  tokenAuth?: {
    __typename?: "ObtainJSONWebTokenPayload";
    token: string;
    payload: any;
    refreshExpiresIn: number;
    user?: {
      __typename?: "UserNode";
      id: string;
      email: string;
      fullName: string;
      role: AccountsUserRoleChoices;
      isCollector?: boolean | null;
      isAdmin?: boolean | null;
      isClient?: boolean | null;
    } | null;
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

export type CreateClientMutationVariables = Exact<{
  input: CreateClientInput;
}>;

export type CreateClientMutation = {
  __typename?: "Mutation";
  createClient?: {
    __typename?: "CreateClientPayload";
    user?: {
      __typename?: "UserNode";
      id: string;
      email: string;
      fullName: string;
      phoneNumber1: string;
      phoneNumber2?: string | null;
      isActive: boolean;
    } | null;
  } | null;
};

export type UpdateClientMutationVariables = Exact<{
  input: UpdateClientInput;
}>;

export type UpdateClientMutation = {
  __typename?: "Mutation";
  updateClient?: {
    __typename?: "UpdateClientPayload";
    user?: {
      __typename?: "UserNode";
      id: string;
      email: string;
      fullName: string;
      phoneNumber1: string;
      phoneNumber2?: string | null;
      isActive: boolean;
    } | null;
  } | null;
};

export type CreatePaymentMutationVariables = Exact<{
  input: CreatePaymentInput;
}>;

export type CreatePaymentMutation = {
  __typename?: "Mutation";
  createPayment?: {
    __typename?: "CreatePaymentPayload";
    payment?: {
      __typename?: "PaymentNode";
      id: string;
      amount: any;
      paymentDate: any;
      paymentMethod: LoansPaymentPaymentMethodChoices;
      notes: string;
      isVoided?: boolean | null;
      createdAt: any;
      updatedAt: any;
      loan: {
        __typename?: "LoanNode";
        id: string;
        totalPaid?: any | null;
        pendingBalance?: any | null;
        isFullyPaid?: boolean | null;
        status?: string | null;
      };
    } | null;
  } | null;
};

export type LoanDetailQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type LoanDetailQuery = {
  __typename?: "Query";
  loan?: {
    __typename?: "LoanNode";
    id: string;
    amount: any;
    interestRate: LoansLoanInterestRateChoices;
    installments: number;
    paymentFrequency: LoansLoanPaymentFrequencyChoices;
    isApproved: boolean;
    isRejected: boolean;
    isFullyPaid?: boolean | null;
    isOverdue?: boolean | null;
    daysOverdue?: number | null;
    dueDate?: any | null;
    createdAt: any;
    updatedAt: any;
    totalAmount?: any | null;
    totalPaid?: any | null;
    pendingBalance?: any | null;
    status?: string | null;
    client: {
      __typename?: "ClientNode";
      id: string;
      alias?: string | null;
      addressLine1: string;
      addressLine2?: string | null;
      neighborhood: string;
      user: {
        __typename?: "UserNode";
        id: string;
        fullName: string;
        phoneNumber1: string;
        phoneNumber2?: string | null;
      };
    };
    route: {
      __typename?: "RouteNode";
      id: string;
      name: string;
      city: { __typename?: "CityNode"; id: string; name: string };
    };
  } | null;
};

export type LoansByClientQueryVariables = Exact<{
  clientId: Scalars["String"]["input"];
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type LoansByClientQuery = {
  __typename?: "Query";
  loansByClient?: {
    __typename?: "LoanNodeConnection";
    edges: Array<{
      __typename?: "LoanNodeEdge";
      node?: {
        __typename?: "LoanNode";
        id: string;
        amount: any;
        interestRate: LoansLoanInterestRateChoices;
        installments: number;
        paymentFrequency: LoansLoanPaymentFrequencyChoices;
        isApproved: boolean;
        isRejected: boolean;
        isFullyPaid?: boolean | null;
        isOverdue?: boolean | null;
        daysOverdue?: number | null;
        dueDate?: any | null;
        createdAt: any;
        updatedAt: any;
        totalAmount?: any | null;
        totalPaid?: any | null;
        pendingBalance?: any | null;
        status?: string | null;
        route: {
          __typename?: "RouteNode";
          id: string;
          name: string;
          city: { __typename?: "CityNode"; id: string; name: string };
        };
        payments?: Array<{
          __typename?: "PaymentNode";
          id: string;
          amount: any;
          paymentDate: any;
          paymentMethod: LoansPaymentPaymentMethodChoices;
          notes: string;
          isVoided?: boolean | null;
          createdAt: any;
        } | null> | null;
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

export type LoansByCollectorQueryVariables = Exact<{
  collectorId?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type LoansByCollectorQuery = {
  __typename?: "Query";
  loansByCollector?: {
    __typename?: "LoanNodeConnection";
    edges: Array<{
      __typename?: "LoanNodeEdge";
      node?: {
        __typename?: "LoanNode";
        id: string;
        amount: any;
        interestRate: LoansLoanInterestRateChoices;
        installments: number;
        paymentFrequency: LoansLoanPaymentFrequencyChoices;
        isApproved: boolean;
        isRejected: boolean;
        isFullyPaid?: boolean | null;
        isOverdue?: boolean | null;
        daysOverdue?: number | null;
        dueDate?: any | null;
        createdAt: any;
        updatedAt: any;
        totalAmount?: any | null;
        totalPaid?: any | null;
        pendingBalance?: any | null;
        status?: string | null;
        client: {
          __typename?: "ClientNode";
          id: string;
          alias?: string | null;
          addressLine1: string;
          neighborhood: string;
          isActive: boolean;
          user: { __typename?: "UserNode"; id: string; fullName: string };
        };
        route: {
          __typename?: "RouteNode";
          id: string;
          name: string;
          city: { __typename?: "CityNode"; id: string; name: string };
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

export type LoansByRouteQueryVariables = Exact<{
  routeId: Scalars["String"]["input"];
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type LoansByRouteQuery = {
  __typename?: "Query";
  loansByRoute?: {
    __typename?: "LoanNodeConnection";
    edges: Array<{
      __typename?: "LoanNodeEdge";
      node?: {
        __typename?: "LoanNode";
        id: string;
        amount: any;
        interestRate: LoansLoanInterestRateChoices;
        installments: number;
        paymentFrequency: LoansLoanPaymentFrequencyChoices;
        isApproved: boolean;
        isRejected: boolean;
        isFullyPaid?: boolean | null;
        isOverdue?: boolean | null;
        daysOverdue?: number | null;
        dueDate?: any | null;
        createdAt: any;
        updatedAt: any;
        totalAmount?: any | null;
        totalPaid?: any | null;
        pendingBalance?: any | null;
        status?: string | null;
        client: {
          __typename?: "ClientNode";
          id: string;
          alias?: string | null;
          addressLine1: string;
          neighborhood: string;
          isActive: boolean;
          user: { __typename?: "UserNode"; id: string; fullName: string };
          collector: {
            __typename?: "CollectorNode";
            id: string;
            user: { __typename?: "UserNode"; id: string; fullName: string };
          };
        };
        route: { __typename?: "RouteNode"; id: string; name: string };
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

export type OverdueLoansQueryVariables = Exact<{
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type OverdueLoansQuery = {
  __typename?: "Query";
  overdueLoans?: {
    __typename?: "LoanNodeConnection";
    edges: Array<{
      __typename?: "LoanNodeEdge";
      node?: {
        __typename?: "LoanNode";
        id: string;
        amount: any;
        interestRate: LoansLoanInterestRateChoices;
        installments: number;
        paymentFrequency: LoansLoanPaymentFrequencyChoices;
        isApproved: boolean;
        isFullyPaid?: boolean | null;
        isOverdue?: boolean | null;
        daysOverdue?: number | null;
        dueDate?: any | null;
        createdAt: any;
        totalAmount?: any | null;
        totalPaid?: any | null;
        pendingBalance?: any | null;
        client: {
          __typename?: "ClientNode";
          id: string;
          alias?: string | null;
          addressLine1: string;
          neighborhood: string;
          user: {
            __typename?: "UserNode";
            id: string;
            fullName: string;
            phoneNumber1: string;
            phoneNumber2?: string | null;
          };
        };
        route: {
          __typename?: "RouteNode";
          id: string;
          name: string;
          city: { __typename?: "CityNode"; id: string; name: string };
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

export type PaymentsByLoanQueryVariables = Exact<{
  loanId: Scalars["String"]["input"];
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type PaymentsByLoanQuery = {
  __typename?: "Query";
  paymentsByLoan?: {
    __typename?: "PaymentNodeConnection";
    edges: Array<{
      __typename?: "PaymentNodeEdge";
      node?: {
        __typename?: "PaymentNode";
        id: string;
        amount: any;
        paymentDate: any;
        paymentMethod: LoansPaymentPaymentMethodChoices;
        notes: string;
        isVoided?: boolean | null;
        voidedAt?: any | null;
        voidReason: string;
        createdAt: any;
        updatedAt: any;
        loan: {
          __typename?: "LoanNode";
          id: string;
          client: {
            __typename?: "ClientNode";
            id: string;
            user: { __typename?: "UserNode"; id: string; fullName: string };
          };
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
  id: Scalars["String"]["input"];
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

export type RouteDetailQueryVariables = Exact<{
  id: Scalars["String"]["input"];
}>;

export type RouteDetailQuery = {
  __typename?: "Query";
  route?: {
    __typename?: "RouteNode";
    id: string;
    name: string;
    startingBalance?: any | null;
    currentBalance?: any | null;
    createdAt: any;
    updatedAt: any;
    loansCount?: number | null;
    pendingLoansCount?: number | null;
    city: {
      __typename?: "CityNode";
      id: string;
      name: string;
      region?: { __typename?: "RegionNode"; id: string; name: string } | null;
    };
    collector?: {
      __typename?: "CollectorNode";
      id: string;
      user: {
        __typename?: "UserNode";
        id: string;
        fullName: string;
        phoneNumber1: string;
      };
    } | null;
    manager?: {
      __typename?: "ManagerNode";
      id: string;
      user: {
        __typename?: "UserNode";
        id: string;
        fullName: string;
        phoneNumber1: string;
      };
    } | null;
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
    transactions?: Array<{
      __typename?: "TransactionNode";
      id: string;
      amount: any;
      transactionType: TransactionsTransactionTransactionTypeChoices;
      description: string;
      createdAt: any;
      maker?: { __typename?: "UserNode"; id: string; fullName: string } | null;
    } | null> | null;
  } | null;
};

export type RoutesByCollectorQueryVariables = Exact<{
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type RoutesByCollectorQuery = {
  __typename?: "Query";
  routesByCollector?: {
    __typename?: "RouteNodeConnection";
    edges: Array<{
      __typename?: "RouteNodeEdge";
      node?: {
        __typename?: "RouteNode";
        id: string;
        name: string;
        startingBalance?: any | null;
        currentBalance?: any | null;
        createdAt: any;
        updatedAt: any;
        loansCount?: number | null;
        pendingLoansCount?: number | null;
        city: {
          __typename?: "CityNode";
          id: string;
          name: string;
          region?: {
            __typename?: "RegionNode";
            id: string;
            name: string;
          } | null;
        };
        manager?: {
          __typename?: "ManagerNode";
          id: string;
          user: {
            __typename?: "UserNode";
            id: string;
            fullName: string;
            phoneNumber1: string;
          };
        } | null;
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

export type AllTransactionsQueryVariables = Exact<{
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type AllTransactionsQuery = {
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
        maker?: {
          __typename?: "UserNode";
          id: string;
          fullName: string;
        } | null;
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
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ObtainJSONWebTokenInput" },
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
                { kind: "Field", name: { kind: "Name", value: "token" } },
                { kind: "Field", name: { kind: "Name", value: "payload" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "refreshExpiresIn" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "fullName" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "role" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isCollector" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isAdmin" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isClient" },
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
export const CreateClientDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateClient" },
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
              name: { kind: "Name", value: "CreateClientInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createClient" },
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
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "fullName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "phoneNumber1" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "phoneNumber2" },
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
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateClientMutation,
  CreateClientMutationVariables
>;
export const UpdateClientDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateClient" },
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
              name: { kind: "Name", value: "UpdateClientInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateClient" },
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
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "fullName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "phoneNumber1" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "phoneNumber2" },
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
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateClientMutation,
  UpdateClientMutationVariables
>;
export const CreatePaymentDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreatePayment" },
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
              name: { kind: "Name", value: "CreatePaymentInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createPayment" },
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
                  name: { kind: "Name", value: "payment" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "paymentDate" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "paymentMethod" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "notes" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isVoided" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "loan" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "totalPaid" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pendingBalance" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isFullyPaid" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
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
  CreatePaymentMutation,
  CreatePaymentMutationVariables
>;
export const LoanDetailDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "LoanDetail" },
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
            name: { kind: "Name", value: "loan" },
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
                { kind: "Field", name: { kind: "Name", value: "amount" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "interestRate" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "installments" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "paymentFrequency" },
                },
                { kind: "Field", name: { kind: "Name", value: "isApproved" } },
                { kind: "Field", name: { kind: "Name", value: "isRejected" } },
                { kind: "Field", name: { kind: "Name", value: "isFullyPaid" } },
                { kind: "Field", name: { kind: "Name", value: "isOverdue" } },
                { kind: "Field", name: { kind: "Name", value: "daysOverdue" } },
                { kind: "Field", name: { kind: "Name", value: "dueDate" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "totalAmount" } },
                { kind: "Field", name: { kind: "Name", value: "totalPaid" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pendingBalance" },
                },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "client" },
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
                              name: { kind: "Name", value: "phoneNumber1" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "phoneNumber2" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "alias" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "addressLine1" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "addressLine2" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "neighborhood" },
                      },
                    ],
                  },
                },
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
} as unknown as DocumentNode<LoanDetailQuery, LoanDetailQueryVariables>;
export const LoansByClientDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "LoansByClient" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "clientId" },
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
            name: { kind: "Name", value: "first" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "after" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "loansByClient" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "clientId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "clientId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "first" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "after" },
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
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "interestRate" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "installments" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "paymentFrequency" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isApproved" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isRejected" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isFullyPaid" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isOverdue" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "daysOverdue" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "dueDate" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "totalAmount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "totalPaid" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pendingBalance" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "route" },
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
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "payments" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "amount" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "paymentDate",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "paymentMethod",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "notes" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "isVoided" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
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
} as unknown as DocumentNode<LoansByClientQuery, LoansByClientQueryVariables>;
export const LoansByCollectorDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "LoansByCollector" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "collectorId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "first" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "after" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "loansByCollector" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "collectorId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "collectorId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "first" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "after" },
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
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "interestRate" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "installments" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "paymentFrequency" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isApproved" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isRejected" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isFullyPaid" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isOverdue" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "daysOverdue" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "dueDate" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "totalAmount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "totalPaid" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pendingBalance" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "client" },
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
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alias" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "addressLine1",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "neighborhood",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "isActive" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "route" },
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
  LoansByCollectorQuery,
  LoansByCollectorQueryVariables
>;
export const LoansByRouteDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "LoansByRoute" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "routeId" },
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
            name: { kind: "Name", value: "first" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "after" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "loansByRoute" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "routeId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "routeId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "first" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "after" },
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
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "interestRate" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "installments" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "paymentFrequency" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isApproved" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isRejected" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isFullyPaid" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isOverdue" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "daysOverdue" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "dueDate" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "totalAmount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "totalPaid" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pendingBalance" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "client" },
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
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alias" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "addressLine1",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "neighborhood",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "isActive" },
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
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "route" },
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
} as unknown as DocumentNode<LoansByRouteQuery, LoansByRouteQueryVariables>;
export const OverdueLoansDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "OverdueLoans" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "first" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "after" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "overdueLoans" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "first" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "after" },
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
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "interestRate" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "installments" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "paymentFrequency" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isApproved" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isFullyPaid" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isOverdue" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "daysOverdue" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "dueDate" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "totalAmount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "totalPaid" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pendingBalance" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "client" },
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
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alias" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "addressLine1",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "neighborhood",
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "route" },
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
} as unknown as DocumentNode<OverdueLoansQuery, OverdueLoansQueryVariables>;
export const PaymentsByLoanDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "PaymentsByLoan" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "loanId" },
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
            name: { kind: "Name", value: "first" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "after" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "paymentsByLoan" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "loanId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "loanId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "first" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "after" },
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
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "paymentDate" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "paymentMethod" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "notes" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isVoided" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "voidedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "voidReason" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "loan" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "client" },
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
} as unknown as DocumentNode<PaymentsByLoanQuery, PaymentsByLoanQueryVariables>;
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
export const RouteDetailDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "RouteDetail" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
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
                  name: { kind: "Name", value: "currentBalance" },
                },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "city" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "region" },
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
                              name: { kind: "Name", value: "phoneNumber1" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "manager" },
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
                              name: { kind: "Name", value: "phoneNumber1" },
                            },
                          ],
                        },
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
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "loansCount" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pendingLoansCount" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "transactions" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "transactionType" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "description" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "maker" },
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
} as unknown as DocumentNode<RouteDetailQuery, RouteDetailQueryVariables>;
export const RoutesByCollectorDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "RoutesByCollector" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "first" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "after" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "routesByCollector" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "first" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "after" },
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
                              name: { kind: "Name", value: "startingBalance" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "currentBalance" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
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
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "region" },
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
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "manager" },
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
                                            value: "phoneNumber1",
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
                              name: { kind: "Name", value: "loansCount" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "pendingLoansCount",
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
  RoutesByCollectorQuery,
  RoutesByCollectorQueryVariables
>;
export const AllTransactionsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "AllTransactions" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "first" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "after" },
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
                name: { kind: "Name", value: "first" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "first" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "after" },
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
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "maker" },
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
  AllTransactionsQuery,
  AllTransactionsQueryVariables
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
