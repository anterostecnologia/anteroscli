import {IAnterosRemoteResource} from "@anterostecnologia/anteros-react-api2";
import {AnterosController} from "@anterostecnologia/anteros-react-mvc";
import {resolve, TYPE} from "../ioc/ioc";
import {PaymentMethodEntity} from "../model/PaymentMethodEntity";
import {PaymentMethodResource} from "../resource/PaymentMethodResource";
import {AUTHENTICATION_REDUCER, LAYOUT_REDUCER} from "../store/store";

export class PaymentMethodController extends AnterosController<PaymentMethodEntity, typeof PaymentMethodEntity.prototype.id> {
    public getResource(): IAnterosRemoteResource<PaymentMethodEntity, any> {
        return resolve<PaymentMethodResource>(TYPE.paymentMethod_resource)();
    }

    public getAuthenticationReducerName(): string {
        return AUTHENTICATION_REDUCER;
    }

    public getLayoutReducerName(): string {
        return LAYOUT_REDUCER;
    }
}
