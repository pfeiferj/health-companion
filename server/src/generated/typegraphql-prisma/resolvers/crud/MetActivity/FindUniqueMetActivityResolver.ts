import * as TypeGraphQL from "type-graphql";
import { FindUniqueMetActivityArgs } from "./args/FindUniqueMetActivityArgs";
import { MetActivity } from "../../../models/MetActivity";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MetActivity)
export class FindUniqueMetActivityResolver {
  @TypeGraphQL.Query(_returns => MetActivity, {
    nullable: true
  })
  async metActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueMetActivityArgs): Promise<MetActivity | null> {
    return getPrismaFromContext(ctx).metActivity.findUnique(args);
  }
}
