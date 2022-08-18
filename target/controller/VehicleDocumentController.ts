import {IAnterosRemoteResource} from "@anterostecnologia/anteros-react-api2";
import {AnterosController} from "@anterostecnologia/anteros-react-mvc";
import {resolve, TYPE} from "../ioc/ioc";
import {VehicleDocumentEntity} from "../model/VehicleDocumentEntity";
import {VehicleDocumentResource} from "../resource/VehicleDocumentResource";
import {AUTHENTICATION_REDUCER, LAYOUT_REDUCER} from "../store/store";

export class VehicleDocumentController extends AnterosController<VehicleDocumentEntity, typeof VehicleDocumentEntity.prototype.id> {
    public getResource(): IAnterosRemoteResource<VehicleDocumentEntity, any> {
        return resolve<VehicleDocumentResource>(TYPE.vehicleDocument_resource)();
    }

    public getAuthenticationReducerName(): string {
        return AUTHENTICATION_REDUCER;
    }

    public getLayoutReducerName(): string {
        return LAYOUT_REDUCER;
    }
}
