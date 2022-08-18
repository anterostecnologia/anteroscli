import {version} from "./Version";
import {makeDefaultReduxObject, initialState, createReducer, AnterosRemoteResource, IAnterosApiClient, IAnterosUserService} from "@anterostecnologia/anteros-react-api2";
import {resolve, TYPE} from "../ioc/ioc";
import {ZoneEntity} from "../model/ZoneEntity";

export const ZONE = "zone";
export const ZONE_SEARCH = "ZONE_SEARCH";
const zoneReducerDef = makeDefaultReduxObject(ZONE);
const zoneSearchReducerDef = makeDefaultReduxObject(ZONE_SEARCH);

export class ZoneResource extends AnterosRemoteResource<ZoneEntity, typeof ZoneEntity.prototype.id> {
    constructor() {
        super(  ZONE, `${version}/zone/}`,  resolve<IAnterosApiClient>(TYPE.api_client)(),  resolve<IAnterosUserService>(TYPE.user_service)(),  undefined,  ZONE_SEARCH);
    }
}

export const zone = createReducer(initialState, zoneReducerDef);
export const zoneSearch = createReducer(initialState, zoneSearchReducerDef);
