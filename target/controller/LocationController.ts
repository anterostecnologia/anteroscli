import {IAnterosRemoteResource} from "@anterostecnologia/anteros-react-api2";
import {AnterosController} from "@anterostecnologia/anteros-react-mvc";
import {resolve, TYPE} from "../ioc/ioc";
import {LocationEntity} from "../model/LocationEntity";
import {LocationResource} from "../resource/LocationResource";
import {AUTHENTICATION_REDUCER, LAYOUT_REDUCER} from "../store/store";

export class LocationController extends AnterosController<LocationEntity, typeof LocationEntity.prototype.id> {
    public getResource(): IAnterosRemoteResource<LocationEntity, any> {
        return resolve<LocationResource>(TYPE.location_resource)();
    }

    public getAuthenticationReducerName(): string {
        return AUTHENTICATION_REDUCER;
    }

    public getLayoutReducerName(): string {
        return LAYOUT_REDUCER;
    }
}
