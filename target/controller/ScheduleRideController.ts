import {IAnterosRemoteResource} from "@anterostecnologia/anteros-react-api2";
import {AnterosController} from "@anterostecnologia/anteros-react-mvc";
import {resolve, TYPE} from "../ioc/ioc";
import {ScheduleRideEntity} from "../model/ScheduleRideEntity";
import {ScheduleRideResource} from "../resource/ScheduleRideResource";
import {AUTHENTICATION_REDUCER, LAYOUT_REDUCER} from "../store/store";

export class ScheduleRideController extends AnterosController<ScheduleRideEntity, typeof ScheduleRideEntity.prototype.id> {
    public getResource(): IAnterosRemoteResource<ScheduleRideEntity, any> {
        return resolve<ScheduleRideResource>(TYPE.scheduleRide_resource)();
    }

    public getAuthenticationReducerName(): string {
        return AUTHENTICATION_REDUCER;
    }

    public getLayoutReducerName(): string {
        return LAYOUT_REDUCER;
    }
}
