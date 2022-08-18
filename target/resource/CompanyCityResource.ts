import {version} from "./Version";
import {makeDefaultReduxObject, initialState, createReducer, AnterosRemoteResource, IAnterosApiClient, IAnterosUserService} from "@anterostecnologia/anteros-react-api2";
import {resolve, TYPE} from "../ioc/ioc";
import {CompanyCityEntity} from "../model/CompanyCityEntity";

export const COMPANYCITY = "companyCity";
export const COMPANYCITY_SEARCH = "COMPANYCITY_SEARCH";
const companyCityReducerDef = makeDefaultReduxObject(COMPANYCITY);
const companyCitySearchReducerDef = makeDefaultReduxObject(COMPANYCITY_SEARCH);

export class CompanyCityResource extends AnterosRemoteResource<CompanyCityEntity, typeof CompanyCityEntity.prototype.id> {
    constructor() {
        super(  COMPANYCITY, `${version}/companyCity/}`,  resolve<IAnterosApiClient>(TYPE.api_client)(),  resolve<IAnterosUserService>(TYPE.user_service)(),  undefined,  COMPANYCITY_SEARCH);
    }
}

export const companyCity = createReducer(initialState, companyCityReducerDef);
export const companyCitySearch = createReducer(initialState, companyCitySearchReducerDef);
