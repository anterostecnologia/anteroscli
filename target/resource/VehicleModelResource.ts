import {version} from "./Version";
import {makeDefaultReduxObject, initialState, createReducer, AnterosRemoteResource, IAnterosApiClient, IAnterosUserService} from "@anterostecnologia/anteros-react-api2";
import {resolve, TYPE} from "../ioc/ioc";
import {VehicleModelEntity} from "../model/VehicleModelEntity";

export const VEHICLEMODEL = "vehicleModel";
export const VEHICLEMODEL_SEARCH = "VEHICLEMODEL_SEARCH";
const vehicleModelReducerDef = makeDefaultReduxObject(VEHICLEMODEL);
const vehicleModelSearchReducerDef = makeDefaultReduxObject(VEHICLEMODEL_SEARCH);

export class VehicleModelResource extends AnterosRemoteResource<VehicleModelEntity, typeof VehicleModelEntity.prototype.id> {
    constructor() {
        super(  VEHICLEMODEL, `${version}/vehicleModel/}`,  resolve<IAnterosApiClient>(TYPE.api_client)(),  resolve<IAnterosUserService>(TYPE.user_service)(),  undefined,  VEHICLEMODEL_SEARCH);
    }
}

export const vehicleModel = createReducer(initialState, vehicleModelReducerDef);
export const vehicleModelSearch = createReducer(initialState, vehicleModelSearchReducerDef);
