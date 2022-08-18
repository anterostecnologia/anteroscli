import {version} from "./Version";
import {makeDefaultReduxObject, initialState, createReducer, AnterosRemoteResource, IAnterosApiClient, IAnterosUserService} from "@anterostecnologia/anteros-react-api2";
import {resolve, TYPE} from "../ioc/ioc";
import {CityEntity} from "../model/CityEntity";

export const CITY = "city";
export const CITY_SEARCH = "CITY_SEARCH";
const cityReducerDef = makeDefaultReduxObject(CITY);
const citySearchReducerDef = makeDefaultReduxObject(CITY_SEARCH);

export class CityResource extends AnterosRemoteResource<CityEntity, typeof CityEntity.prototype.id> {
    constructor() {
        super(  CITY, `${version}/city/}`,  resolve<IAnterosApiClient>(TYPE.api_client)(),  resolve<IAnterosUserService>(TYPE.user_service)(),  undefined,  CITY_SEARCH);
    }
}

export const city = createReducer(initialState, cityReducerDef);
export const citySearch = createReducer(initialState, citySearchReducerDef);
