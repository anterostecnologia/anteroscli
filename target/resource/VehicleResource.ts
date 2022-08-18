import {version} from "./Version";
import {makeDefaultReduxObject, initialState, createReducer, AnterosRemoteResource, IAnterosApiClient, IAnterosUserService} from "@anterostecnologia/anteros-react-api2";
import {resolve, TYPE} from "../ioc/ioc";
import {VehicleEntity} from "../model/VehicleEntity";

export const VEHICLE = "vehicle";
export const VEHICLE_SEARCH = "VEHICLE_SEARCH";
const vehicleReducerDef = makeDefaultReduxObject(VEHICLE);
const vehicleSearchReducerDef = makeDefaultReduxObject(VEHICLE_SEARCH);

export class VehicleResource extends AnterosRemoteResource<VehicleEntity, typeof VehicleEntity.prototype.id> {
    constructor() {
        super(  VEHICLE, `${version}/vehicle/}`,  resolve<IAnterosApiClient>(TYPE.api_client)(),  resolve<IAnterosUserService>(TYPE.user_service)(),  undefined,  VEHICLE_SEARCH);
    }
}

export const vehicle = createReducer(initialState, vehicleReducerDef);
export const vehicleSearch = createReducer(initialState, vehicleSearchReducerDef);
