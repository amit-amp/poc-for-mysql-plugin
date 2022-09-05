import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RolesMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req.body, 'reqbody');
    if (!req.body.roles) next();
    const rolesArray: string[] = [];
    const rolesArrayObject: Array<{name: string}> = JSON.parse(req.body.roles);
    rolesArrayObject.forEach((role) => rolesArray.push(role.name));
    req.body.roles = rolesArray;
    next();
  }
}
