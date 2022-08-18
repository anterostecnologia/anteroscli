import {IAnterosRemoteResource} from "@anterostecnologia/anteros-react-api2";
import {AnterosController} from "@anterostecnologia/anteros-react-mvc";
import {resolve, TYPE} from "../ioc/ioc";
import {CancelationReasonEntity} from "../model/CancelationReasonEntity";
import {CancelationReasonResource} from "../resource/CancelationReasonResource";
import {AUTHENTICATION_REDUCER, LAYOUT_REDUCER} from "../store/store";

export class CancelationReasonController extends AnterosController<CancelationReasonEntity, typeof CancelationReasonEntity.prototype.id> {
    public getResource(): IAnterosRemoteResource<CancelationReasonEntity, any> {
        return resolve<CancelationReasonResource>(TYPE.cancelationReason_resource)();
    }

    public getAuthenticationReducerName(): string {
        return AUTHENTICATION_REDUCER;
    }

    public getLayoutReducerName(): string {
        return LAYOUT_REDUCER;
    }
}
