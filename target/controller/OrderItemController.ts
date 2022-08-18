import {IAnterosRemoteResource} from "@anterostecnologia/anteros-react-api2";
import {AnterosController} from "@anterostecnologia/anteros-react-mvc";
import {resolve, TYPE} from "../ioc/ioc";
import {OrderItemEntity} from "../model/OrderItemEntity";
import {OrderItemResource} from "../resource/OrderItemResource";
import {AUTHENTICATION_REDUCER, LAYOUT_REDUCER} from "../store/store";

export class OrderItemController extends AnterosController<OrderItemEntity, typeof OrderItemEntity.prototype.id> {
    public getResource(): IAnterosRemoteResource<OrderItemEntity, any> {
        return resolve<OrderItemResource>(TYPE.orderItem_resource)();
    }

    public getAuthenticationReducerName(): string {
        return AUTHENTICATION_REDUCER;
    }

    public getLayoutReducerName(): string {
        return LAYOUT_REDUCER;
    }
}
