import {IAnterosRemoteResource} from "@anterostecnologia/anteros-react-api2";
import {AnterosController} from "@anterostecnologia/anteros-react-mvc";
import {resolve, TYPE} from "../ioc/ioc";
import {StoreEntity} from "../model/StoreEntity";
import {StoreResource} from "../resource/StoreResource";
import {AUTHENTICATION_REDUCER, LAYOUT_REDUCER} from "../store/store";

export class StoreController extends AnterosController<StoreEntity, typeof StoreEntity.prototype.id> {
    public getResource(): IAnterosRemoteResource<StoreEntity, any> {
        return resolve<StoreResource>(TYPE.store_resource)();
    }

    public getAuthenticationReducerName(): string {
        return AUTHENTICATION_REDUCER;
    }

    public getLayoutReducerName(): string {
        return LAYOUT_REDUCER;
    }
}
