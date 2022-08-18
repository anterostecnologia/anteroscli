import {version} from "./Version";
import {makeDefaultReduxObject, initialState, createReducer, AnterosRemoteResource, IAnterosApiClient, IAnterosUserService} from "@anterostecnologia/anteros-react-api2";
import {resolve, TYPE} from "../ioc/ioc";
import {CancelationReasonEntity} from "../model/CancelationReasonEntity";

export const CANCELATIONREASON = "cancelationReason";
export const CANCELATIONREASON_SEARCH = "CANCELATIONREASON_SEARCH";
const cancelationReasonReducerDef = makeDefaultReduxObject(CANCELATIONREASON);
const cancelationReasonSearchReducerDef = makeDefaultReduxObject(CANCELATIONREASON_SEARCH);

export class CancelationReasonResource extends AnterosRemoteResource<CancelationReasonEntity, typeof CancelationReasonEntity.prototype.id> {
    constructor() {
        super(  CANCELATIONREASON, `${version}/cancelationReason/}`,  resolve<IAnterosApiClient>(TYPE.api_client)(),  resolve<IAnterosUserService>(TYPE.user_service)(),  undefined,  CANCELATIONREASON_SEARCH);
    }
}

export const cancelationReason = createReducer(initialState, cancelationReasonReducerDef);
export const cancelationReasonSearch = createReducer(initialState, cancelationReasonSearchReducerDef);
