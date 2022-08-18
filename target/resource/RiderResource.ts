import {version} from "./Version";
import {makeDefaultReduxObject, initialState, createReducer, AnterosRemoteResource, IAnterosApiClient, IAnterosUserService} from "@anterostecnologia/anteros-react-api2";
import {resolve, TYPE} from "../ioc/ioc";
import {RiderEntity} from "../model/RiderEntity";

export const RIDER = "rider";
export const RIDER_SEARCH = "RIDER_SEARCH";
const riderReducerDef = makeDefaultReduxObject(RIDER);
const riderSearchReducerDef = makeDefaultReduxObject(RIDER_SEARCH);

export class RiderResource extends AnterosRemoteResource<RiderEntity, typeof RiderEntity.prototype.id> {
    constructor() {
        super(  RIDER, `${version}/rider/}`,  resolve<IAnterosApiClient>(TYPE.api_client)(),  resolve<IAnterosUserService>(TYPE.user_service)(),  undefined,  RIDER_SEARCH);
    }
}

export const rider = createReducer(initialState, riderReducerDef);
export const riderSearch = createReducer(initialState, riderSearchReducerDef);
