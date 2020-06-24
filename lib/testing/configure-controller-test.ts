/**
 * @license
 * Copyright Andrey Chalkin <L2jLiga@gmail.com> (https://github.com/L2jLiga). All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/L2jLiga/fastify-decorators/blob/master/LICENSE
 */

import fastify = require('fastify');
import { injectables } from '../registry/injectables';
import { CREATOR } from '../symbols';
import { MocksManager } from './mocks-manager';
import { ServiceMock } from './service-mock';

export interface ControllerTestConfig {
    controller: any;
    mocks?: ServiceMock[];
}

export async function configureControllerTest(config: ControllerTestConfig) {
    const instance = fastify();
    const injectablesWithMocks = MocksManager.create(injectables, config.mocks);

    await config.controller[CREATOR].register(instance, injectablesWithMocks, false);
    await instance.ready();

    return instance;
}
