import {IAnterosRemoteResource} from "@anterostecnologia/anteros-react-api2";
import {AnterosController} from "@anterostecnologia/anteros-react-mvc";
import {resolve, TYPE} from "../ioc/ioc";
import {CompanyEntity} from "../model/CompanyEntity";
import {CompanyResource} from "../resource/CompanyResource";
import {AUTHENTICATION_REDUCER, LAYOUT_REDUCER} from "../store/store";

export class CompanyController extends AnterosController<CompanyEntity, typeof CompanyEntity.prototype.id> {
    public getResource(): IAnterosRemoteResource<CompanyEntity, any> {
        return resolve<CompanyResource>(TYPE.company_resource)();
    }

    public getAuthenticationReducerName(): string {
        return AUTHENTICATION_REDUCER;
    }

    public getLayoutReducerName(): string {
        return LAYOUT_REDUCER;
    }
}
