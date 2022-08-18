import {IAnterosRemoteResource} from "@anterostecnologia/anteros-react-api2";
import {AnterosController} from "@anterostecnologia/anteros-react-mvc";
import {resolve, TYPE} from "../ioc/ioc";
import {RiderEntity} from "../model/RiderEntity";
import {RiderResource} from "../resource/RiderResource";
import {AUTHENTICATION_REDUCER, LAYOUT_REDUCER} from "../store/store";

export class RiderController extends AnterosController<RiderEntity, typeof RiderEntity.prototype.id> {
    public getResource(): IAnterosRemoteResource<RiderEntity, any> {
        return resolve<RiderResource>(TYPE.rider_resource)();
    }

    public getAuthenticationReducerName(): string {
        return AUTHENTICATION_REDUCER;
    }

    public getLayoutReducerName(): string {
        return LAYOUT_REDUCER;
    }
}
