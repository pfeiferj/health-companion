import * as TypeGraphQL from "type-graphql";
import { DeleteMetActivityArgs } from "./args/DeleteMetActivityArgs";
import { MetActivity } from "../../../models/MetActivity";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MetActivity)
export class DeleteMetActivityResolver {
  @TypeGraphQL.Mutation(_returns => MetActivity, {
    nullable: true
  })
  async deleteMetActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteMetActivityArgs): Promise<MetActivity | null> {
    return getPrismaFromContext(ctx).metActivity.delete(args);
  }
}
