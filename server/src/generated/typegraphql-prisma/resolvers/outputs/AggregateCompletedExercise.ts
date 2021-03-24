import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompletedExerciseAvgAggregate } from "../outputs/CompletedExerciseAvgAggregate";
import { CompletedExerciseCountAggregate } from "../outputs/CompletedExerciseCountAggregate";
import { CompletedExerciseMaxAggregate } from "../outputs/CompletedExerciseMaxAggregate";
import { CompletedExerciseMinAggregate } from "../outputs/CompletedExerciseMinAggregate";
import { CompletedExerciseSumAggregate } from "../outputs/CompletedExerciseSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateCompletedExercise {
  @TypeGraphQL.Field(_type => CompletedExerciseCountAggregate, {
    nullable: true
  })
  count!: CompletedExerciseCountAggregate | null;

  @TypeGraphQL.Field(_type => CompletedExerciseAvgAggregate, {
    nullable: true
  })
  avg!: CompletedExerciseAvgAggregate | null;

  @TypeGraphQL.Field(_type => CompletedExerciseSumAggregate, {
    nullable: true
  })
  sum!: CompletedExerciseSumAggregate | null;

  @TypeGraphQL.Field(_type => CompletedExerciseMinAggregate, {
    nullable: true
  })
  min!: CompletedExerciseMinAggregate | null;

  @TypeGraphQL.Field(_type => CompletedExerciseMaxAggregate, {
    nullable: true
  })
  max!: CompletedExerciseMaxAggregate | null;
}
