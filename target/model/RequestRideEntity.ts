import {AnterosEntity} from "@anterostecnologia/anteros-react-mvc";
import {RequestRide, Company, Vehicle, Driver, PaymentMethod, ScheduleRide, Location, Rider, AdditionalFare, RequestStatus} from "./types.ts";

export class RequestRideEntity extends AnterosEntity implements RequestRide {
    private _id!: number;
    private _dhVersion!: Date;
    private _company!: Company;
    private _pickupLatitude!: string;
    private _pickupLongitude!: string;
    private _dropLatitude!: string;
    private _dropLongitude!: string;
    private _pickupLocation!: string;
    private _dropLocation!: string;
    private _seats!: number;
    private _vehicle!: Vehicle;
    private _driver!: Driver;
    private _paymentMethod!: PaymentMethod;
    private _scheduleRide!: ScheduleRide;
    private _location!: Location;
    private _rider!: Rider;
    private _dhRequest!: Date;
    private _additionalFare!: AdditionalFare;
    private _peakFare!: number;
    private _tripPath!: any;
    private _status!: RequestStatus;
    private _createdAt!: Date;
    private _updatedAt!: Date;
    private _code!: string;

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get dhVersion(): Date {
        return this._dhVersion;
    }

    public set dhVersion(value: Date) {
        this._dhVersion = value;
    }

    public get company(): Company {
        return this._company;
    }

    public set company(value: Company) {
        this._company = value;
    }

    public get pickupLatitude(): string {
        return this._pickupLatitude;
    }

    public set pickupLatitude(value: string) {
        this._pickupLatitude = value;
    }

    public get pickupLongitude(): string {
        return this._pickupLongitude;
    }

    public set pickupLongitude(value: string) {
        this._pickupLongitude = value;
    }

    public get dropLatitude(): string {
        return this._dropLatitude;
    }

    public set dropLatitude(value: string) {
        this._dropLatitude = value;
    }

    public get dropLongitude(): string {
        return this._dropLongitude;
    }

    public set dropLongitude(value: string) {
        this._dropLongitude = value;
    }

    public get pickupLocation(): string {
        return this._pickupLocation;
    }

    public set pickupLocation(value: string) {
        this._pickupLocation = value;
    }

    public get dropLocation(): string {
        return this._dropLocation;
    }

    public set dropLocation(value: string) {
        this._dropLocation = value;
    }

    public get seats(): number {
        return this._seats;
    }

    public set seats(value: number) {
        this._seats = value;
    }

    public get vehicle(): Vehicle {
        return this._vehicle;
    }

    public set vehicle(value: Vehicle) {
        this._vehicle = value;
    }

    public get driver(): Driver {
        return this._driver;
    }

    public set driver(value: Driver) {
        this._driver = value;
    }

    public get paymentMethod(): PaymentMethod {
        return this._paymentMethod;
    }

    public set paymentMethod(value: PaymentMethod) {
        this._paymentMethod = value;
    }

    public get scheduleRide(): ScheduleRide {
        return this._scheduleRide;
    }

    public set scheduleRide(value: ScheduleRide) {
        this._scheduleRide = value;
    }

    public get location(): Location {
        return this._location;
    }

    public set location(value: Location) {
        this._location = value;
    }

    public get rider(): Rider {
        return this._rider;
    }

    public set rider(value: Rider) {
        this._rider = value;
    }

    public get dhRequest(): Date {
        return this._dhRequest;
    }

    public set dhRequest(value: Date) {
        this._dhRequest = value;
    }

    public get additionalFare(): AdditionalFare {
        return this._additionalFare;
    }

    public set additionalFare(value: AdditionalFare) {
        this._additionalFare = value;
    }

    public get peakFare(): number {
        return this._peakFare;
    }

    public set peakFare(value: number) {
        this._peakFare = value;
    }

    public get tripPath(): any {
        return this._tripPath;
    }

    public set tripPath(value: any) {
        this._tripPath = value;
    }

    public get status(): RequestStatus {
        return this._status;
    }

    public set status(value: RequestStatus) {
        this._status = value;
    }

    public get createdAt(): Date {
        return this._createdAt;
    }

    public set createdAt(value: Date) {
        this._createdAt = value;
    }

    public get updatedAt(): Date {
        return this._updatedAt;
    }

    public set updatedAt(value: Date) {
        this._updatedAt = value;
    }

    public get code(): string {
        return this._code;
    }

    public set code(value: string) {
        this._code = value;
    }
}
