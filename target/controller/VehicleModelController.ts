import {IAnterosRemoteResource} from "@anterostecnologia/anteros-react-api2";
import {AnterosController} from "@anterostecnologia/anteros-react-mvc";
import {resolve, TYPE} from "../ioc/ioc";
import {VehicleModelEntity} from "../model/VehicleModelEntity";
import {VehicleModelResource} from "../resource/VehicleModelResource";
import {AUTHENTICATION_REDUCER, LAYOUT_REDUCER} from "../store/store";

export class VehicleModelController extends AnterosController<VehicleModelEntity, typeof VehicleModelEntity.prototype.id> {
    public getResource(): IAnterosRemoteResource<VehicleModelEntity, any> {
        return resolve<VehicleModelResource>(TYPE.vehicleModel_resource)();
    }

    public getAuthenticationReducerName(): string {
        return AUTHENTICATION_REDUCER;
    }

    public getLayoutReducerName(): string {
        return LAYOUT_REDUCER;
    }
}
