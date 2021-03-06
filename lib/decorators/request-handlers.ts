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

export function ALL(): (target: unknown, propKey?: string | symbol) => void;
export function ALL(url: string): (target: unknown, propKey?: string | symbol) => void;
export function ALL(url: string, options: RouteShorthandOptions): (target: unknown, propKey?: string | symbol) => void;
export function ALL(config: RouteConfig): (target: unknown, propKey?: string | symbol) => void;
export function ALL(config?: string | RouteConfig): (target: unknown, propKey?: string | symbol) => void {
    return requestDecoratorsFactory('all')(config);
}

export function GET(): (target: unknown, propKey?: string | symbol) => void;
export function GET(url: string): (target: unknown, propKey?: string | symbol) => void;
export function GET(url: string, options: RouteShorthandOptions): (target: unknown, propKey?: string | symbol) => void;
export function GET(config: RouteConfig): (target: unknown, propKey?: string | symbol) => void;
export function GET(config?: string | RouteConfig): (target: unknown, propKey?: string | symbol) => void {
    return requestDecoratorsFactory('get')(config);
}

export function POST(): (target: unknown, propKey?: string | symbol) => void;
export function POST(url: string): (target: unknown, propKey?: string | symbol) => void;
export function POST(url: string, options: RouteShorthandOptions): (target: unknown, propKey?: string | symbol) => void;
export function POST(config: RouteConfig): (target: unknown, propKey?: string | symbol) => void;
export function POST(config?: string | RouteConfig): (target: unknown, propKey?: string | symbol) => void {
    return requestDecoratorsFactory('post')(config);
}

export function PUT(): (target: unknown, propKey?: string | symbol) => void;
export function PUT(url: string): (target: unknown, propKey?: string | symbol) => void;
export function PUT(url: string, options: RouteShorthandOptions): (target: unknown, propKey?: string | symbol) => void;
export function PUT(config: RouteConfig): (target: unknown, propKey?: string | symbol) => void;
export function PUT(config?: string | RouteConfig): (target: unknown, propKey?: string | symbol) => void {
    return requestDecoratorsFactory('put')(config);
}

export function PATCH(): (target: unknown, propKey?: string | symbol) => void;
export function PATCH(url: string): (target: unknown, propKey?: string | symbol) => void;
export function PATCH(url: string, options: RouteShorthandOptions): (target: unknown, propKey?: string | symbol) => void;
export function PATCH(config: RouteConfig): (target: unknown, propKey?: string | symbol) => void;
export function PATCH(config?: string | RouteConfig): (target: unknown, propKey?: string | symbol) => void {
    return requestDecoratorsFactory('patch')(config);
}

export function DELETE(): (target: unknown, propKey?: string | symbol) => void;
export function DELETE(url: string): (target: unknown, propKey?: string | symbol) => void;
export function DELETE(url: string, options: RouteShorthandOptions): (target: unknown, propKey?: string | symbol) => void;
export function DELETE(config: RouteConfig): (target: unknown, propKey?: string | symbol) => void;
export function DELETE(config?: string | RouteConfig): (target: unknown, propKey?: string | symbol) => void {
    return requestDecoratorsFactory('delete')(config);
}

export function OPTIONS(): (target: unknown, propKey?: string | symbol) => void;
export function OPTIONS(url: string): (target: unknown, propKey?: string | symbol) => void;
export function OPTIONS(url: string, options: RouteShorthandOptions): (target: unknown, propKey?: string | symbol) => void;
export function OPTIONS(config: RouteConfig): (target: unknown, propKey?: string | symbol) => void;
export function OPTIONS(config?: string | RouteConfig): (target: unknown, propKey?: string | symbol) => void {
    return requestDecoratorsFactory('options')(config);
}

export function HEAD(): (target: unknown, propKey?: string | symbol) => void;
export function HEAD(url: string): (target: unknown, propKey?: string | symbol) => void;
export function HEAD(url: string, options: RouteShorthandOptions): (target: unknown, propKey?: string | symbol) => void;
export function HEAD(config: RouteConfig): (target: unknown, propKey?: string | symbol) => void;
export function HEAD(config?: string | RouteConfig): (target: unknown, propKey?: string | symbol) => void {
    return requestDecoratorsFactory('head')(config);
}

