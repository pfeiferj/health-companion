import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MetActivityCreateOrConnectWithoutCompletedExerciseInput } from "../inputs/MetActivityCreateOrConnectWithoutCompletedExerciseInput";
import { MetActivityCreateWithoutCompletedExerciseInput } from "../inputs/MetActivityCreateWithoutCompletedExerciseInput";
import { MetActivityUpdateWithoutCompletedExerciseInput } from "../inputs/MetActivityUpdateWithoutCompletedExerciseInput";
import { MetActivityUpsertWithoutCompletedExerciseInput } from "../inputs/MetActivityUpsertWithoutCompletedExerciseInput";
import { MetActivityWhereUniqueInput } from "../inputs/MetActivityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MetActivityUpdateOneWithoutCompletedExerciseInput {
  @TypeGraphQL.Field(_type => MetActivityCreateWithoutCompletedExerciseInput, {
    nullable: true
  })
  create?: MetActivityCreateWithoutCompletedExerciseInput | undefined;

  @TypeGraphQL.Field(_type => MetActivityCreateOrConnectWithoutCompletedExerciseInput, {
    nullable: true
  })
  connectOrCreate?: MetActivityCreateOrConnectWithoutCompletedExerciseInput | undefined;

  @TypeGraphQL.Field(_type => MetActivityUpsertWithoutCompletedExerciseInput, {
    nullable: true
  })
  upsert?: MetActivityUpsertWithoutCompletedExerciseInput | undefined;

  @TypeGraphQL.Field(_type => MetActivityWhereUniqueInput, {
    nullable: true
  })
  connect?: MetActivityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => MetActivityUpdateWithoutCompletedExerciseInput, {
    nullable: true
  })
  update?: MetActivityUpdateWithoutCompletedExerciseInput | undefined;
}
