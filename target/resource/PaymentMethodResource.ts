import {version} from "./Version";
import {makeDefaultReduxObject, initialState, createReducer, AnterosRemoteResource, IAnterosApiClient, IAnterosUserService} from "@anterostecnologia/anteros-react-api2";
import {resolve, TYPE} from "../ioc/ioc";
import {PaymentMethodEntity} from "../model/PaymentMethodEntity";

export const PAYMENTMETHOD = "paymentMethod";
export const PAYMENTMETHOD_SEARCH = "PAYMENTMETHOD_SEARCH";
const paymentMethodReducerDef = makeDefaultReduxObject(PAYMENTMETHOD);
const paymentMethodSearchReducerDef = makeDefaultReduxObject(PAYMENTMETHOD_SEARCH);

export class PaymentMethodResource extends AnterosRemoteResource<PaymentMethodEntity, typeof PaymentMethodEntity.prototype.id> {
    constructor() {
        super(  PAYMENTMETHOD, `${version}/paymentMethod/}`,  resolve<IAnterosApiClient>(TYPE.api_client)(),  resolve<IAnterosUserService>(TYPE.user_service)(),  undefined,  PAYMENTMETHOD_SEARCH);
    }
}

export const paymentMethod = createReducer(initialState, paymentMethodReducerDef);
export const paymentMethodSearch = createReducer(initialState, paymentMethodSearchReducerDef);
