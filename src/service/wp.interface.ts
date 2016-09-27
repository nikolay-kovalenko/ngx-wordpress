import {Observable} from "rxjs";
import {EndpointService} from "./endpoint/endpoint.service";
import {AuthService} from "./authentication/auth.service";

export interface WpInterface {
    link(url: string): Observable<any>;
    collection(): EndpointService;
    model(): EndpointService;
    auth(): AuthService;
}

