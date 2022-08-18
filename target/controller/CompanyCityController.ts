import {IAnterosRemoteResource} from "@anterostecnologia/anteros-react-api2";
import {AnterosController} from "@anterostecnologia/anteros-react-mvc";
import {resolve, TYPE} from "../ioc/ioc";
import {CompanyCityEntity} from "../model/CompanyCityEntity";
import {CompanyCityResource} from "../resource/CompanyCityResource";
import {AUTHENTICATION_REDUCER, LAYOUT_REDUCER} from "../store/store";

export class CompanyCityController extends AnterosController<CompanyCityEntity, typeof CompanyCityEntity.prototype.id> {
    public getResource(): IAnterosRemoteResource<CompanyCityEntity, any> {
        return resolve<CompanyCityResource>(TYPE.companyCity_resource)();
    }

    public getAuthenticationReducerName(): string {
        return AUTHENTICATION_REDUCER;
    }

    public getLayoutReducerName(): string {
        return LAYOUT_REDUCER;
    }
}
