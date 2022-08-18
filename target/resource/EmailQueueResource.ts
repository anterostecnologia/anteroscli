import {version} from "./Version";
import {makeDefaultReduxObject, initialState, createReducer, AnterosRemoteResource, IAnterosApiClient, IAnterosUserService} from "@anterostecnologia/anteros-react-api2";
import {resolve, TYPE} from "../ioc/ioc";
import {EmailQueueEntity} from "../model/EmailQueueEntity";

export const EMAILQUEUE = "emailQueue";
export const EMAILQUEUE_SEARCH = "EMAILQUEUE_SEARCH";
const emailQueueReducerDef = makeDefaultReduxObject(EMAILQUEUE);
const emailQueueSearchReducerDef = makeDefaultReduxObject(EMAILQUEUE_SEARCH);

export class EmailQueueResource extends AnterosRemoteResource<EmailQueueEntity, typeof EmailQueueEntity.prototype.id> {
    constructor() {
        super(  EMAILQUEUE, `${version}/emailQueue/}`,  resolve<IAnterosApiClient>(TYPE.api_client)(),  resolve<IAnterosUserService>(TYPE.user_service)(),  undefined,  EMAILQUEUE_SEARCH);
    }
}

export const emailQueue = createReducer(initialState, emailQueueReducerDef);
export const emailQueueSearch = createReducer(initialState, emailQueueSearchReducerDef);
