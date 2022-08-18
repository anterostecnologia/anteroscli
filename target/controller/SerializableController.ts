import {IAnterosRemoteResource} from "@anterostecnologia/anteros-react-api2";
import {AnterosController} from "@anterostecnologia/anteros-react-mvc";
import {resolve, TYPE} from "../ioc/ioc";
import {SerializableEntity} from "../model/SerializableEntity";
import {SerializableResource} from "../resource/SerializableResource";
import {AUTHENTICATION_REDUCER, LAYOUT_REDUCER} from "../store/store";

export class SerializableController extends AnterosController<SerializableEntity, typeof SerializableEntity.prototype.id> {
    public getResource(): IAnterosRemoteResource<SerializableEntity, any> {
        return resolve<SerializableResource>(TYPE.serializable_resource)();
    }

    public getAuthenticationReducerName(): string {
        return AUTHENTICATION_REDUCER;
    }

    public getLayoutReducerName(): string {
        return LAYOUT_REDUCER;
    }
}
