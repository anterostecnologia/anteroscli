import {IAnterosRemoteResource} from "@anterostecnologia/anteros-react-api2";
import {AnterosController} from "@anterostecnologia/anteros-react-mvc";
import {resolve, TYPE} from "../ioc/ioc";
import {VehicleBrandEntity} from "../model/VehicleBrandEntity";
import {VehicleBrandResource} from "../resource/VehicleBrandResource";
import {AUTHENTICATION_REDUCER, LAYOUT_REDUCER} from "../store/store";

export class VehicleBrandController extends AnterosController<VehicleBrandEntity, typeof VehicleBrandEntity.prototype.id> {
    public getResource(): IAnterosRemoteResource<VehicleBrandEntity, any> {
        return resolve<VehicleBrandResource>(TYPE.vehicleBrand_resource)();
    }

    public getAuthenticationReducerName(): string {
        return AUTHENTICATION_REDUCER;
    }

    public getLayoutReducerName(): string {
        return LAYOUT_REDUCER;
    }
}
