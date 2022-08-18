import {IAnterosRemoteResource} from "@anterostecnologia/anteros-react-api2";
import {AnterosController} from "@anterostecnologia/anteros-react-mvc";
import {resolve, TYPE} from "../ioc/ioc";
import {RequestRideEntity} from "../model/RequestRideEntity";
import {RequestRideResource} from "../resource/RequestRideResource";
import {AUTHENTICATION_REDUCER, LAYOUT_REDUCER} from "../store/store";

export class RequestRideController extends AnterosController<RequestRideEntity, typeof RequestRideEntity.prototype.id> {
    public getResource(): IAnterosRemoteResource<RequestRideEntity, any> {
        return resolve<RequestRideResource>(TYPE.requestRide_resource)();
    }

    public getAuthenticationReducerName(): string {
        return AUTHENTICATION_REDUCER;
    }

    public getLayoutReducerName(): string {
        return LAYOUT_REDUCER;
    }
}
