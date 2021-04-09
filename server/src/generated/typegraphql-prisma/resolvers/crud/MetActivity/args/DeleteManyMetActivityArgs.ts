import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MetActivityWhereInput } from "../../../inputs/MetActivityWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMetActivityArgs {
  @TypeGraphQL.Field(_type => MetActivityWhereInput, {
    nullable: true
  })
  where?: MetActivityWhereInput | undefined;
}
