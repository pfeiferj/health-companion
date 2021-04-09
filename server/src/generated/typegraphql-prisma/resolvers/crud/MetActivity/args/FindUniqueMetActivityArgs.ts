import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MetActivityWhereUniqueInput } from "../../../inputs/MetActivityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMetActivityArgs {
  @TypeGraphQL.Field(_type => MetActivityWhereUniqueInput, {
    nullable: false
  })
  where!: MetActivityWhereUniqueInput;
}
