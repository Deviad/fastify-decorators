/**
 * @license
 * Copyright Andrey Chalkin <L2jLiga@gmail.com> (https://github.com/L2jLiga). All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/L2jLiga/fastify-decorators/blob/master/LICENSE
 */

import { fastify } from 'fastify';
import { bootstrap } from 'fastify-decorators';
import websocketPlugin from 'fastify-websocket';
import { resolve } from 'path';
import 'reflect-metadata';
import { authorization } from './decorators/authorized';

const instance = fastify();

instance.register(websocketPlugin);

instance.decorate('authorization', authorization);

instance.register(bootstrap, {
    directory: resolve(__dirname, 'controllers'),
    mask: /\.controller\./,
});

instance.register(bootstrap, {
    directory: resolve(__dirname, 'handlers'),
    mask: /\.handler\./,
});

export { instance };
