import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";

/** The weight of a user at a specific time. */
@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: "The weight of a user at a specific time."
})
export class Weight {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  User?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  weight!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  loggedAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  time!: Date;
}
