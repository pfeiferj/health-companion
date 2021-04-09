import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";
import * as argsTypes from "./resolvers/crud/args.index";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  MetActivity: crudResolvers.MetActivityCrudResolver,
  CompletedExercise: crudResolvers.CompletedExerciseCrudResolver,
  Weight: crudResolvers.WeightCrudResolver,
  ConsumedFood: crudResolvers.ConsumedFoodCrudResolver
};
const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  MetActivity: relationResolvers.MetActivityRelationsResolver,
  CompletedExercise: relationResolvers.CompletedExerciseRelationsResolver,
  Weight: relationResolvers.WeightRelationsResolver,
  ConsumedFood: relationResolvers.ConsumedFoodRelationsResolver
};
const actionResolversMap = {
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver
  },
  MetActivity: {
    metActivity: actionResolvers.FindUniqueMetActivityResolver,
    findFirstMetActivity: actionResolvers.FindFirstMetActivityResolver,
    metActivities: actionResolvers.FindManyMetActivityResolver,
    createMetActivity: actionResolvers.CreateMetActivityResolver,
    deleteMetActivity: actionResolvers.DeleteMetActivityResolver,
    updateMetActivity: actionResolvers.UpdateMetActivityResolver,
    deleteManyMetActivity: actionResolvers.DeleteManyMetActivityResolver,
    updateManyMetActivity: actionResolvers.UpdateManyMetActivityResolver,
    upsertMetActivity: actionResolvers.UpsertMetActivityResolver,
    aggregateMetActivity: actionResolvers.AggregateMetActivityResolver
  },
  CompletedExercise: {
    completedExercise: actionResolvers.FindUniqueCompletedExerciseResolver,
    findFirstCompletedExercise: actionResolvers.FindFirstCompletedExerciseResolver,
    completedExercises: actionResolvers.FindManyCompletedExerciseResolver,
    createCompletedExercise: actionResolvers.CreateCompletedExerciseResolver,
    deleteCompletedExercise: actionResolvers.DeleteCompletedExerciseResolver,
    updateCompletedExercise: actionResolvers.UpdateCompletedExerciseResolver,
    deleteManyCompletedExercise: actionResolvers.DeleteManyCompletedExerciseResolver,
    updateManyCompletedExercise: actionResolvers.UpdateManyCompletedExerciseResolver,
    upsertCompletedExercise: actionResolvers.UpsertCompletedExerciseResolver,
    aggregateCompletedExercise: actionResolvers.AggregateCompletedExerciseResolver
  },
  Weight: {
    weight: actionResolvers.FindUniqueWeightResolver,
    findFirstWeight: actionResolvers.FindFirstWeightResolver,
    weights: actionResolvers.FindManyWeightResolver,
    createWeight: actionResolvers.CreateWeightResolver,
    deleteWeight: actionResolvers.DeleteWeightResolver,
    updateWeight: actionResolvers.UpdateWeightResolver,
    deleteManyWeight: actionResolvers.DeleteManyWeightResolver,
    updateManyWeight: actionResolvers.UpdateManyWeightResolver,
    upsertWeight: actionResolvers.UpsertWeightResolver,
    aggregateWeight: actionResolvers.AggregateWeightResolver
  },
  ConsumedFood: {
    consumedFood: actionResolvers.FindUniqueConsumedFoodResolver,
    findFirstConsumedFood: actionResolvers.FindFirstConsumedFoodResolver,
    consumedFoods: actionResolvers.FindManyConsumedFoodResolver,
    createConsumedFood: actionResolvers.CreateConsumedFoodResolver,
    deleteConsumedFood: actionResolvers.DeleteConsumedFoodResolver,
    updateConsumedFood: actionResolvers.UpdateConsumedFoodResolver,
    deleteManyConsumedFood: actionResolvers.DeleteManyConsumedFoodResolver,
    updateManyConsumedFood: actionResolvers.UpdateManyConsumedFoodResolver,
    upsertConsumedFood: actionResolvers.UpsertConsumedFoodResolver,
    aggregateConsumedFood: actionResolvers.AggregateConsumedFoodResolver
  }
};
const resolversInfo = {
  User: ["user", "findFirstUser", "users", "createUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser"],
  MetActivity: ["metActivity", "findFirstMetActivity", "metActivities", "createMetActivity", "deleteMetActivity", "updateMetActivity", "deleteManyMetActivity", "updateManyMetActivity", "upsertMetActivity", "aggregateMetActivity"],
  CompletedExercise: ["completedExercise", "findFirstCompletedExercise", "completedExercises", "createCompletedExercise", "deleteCompletedExercise", "updateCompletedExercise", "deleteManyCompletedExercise", "updateManyCompletedExercise", "upsertCompletedExercise", "aggregateCompletedExercise"],
  Weight: ["weight", "findFirstWeight", "weights", "createWeight", "deleteWeight", "updateWeight", "deleteManyWeight", "updateManyWeight", "upsertWeight", "aggregateWeight"],
  ConsumedFood: ["consumedFood", "findFirstConsumedFood", "consumedFoods", "createConsumedFood", "deleteConsumedFood", "updateConsumedFood", "deleteManyConsumedFood", "updateManyConsumedFood", "upsertConsumedFood", "aggregateConsumedFood"]
};
const relationResolversInfo = {
  User: ["CompletedExercise", "Weight", "ConsumedFood"],
  MetActivity: ["CompletedExercise"],
  CompletedExercise: ["User", "MetActivity"],
  Weight: ["User"],
  ConsumedFood: ["User"]
};
const modelsInfo = {
  User: ["id", "username", "units", "name"],
  MetActivity: ["id", "metId", "mets", "type", "name"],
  CompletedExercise: ["id", "userId", "metActivityId", "notes", "completedAt"],
  Weight: ["id", "userId", "weight", "loggedAt", "time"],
  ConsumedFood: ["id", "userId", "name", "notes", "calories", "protien", "fat", "carbs"]
};
const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "username", "password", "units", "name", "CompletedExercise", "Weight", "ConsumedFood"],
  UserOrderByInput: ["id", "username", "password", "units", "name"],
  UserWhereUniqueInput: ["id", "username"],
  MetActivityWhereInput: ["AND", "OR", "NOT", "id", "metId", "mets", "type", "name", "CompletedExercise"],
  MetActivityOrderByInput: ["id", "metId", "mets", "type", "name"],
  MetActivityWhereUniqueInput: ["id"],
  CompletedExerciseWhereInput: ["AND", "OR", "NOT", "id", "User", "userId", "MetActivity", "metActivityId", "notes", "completedAt"],
  CompletedExerciseOrderByInput: ["id", "userId", "metActivityId", "notes", "completedAt"],
  CompletedExerciseWhereUniqueInput: ["id"],
  WeightWhereInput: ["AND", "OR", "NOT", "id", "User", "userId", "weight", "loggedAt", "time"],
  WeightOrderByInput: ["id", "userId", "weight", "loggedAt", "time"],
  WeightWhereUniqueInput: ["id"],
  ConsumedFoodWhereInput: ["AND", "OR", "NOT", "id", "User", "userId", "name", "notes", "calories", "protien", "fat", "carbs"],
  ConsumedFoodOrderByInput: ["id", "userId", "name", "notes", "calories", "protien", "fat", "carbs"],
  ConsumedFoodWhereUniqueInput: ["id"],
  UserCreateInput: ["username", "password", "units", "name", "CompletedExercise", "Weight", "ConsumedFood"],
  UserUpdateInput: ["username", "password", "units", "name", "CompletedExercise", "Weight", "ConsumedFood"],
  UserUpdateManyMutationInput: ["username", "password", "units", "name"],
  MetActivityCreateInput: ["metId", "mets", "type", "name", "CompletedExercise"],
  MetActivityUpdateInput: ["metId", "mets", "type", "name", "CompletedExercise"],
  MetActivityUpdateManyMutationInput: ["metId", "mets", "type", "name"],
  CompletedExerciseCreateInput: ["notes", "completedAt", "User", "MetActivity"],
  CompletedExerciseUpdateInput: ["notes", "completedAt", "User", "MetActivity"],
  CompletedExerciseUpdateManyMutationInput: ["notes", "completedAt"],
  WeightCreateInput: ["weight", "loggedAt", "time", "User"],
  WeightUpdateInput: ["weight", "loggedAt", "time", "User"],
  WeightUpdateManyMutationInput: ["weight", "loggedAt", "time"],
  ConsumedFoodCreateInput: ["name", "notes", "calories", "protien", "fat", "carbs", "User"],
  ConsumedFoodUpdateInput: ["name", "notes", "calories", "protien", "fat", "carbs", "User"],
  ConsumedFoodUpdateManyMutationInput: ["name", "notes", "calories", "protien", "fat", "carbs"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  CompletedExerciseListRelationFilter: ["every", "some", "none"],
  WeightListRelationFilter: ["every", "some", "none"],
  ConsumedFoodListRelationFilter: ["every", "some", "none"],
  FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserRelationFilter: ["is", "isNot"],
  MetActivityRelationFilter: ["is", "isNot"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  CompletedExerciseCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "connect"],
  WeightCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "connect"],
  ConsumedFoodCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  CompletedExerciseUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  WeightUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ConsumedFoodUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  CompletedExerciseCreateNestedManyWithoutMetActivityInput: ["create", "connectOrCreate", "connect"],
  FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  CompletedExerciseUpdateManyWithoutMetActivityInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutCompletedExerciseInput: ["create", "connectOrCreate", "connect"],
  MetActivityCreateNestedOneWithoutCompletedExerciseInput: ["create", "connectOrCreate", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutCompletedExerciseInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MetActivityUpdateOneWithoutCompletedExerciseInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedOneWithoutWeightInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutWeightInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutConsumedFoodInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutConsumedFoodInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  CompletedExerciseCreateWithoutUserInput: ["notes", "completedAt", "MetActivity"],
  CompletedExerciseCreateOrConnectWithoutUserInput: ["where", "create"],
  WeightCreateWithoutUserInput: ["weight", "loggedAt", "time"],
  WeightCreateOrConnectWithoutUserInput: ["where", "create"],
  ConsumedFoodCreateWithoutUserInput: ["name", "notes", "calories", "protien", "fat", "carbs"],
  ConsumedFoodCreateOrConnectWithoutUserInput: ["where", "create"],
  CompletedExerciseUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  CompletedExerciseUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  CompletedExerciseUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  CompletedExerciseScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "metActivityId", "notes", "completedAt"],
  WeightUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  WeightUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  WeightUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  WeightScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "weight", "loggedAt", "time"],
  ConsumedFoodUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  ConsumedFoodUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  ConsumedFoodUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  ConsumedFoodScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "name", "notes", "calories", "protien", "fat", "carbs"],
  CompletedExerciseCreateWithoutMetActivityInput: ["notes", "completedAt", "User"],
  CompletedExerciseCreateOrConnectWithoutMetActivityInput: ["where", "create"],
  CompletedExerciseUpsertWithWhereUniqueWithoutMetActivityInput: ["where", "update", "create"],
  CompletedExerciseUpdateWithWhereUniqueWithoutMetActivityInput: ["where", "data"],
  CompletedExerciseUpdateManyWithWhereWithoutMetActivityInput: ["where", "data"],
  UserCreateWithoutCompletedExerciseInput: ["username", "password", "units", "name", "Weight", "ConsumedFood"],
  UserCreateOrConnectWithoutCompletedExerciseInput: ["where", "create"],
  MetActivityCreateWithoutCompletedExerciseInput: ["metId", "mets", "type", "name"],
  MetActivityCreateOrConnectWithoutCompletedExerciseInput: ["where", "create"],
  UserUpsertWithoutCompletedExerciseInput: ["update", "create"],
  UserUpdateWithoutCompletedExerciseInput: ["username", "password", "units", "name", "Weight", "ConsumedFood"],
  MetActivityUpsertWithoutCompletedExerciseInput: ["update", "create"],
  MetActivityUpdateWithoutCompletedExerciseInput: ["metId", "mets", "type", "name"],
  UserCreateWithoutWeightInput: ["username", "password", "units", "name", "CompletedExercise", "ConsumedFood"],
  UserCreateOrConnectWithoutWeightInput: ["where", "create"],
  UserUpsertWithoutWeightInput: ["update", "create"],
  UserUpdateWithoutWeightInput: ["username", "password", "units", "name", "CompletedExercise", "ConsumedFood"],
  UserCreateWithoutConsumedFoodInput: ["username", "password", "units", "name", "CompletedExercise", "Weight"],
  UserCreateOrConnectWithoutConsumedFoodInput: ["where", "create"],
  UserUpsertWithoutConsumedFoodInput: ["update", "create"],
  UserUpdateWithoutConsumedFoodInput: ["username", "password", "units", "name", "CompletedExercise", "Weight"],
  CompletedExerciseUpdateWithoutUserInput: ["notes", "completedAt", "MetActivity"],
  WeightUpdateWithoutUserInput: ["weight", "loggedAt", "time"],
  ConsumedFoodUpdateWithoutUserInput: ["name", "notes", "calories", "protien", "fat", "carbs"],
  CompletedExerciseUpdateWithoutMetActivityInput: ["notes", "completedAt", "User"]
};
const outputsInfo = {
  Query: ["findFirstUser", "findManyUser", "aggregateUser", "findUniqueUser", "findFirstMetActivity", "findManyMetActivity", "aggregateMetActivity", "findUniqueMetActivity", "findFirstCompletedExercise", "findManyCompletedExercise", "aggregateCompletedExercise", "findUniqueCompletedExercise", "findFirstWeight", "findManyWeight", "aggregateWeight", "findUniqueWeight", "findFirstConsumedFood", "findManyConsumedFood", "aggregateConsumedFood", "findUniqueConsumedFood"],
  Mutation: ["createOneUser", "upsertOneUser", "deleteOneUser", "updateOneUser", "updateManyUser", "deleteManyUser", "createOneMetActivity", "upsertOneMetActivity", "deleteOneMetActivity", "updateOneMetActivity", "updateManyMetActivity", "deleteManyMetActivity", "createOneCompletedExercise", "upsertOneCompletedExercise", "deleteOneCompletedExercise", "updateOneCompletedExercise", "updateManyCompletedExercise", "deleteManyCompletedExercise", "createOneWeight", "upsertOneWeight", "deleteOneWeight", "updateOneWeight", "updateManyWeight", "deleteManyWeight", "createOneConsumedFood", "upsertOneConsumedFood", "deleteOneConsumedFood", "updateOneConsumedFood", "updateManyConsumedFood", "deleteManyConsumedFood", "executeRaw", "queryRaw"],
  AggregateUser: ["count", "avg", "sum", "min", "max"],
  AggregateMetActivity: ["count", "avg", "sum", "min", "max"],
  AggregateCompletedExercise: ["count", "avg", "sum", "min", "max"],
  AggregateWeight: ["count", "avg", "sum", "min", "max"],
  AggregateConsumedFood: ["count", "avg", "sum", "min", "max"],
  AffectedRowsOutput: ["count"],
  UserCountAggregate: ["id", "username", "password", "units", "name", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "username", "password", "units", "name"],
  UserMaxAggregate: ["id", "username", "password", "units", "name"],
  MetActivityCountAggregate: ["id", "metId", "mets", "type", "name", "_all"],
  MetActivityAvgAggregate: ["id", "metId", "mets"],
  MetActivitySumAggregate: ["id", "metId", "mets"],
  MetActivityMinAggregate: ["id", "metId", "mets", "type", "name"],
  MetActivityMaxAggregate: ["id", "metId", "mets", "type", "name"],
  CompletedExerciseCountAggregate: ["id", "userId", "metActivityId", "notes", "completedAt", "_all"],
  CompletedExerciseAvgAggregate: ["id", "userId", "metActivityId"],
  CompletedExerciseSumAggregate: ["id", "userId", "metActivityId"],
  CompletedExerciseMinAggregate: ["id", "userId", "metActivityId", "notes", "completedAt"],
  CompletedExerciseMaxAggregate: ["id", "userId", "metActivityId", "notes", "completedAt"],
  WeightCountAggregate: ["id", "userId", "weight", "loggedAt", "time", "_all"],
  WeightAvgAggregate: ["id", "userId", "weight"],
  WeightSumAggregate: ["id", "userId", "weight"],
  WeightMinAggregate: ["id", "userId", "weight", "loggedAt", "time"],
  WeightMaxAggregate: ["id", "userId", "weight", "loggedAt", "time"],
  ConsumedFoodCountAggregate: ["id", "userId", "name", "notes", "calories", "protien", "fat", "carbs", "_all"],
  ConsumedFoodAvgAggregate: ["id", "userId", "calories", "protien", "fat", "carbs"],
  ConsumedFoodSumAggregate: ["id", "userId", "calories", "protien", "fat", "carbs"],
  ConsumedFoodMinAggregate: ["id", "userId", "name", "notes", "calories", "protien", "fat", "carbs"],
  ConsumedFoodMaxAggregate: ["id", "userId", "name", "notes", "calories", "protien", "fat", "carbs"],
  User: ["id", "username", "password", "units", "name", "CompletedExercise", "Weight", "ConsumedFood"],
  MetActivity: ["id", "metId", "mets", "type", "name", "CompletedExercise"],
  CompletedExercise: ["id", "User", "userId", "MetActivity", "metActivityId", "notes", "completedAt"],
  Weight: ["id", "User", "userId", "weight", "loggedAt", "time"],
  ConsumedFood: ["id", "User", "userId", "name", "notes", "calories", "protien", "fat", "carbs"]
};
const argsInfo = {
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  FindUniqueMetActivityArgs: ["where"],
  FindFirstMetActivityArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMetActivityArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateMetActivityArgs: ["data"],
  DeleteMetActivityArgs: ["where"],
  UpdateMetActivityArgs: ["data", "where"],
  DeleteManyMetActivityArgs: ["where"],
  UpdateManyMetActivityArgs: ["data", "where"],
  UpsertMetActivityArgs: ["where", "create", "update"],
  AggregateMetActivityArgs: ["where", "orderBy", "cursor", "take", "skip"],
  FindUniqueCompletedExerciseArgs: ["where"],
  FindFirstCompletedExerciseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCompletedExerciseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCompletedExerciseArgs: ["data"],
  DeleteCompletedExerciseArgs: ["where"],
  UpdateCompletedExerciseArgs: ["data", "where"],
  DeleteManyCompletedExerciseArgs: ["where"],
  UpdateManyCompletedExerciseArgs: ["data", "where"],
  UpsertCompletedExerciseArgs: ["where", "create", "update"],
  AggregateCompletedExerciseArgs: ["where", "orderBy", "cursor", "take", "skip"],
  FindUniqueWeightArgs: ["where"],
  FindFirstWeightArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyWeightArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateWeightArgs: ["data"],
  DeleteWeightArgs: ["where"],
  UpdateWeightArgs: ["data", "where"],
  DeleteManyWeightArgs: ["where"],
  UpdateManyWeightArgs: ["data", "where"],
  UpsertWeightArgs: ["where", "create", "update"],
  AggregateWeightArgs: ["where", "orderBy", "cursor", "take", "skip"],
  FindUniqueConsumedFoodArgs: ["where"],
  FindFirstConsumedFoodArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyConsumedFoodArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateConsumedFoodArgs: ["data"],
  DeleteConsumedFoodArgs: ["where"],
  UpdateConsumedFoodArgs: ["data", "where"],
  DeleteManyConsumedFoodArgs: ["where"],
  UpdateManyConsumedFoodArgs: ["data", "where"],
  UpsertConsumedFoodArgs: ["where", "create", "update"],
  AggregateConsumedFoodArgs: ["where", "orderBy", "cursor", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = resolversInfo[modelName as keyof typeof resolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            crudTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
          );
          allActionsDecorator(
            actionTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
          );
        }
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
        );
        decorator(
          actionTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
        );
      }
    }
  }
}

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            relationResolverTarget,
            relationResolverActionName,
            Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
          );
        }
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      for (const decorator of decorators) {
        decorator(
          relationResolverTarget,
          relationResolverActionName,
          Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
        );
      }
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        for (const allFieldsDecorator of allFieldsDecorators) {
          allFieldsDecorator(typePrototype, typeFieldName);
        }
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      for (const fieldDecorator of fieldDecorators) {
        fieldDecorator(typePrototype, typeFieldName);
      }
    }
  }
}

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}







