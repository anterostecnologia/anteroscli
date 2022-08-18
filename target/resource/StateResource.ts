import {version} from "./Version";
import {makeDefaultReduxObject, initialState, createReducer, AnterosRemoteResource, IAnterosApiClient, IAnterosUserService} from "@anterostecnologia/anteros-react-api2";
import {resolve, TYPE} from "../ioc/ioc";
import {StateEntity} from "../model/StateEntity";

export const STATE = "state";
export const STATE_SEARCH = "STATE_SEARCH";
const stateReducerDef = makeDefaultReduxObject(STATE);
const stateSearchReducerDef = makeDefaultReduxObject(STATE_SEARCH);

export class StateResource extends AnterosRemoteResource<StateEntity, typeof StateEntity.prototype.id> {
    constructor() {
        super(  STATE, `${version}/state/}`,  resolve<IAnterosApiClient>(TYPE.api_client)(),  resolve<IAnterosUserService>(TYPE.user_service)(),  undefined,  STATE_SEARCH);
    }
}

export const state = createReducer(initialState, stateReducerDef);
export const stateSearch = createReducer(initialState, stateSearchReducerDef);
