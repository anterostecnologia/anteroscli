import {IAnterosRemoteResource} from "@anterostecnologia/anteros-react-api2";
import {AnterosController} from "@anterostecnologia/anteros-react-mvc";
import {resolve, TYPE} from "../ioc/ioc";
import {TripEntity} from "../model/TripEntity";
import {TripResource} from "../resource/TripResource";
import {AUTHENTICATION_REDUCER, LAYOUT_REDUCER} from "../store/store";

export class TripController extends AnterosController<TripEntity, typeof TripEntity.prototype.id> {
    public getResource(): IAnterosRemoteResource<TripEntity, any> {
        return resolve<TripResource>(TYPE.trip_resource)();
    }

    public getAuthenticationReducerName(): string {
        return AUTHENTICATION_REDUCER;
    }

    public getLayoutReducerName(): string {
        return LAYOUT_REDUCER;
    }
}
