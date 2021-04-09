import * as TypeGraphQL from "type-graphql";
import { UpdateMetActivityArgs } from "./args/UpdateMetActivityArgs";
import { MetActivity } from "../../../models/MetActivity";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MetActivity)
export class UpdateMetActivityResolver {
  @TypeGraphQL.Mutation(_returns => MetActivity, {
    nullable: true
  })
  async updateMetActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateMetActivityArgs): Promise<MetActivity | null> {
    return getPrismaFromContext(ctx).metActivity.update(args);
  }
}
