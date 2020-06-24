/**
 * @license
 * Copyright Andrey Chalkin <L2jLiga@gmail.com> (https://github.com/L2jLiga). All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/L2jLiga/fastify-decorators/blob/master/LICENSE
 */

import { POST, RequestHandler } from 'fastify-decorators';

@POST({
    url: '/post',
    options: {
        schema: {
            response: {
                200: {
                    type: 'object',
                    properties: {
                        message: { type: 'string' }
                    }
                }
            }
        }
    }
})
class PostHandler extends RequestHandler {
    public async handle(): Promise<unknown> {
        return this.request.body;
    }
}

export = PostHandler;
