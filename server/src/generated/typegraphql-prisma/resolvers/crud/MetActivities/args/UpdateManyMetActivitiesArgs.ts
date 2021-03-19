import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MetActivitiesUpdateManyMutationInput } from "../../../inputs/MetActivitiesUpdateManyMutationInput";
import { MetActivitiesWhereInput } from "../../../inputs/MetActivitiesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMetActivitiesArgs {
  @TypeGraphQL.Field(_type => MetActivitiesUpdateManyMutationInput, {
    nullable: false
  })
  data!: MetActivitiesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MetActivitiesWhereInput, {
    nullable: true
  })
  where?: MetActivitiesWhereInput | undefined;
}
