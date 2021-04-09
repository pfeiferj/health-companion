import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { MetActivity } from "../models/MetActivity";
import { User } from "../models/User";

/** An exercise completed by a user. Can be associated to a metActivity to estimate calories burnt. */
@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: "An exercise completed by a user. Can be associated to a metActivity to estimate calories burnt."
})
export class CompletedExercise {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  User?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  MetActivity?: MetActivity | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  metActivityId?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notes?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  completedAt!: Date;
}
