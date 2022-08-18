import {version} from "./Version";
import {makeDefaultReduxObject, initialState, createReducer, AnterosRemoteResource, IAnterosApiClient, IAnterosUserService} from "@anterostecnologia/anteros-react-api2";
import {resolve, TYPE} from "../ioc/ioc";
import {LocationEntity} from "../model/LocationEntity";

export const LOCATION = "location";
export const LOCATION_SEARCH = "LOCATION_SEARCH";
const locationReducerDef = makeDefaultReduxObject(LOCATION);
const locationSearchReducerDef = makeDefaultReduxObject(LOCATION_SEARCH);

export class LocationResource extends AnterosRemoteResource<LocationEntity, typeof LocationEntity.prototype.id> {
    constructor() {
        super(  LOCATION, `${version}/location/}`,  resolve<IAnterosApiClient>(TYPE.api_client)(),  resolve<IAnterosUserService>(TYPE.user_service)(),  undefined,  LOCATION_SEARCH);
    }
}

export const location = createReducer(initialState, locationReducerDef);
export const locationSearch = createReducer(initialState, locationSearchReducerDef);
