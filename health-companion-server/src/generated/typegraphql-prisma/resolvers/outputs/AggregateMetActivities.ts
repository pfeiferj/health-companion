import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MetActivitiesAvgAggregate } from "../outputs/MetActivitiesAvgAggregate";
import { MetActivitiesCountAggregate } from "../outputs/MetActivitiesCountAggregate";
import { MetActivitiesMaxAggregate } from "../outputs/MetActivitiesMaxAggregate";
import { MetActivitiesMinAggregate } from "../outputs/MetActivitiesMinAggregate";
import { MetActivitiesSumAggregate } from "../outputs/MetActivitiesSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateMetActivities {
  @TypeGraphQL.Field(_type => MetActivitiesCountAggregate, {
    nullable: true
  })
  count!: MetActivitiesCountAggregate | null;

  @TypeGraphQL.Field(_type => MetActivitiesAvgAggregate, {
    nullable: true
  })
  avg!: MetActivitiesAvgAggregate | null;

  @TypeGraphQL.Field(_type => MetActivitiesSumAggregate, {
    nullable: true
  })
  sum!: MetActivitiesSumAggregate | null;

  @TypeGraphQL.Field(_type => MetActivitiesMinAggregate, {
    nullable: true
  })
  min!: MetActivitiesMinAggregate | null;

  @TypeGraphQL.Field(_type => MetActivitiesMaxAggregate, {
    nullable: true
  })
  max!: MetActivitiesMaxAggregate | null;
}
