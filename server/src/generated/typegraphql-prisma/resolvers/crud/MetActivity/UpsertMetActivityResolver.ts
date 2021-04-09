import * as TypeGraphQL from "type-graphql";
import { UpsertMetActivityArgs } from "./args/UpsertMetActivityArgs";
import { MetActivity } from "../../../models/MetActivity";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MetActivity)
export class UpsertMetActivityResolver {
  @TypeGraphQL.Mutation(_returns => MetActivity, {
    nullable: false
  })
  async upsertMetActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertMetActivityArgs): Promise<MetActivity> {
    return getPrismaFromContext(ctx).metActivity.upsert(args);
  }
}
