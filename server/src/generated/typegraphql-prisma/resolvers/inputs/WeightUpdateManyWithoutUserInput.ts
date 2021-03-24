import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WeightCreateOrConnectWithoutUserInput } from "../inputs/WeightCreateOrConnectWithoutUserInput";
import { WeightCreateWithoutUserInput } from "../inputs/WeightCreateWithoutUserInput";
import { WeightScalarWhereInput } from "../inputs/WeightScalarWhereInput";
import { WeightUpdateManyWithWhereWithoutUserInput } from "../inputs/WeightUpdateManyWithWhereWithoutUserInput";
import { WeightUpdateWithWhereUniqueWithoutUserInput } from "../inputs/WeightUpdateWithWhereUniqueWithoutUserInput";
import { WeightUpsertWithWhereUniqueWithoutUserInput } from "../inputs/WeightUpsertWithWhereUniqueWithoutUserInput";
import { WeightWhereUniqueInput } from "../inputs/WeightWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class WeightUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [WeightCreateWithoutUserInput], {
    nullable: true
  })
  create?: WeightCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeightCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: WeightCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeightUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: WeightUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeightWhereUniqueInput], {
    nullable: true
  })
  connect?: WeightWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeightWhereUniqueInput], {
    nullable: true
  })
  set?: WeightWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeightWhereUniqueInput], {
    nullable: true
  })
  disconnect?: WeightWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeightWhereUniqueInput], {
    nullable: true
  })
  delete?: WeightWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeightUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: WeightUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeightUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: WeightUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [WeightScalarWhereInput], {
    nullable: true
  })
  deleteMany?: WeightScalarWhereInput[] | undefined;
}
