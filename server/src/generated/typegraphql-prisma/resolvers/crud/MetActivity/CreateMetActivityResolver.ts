import * as TypeGraphQL from "type-graphql";
import { CreateMetActivityArgs } from "./args/CreateMetActivityArgs";
import { MetActivity } from "../../../models/MetActivity";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MetActivity)
export class CreateMetActivityResolver {
  @TypeGraphQL.Mutation(_returns => MetActivity, {
    nullable: false
  })
  async createMetActivity(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateMetActivityArgs): Promise<MetActivity> {
    return getPrismaFromContext(ctx).metActivity.create(args);
  }
}
