import {version} from "./Version";
import {makeDefaultReduxObject, initialState, createReducer, AnterosRemoteResource, IAnterosApiClient, IAnterosUserService} from "@anterostecnologia/anteros-react-api2";
import {resolve, TYPE} from "../ioc/ioc";
import {OrderEntity} from "../model/OrderEntity";

export const ORDER = "order";
export const ORDER_SEARCH = "ORDER_SEARCH";
const orderReducerDef = makeDefaultReduxObject(ORDER);
const orderSearchReducerDef = makeDefaultReduxObject(ORDER_SEARCH);

export class OrderResource extends AnterosRemoteResource<OrderEntity, typeof OrderEntity.prototype.id> {
    constructor() {
        super(  ORDER, `${version}/order/}`,  resolve<IAnterosApiClient>(TYPE.api_client)(),  resolve<IAnterosUserService>(TYPE.user_service)(),  undefined,  ORDER_SEARCH);
    }
}

export const order = createReducer(initialState, orderReducerDef);
export const orderSearch = createReducer(initialState, orderSearchReducerDef);
