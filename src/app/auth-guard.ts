import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthServiceService } from "./shared/auth-service.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthServiceService) {
    }

    canActivate() {
       return this.auth.isLogin();
    }
}
