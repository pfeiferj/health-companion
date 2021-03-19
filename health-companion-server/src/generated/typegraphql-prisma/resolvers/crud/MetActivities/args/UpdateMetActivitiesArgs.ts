import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MetActivitiesUpdateInput } from "../../../inputs/MetActivitiesUpdateInput";
import { MetActivitiesWhereUniqueInput } from "../../../inputs/MetActivitiesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateMetActivitiesArgs {
  @TypeGraphQL.Field(_type => MetActivitiesUpdateInput, {
    nullable: false
  })
  data!: MetActivitiesUpdateInput;

  @TypeGraphQL.Field(_type => MetActivitiesWhereUniqueInput, {
    nullable: false
  })
  where!: MetActivitiesWhereUniqueInput;
}
