import {IAnterosRemoteResource} from "@anterostecnologia/anteros-react-api2";
import {AnterosController} from "@anterostecnologia/anteros-react-mvc";
import {resolve, TYPE} from "../ioc/ioc";
import {EmailQueueEntity} from "../model/EmailQueueEntity";
import {EmailQueueResource} from "../resource/EmailQueueResource";
import {AUTHENTICATION_REDUCER, LAYOUT_REDUCER} from "../store/store";

export class EmailQueueController extends AnterosController<EmailQueueEntity, typeof EmailQueueEntity.prototype.id> {
    public getResource(): IAnterosRemoteResource<EmailQueueEntity, any> {
        return resolve<EmailQueueResource>(TYPE.emailQueue_resource)();
    }

    public getAuthenticationReducerName(): string {
        return AUTHENTICATION_REDUCER;
    }

    public getLayoutReducerName(): string {
        return LAYOUT_REDUCER;
    }
}
