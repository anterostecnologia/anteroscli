import {IAnterosRemoteResource} from "@anterostecnologia/anteros-react-api2";
import {AnterosController} from "@anterostecnologia/anteros-react-mvc";
import {resolve, TYPE} from "../ioc/ioc";
import {CityEntity} from "../model/CityEntity";
import {CityResource} from "../resource/CityResource";
import {AUTHENTICATION_REDUCER, LAYOUT_REDUCER} from "../store/store";

export class CityController extends AnterosController<CityEntity, typeof CityEntity.prototype.id> {
    public getResource(): IAnterosRemoteResource<CityEntity, any> {
        return resolve<CityResource>(TYPE.city_resource)();
    }

    public getAuthenticationReducerName(): string {
        return AUTHENTICATION_REDUCER;
    }

    public getLayoutReducerName(): string {
        return LAYOUT_REDUCER;
    }
}
