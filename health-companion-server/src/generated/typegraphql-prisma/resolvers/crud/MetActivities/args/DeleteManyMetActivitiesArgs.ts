import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MetActivitiesWhereInput } from "../../../inputs/MetActivitiesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMetActivitiesArgs {
  @TypeGraphQL.Field(_type => MetActivitiesWhereInput, {
    nullable: true
  })
  where?: MetActivitiesWhereInput | undefined;
}
