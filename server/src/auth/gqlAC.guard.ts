import { ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { ACGuard } from "nest-access-control";

export class GqlACGuard extends ACGuard<any> {
  async getUser(context: ExecutionContext): Promise<any> {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext<{ req: { user: any } }>().req;
    const userRoles = request.user.roles.map(
      (role: { name: string }) => role.name
    );
    return {
      ...request.user,
      roles: userRoles,
    };
  }
}
