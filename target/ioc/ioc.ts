import { ContainerIoc, createDecorator, createResolve, createWire } from "@anterostecnologia/anteros-react-ioc";
import { AnterosAxiosApiClient, IAnterosApiClient, UserConfig, IAnterosUserService, AnterosKeycloakUserService } from "@anterostecnologia/anteros-react-api2";
import { AuthenticationController, IAuthenticationController } from "../controller/AuthenticationController";
import { AnterosDatasourceApiAdapter as apiAdapter } from "@anterostecnologia/anteros-react-datasource";

const TYPE = { user_config: Symbol("user_config"), user_service: Symbol("user_service"), auth_controller: Symbol("auth_controller"), api_client: Symbol("api_client"), cancelationReason_controller: Symbol("cancelationReason_controller"), city_controller: Symbol("city_controller"), company_controller: Symbol("company_controller"), country_controller: Symbol("country_controller"), driver_controller: Symbol("driver_controller"), emailModel_controller: Symbol("emailModel_controller"), emailQueue_controller: Symbol("emailQueue_controller"), location_controller: Symbol("location_controller"), order_controller: Symbol("order_controller"), orderItem_controller: Symbol("orderItem_controller"), paymentMethod_controller: Symbol("paymentMethod_controller"), requestRide_controller: Symbol("requestRide_controller"), rider_controller: Symbol("rider_controller"), scheduleRide_controller: Symbol("scheduleRide_controller"), state_controller: Symbol("state_controller"), store_controller: Symbol("store_controller"), trip_controller: Symbol("trip_controller"), vehicle_controller: Symbol("vehicle_controller"), vehicleBrand_controller: Symbol("vehicleBrand_controller"), vehicleModel_controller: Symbol("vehicleModel_controller"), zone_controller: Symbol("zone_controller"), serializable_controller: Symbol("serializable_controller"), companyCity_controller: Symbol("companyCity_controller"), vehicleDocument_controller: Symbol("vehicleDocument_controller") };
const container = new ContainerIoc();
const inject = createDecorator(container);
const resolve = createResolve(container);
const wire = createWire(container);
const userConfig = new UserConfig("url", "realm", "clientId", "clientSecret", "owner");
const userService = new AnterosKeycloakUserService(userConfig);
const apiClient = new AnterosAxiosApiClient({ urlBase: "url_api" }, userService);
apiAdapter.changeApi(apiClient.getClient())
container.bind<UserConfig>(TYPE.user_config).toValue(userConfig)
