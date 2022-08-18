import {version} from "./Version";
import {makeDefaultReduxObject, initialState, createReducer, AnterosRemoteResource, IAnterosApiClient, IAnterosUserService} from "@anterostecnologia/anteros-react-api2";
import {resolve, TYPE} from "../ioc/ioc";
import {RequestRideEntity} from "../model/RequestRideEntity";

export const REQUESTRIDE = "requestRide";
export const REQUESTRIDE_SEARCH = "REQUESTRIDE_SEARCH";
const requestRideReducerDef = makeDefaultReduxObject(REQUESTRIDE);
const requestRideSearchReducerDef = makeDefaultReduxObject(REQUESTRIDE_SEARCH);

export class RequestRideResource extends AnterosRemoteResource<RequestRideEntity, typeof RequestRideEntity.prototype.id> {
    constructor() {
        super(  REQUESTRIDE, `${version}/requestRide/}`,  resolve<IAnterosApiClient>(TYPE.api_client)(),  resolve<IAnterosUserService>(TYPE.user_service)(),  undefined,  REQUESTRIDE_SEARCH);
    }
}

export const requestRide = createReducer(initialState, requestRideReducerDef);
export const requestRideSearch = createReducer(initialState, requestRideSearchReducerDef);
