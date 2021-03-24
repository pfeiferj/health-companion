import * as TypeGraphQL from "type-graphql";
import { ConsumedFood } from "../../../models/ConsumedFood";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ConsumedFood)
export class ConsumedFoodRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async User(@TypeGraphQL.Root() consumedFood: ConsumedFood, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).consumedFood.findUnique({
      where: {
        id: consumedFood.id,
      },
    }).User({});
  }
}
