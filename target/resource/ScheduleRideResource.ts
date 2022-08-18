import {version} from "./Version";
import {makeDefaultReduxObject, initialState, createReducer, AnterosRemoteResource, IAnterosApiClient, IAnterosUserService} from "@anterostecnologia/anteros-react-api2";
import {resolve, TYPE} from "../ioc/ioc";
import {ScheduleRideEntity} from "../model/ScheduleRideEntity";

export const SCHEDULERIDE = "scheduleRide";
export const SCHEDULERIDE_SEARCH = "SCHEDULERIDE_SEARCH";
const scheduleRideReducerDef = makeDefaultReduxObject(SCHEDULERIDE);
const scheduleRideSearchReducerDef = makeDefaultReduxObject(SCHEDULERIDE_SEARCH);

export class ScheduleRideResource extends AnterosRemoteResource<ScheduleRideEntity, typeof ScheduleRideEntity.prototype.id> {
    constructor() {
        super(  SCHEDULERIDE, `${version}/scheduleRide/}`,  resolve<IAnterosApiClient>(TYPE.api_client)(),  resolve<IAnterosUserService>(TYPE.user_service)(),  undefined,  SCHEDULERIDE_SEARCH);
    }
}

export const scheduleRide = createReducer(initialState, scheduleRideReducerDef);
export const scheduleRideSearch = createReducer(initialState, scheduleRideSearchReducerDef);
