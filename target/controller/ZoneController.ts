import {IAnterosRemoteResource} from "@anterostecnologia/anteros-react-api2";
import {AnterosController} from "@anterostecnologia/anteros-react-mvc";
import {resolve, TYPE} from "../ioc/ioc";
import {ZoneEntity} from "../model/ZoneEntity";
import {ZoneResource} from "../resource/ZoneResource";
import {AUTHENTICATION_REDUCER, LAYOUT_REDUCER} from "../store/store";

export class ZoneController extends AnterosController<ZoneEntity, typeof ZoneEntity.prototype.id> {
    public getResource(): IAnterosRemoteResource<ZoneEntity, any> {
        return resolve<ZoneResource>(TYPE.zone_resource)();
    }

    public getAuthenticationReducerName(): string {
        return AUTHENTICATION_REDUCER;
    }

    public getLayoutReducerName(): string {
        return LAYOUT_REDUCER;
    }
}
