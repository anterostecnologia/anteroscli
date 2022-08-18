import {IAnterosRemoteResource} from "@anterostecnologia/anteros-react-api2";
import {AnterosController} from "@anterostecnologia/anteros-react-mvc";
import {resolve, TYPE} from "../ioc/ioc";
import {EmailModelEntity} from "../model/EmailModelEntity";
import {EmailModelResource} from "../resource/EmailModelResource";
import {AUTHENTICATION_REDUCER, LAYOUT_REDUCER} from "../store/store";

export class EmailModelController extends AnterosController<EmailModelEntity, typeof EmailModelEntity.prototype.id> {
    public getResource(): IAnterosRemoteResource<EmailModelEntity, any> {
        return resolve<EmailModelResource>(TYPE.emailModel_resource)();
    }

    public getAuthenticationReducerName(): string {
        return AUTHENTICATION_REDUCER;
    }

    public getLayoutReducerName(): string {
        return LAYOUT_REDUCER;
    }
}
