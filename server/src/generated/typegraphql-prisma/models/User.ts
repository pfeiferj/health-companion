import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CompletedExercise } from "../models/CompletedExercise";
import { ConsumedFood } from "../models/ConsumedFood";
import { Weight } from "../models/Weight";

/** A user of the application */
@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: "A user of the application"
})
export class User {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  units!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  CompletedExercise?: CompletedExercise[];

  Weight?: Weight[];

  ConsumedFood?: ConsumedFood[];
}
