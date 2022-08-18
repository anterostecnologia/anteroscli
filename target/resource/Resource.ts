import { cancelationReason, cancelationReasonSearch } from "./CancelationReasonResource";
import { city, citySearch } from "./CityResource";
import { companyCity, companyCitySearch } from "./CompanyCityResource";
import { company, companySearch } from "./CompanyResource";
import { country, countrySearch } from "./CountryResource";
import { driver, driverSearch } from "./DriverResource";
import { emailModel, emailModelSearch } from "./EmailModelResource";
import { emailQueue, emailQueueSearch } from "./EmailQueueResource";
import { location, locationSearch } from "./LocationResource";
import { orderItem, orderItemSearch } from "./OrderItemResource";
import { order, orderSearch } from "./OrderResource";
import { paymentMethod, paymentMethodSearch } from "./PaymentMethodResource";
import { requestRide, requestRideSearch } from "./RequestRideResource";
import { rider, riderSearch } from "./RiderResource";
import { scheduleRide, scheduleRideSearch } from "./ScheduleRideResource";
import { serializable, serializableSearch } from "./SerializableResource";
import { state, stateSearch } from "./StateResource";
import { store, storeSearch } from "./StoreResource";
import { trip, tripSearch } from "./TripResource";
import { vehicleBrand, vehicleBrandSearch } from "./VehicleBrandResource";
import { vehicleDocument, vehicleDocumentSearch } from "./VehicleDocumentResource";
import { vehicleModel, vehicleModelSearch } from "./VehicleModelResource";
import { vehicle, vehicleSearch } from "./VehicleResource";
import { zone, zoneSearch } from "./ZoneResource";

export function getAllReducersFromResources() {
    return {cancelationReason, cancelationReasonSearch,
    city, citySearch,
    companyCity, companyCitySearch,
    company, companySearch,
    country, countrySearch,
    driver, driverSearch,
    emailModel, emailModelSearch,
    emailQueue, emailQueueSearch,
    location, locationSearch,
    orderItem, orderItemSearch,
    order, orderSearch,
    paymentMethod, paymentMethodSearch,
    requestRide, requestRideSearch,
    rider, riderSearch,
    scheduleRide, scheduleRideSearch,
    serializable, serializableSearch,
    state, stateSearch,
    store, storeSearch,
    trip, tripSearch,
    vehicleBrand, vehicleBrandSearch,
    vehicleDocument, vehicleDocumentSearch,
    vehicleModel, vehicleModelSearch,
    vehicle, vehicleSearch,
    zone, zoneSearch }
}
