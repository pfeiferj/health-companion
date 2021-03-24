import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCompletedExerciseArgs } from "./args/AggregateCompletedExerciseArgs";
import { CreateCompletedExerciseArgs } from "./args/CreateCompletedExerciseArgs";
import { DeleteCompletedExerciseArgs } from "./args/DeleteCompletedExerciseArgs";
import { DeleteManyCompletedExerciseArgs } from "./args/DeleteManyCompletedExerciseArgs";
import { FindFirstCompletedExerciseArgs } from "./args/FindFirstCompletedExerciseArgs";
import { FindManyCompletedExerciseArgs } from "./args/FindManyCompletedExerciseArgs";
import { FindUniqueCompletedExerciseArgs } from "./args/FindUniqueCompletedExerciseArgs";
import { UpdateCompletedExerciseArgs } from "./args/UpdateCompletedExerciseArgs";
import { UpdateManyCompletedExerciseArgs } from "./args/UpdateManyCompletedExerciseArgs";
import { UpsertCompletedExerciseArgs } from "./args/UpsertCompletedExerciseArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { CompletedExercise } from "../../../models/CompletedExercise";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCompletedExercise } from "../../outputs/AggregateCompletedExercise";

@TypeGraphQL.Resolver(_of => CompletedExercise)
export class CompletedExerciseCrudResolver {
  @TypeGraphQL.Query(_returns => CompletedExercise, {
    nullable: true
  })
  async completedExercise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCompletedExerciseArgs): Promise<CompletedExercise | null> {
    return getPrismaFromContext(ctx).completedExercise.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => CompletedExercise, {
    nullable: true
  })
  async findFirstCompletedExercise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCompletedExerciseArgs): Promise<CompletedExercise | null> {
    return getPrismaFromContext(ctx).completedExercise.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [CompletedExercise], {
    nullable: false
  })
  async completedExercises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCompletedExerciseArgs): Promise<CompletedExercise[]> {
    return getPrismaFromContext(ctx).completedExercise.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CompletedExercise, {
    nullable: false
  })
  async createCompletedExercise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCompletedExerciseArgs): Promise<CompletedExercise> {
    return getPrismaFromContext(ctx).completedExercise.create(args);
  }

  @TypeGraphQL.Mutation(_returns => CompletedExercise, {
    nullable: true
  })
  async deleteCompletedExercise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCompletedExerciseArgs): Promise<CompletedExercise | null> {
    return getPrismaFromContext(ctx).completedExercise.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => CompletedExercise, {
    nullable: true
  })
  async updateCompletedExercise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCompletedExerciseArgs): Promise<CompletedExercise | null> {
    return getPrismaFromContext(ctx).completedExercise.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCompletedExercise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCompletedExerciseArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).completedExercise.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCompletedExercise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCompletedExerciseArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).completedExercise.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CompletedExercise, {
    nullable: false
  })
  async upsertCompletedExercise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCompletedExerciseArgs): Promise<CompletedExercise> {
    return getPrismaFromContext(ctx).completedExercise.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCompletedExercise, {
    nullable: false
  })
  async aggregateCompletedExercise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCompletedExerciseArgs): Promise<AggregateCompletedExercise> {
    return getPrismaFromContext(ctx).completedExercise.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
