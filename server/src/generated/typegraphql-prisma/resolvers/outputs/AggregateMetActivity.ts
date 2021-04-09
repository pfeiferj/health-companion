import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MetActivityAvgAggregate } from "../outputs/MetActivityAvgAggregate";
import { MetActivityCountAggregate } from "../outputs/MetActivityCountAggregate";
import { MetActivityMaxAggregate } from "../outputs/MetActivityMaxAggregate";
import { MetActivityMinAggregate } from "../outputs/MetActivityMinAggregate";
import { MetActivitySumAggregate } from "../outputs/MetActivitySumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateMetActivity {
  @TypeGraphQL.Field(_type => MetActivityCountAggregate, {
    nullable: true
  })
  count!: MetActivityCountAggregate | null;

  @TypeGraphQL.Field(_type => MetActivityAvgAggregate, {
    nullable: true
  })
  avg!: MetActivityAvgAggregate | null;

  @TypeGraphQL.Field(_type => MetActivitySumAggregate, {
    nullable: true
  })
  sum!: MetActivitySumAggregate | null;

  @TypeGraphQL.Field(_type => MetActivityMinAggregate, {
    nullable: true
  })
  min!: MetActivityMinAggregate | null;

  @TypeGraphQL.Field(_type => MetActivityMaxAggregate, {
    nullable: true
  })
  max!: MetActivityMaxAggregate | null;
}
