import * as TypeGraphQL from "type-graphql";

export enum WeightScalarFieldEnum {
  id = "id",
  userId = "userId",
  weight = "weight",
  loggedAt = "loggedAt",
  time = "time"
}
TypeGraphQL.registerEnumType(WeightScalarFieldEnum, {
  name: "WeightScalarFieldEnum",
  description: undefined,
});
