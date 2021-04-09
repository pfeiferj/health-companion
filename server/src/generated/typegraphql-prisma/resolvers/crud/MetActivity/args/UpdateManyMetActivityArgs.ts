import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MetActivityUpdateManyMutationInput } from "../../../inputs/MetActivityUpdateManyMutationInput";
import { MetActivityWhereInput } from "../../../inputs/MetActivityWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMetActivityArgs {
  @TypeGraphQL.Field(_type => MetActivityUpdateManyMutationInput, {
    nullable: false
  })
  data!: MetActivityUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MetActivityWhereInput, {
    nullable: true
  })
  where?: MetActivityWhereInput | undefined;
}
