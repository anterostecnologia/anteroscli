import {version} from "./Version";
import {makeDefaultReduxObject, initialState, createReducer, AnterosRemoteResource, IAnterosApiClient, IAnterosUserService} from "@anterostecnologia/anteros-react-api2";
import {resolve, TYPE} from "../ioc/ioc";
import {StoreEntity} from "../model/StoreEntity";

export const STORE = "store";
export const STORE_SEARCH = "STORE_SEARCH";
const storeReducerDef = makeDefaultReduxObject(STORE);
const storeSearchReducerDef = makeDefaultReduxObject(STORE_SEARCH);

export class StoreResource extends AnterosRemoteResource<StoreEntity, typeof StoreEntity.prototype.id> {
    constructor() {
        super(  STORE, `${version}/store/}`,  resolve<IAnterosApiClient>(TYPE.api_client)(),  resolve<IAnterosUserService>(TYPE.user_service)(),  undefined,  STORE_SEARCH);
    }
}

export const store = createReducer(initialState, storeReducerDef);
export const storeSearch = createReducer(initialState, storeSearchReducerDef);
