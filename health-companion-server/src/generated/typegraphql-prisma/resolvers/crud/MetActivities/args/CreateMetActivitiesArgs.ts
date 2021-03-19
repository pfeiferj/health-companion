import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MetActivitiesCreateInput } from "../../../inputs/MetActivitiesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateMetActivitiesArgs {
  @TypeGraphQL.Field(_type => MetActivitiesCreateInput, {
    nullable: false
  })
  data!: MetActivitiesCreateInput;
}
