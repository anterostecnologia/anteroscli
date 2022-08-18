import {version} from "./Version";
import {makeDefaultReduxObject, initialState, createReducer, AnterosRemoteResource, IAnterosApiClient, IAnterosUserService} from "@anterostecnologia/anteros-react-api2";
import {resolve, TYPE} from "../ioc/ioc";
import {CompanyEntity} from "../model/CompanyEntity";

export const COMPANY = "company";
export const COMPANY_SEARCH = "COMPANY_SEARCH";
const companyReducerDef = makeDefaultReduxObject(COMPANY);
const companySearchReducerDef = makeDefaultReduxObject(COMPANY_SEARCH);

export class CompanyResource extends AnterosRemoteResource<CompanyEntity, typeof CompanyEntity.prototype.id> {
    constructor() {
        super(  COMPANY, `${version}/company/}`,  resolve<IAnterosApiClient>(TYPE.api_client)(),  resolve<IAnterosUserService>(TYPE.user_service)(),  undefined,  COMPANY_SEARCH);
    }
}

export const company = createReducer(initialState, companyReducerDef);
export const companySearch = createReducer(initialState, companySearchReducerDef);
