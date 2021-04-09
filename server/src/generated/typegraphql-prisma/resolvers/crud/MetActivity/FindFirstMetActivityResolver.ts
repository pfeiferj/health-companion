import * as TypeGraphQL from "type-graphql";
import { FindFirstMetActivityArgs } from "./args/FindFirstMetActivityArgs";
import { MetActivity } from "../../../models/MetActivity";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MetActivity)
export class FindFirstMetActivityResolver {
  @TypeGraphQL.Query(_returns => MetActivity, {
    nullable: true
  })
  async findFirstMetActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstMetActivityArgs): Promise<MetActivity | null> {
    return getPrismaFromContext(ctx).metActivity.findFirst(args);
  }
}
