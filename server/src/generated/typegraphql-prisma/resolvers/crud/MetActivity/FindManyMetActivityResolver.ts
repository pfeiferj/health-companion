import * as TypeGraphQL from "type-graphql";
import { FindManyMetActivityArgs } from "./args/FindManyMetActivityArgs";
import { MetActivity } from "../../../models/MetActivity";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MetActivity)
export class FindManyMetActivityResolver {
  @TypeGraphQL.Query(_returns => [MetActivity], {
    nullable: false
  })
  async metActivities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyMetActivityArgs): Promise<MetActivity[]> {
    return getPrismaFromContext(ctx).metActivity.findMany(args);
  }
}
