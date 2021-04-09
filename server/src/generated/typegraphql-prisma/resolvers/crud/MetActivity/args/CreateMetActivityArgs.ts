import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MetActivityCreateInput } from "../../../inputs/MetActivityCreateInput";

@TypeGraphQL.ArgsType()
export class CreateMetActivityArgs {
  @TypeGraphQL.Field(_type => MetActivityCreateInput, {
    nullable: false
  })
  data!: MetActivityCreateInput;
}
