import {IAnterosRemoteResource} from "@anterostecnologia/anteros-react-api2";
import {AnterosController} from "@anterostecnologia/anteros-react-mvc";
import {resolve, TYPE} from "../ioc/ioc";
import {DriverEntity} from "../model/DriverEntity";
import {DriverResource} from "../resource/DriverResource";
import {AUTHENTICATION_REDUCER, LAYOUT_REDUCER} from "../store/store";

export class DriverController extends AnterosController<DriverEntity, typeof DriverEntity.prototype.id> {
    public getResource(): IAnterosRemoteResource<DriverEntity, any> {
        return resolve<DriverResource>(TYPE.driver_resource)();
    }

    public getAuthenticationReducerName(): string {
        return AUTHENTICATION_REDUCER;
    }

    public getLayoutReducerName(): string {
        return LAYOUT_REDUCER;
    }
}
