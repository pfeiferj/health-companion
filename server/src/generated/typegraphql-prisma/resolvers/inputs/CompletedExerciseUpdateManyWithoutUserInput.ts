import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompletedExerciseCreateOrConnectWithoutUserInput } from "../inputs/CompletedExerciseCreateOrConnectWithoutUserInput";
import { CompletedExerciseCreateWithoutUserInput } from "../inputs/CompletedExerciseCreateWithoutUserInput";
import { CompletedExerciseScalarWhereInput } from "../inputs/CompletedExerciseScalarWhereInput";
import { CompletedExerciseUpdateManyWithWhereWithoutUserInput } from "../inputs/CompletedExerciseUpdateManyWithWhereWithoutUserInput";
import { CompletedExerciseUpdateWithWhereUniqueWithoutUserInput } from "../inputs/CompletedExerciseUpdateWithWhereUniqueWithoutUserInput";
import { CompletedExerciseUpsertWithWhereUniqueWithoutUserInput } from "../inputs/CompletedExerciseUpsertWithWhereUniqueWithoutUserInput";
import { CompletedExerciseWhereUniqueInput } from "../inputs/CompletedExerciseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompletedExerciseUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [CompletedExerciseCreateWithoutUserInput], {
    nullable: true
  })
  create?: CompletedExerciseCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompletedExerciseCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: CompletedExerciseCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompletedExerciseUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: CompletedExerciseUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompletedExerciseWhereUniqueInput], {
    nullable: true
  })
  connect?: CompletedExerciseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompletedExerciseWhereUniqueInput], {
    nullable: true
  })
  set?: CompletedExerciseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompletedExerciseWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CompletedExerciseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompletedExerciseWhereUniqueInput], {
    nullable: true
  })
  delete?: CompletedExerciseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompletedExerciseUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: CompletedExerciseUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompletedExerciseUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: CompletedExerciseUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompletedExerciseScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CompletedExerciseScalarWhereInput[] | undefined;
}
