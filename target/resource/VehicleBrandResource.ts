import {version} from "./Version";
import {makeDefaultReduxObject, initialState, createReducer, AnterosRemoteResource, IAnterosApiClient, IAnterosUserService} from "@anterostecnologia/anteros-react-api2";
import {resolve, TYPE} from "../ioc/ioc";
import {VehicleBrandEntity} from "../model/VehicleBrandEntity";

export const VEHICLEBRAND = "vehicleBrand";
export const VEHICLEBRAND_SEARCH = "VEHICLEBRAND_SEARCH";
const vehicleBrandReducerDef = makeDefaultReduxObject(VEHICLEBRAND);
const vehicleBrandSearchReducerDef = makeDefaultReduxObject(VEHICLEBRAND_SEARCH);

export class VehicleBrandResource extends AnterosRemoteResource<VehicleBrandEntity, typeof VehicleBrandEntity.prototype.id> {
    constructor() {
        super(  VEHICLEBRAND, `${version}/vehicleBrand/}`,  resolve<IAnterosApiClient>(TYPE.api_client)(),  resolve<IAnterosUserService>(TYPE.user_service)(),  undefined,  VEHICLEBRAND_SEARCH);
    }
}

export const vehicleBrand = createReducer(initialState, vehicleBrandReducerDef);
export const vehicleBrandSearch = createReducer(initialState, vehicleBrandSearchReducerDef);
