import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompletedExerciseCreateNestedManyWithoutUserInput } from "../inputs/CompletedExerciseCreateNestedManyWithoutUserInput";
import { WeightCreateNestedManyWithoutUserInput } from "../inputs/WeightCreateNestedManyWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateWithoutConsumedFoodInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  units!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => CompletedExerciseCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  CompletedExercise?: CompletedExerciseCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => WeightCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  Weight?: WeightCreateNestedManyWithoutUserInput | undefined;
}
