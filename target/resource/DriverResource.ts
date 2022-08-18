import {version} from "./Version";
import {makeDefaultReduxObject, initialState, createReducer, AnterosRemoteResource, IAnterosApiClient, IAnterosUserService} from "@anterostecnologia/anteros-react-api2";
import {resolve, TYPE} from "../ioc/ioc";
import {DriverEntity} from "../model/DriverEntity";

export const DRIVER = "driver";
export const DRIVER_SEARCH = "DRIVER_SEARCH";
const driverReducerDef = makeDefaultReduxObject(DRIVER);
const driverSearchReducerDef = makeDefaultReduxObject(DRIVER_SEARCH);

export class DriverResource extends AnterosRemoteResource<DriverEntity, typeof DriverEntity.prototype.id> {
    constructor() {
        super(  DRIVER, `${version}/driver/}`,  resolve<IAnterosApiClient>(TYPE.api_client)(),  resolve<IAnterosUserService>(TYPE.user_service)(),  undefined,  DRIVER_SEARCH);
    }
}

export const driver = createReducer(initialState, driverReducerDef);
export const driverSearch = createReducer(initialState, driverSearchReducerDef);
