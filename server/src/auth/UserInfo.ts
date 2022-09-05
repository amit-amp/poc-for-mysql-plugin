import { Field, ObjectType } from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue } from "type-fest";
// @ts-ignore
// eslint-disable-next-line
import { User } from "../user/user";

@ObjectType()
export class UserInfo implements Partial<User> {
  @Field(() => String)
  username!: string;
  @Field(() => GraphQLJSON, { nullable: false })
  roles!: JsonValue;
  @Field(() => String, { nullable: true })
  accessToken?: string;
}
