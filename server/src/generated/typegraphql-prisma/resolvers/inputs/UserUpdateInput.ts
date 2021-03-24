import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompletedExerciseUpdateManyWithoutUserInput } from "../inputs/CompletedExerciseUpdateManyWithoutUserInput";
import { ConsumedFoodUpdateManyWithoutUserInput } from "../inputs/ConsumedFoodUpdateManyWithoutUserInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { WeightUpdateManyWithoutUserInput } from "../inputs/WeightUpdateManyWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  username?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  units?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CompletedExerciseUpdateManyWithoutUserInput, {
    nullable: true
  })
  CompletedExercise?: CompletedExerciseUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => WeightUpdateManyWithoutUserInput, {
    nullable: true
  })
  Weight?: WeightUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ConsumedFoodUpdateManyWithoutUserInput, {
    nullable: true
  })
  ConsumedFood?: ConsumedFoodUpdateManyWithoutUserInput | undefined;
}
