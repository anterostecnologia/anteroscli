import {version} from "./Version";
import {makeDefaultReduxObject, initialState, createReducer, AnterosRemoteResource, IAnterosApiClient, IAnterosUserService} from "@anterostecnologia/anteros-react-api2";
import {resolve, TYPE} from "../ioc/ioc";
import {EmailModelEntity} from "../model/EmailModelEntity";

export const EMAILMODEL = "emailModel";
export const EMAILMODEL_SEARCH = "EMAILMODEL_SEARCH";
const emailModelReducerDef = makeDefaultReduxObject(EMAILMODEL);
const emailModelSearchReducerDef = makeDefaultReduxObject(EMAILMODEL_SEARCH);

export class EmailModelResource extends AnterosRemoteResource<EmailModelEntity, typeof EmailModelEntity.prototype.id> {
    constructor() {
        super(  EMAILMODEL, `${version}/emailModel/}`,  resolve<IAnterosApiClient>(TYPE.api_client)(),  resolve<IAnterosUserService>(TYPE.user_service)(),  undefined,  EMAILMODEL_SEARCH);
    }
}

export const emailModel = createReducer(initialState, emailModelReducerDef);
export const emailModelSearch = createReducer(initialState, emailModelSearchReducerDef);
