import {version} from "./Version";
import {makeDefaultReduxObject, initialState, createReducer, AnterosRemoteResource, IAnterosApiClient, IAnterosUserService} from "@anterostecnologia/anteros-react-api2";
import {resolve, TYPE} from "../ioc/ioc";
import {VehicleDocumentEntity} from "../model/VehicleDocumentEntity";

export const VEHICLEDOCUMENT = "vehicleDocument";
export const VEHICLEDOCUMENT_SEARCH = "VEHICLEDOCUMENT_SEARCH";
const vehicleDocumentReducerDef = makeDefaultReduxObject(VEHICLEDOCUMENT);
const vehicleDocumentSearchReducerDef = makeDefaultReduxObject(VEHICLEDOCUMENT_SEARCH);

export class VehicleDocumentResource extends AnterosRemoteResource<VehicleDocumentEntity, typeof VehicleDocumentEntity.prototype.id> {
    constructor() {
        super(  VEHICLEDOCUMENT, `${version}/vehicleDocument/}`,  resolve<IAnterosApiClient>(TYPE.api_client)(),  resolve<IAnterosUserService>(TYPE.user_service)(),  undefined,  VEHICLEDOCUMENT_SEARCH);
    }
}

export const vehicleDocument = createReducer(initialState, vehicleDocumentReducerDef);
export const vehicleDocumentSearch = createReducer(initialState, vehicleDocumentSearchReducerDef);
