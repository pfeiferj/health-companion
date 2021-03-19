import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MetActivitiesCreateInput } from "../../../inputs/MetActivitiesCreateInput";
import { MetActivitiesUpdateInput } from "../../../inputs/MetActivitiesUpdateInput";
import { MetActivitiesWhereUniqueInput } from "../../../inputs/MetActivitiesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertMetActivitiesArgs {
  @TypeGraphQL.Field(_type => MetActivitiesWhereUniqueInput, {
    nullable: false
  })
  where!: MetActivitiesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MetActivitiesCreateInput, {
    nullable: false
  })
  create!: MetActivitiesCreateInput;

  @TypeGraphQL.Field(_type => MetActivitiesUpdateInput, {
    nullable: false
  })
  update!: MetActivitiesUpdateInput;
}
