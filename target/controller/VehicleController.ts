import {IAnterosRemoteResource} from "@anterostecnologia/anteros-react-api2";
import {AnterosController} from "@anterostecnologia/anteros-react-mvc";
import {resolve, TYPE} from "../ioc/ioc";
import {VehicleEntity} from "../model/VehicleEntity";
import {VehicleResource} from "../resource/VehicleResource";
import {AUTHENTICATION_REDUCER, LAYOUT_REDUCER} from "../store/store";

export class VehicleController extends AnterosController<VehicleEntity, typeof VehicleEntity.prototype.id> {
    public getResource(): IAnterosRemoteResource<VehicleEntity, any> {
        return resolve<VehicleResource>(TYPE.vehicle_resource)();
    }

    public getAuthenticationReducerName(): string {
        return AUTHENTICATION_REDUCER;
    }

    public getLayoutReducerName(): string {
        return LAYOUT_REDUCER;
    }
}
