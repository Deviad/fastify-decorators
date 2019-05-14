/**
 * @license
 * Copyright Andrey Chalkin <L2jLiga@gmail.com> (https://github.com/L2jLiga). All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/L2jLiga/fastify-decorators/blob/master/LICENSE
 */

import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { IncomingMessage, ServerResponse } from 'http';
import { REGISTER } from '../symbols';

/**
 * Abstract class which should extend all decorated request handlers
 */
export abstract class RequestHandler<Request = IncomingMessage, Response = ServerResponse> {
    protected constructor(protected request: FastifyRequest<Request>,
                          protected reply: FastifyReply<Response>) {
    }

    /**
     * Main method for request handling
     */
    abstract handle(): void | Promise<any>;

    /**
     * Static method to register handler by autoloader (bootstrap)
     */
    static readonly [REGISTER]: (instance: FastifyInstance) => void;
}
