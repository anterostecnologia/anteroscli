import {version} from "./Version";
import {makeDefaultReduxObject, initialState, createReducer, AnterosRemoteResource, IAnterosApiClient, IAnterosUserService} from "@anterostecnologia/anteros-react-api2";
import {resolve, TYPE} from "../ioc/ioc";
import {TripEntity} from "../model/TripEntity";

export const TRIP = "trip";
export const TRIP_SEARCH = "TRIP_SEARCH";
const tripReducerDef = makeDefaultReduxObject(TRIP);
const tripSearchReducerDef = makeDefaultReduxObject(TRIP_SEARCH);

export class TripResource extends AnterosRemoteResource<TripEntity, typeof TripEntity.prototype.id> {
    constructor() {
        super(  TRIP, `${version}/trip/}`,  resolve<IAnterosApiClient>(TYPE.api_client)(),  resolve<IAnterosUserService>(TYPE.user_service)(),  undefined,  TRIP_SEARCH);
    }
}

export const trip = createReducer(initialState, tripReducerDef);
export const tripSearch = createReducer(initialState, tripSearchReducerDef);
