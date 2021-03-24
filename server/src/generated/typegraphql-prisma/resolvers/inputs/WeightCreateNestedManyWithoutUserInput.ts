import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WeightCreateOrConnectWithoutUserInput } from "../inputs/WeightCreateOrConnectWithoutUserInput";
import { WeightCreateWithoutUserInput } from "../inputs/WeightCreateWithoutUserInput";
import { WeightWhereUniqueInput } from "../inputs/WeightWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class WeightCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [WeightCreateWithoutUserInput], {
    nullable: true
  })
  create?: WeightCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeightCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: WeightCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeightWhereUniqueInput], {
    nullable: true
  })
  connect?: WeightWhereUniqueInput[] | undefined;
}
