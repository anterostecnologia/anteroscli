import {AnterosEntity} from "@anterostecnologia/anteros-react-mvc";
import {Trip, Company, Vehicle, RequestRide, Driver, PaymentStatus, TripStatus} from "./types.ts";

export class TripEntity extends AnterosEntity implements Trip {
    private _id!: number;
    private _company!: Company;
    private _dhVersion!: Date;
    private _dhTrip!: Date;
    private _pickupLatitude!: string;
    private _pickupLongitude!: string;
    private _dropLatitude!: string;
    private _dropLongitude!: string;
    private _pickupLocation!: string;
    private _dropLocation!: string;
    private _vehicle!: Vehicle;
    private _request!: RequestRide;
    private _driver!: Driver;
    private _tripPath!: any;
    private _mapImage!: any;
    private _seats!: number;
    private _totalTime!: number;
    private _totalKm!: number;
    private _timeFare!: number;
    private _distanceFare!: number;
    private _baseFare!: number;
    private _peakFare!: number;
    private _scheduleFare!: number;
    private _accessFee!: number;
    private _waitingCharge!: number;
    private _walletAmount!: number;
    private _promoAmount!: number;
    private _totalFare!: number;
    private _driverPayout!: number;
    private _driverOrCompanyCommission!: number;
    private _oweAmount!: number;
    private _arriveTime!: Date;
    private _beginTrip!: Date;
    private _endTrip!: Date;
    private _payKey!: string;
    private _paymentMode!: string;
    private _paymentStatus!: PaymentStatus;
    private _fareEstimation!: string;
    private _status!: TripStatus;
    private _otp!: string;
    private _createdAt!: Date;
    private _updatedAt!: Date;
    private _code!: string;

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get company(): Company {
        return this._company;
    }

    public set company(value: Company) {
        this._company = value;
    }

    public get dhVersion(): Date {
        return this._dhVersion;
    }

    public set dhVersion(value: Date) {
        this._dhVersion = value;
    }

    public get dhTrip(): Date {
        return this._dhTrip;
    }

    public set dhTrip(value: Date) {
        this._dhTrip = value;
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

    public get vehicle(): Vehicle {
        return this._vehicle;
    }

    public set vehicle(value: Vehicle) {
        this._vehicle = value;
    }

    public get request(): RequestRide {
        return this._request;
    }

    public set request(value: RequestRide) {
        this._request = value;
    }

    public get driver(): Driver {
        return this._driver;
    }

    public set driver(value: Driver) {
        this._driver = value;
    }

    public get tripPath(): any {
        return this._tripPath;
    }

    public set tripPath(value: any) {
        this._tripPath = value;
    }

    public get mapImage(): any {
        return this._mapImage;
    }

    public set mapImage(value: any) {
        this._mapImage = value;
    }

    public get seats(): number {
        return this._seats;
    }

    public set seats(value: number) {
        this._seats = value;
    }

    public get totalTime(): number {
        return this._totalTime;
    }

    public set totalTime(value: number) {
        this._totalTime = value;
    }

    public get totalKm(): number {
        return this._totalKm;
    }

    public set totalKm(value: number) {
        this._totalKm = value;
    }

    public get timeFare(): number {
        return this._timeFare;
    }

    public set timeFare(value: number) {
        this._timeFare = value;
    }

    public get distanceFare(): number {
        return this._distanceFare;
    }

    public set distanceFare(value: number) {
        this._distanceFare = value;
    }

    public get baseFare(): number {
        return this._baseFare;
    }

    public set baseFare(value: number) {
        this._baseFare = value;
    }

    public get peakFare(): number {
        return this._peakFare;
    }

    public set peakFare(value: number) {
        this._peakFare = value;
    }

    public get scheduleFare(): number {
        return this._scheduleFare;
    }

    public set scheduleFare(value: number) {
        this._scheduleFare = value;
    }

    public get accessFee(): number {
        return this._accessFee;
    }

    public set accessFee(value: number) {
        this._accessFee = value;
    }

    public get waitingCharge(): number {
        return this._waitingCharge;
    }

    public set waitingCharge(value: number) {
        this._waitingCharge = value;
    }

    public get walletAmount(): number {
        return this._walletAmount;
    }

    public set walletAmount(value: number) {
        this._walletAmount = value;
    }

    public get promoAmount(): number {
        return this._promoAmount;
    }

    public set promoAmount(value: number) {
        this._promoAmount = value;
    }

    public get totalFare(): number {
        return this._totalFare;
    }

    public set totalFare(value: number) {
        this._totalFare = value;
    }

    public get driverPayout(): number {
        return this._driverPayout;
    }

    public set driverPayout(value: number) {
        this._driverPayout = value;
    }

    public get driverOrCompanyCommission(): number {
        return this._driverOrCompanyCommission;
    }

    public set driverOrCompanyCommission(value: number) {
        this._driverOrCompanyCommission = value;
    }

    public get oweAmount(): number {
        return this._oweAmount;
    }

    public set oweAmount(value: number) {
        this._oweAmount = value;
    }

    public get arriveTime(): Date {
        return this._arriveTime;
    }

    public set arriveTime(value: Date) {
        this._arriveTime = value;
    }

    public get beginTrip(): Date {
        return this._beginTrip;
    }

    public set beginTrip(value: Date) {
        this._beginTrip = value;
    }

    public get endTrip(): Date {
        return this._endTrip;
    }

    public set endTrip(value: Date) {
        this._endTrip = value;
    }

    public get payKey(): string {
        return this._payKey;
    }

    public set payKey(value: string) {
        this._payKey = value;
    }

    public get paymentMode(): string {
        return this._paymentMode;
    }

    public set paymentMode(value: string) {
        this._paymentMode = value;
    }

    public get paymentStatus(): PaymentStatus {
        return this._paymentStatus;
    }

    public set paymentStatus(value: PaymentStatus) {
        this._paymentStatus = value;
    }

    public get fareEstimation(): string {
        return this._fareEstimation;
    }

    public set fareEstimation(value: string) {
        this._fareEstimation = value;
    }

    public get status(): TripStatus {
        return this._status;
    }

    public set status(value: TripStatus) {
        this._status = value;
    }

    public get otp(): string {
        return this._otp;
    }

    public set otp(value: string) {
        this._otp = value;
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
