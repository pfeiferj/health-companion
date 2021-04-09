import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MetActivityCreateInput } from "../../../inputs/MetActivityCreateInput";
import { MetActivityUpdateInput } from "../../../inputs/MetActivityUpdateInput";
import { MetActivityWhereUniqueInput } from "../../../inputs/MetActivityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertMetActivityArgs {
  @TypeGraphQL.Field(_type => MetActivityWhereUniqueInput, {
    nullable: false
  })
  where!: MetActivityWhereUniqueInput;

  @TypeGraphQL.Field(_type => MetActivityCreateInput, {
    nullable: false
  })
  create!: MetActivityCreateInput;

  @TypeGraphQL.Field(_type => MetActivityUpdateInput, {
    nullable: false
  })
  update!: MetActivityUpdateInput;
}
