import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompletedExerciseCreateOrConnectWithoutMetActivityInput } from "../inputs/CompletedExerciseCreateOrConnectWithoutMetActivityInput";
import { CompletedExerciseCreateWithoutMetActivityInput } from "../inputs/CompletedExerciseCreateWithoutMetActivityInput";
import { CompletedExerciseScalarWhereInput } from "../inputs/CompletedExerciseScalarWhereInput";
import { CompletedExerciseUpdateManyWithWhereWithoutMetActivityInput } from "../inputs/CompletedExerciseUpdateManyWithWhereWithoutMetActivityInput";
import { CompletedExerciseUpdateWithWhereUniqueWithoutMetActivityInput } from "../inputs/CompletedExerciseUpdateWithWhereUniqueWithoutMetActivityInput";
import { CompletedExerciseUpsertWithWhereUniqueWithoutMetActivityInput } from "../inputs/CompletedExerciseUpsertWithWhereUniqueWithoutMetActivityInput";
import { CompletedExerciseWhereUniqueInput } from "../inputs/CompletedExerciseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompletedExerciseUpdateManyWithoutMetActivityInput {
  @TypeGraphQL.Field(_type => [CompletedExerciseCreateWithoutMetActivityInput], {
    nullable: true
  })
  create?: CompletedExerciseCreateWithoutMetActivityInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompletedExerciseCreateOrConnectWithoutMetActivityInput], {
    nullable: true
  })
  connectOrCreate?: CompletedExerciseCreateOrConnectWithoutMetActivityInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompletedExerciseUpsertWithWhereUniqueWithoutMetActivityInput], {
    nullable: true
  })
  upsert?: CompletedExerciseUpsertWithWhereUniqueWithoutMetActivityInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [CompletedExerciseUpdateWithWhereUniqueWithoutMetActivityInput], {
    nullable: true
  })
  update?: CompletedExerciseUpdateWithWhereUniqueWithoutMetActivityInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompletedExerciseUpdateManyWithWhereWithoutMetActivityInput], {
    nullable: true
  })
  updateMany?: CompletedExerciseUpdateManyWithWhereWithoutMetActivityInput[] | undefined;

  @TypeGraphQL.Field(_type => [CompletedExerciseScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CompletedExerciseScalarWhereInput[] | undefined;
}
