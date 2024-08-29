import { Request, Response, NextFunction } from "express";

export function loginMiddleware(req: Request, res: Response, next: NextFunction) {
    next();
}