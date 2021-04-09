import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MetActivityUpdateOneWithoutCompletedExerciseInput } from "../inputs/MetActivityUpdateOneWithoutCompletedExerciseInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCompletedExerciseInput } from "../inputs/UserUpdateOneRequiredWithoutCompletedExerciseInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CompletedExerciseUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  notes?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  completedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCompletedExerciseInput, {
    nullable: true
  })
  User?: UserUpdateOneRequiredWithoutCompletedExerciseInput | undefined;

  @TypeGraphQL.Field(_type => MetActivityUpdateOneWithoutCompletedExerciseInput, {
    nullable: true
  })
  MetActivity?: MetActivityUpdateOneWithoutCompletedExerciseInput | undefined;
}
