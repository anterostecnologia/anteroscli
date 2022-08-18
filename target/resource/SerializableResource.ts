import {version} from "./Version";
import {makeDefaultReduxObject, initialState, createReducer, AnterosRemoteResource, IAnterosApiClient, IAnterosUserService} from "@anterostecnologia/anteros-react-api2";
import {resolve, TYPE} from "../ioc/ioc";
import {SerializableEntity} from "../model/SerializableEntity";

export const SERIALIZABLE = "serializable";
export const SERIALIZABLE_SEARCH = "SERIALIZABLE_SEARCH";
const serializableReducerDef = makeDefaultReduxObject(SERIALIZABLE);
const serializableSearchReducerDef = makeDefaultReduxObject(SERIALIZABLE_SEARCH);

export class SerializableResource extends AnterosRemoteResource<SerializableEntity, typeof SerializableEntity.prototype.id> {
    constructor() {
        super(  SERIALIZABLE, `${version}/serializable/}`,  resolve<IAnterosApiClient>(TYPE.api_client)(),  resolve<IAnterosUserService>(TYPE.user_service)(),  undefined,  SERIALIZABLE_SEARCH);
    }
}

export const serializable = createReducer(initialState, serializableReducerDef);
export const serializableSearch = createReducer(initialState, serializableSearchReducerDef);
