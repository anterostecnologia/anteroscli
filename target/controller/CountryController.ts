import {IAnterosRemoteResource} from "@anterostecnologia/anteros-react-api2";
import {AnterosController} from "@anterostecnologia/anteros-react-mvc";
import {resolve, TYPE} from "../ioc/ioc";
import {CountryEntity} from "../model/CountryEntity";
import {CountryResource} from "../resource/CountryResource";
import {AUTHENTICATION_REDUCER, LAYOUT_REDUCER} from "../store/store";

export class CountryController extends AnterosController<CountryEntity, typeof CountryEntity.prototype.id> {
    public getResource(): IAnterosRemoteResource<CountryEntity, any> {
        return resolve<CountryResource>(TYPE.country_resource)();
    }

    public getAuthenticationReducerName(): string {
        return AUTHENTICATION_REDUCER;
    }

    public getLayoutReducerName(): string {
        return LAYOUT_REDUCER;
    }
}
