import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsumedFoodCreateOrConnectWithoutUserInput } from "../inputs/ConsumedFoodCreateOrConnectWithoutUserInput";
import { ConsumedFoodCreateWithoutUserInput } from "../inputs/ConsumedFoodCreateWithoutUserInput";
import { ConsumedFoodScalarWhereInput } from "../inputs/ConsumedFoodScalarWhereInput";
import { ConsumedFoodUpdateManyWithWhereWithoutUserInput } from "../inputs/ConsumedFoodUpdateManyWithWhereWithoutUserInput";
import { ConsumedFoodUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ConsumedFoodUpdateWithWhereUniqueWithoutUserInput";
import { ConsumedFoodUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ConsumedFoodUpsertWithWhereUniqueWithoutUserInput";
import { ConsumedFoodWhereUniqueInput } from "../inputs/ConsumedFoodWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ConsumedFoodUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ConsumedFoodCreateWithoutUserInput], {
    nullable: true
  })
  create?: ConsumedFoodCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsumedFoodCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ConsumedFoodCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsumedFoodUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ConsumedFoodUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsumedFoodWhereUniqueInput], {
    nullable: true
  })
  connect?: ConsumedFoodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsumedFoodWhereUniqueInput], {
    nullable: true
  })
  set?: ConsumedFoodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsumedFoodWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ConsumedFoodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsumedFoodWhereUniqueInput], {
    nullable: true
  })
  delete?: ConsumedFoodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsumedFoodUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ConsumedFoodUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsumedFoodUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ConsumedFoodUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsumedFoodScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ConsumedFoodScalarWhereInput[] | undefined;
}
