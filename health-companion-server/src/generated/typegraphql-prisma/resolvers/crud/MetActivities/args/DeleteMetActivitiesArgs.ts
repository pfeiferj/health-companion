import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MetActivitiesWhereUniqueInput } from "../../../inputs/MetActivitiesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteMetActivitiesArgs {
  @TypeGraphQL.Field(_type => MetActivitiesWhereUniqueInput, {
    nullable: false
  })
  where!: MetActivitiesWhereUniqueInput;
}
