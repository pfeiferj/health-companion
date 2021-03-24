import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsumedFoodAvgAggregate } from "../outputs/ConsumedFoodAvgAggregate";
import { ConsumedFoodCountAggregate } from "../outputs/ConsumedFoodCountAggregate";
import { ConsumedFoodMaxAggregate } from "../outputs/ConsumedFoodMaxAggregate";
import { ConsumedFoodMinAggregate } from "../outputs/ConsumedFoodMinAggregate";
import { ConsumedFoodSumAggregate } from "../outputs/ConsumedFoodSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateConsumedFood {
  @TypeGraphQL.Field(_type => ConsumedFoodCountAggregate, {
    nullable: true
  })
  count!: ConsumedFoodCountAggregate | null;

  @TypeGraphQL.Field(_type => ConsumedFoodAvgAggregate, {
    nullable: true
  })
  avg!: ConsumedFoodAvgAggregate | null;

  @TypeGraphQL.Field(_type => ConsumedFoodSumAggregate, {
    nullable: true
  })
  sum!: ConsumedFoodSumAggregate | null;

  @TypeGraphQL.Field(_type => ConsumedFoodMinAggregate, {
    nullable: true
  })
  min!: ConsumedFoodMinAggregate | null;

  @TypeGraphQL.Field(_type => ConsumedFoodMaxAggregate, {
    nullable: true
  })
  max!: ConsumedFoodMaxAggregate | null;
}
