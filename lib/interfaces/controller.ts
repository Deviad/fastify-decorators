/**
 * @license
 * Copyright Andrey Chalkin <L2jLiga@gmail.com> (https://github.com/L2jLiga). All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/L2jLiga/fastify-decorators/blob/master/LICENSE
 */

import { Plugin, RouteShorthandOptions } from 'fastify';
import { IncomingMessage, Server, ServerResponse } from 'http';
import { HttpMethods } from '../decorators/helpers/http-methods';
import { CREATOR } from '../symbols';

export interface ControllerConstructor<HttpServer = Server, Request = IncomingMessage, Response = ServerResponse> {
    new(): any;

    [CREATOR]: ControllerHandlersAndHooks<HttpServer, Request, Response>;
}

export interface ControllerHandlersAndHooks<HttpServer, Request, Response> {
    handlers: Handler<Request, Response>[];
    hooks: Hook[];
    register?: Plugin<HttpServer, Request, Response, {}>;
}

export interface Handler<Request, Response> {
    url: string;
    method: HttpMethods;
    options: RouteShorthandOptions;
    handlerMethod: string;
}

export interface Hook {
    name: any;
    handlerName: string;
}
