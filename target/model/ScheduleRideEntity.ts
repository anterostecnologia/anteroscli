import {AnterosEntity} from "@anterostecnologia/anteros-react-mvc";
import {ScheduleRide, Company, Location, Vehicle, Driver, BookingType, ScheduleStatus, PaymentMethod, CancelationReason} from "./types.ts";

export class ScheduleRideEntity extends AnterosEntity implements ScheduleRide {
    private _id!: number;
    private _dhVersion!: Date;
    private _company!: Company;
    private _scheduleDate!: Date;
    private _location!: Location;
    private _pickupLatitude!: string;
    private _pickupLongitude!: string;
    private _dropLatitude!: string;
    private _dropLongitude!: string;
    private _pickupLocation!: string;
    private _dropLocation!: string;
    private _tripPath!: any;
    private _seats!: number;
    private _vehicle!: Vehicle;
    private _driver!: Driver;
    private _bookingType!: BookingType;
    private _status!: ScheduleStatus;
    private _paymentMethod!: PaymentMethod;
    private _fareEstimation!: string;
    private _createdAt!: Date;
    private _updatedAt!: Date;
    private _code!: string;
    private _reasonForCancellation!: CancelationReason;
    private _dhCancellation!: Date;

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

    public get scheduleDate(): Date {
        return this._scheduleDate;
    }

    public set scheduleDate(value: Date) {
        this._scheduleDate = value;
    }

    public get location(): Location {
        return this._location;
    }

    public set location(value: Location) {
        this._location = value;
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

    public get tripPath(): any {
        return this._tripPath;
    }

    public set tripPath(value: any) {
        this._tripPath = value;
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

    public get bookingType(): BookingType {
        return this._bookingType;
    }

    public set bookingType(value: BookingType) {
        this._bookingType = value;
    }

    public get status(): ScheduleStatus {
        return this._status;
    }

    public set status(value: ScheduleStatus) {
        this._status = value;
    }

    public get paymentMethod(): PaymentMethod {
        return this._paymentMethod;
    }

    public set paymentMethod(value: PaymentMethod) {
        this._paymentMethod = value;
    }

    public get fareEstimation(): string {
        return this._fareEstimation;
    }

    public set fareEstimation(value: string) {
        this._fareEstimation = value;
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

    public get reasonForCancellation(): CancelationReason {
        return this._reasonForCancellation;
    }

    public set reasonForCancellation(value: CancelationReason) {
        this._reasonForCancellation = value;
    }

    public get dhCancellation(): Date {
        return this._dhCancellation;
    }

    public set dhCancellation(value: Date) {
        this._dhCancellation = value;
    }
}
