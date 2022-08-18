import {version} from "./Version";
import {makeDefaultReduxObject, initialState, createReducer, AnterosRemoteResource, IAnterosApiClient, IAnterosUserService} from "@anterostecnologia/anteros-react-api2";
import {resolve, TYPE} from "../ioc/ioc";
import {CountryEntity} from "../model/CountryEntity";

export const COUNTRY = "country";
export const COUNTRY_SEARCH = "COUNTRY_SEARCH";
const countryReducerDef = makeDefaultReduxObject(COUNTRY);
const countrySearchReducerDef = makeDefaultReduxObject(COUNTRY_SEARCH);

export class CountryResource extends AnterosRemoteResource<CountryEntity, typeof CountryEntity.prototype.id> {
    constructor() {
        super(  COUNTRY, `${version}/country/}`,  resolve<IAnterosApiClient>(TYPE.api_client)(),  resolve<IAnterosUserService>(TYPE.user_service)(),  undefined,  COUNTRY_SEARCH);
    }
}

export const country = createReducer(initialState, countryReducerDef);
export const countrySearch = createReducer(initialState, countrySearchReducerDef);
