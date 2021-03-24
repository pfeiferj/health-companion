import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WeightAvgAggregate } from "../outputs/WeightAvgAggregate";
import { WeightCountAggregate } from "../outputs/WeightCountAggregate";
import { WeightMaxAggregate } from "../outputs/WeightMaxAggregate";
import { WeightMinAggregate } from "../outputs/WeightMinAggregate";
import { WeightSumAggregate } from "../outputs/WeightSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateWeight {
  @TypeGraphQL.Field(_type => WeightCountAggregate, {
    nullable: true
  })
  count!: WeightCountAggregate | null;

  @TypeGraphQL.Field(_type => WeightAvgAggregate, {
    nullable: true
  })
  avg!: WeightAvgAggregate | null;

  @TypeGraphQL.Field(_type => WeightSumAggregate, {
    nullable: true
  })
  sum!: WeightSumAggregate | null;

  @TypeGraphQL.Field(_type => WeightMinAggregate, {
    nullable: true
  })
  min!: WeightMinAggregate | null;

  @TypeGraphQL.Field(_type => WeightMaxAggregate, {
    nullable: true
  })
  max!: WeightMaxAggregate | null;
}
