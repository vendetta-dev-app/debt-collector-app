/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  "\n    mutation CreateAdminMutation(\n        $email: String!, \n        $fullName: String!, \n        $phoneNumber1: String!, \n        $phoneNumber2: String!, \n        $invitationCode: String!, \n        $password: String!\n    ) {\n        createAdmin(\n            input: {\n                email: $email,\n                fullName: $fullName,\n                phoneNumber1: $phoneNumber1,\n                phoneNumber2: $phoneNumber2,\n                invitationCode: $invitationCode,\n                password: $password\n            }\n        ) {\n            user {\n                id\n            }\n        }\n    }\n": typeof types.CreateAdminMutationDocument;
  "\n  mutation LoginMutation($email: String! $password: String!) {\n    tokenAuth(email: $email, password: $password){\n      token\n      payload\n      refreshExpiresIn\n    }\n  }\n": typeof types.LoginMutationDocument;
  "\n  query Me {\n    me {\n      id\n      email\n      fullName\n      isActive\n    }\n  }\n": typeof types.MeDocument;
  "\n    query ClientsByAdmin {\n        clientsByAdmin {\n            edges{\n                node{\n                    id\n                    user {\n                        id\n                        fullName\n                    }\n                    addressLine1\n                    alias\n                    isActive\n                }\n            }\n            pageInfo {\n                startCursor\n                endCursor\n                hasNextPage\n                hasPreviousPage\n            }\n        }\n    }\n": typeof types.ClientsByAdminDocument;
  "\n    mutation CreateCollectorMutation( $email: String!, $fullName:String!, $phoneNumber1: String!,$phoneNumber2: String, $password: String!) {\n        createCollector(input: {email: $email, fullName: $fullName, phoneNumber1: $phoneNumber1, phoneNumber2: $phoneNumber2, password: $password}){\n            collector {\n                id\n            }\n        }\n    }\n": typeof types.CreateCollectorMutationDocument;
  "\n    mutation EditCollector($userId: String!, $email: String!, $fullName: String!, $phoneNumber1: String!, $phoneNumber2: String, $isActive: Boolean!) {\n        editCollector(input: {userId: $userId, email: $email, fullName: $fullName, phoneNumber1: $phoneNumber1, phoneNumber2: $phoneNumber2, isActive: $isActive}) {\n            user {\n                id\n                collectorProfile {\n                    id\n                }\n            }\n        }\n    }\n": typeof types.EditCollectorDocument;
  "\n    query CollectorByAdminQuery($fullName: String, $isActive: Boolean) {\n        collectorsByAdmin(fullName: $fullName, isActive: $isActive) {\n            pageInfo {\n                startCursor\n                endCursor\n                hasNextPage\n                hasPreviousPage\n            }\n            totalCount\n            edges {\n                node {\n                    id\n                    isActive\n                    user {\n                        email\n                        id\n                        fullName\n                        phoneNumber1\n                        phoneNumber2\n                    }\n                }\n            }\n        }\n    }\n": typeof types.CollectorByAdminQueryDocument;
  "\n    mutation CreateManager($input: CreateManagerInput!) {\n        createManager(input: $input) {\n            manager {\n                id\n                isActive\n                user {\n                    id\n                    email\n                    fullName\n                    phoneNumber1\n                }\n            }\n        }\n    }\n": typeof types.CreateManagerDocument;
  "\n    query ManagersByAdmin {\n        managersByAdmin {\n            edges {\n                node {\n                    id\n                    isActive\n                    user {\n                        id\n                        email\n                        fullName\n                        phoneNumber1\n                    }\n                }\n            }\n            pageInfo {\n                startCursor\n                endCursor\n                hasNextPage\n                hasPreviousPage\n            }\n        }\n    }\n": typeof types.ManagersByAdminDocument;
  "\n    mutation addAdminToRouteMutation($input: AddAdminToRouteInput!) {\n        addAdminToRoute(input: $input){\n          route {\n      id\n      name\n      startingBalance\n      city {\n        id\n        name\n      }\n      administrators{\n        edges {\n          node {\n            id\n            user{\n              id\n              fullName\n              isActive\n            }\n          }\n        }\n      }\n      collector {\n        id\n        user {\n          id\n          fullName\n          isActive\n        }\n      }\n      createdAt\n      updatedAt\n    }\n        }\n    }\n": typeof types.AddAdminToRouteMutationDocument;
  "\n    mutation createMutationMutation($input: CreateRouteInput!) {\n        createRoute(input: $input) {\n            route {\n                id\n            }\n        }\n    }\n": typeof types.CreateMutationMutationDocument;
  "\n  query Cities($searchNames_Icontains: String){\n    cities(searchNames_Icontains: $searchNames_Icontains){\n      edges{\n        node{\n          id\n          name\n          region{\n            name\n          }\n        }\n      }\n    }\n  }\n": typeof types.CitiesDocument;
  "\n  query RouteById($id: ID!){\n    route(id: $id){\n      id\n      name\n      startingBalance\n      city {\n        id\n        name\n      }\n      administrators{\n        edges {\n          node {\n            id\n            user{\n              id\n              fullName\n              isActive\n            }\n          }\n        }\n      }\n      collector {\n        id\n        user {\n          id\n          fullName\n          isActive\n        }\n      }\n      createdAt\n      updatedAt\n    }\n  }\n": typeof types.RouteByIdDocument;
  "\n    query RoutesByAdminQuery {\n        routesByAdmin{\n            pageInfo {\n                startCursor\n                endCursor\n                hasNextPage\n                hasPreviousPage\n            }\n            edges {\n                node {\n                    id\n                    name\n                    city {\n                        id\n                        name\n                    }\n                    startingBalance\n                    administrators{\n                        edges {\n                            node {\n                                id\n                                user{\n                                    id\n                                    fullName\n                                }\n                            }\n                        }\n                    }\n                    collector {\n                        id\n                        user {\n                            id\n                            fullName\n                        }\n                    }\n                    createdAt\n                    updatedAt\n                }\n            }\n        }\n    }\n": typeof types.RoutesByAdminQueryDocument;
  "\n    query TransactionsByRouteId($routeId: String){\n        transactions(routeId: $routeId){\n            edges {\n                node {\n                    id\n                    description\n                    transactionType\n                    amount\n                    createdAt\n                    updatedAt\n                }\n            }\n            pageInfo {\n                startCursor\n                endCursor\n                hasNextPage\n                hasPreviousPage\n            }\n        }\n    }\n": typeof types.TransactionsByRouteIdDocument;
};
const documents: Documents = {
  "\n    mutation CreateAdminMutation(\n        $email: String!, \n        $fullName: String!, \n        $phoneNumber1: String!, \n        $phoneNumber2: String!, \n        $invitationCode: String!, \n        $password: String!\n    ) {\n        createAdmin(\n            input: {\n                email: $email,\n                fullName: $fullName,\n                phoneNumber1: $phoneNumber1,\n                phoneNumber2: $phoneNumber2,\n                invitationCode: $invitationCode,\n                password: $password\n            }\n        ) {\n            user {\n                id\n            }\n        }\n    }\n":
    types.CreateAdminMutationDocument,
  "\n  mutation LoginMutation($email: String! $password: String!) {\n    tokenAuth(email: $email, password: $password){\n      token\n      payload\n      refreshExpiresIn\n    }\n  }\n":
    types.LoginMutationDocument,
  "\n  query Me {\n    me {\n      id\n      email\n      fullName\n      isActive\n    }\n  }\n":
    types.MeDocument,
  "\n    query ClientsByAdmin {\n        clientsByAdmin {\n            edges{\n                node{\n                    id\n                    user {\n                        id\n                        fullName\n                    }\n                    addressLine1\n                    alias\n                    isActive\n                }\n            }\n            pageInfo {\n                startCursor\n                endCursor\n                hasNextPage\n                hasPreviousPage\n            }\n        }\n    }\n":
    types.ClientsByAdminDocument,
  "\n    mutation CreateCollectorMutation( $email: String!, $fullName:String!, $phoneNumber1: String!,$phoneNumber2: String, $password: String!) {\n        createCollector(input: {email: $email, fullName: $fullName, phoneNumber1: $phoneNumber1, phoneNumber2: $phoneNumber2, password: $password}){\n            collector {\n                id\n            }\n        }\n    }\n":
    types.CreateCollectorMutationDocument,
  "\n    mutation EditCollector($userId: String!, $email: String!, $fullName: String!, $phoneNumber1: String!, $phoneNumber2: String, $isActive: Boolean!) {\n        editCollector(input: {userId: $userId, email: $email, fullName: $fullName, phoneNumber1: $phoneNumber1, phoneNumber2: $phoneNumber2, isActive: $isActive}) {\n            user {\n                id\n                collectorProfile {\n                    id\n                }\n            }\n        }\n    }\n":
    types.EditCollectorDocument,
  "\n    query CollectorByAdminQuery($fullName: String, $isActive: Boolean) {\n        collectorsByAdmin(fullName: $fullName, isActive: $isActive) {\n            pageInfo {\n                startCursor\n                endCursor\n                hasNextPage\n                hasPreviousPage\n            }\n            totalCount\n            edges {\n                node {\n                    id\n                    isActive\n                    user {\n                        email\n                        id\n                        fullName\n                        phoneNumber1\n                        phoneNumber2\n                    }\n                }\n            }\n        }\n    }\n":
    types.CollectorByAdminQueryDocument,
  "\n    mutation CreateManager($input: CreateManagerInput!) {\n        createManager(input: $input) {\n            manager {\n                id\n                isActive\n                user {\n                    id\n                    email\n                    fullName\n                    phoneNumber1\n                }\n            }\n        }\n    }\n":
    types.CreateManagerDocument,
  "\n    query ManagersByAdmin {\n        managersByAdmin {\n            edges {\n                node {\n                    id\n                    isActive\n                    user {\n                        id\n                        email\n                        fullName\n                        phoneNumber1\n                    }\n                }\n            }\n            pageInfo {\n                startCursor\n                endCursor\n                hasNextPage\n                hasPreviousPage\n            }\n        }\n    }\n":
    types.ManagersByAdminDocument,
  "\n    mutation addAdminToRouteMutation($input: AddAdminToRouteInput!) {\n        addAdminToRoute(input: $input){\n          route {\n      id\n      name\n      startingBalance\n      city {\n        id\n        name\n      }\n      administrators{\n        edges {\n          node {\n            id\n            user{\n              id\n              fullName\n              isActive\n            }\n          }\n        }\n      }\n      collector {\n        id\n        user {\n          id\n          fullName\n          isActive\n        }\n      }\n      createdAt\n      updatedAt\n    }\n        }\n    }\n":
    types.AddAdminToRouteMutationDocument,
  "\n    mutation createMutationMutation($input: CreateRouteInput!) {\n        createRoute(input: $input) {\n            route {\n                id\n            }\n        }\n    }\n":
    types.CreateMutationMutationDocument,
  "\n  query Cities($searchNames_Icontains: String){\n    cities(searchNames_Icontains: $searchNames_Icontains){\n      edges{\n        node{\n          id\n          name\n          region{\n            name\n          }\n        }\n      }\n    }\n  }\n":
    types.CitiesDocument,
  "\n  query RouteById($id: ID!){\n    route(id: $id){\n      id\n      name\n      startingBalance\n      city {\n        id\n        name\n      }\n      administrators{\n        edges {\n          node {\n            id\n            user{\n              id\n              fullName\n              isActive\n            }\n          }\n        }\n      }\n      collector {\n        id\n        user {\n          id\n          fullName\n          isActive\n        }\n      }\n      createdAt\n      updatedAt\n    }\n  }\n":
    types.RouteByIdDocument,
  "\n    query RoutesByAdminQuery {\n        routesByAdmin{\n            pageInfo {\n                startCursor\n                endCursor\n                hasNextPage\n                hasPreviousPage\n            }\n            edges {\n                node {\n                    id\n                    name\n                    city {\n                        id\n                        name\n                    }\n                    startingBalance\n                    administrators{\n                        edges {\n                            node {\n                                id\n                                user{\n                                    id\n                                    fullName\n                                }\n                            }\n                        }\n                    }\n                    collector {\n                        id\n                        user {\n                            id\n                            fullName\n                        }\n                    }\n                    createdAt\n                    updatedAt\n                }\n            }\n        }\n    }\n":
    types.RoutesByAdminQueryDocument,
  "\n    query TransactionsByRouteId($routeId: String){\n        transactions(routeId: $routeId){\n            edges {\n                node {\n                    id\n                    description\n                    transactionType\n                    amount\n                    createdAt\n                    updatedAt\n                }\n            }\n            pageInfo {\n                startCursor\n                endCursor\n                hasNextPage\n                hasPreviousPage\n            }\n        }\n    }\n":
    types.TransactionsByRouteIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n    mutation CreateAdminMutation(\n        $email: String!, \n        $fullName: String!, \n        $phoneNumber1: String!, \n        $phoneNumber2: String!, \n        $invitationCode: String!, \n        $password: String!\n    ) {\n        createAdmin(\n            input: {\n                email: $email,\n                fullName: $fullName,\n                phoneNumber1: $phoneNumber1,\n                phoneNumber2: $phoneNumber2,\n                invitationCode: $invitationCode,\n                password: $password\n            }\n        ) {\n            user {\n                id\n            }\n        }\n    }\n",
): (typeof documents)["\n    mutation CreateAdminMutation(\n        $email: String!, \n        $fullName: String!, \n        $phoneNumber1: String!, \n        $phoneNumber2: String!, \n        $invitationCode: String!, \n        $password: String!\n    ) {\n        createAdmin(\n            input: {\n                email: $email,\n                fullName: $fullName,\n                phoneNumber1: $phoneNumber1,\n                phoneNumber2: $phoneNumber2,\n                invitationCode: $invitationCode,\n                password: $password\n            }\n        ) {\n            user {\n                id\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation LoginMutation($email: String! $password: String!) {\n    tokenAuth(email: $email, password: $password){\n      token\n      payload\n      refreshExpiresIn\n    }\n  }\n",
): (typeof documents)["\n  mutation LoginMutation($email: String! $password: String!) {\n    tokenAuth(email: $email, password: $password){\n      token\n      payload\n      refreshExpiresIn\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query Me {\n    me {\n      id\n      email\n      fullName\n      isActive\n    }\n  }\n",
): (typeof documents)["\n  query Me {\n    me {\n      id\n      email\n      fullName\n      isActive\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n    query ClientsByAdmin {\n        clientsByAdmin {\n            edges{\n                node{\n                    id\n                    user {\n                        id\n                        fullName\n                    }\n                    addressLine1\n                    alias\n                    isActive\n                }\n            }\n            pageInfo {\n                startCursor\n                endCursor\n                hasNextPage\n                hasPreviousPage\n            }\n        }\n    }\n",
): (typeof documents)["\n    query ClientsByAdmin {\n        clientsByAdmin {\n            edges{\n                node{\n                    id\n                    user {\n                        id\n                        fullName\n                    }\n                    addressLine1\n                    alias\n                    isActive\n                }\n            }\n            pageInfo {\n                startCursor\n                endCursor\n                hasNextPage\n                hasPreviousPage\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n    mutation CreateCollectorMutation( $email: String!, $fullName:String!, $phoneNumber1: String!,$phoneNumber2: String, $password: String!) {\n        createCollector(input: {email: $email, fullName: $fullName, phoneNumber1: $phoneNumber1, phoneNumber2: $phoneNumber2, password: $password}){\n            collector {\n                id\n            }\n        }\n    }\n",
): (typeof documents)["\n    mutation CreateCollectorMutation( $email: String!, $fullName:String!, $phoneNumber1: String!,$phoneNumber2: String, $password: String!) {\n        createCollector(input: {email: $email, fullName: $fullName, phoneNumber1: $phoneNumber1, phoneNumber2: $phoneNumber2, password: $password}){\n            collector {\n                id\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n    mutation EditCollector($userId: String!, $email: String!, $fullName: String!, $phoneNumber1: String!, $phoneNumber2: String, $isActive: Boolean!) {\n        editCollector(input: {userId: $userId, email: $email, fullName: $fullName, phoneNumber1: $phoneNumber1, phoneNumber2: $phoneNumber2, isActive: $isActive}) {\n            user {\n                id\n                collectorProfile {\n                    id\n                }\n            }\n        }\n    }\n",
): (typeof documents)["\n    mutation EditCollector($userId: String!, $email: String!, $fullName: String!, $phoneNumber1: String!, $phoneNumber2: String, $isActive: Boolean!) {\n        editCollector(input: {userId: $userId, email: $email, fullName: $fullName, phoneNumber1: $phoneNumber1, phoneNumber2: $phoneNumber2, isActive: $isActive}) {\n            user {\n                id\n                collectorProfile {\n                    id\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n    query CollectorByAdminQuery($fullName: String, $isActive: Boolean) {\n        collectorsByAdmin(fullName: $fullName, isActive: $isActive) {\n            pageInfo {\n                startCursor\n                endCursor\n                hasNextPage\n                hasPreviousPage\n            }\n            totalCount\n            edges {\n                node {\n                    id\n                    isActive\n                    user {\n                        email\n                        id\n                        fullName\n                        phoneNumber1\n                        phoneNumber2\n                    }\n                }\n            }\n        }\n    }\n",
): (typeof documents)["\n    query CollectorByAdminQuery($fullName: String, $isActive: Boolean) {\n        collectorsByAdmin(fullName: $fullName, isActive: $isActive) {\n            pageInfo {\n                startCursor\n                endCursor\n                hasNextPage\n                hasPreviousPage\n            }\n            totalCount\n            edges {\n                node {\n                    id\n                    isActive\n                    user {\n                        email\n                        id\n                        fullName\n                        phoneNumber1\n                        phoneNumber2\n                    }\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n    mutation CreateManager($input: CreateManagerInput!) {\n        createManager(input: $input) {\n            manager {\n                id\n                isActive\n                user {\n                    id\n                    email\n                    fullName\n                    phoneNumber1\n                }\n            }\n        }\n    }\n",
): (typeof documents)["\n    mutation CreateManager($input: CreateManagerInput!) {\n        createManager(input: $input) {\n            manager {\n                id\n                isActive\n                user {\n                    id\n                    email\n                    fullName\n                    phoneNumber1\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n    query ManagersByAdmin {\n        managersByAdmin {\n            edges {\n                node {\n                    id\n                    isActive\n                    user {\n                        id\n                        email\n                        fullName\n                        phoneNumber1\n                    }\n                }\n            }\n            pageInfo {\n                startCursor\n                endCursor\n                hasNextPage\n                hasPreviousPage\n            }\n        }\n    }\n",
): (typeof documents)["\n    query ManagersByAdmin {\n        managersByAdmin {\n            edges {\n                node {\n                    id\n                    isActive\n                    user {\n                        id\n                        email\n                        fullName\n                        phoneNumber1\n                    }\n                }\n            }\n            pageInfo {\n                startCursor\n                endCursor\n                hasNextPage\n                hasPreviousPage\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n    mutation addAdminToRouteMutation($input: AddAdminToRouteInput!) {\n        addAdminToRoute(input: $input){\n          route {\n      id\n      name\n      startingBalance\n      city {\n        id\n        name\n      }\n      administrators{\n        edges {\n          node {\n            id\n            user{\n              id\n              fullName\n              isActive\n            }\n          }\n        }\n      }\n      collector {\n        id\n        user {\n          id\n          fullName\n          isActive\n        }\n      }\n      createdAt\n      updatedAt\n    }\n        }\n    }\n",
): (typeof documents)["\n    mutation addAdminToRouteMutation($input: AddAdminToRouteInput!) {\n        addAdminToRoute(input: $input){\n          route {\n      id\n      name\n      startingBalance\n      city {\n        id\n        name\n      }\n      administrators{\n        edges {\n          node {\n            id\n            user{\n              id\n              fullName\n              isActive\n            }\n          }\n        }\n      }\n      collector {\n        id\n        user {\n          id\n          fullName\n          isActive\n        }\n      }\n      createdAt\n      updatedAt\n    }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n    mutation createMutationMutation($input: CreateRouteInput!) {\n        createRoute(input: $input) {\n            route {\n                id\n            }\n        }\n    }\n",
): (typeof documents)["\n    mutation createMutationMutation($input: CreateRouteInput!) {\n        createRoute(input: $input) {\n            route {\n                id\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query Cities($searchNames_Icontains: String){\n    cities(searchNames_Icontains: $searchNames_Icontains){\n      edges{\n        node{\n          id\n          name\n          region{\n            name\n          }\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query Cities($searchNames_Icontains: String){\n    cities(searchNames_Icontains: $searchNames_Icontains){\n      edges{\n        node{\n          id\n          name\n          region{\n            name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query RouteById($id: ID!){\n    route(id: $id){\n      id\n      name\n      startingBalance\n      city {\n        id\n        name\n      }\n      administrators{\n        edges {\n          node {\n            id\n            user{\n              id\n              fullName\n              isActive\n            }\n          }\n        }\n      }\n      collector {\n        id\n        user {\n          id\n          fullName\n          isActive\n        }\n      }\n      createdAt\n      updatedAt\n    }\n  }\n",
): (typeof documents)["\n  query RouteById($id: ID!){\n    route(id: $id){\n      id\n      name\n      startingBalance\n      city {\n        id\n        name\n      }\n      administrators{\n        edges {\n          node {\n            id\n            user{\n              id\n              fullName\n              isActive\n            }\n          }\n        }\n      }\n      collector {\n        id\n        user {\n          id\n          fullName\n          isActive\n        }\n      }\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n    query RoutesByAdminQuery {\n        routesByAdmin{\n            pageInfo {\n                startCursor\n                endCursor\n                hasNextPage\n                hasPreviousPage\n            }\n            edges {\n                node {\n                    id\n                    name\n                    city {\n                        id\n                        name\n                    }\n                    startingBalance\n                    administrators{\n                        edges {\n                            node {\n                                id\n                                user{\n                                    id\n                                    fullName\n                                }\n                            }\n                        }\n                    }\n                    collector {\n                        id\n                        user {\n                            id\n                            fullName\n                        }\n                    }\n                    createdAt\n                    updatedAt\n                }\n            }\n        }\n    }\n",
): (typeof documents)["\n    query RoutesByAdminQuery {\n        routesByAdmin{\n            pageInfo {\n                startCursor\n                endCursor\n                hasNextPage\n                hasPreviousPage\n            }\n            edges {\n                node {\n                    id\n                    name\n                    city {\n                        id\n                        name\n                    }\n                    startingBalance\n                    administrators{\n                        edges {\n                            node {\n                                id\n                                user{\n                                    id\n                                    fullName\n                                }\n                            }\n                        }\n                    }\n                    collector {\n                        id\n                        user {\n                            id\n                            fullName\n                        }\n                    }\n                    createdAt\n                    updatedAt\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n    query TransactionsByRouteId($routeId: String){\n        transactions(routeId: $routeId){\n            edges {\n                node {\n                    id\n                    description\n                    transactionType\n                    amount\n                    createdAt\n                    updatedAt\n                }\n            }\n            pageInfo {\n                startCursor\n                endCursor\n                hasNextPage\n                hasPreviousPage\n            }\n        }\n    }\n",
): (typeof documents)["\n    query TransactionsByRouteId($routeId: String){\n        transactions(routeId: $routeId){\n            edges {\n                node {\n                    id\n                    description\n                    transactionType\n                    amount\n                    createdAt\n                    updatedAt\n                }\n            }\n            pageInfo {\n                startCursor\n                endCursor\n                hasNextPage\n                hasPreviousPage\n            }\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
