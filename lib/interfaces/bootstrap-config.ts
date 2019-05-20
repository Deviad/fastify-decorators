/**
 * @license
 * Copyright Andrey Chalkin <L2jLiga@gmail.com> (https://github.com/L2jLiga). All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/L2jLiga/fastify-decorators/blob/master/LICENSE
 */

import { RegisterOptions } from 'fastify';
import { IncomingMessage, Server, ServerResponse } from 'http';

export interface BootstrapConfig<HttpServer = Server, HttpRequest = IncomingMessage, HttpResponse = ServerResponse> extends RegisterOptions<HttpServer, HttpRequest, HttpResponse> {
    /**
     * Path to directory which contains all handlers
     */
    handlersDirectory?: string;

    /**
     * Mask used to filter files and keep only handlers
     */
    handlersMask?: string | RegExp;

    /**
     * Path to directory which contains all controllers
     */
    controllersDirectory?: string;

    /**
     * Mask used to filter files and keep only controllers
     */
    controllersMask?: string | RegExp;
}
