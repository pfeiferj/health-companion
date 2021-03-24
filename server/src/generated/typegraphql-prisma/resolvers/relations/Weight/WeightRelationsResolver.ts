import * as TypeGraphQL from "type-graphql";
import { User } from "../../../models/User";
import { Weight } from "../../../models/Weight";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Weight)
export class WeightRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async User(@TypeGraphQL.Root() weight: Weight, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).weight.findUnique({
      where: {
        id: weight.id,
      },
    }).User({});
  }
}
