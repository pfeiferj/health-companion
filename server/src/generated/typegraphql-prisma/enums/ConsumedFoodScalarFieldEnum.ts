import * as TypeGraphQL from "type-graphql";

export enum ConsumedFoodScalarFieldEnum {
  id = "id",
  userId = "userId",
  name = "name",
  notes = "notes",
  calories = "calories",
  protien = "protien",
  fat = "fat",
  carbs = "carbs"
}
TypeGraphQL.registerEnumType(ConsumedFoodScalarFieldEnum, {
  name: "ConsumedFoodScalarFieldEnum",
  description: undefined,
});
