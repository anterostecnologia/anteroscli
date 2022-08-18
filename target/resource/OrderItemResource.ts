import {version} from "./Version";
import {makeDefaultReduxObject, initialState, createReducer, AnterosRemoteResource, IAnterosApiClient, IAnterosUserService} from "@anterostecnologia/anteros-react-api2";
import {resolve, TYPE} from "../ioc/ioc";
import {OrderItemEntity} from "../model/OrderItemEntity";

export const ORDERITEM = "orderItem";
export const ORDERITEM_SEARCH = "ORDERITEM_SEARCH";
const orderItemReducerDef = makeDefaultReduxObject(ORDERITEM);
const orderItemSearchReducerDef = makeDefaultReduxObject(ORDERITEM_SEARCH);

export class OrderItemResource extends AnterosRemoteResource<OrderItemEntity, typeof OrderItemEntity.prototype.id> {
    constructor() {
        super(  ORDERITEM, `${version}/orderItem/}`,  resolve<IAnterosApiClient>(TYPE.api_client)(),  resolve<IAnterosUserService>(TYPE.user_service)(),  undefined,  ORDERITEM_SEARCH);
    }
}

export const orderItem = createReducer(initialState, orderItemReducerDef);
export const orderItemSearch = createReducer(initialState, orderItemSearchReducerDef);
