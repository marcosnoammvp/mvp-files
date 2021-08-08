import "regenerator-runtime/runtime.js";

import {Controller} from '../src/Controller';
import {View} from '../src/View';
import {Model} from '../src/Model';
import * as utils from '../src/utils';
import {defaultBrand,serverSideResponse} from './shared';

describe("Controller()", function () {
    it("When passing correct parameters, then Element is correctly created", async function () {
        const model = new Model(defaultBrand);

      jest
        .spyOn(utils, "getConfigsMock")
        .mockReturnValue(Promise.resolve(serverSideResponse));

        await model.initialize()
        
        const view = new View(model.getModelData());

        const controller = new Controller(model,view);

        expect(controller).toBeTruthy();

    })})