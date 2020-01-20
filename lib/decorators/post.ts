/**
 * @license
 * Copyright Andrey Chalkin <L2jLiga@gmail.com> (https://github.com/L2jLiga). All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/L2jLiga/fastify-decorators/blob/master/LICENSE
 */

import { RouteShorthandOptions } from 'fastify';
import { RouteConfig } from '../interfaces';
import { requestDecoratorsFactory } from './helpers/request-decorators.factory';

/**
 * Creates handler which listen POST requests
 */
export function POST(): (target: any, propKey?: string | symbol) => void;
export function POST(url: string): (target: any, propKey?: string | symbol) => void;
export function POST(url: string, options: RouteShorthandOptions): (target: any, propKey?: string | symbol) => void;
export function POST(config: RouteConfig): (target: any, propKey?: string | symbol) => void;
export function POST(config?: string | RouteConfig) {
    return requestDecoratorsFactory('post')(config);
}
