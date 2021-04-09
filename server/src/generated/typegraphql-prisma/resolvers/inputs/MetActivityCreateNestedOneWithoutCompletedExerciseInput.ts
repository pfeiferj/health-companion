import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MetActivityCreateOrConnectWithoutCompletedExerciseInput } from "../inputs/MetActivityCreateOrConnectWithoutCompletedExerciseInput";
import { MetActivityCreateWithoutCompletedExerciseInput } from "../inputs/MetActivityCreateWithoutCompletedExerciseInput";
import { MetActivityWhereUniqueInput } from "../inputs/MetActivityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MetActivityCreateNestedOneWithoutCompletedExerciseInput {
  @TypeGraphQL.Field(_type => MetActivityCreateWithoutCompletedExerciseInput, {
    nullable: true
  })
  create?: MetActivityCreateWithoutCompletedExerciseInput | undefined;

  @TypeGraphQL.Field(_type => MetActivityCreateOrConnectWithoutCompletedExerciseInput, {
    nullable: true
  })
  connectOrCreate?: MetActivityCreateOrConnectWithoutCompletedExerciseInput | undefined;

  @TypeGraphQL.Field(_type => MetActivityWhereUniqueInput, {
    nullable: true
  })
  connect?: MetActivityWhereUniqueInput | undefined;
}
