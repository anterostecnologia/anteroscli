import {IAnterosRemoteResource} from "@anterostecnologia/anteros-react-api2";
import {AnterosController} from "@anterostecnologia/anteros-react-mvc";
import {resolve, TYPE} from "../ioc/ioc";
import {StateEntity} from "../model/StateEntity";
import {StateResource} from "../resource/StateResource";
import {AUTHENTICATION_REDUCER, LAYOUT_REDUCER} from "../store/store";

export class StateController extends AnterosController<StateEntity, typeof StateEntity.prototype.id> {
    public getResource(): IAnterosRemoteResource<StateEntity, any> {
        return resolve<StateResource>(TYPE.state_resource)();
    }

    public getAuthenticationReducerName(): string {
        return AUTHENTICATION_REDUCER;
    }

    public getLayoutReducerName(): string {
        return LAYOUT_REDUCER;
    }
}
