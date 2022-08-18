import {IAnterosRemoteResource} from "@anterostecnologia/anteros-react-api2";
import {AnterosController} from "@anterostecnologia/anteros-react-mvc";
import {resolve, TYPE} from "../ioc/ioc";
import {OrderEntity} from "../model/OrderEntity";
import {OrderResource} from "../resource/OrderResource";
import {AUTHENTICATION_REDUCER, LAYOUT_REDUCER} from "../store/store";

export class OrderController extends AnterosController<OrderEntity, typeof OrderEntity.prototype.id> {
    public getResource(): IAnterosRemoteResource<OrderEntity, any> {
        return resolve<OrderResource>(TYPE.order_resource)();
    }

    public getAuthenticationReducerName(): string {
        return AUTHENTICATION_REDUCER;
    }

    public getLayoutReducerName(): string {
        return LAYOUT_REDUCER;
    }
}
