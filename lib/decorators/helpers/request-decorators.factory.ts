/**
 * @license
 * Copyright Andrey Chalkin <L2jLiga@gmail.com> (https://github.com/L2jLiga). All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/L2jLiga/fastify-decorators/blob/master/LICENSE
 */

import { FastifyInstance } from 'fastify';
import { ControllerConstructor, RequestHandler, RouteConfig } from '../../interfaces';
import { CONTROLLER, REGISTER } from '../../symbols';
import { getDefaultControllerOptions } from './default-controller-options';
import { HttpMethods } from './http-methods';

export function requestDecoratorsFactory(method: HttpMethods) {
    return (config: RouteConfig) => {
        return (target: any, propKey?: string) => {
            if (propKey) return controllerMethodDecoratorsFactory(method, config, target, propKey);
            const options = config.options || {};

            target[REGISTER] = (instance: FastifyInstance) => instance[method](config.url, options, (req, res) => (<RequestHandler>new target(req, res)).handle());

            return target;
        };
    };
}

export function controllerMethodDecoratorsFactory(method: HttpMethods, config: RouteConfig, target: any, propKey: string) {
    if (!(<ControllerConstructor>target.constructor)[CONTROLLER]) {
        (<ControllerConstructor>target.constructor)[CONTROLLER] = getDefaultControllerOptions();
    }

    const controllerOpts = (<ControllerConstructor>target.constructor)[CONTROLLER];

    controllerOpts.handlers.push({
        url: config.url,
        method,
        options: config.options || {},
        handlerMethod: propKey
    });
}