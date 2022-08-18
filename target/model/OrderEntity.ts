import {AnterosEntity} from "@anterostecnologia/anteros-react-mvc";
import {Order, Company, Location, Store, Vehicle, Driver, OrderStatus} from "./types.ts";

export class OrderEntity extends AnterosEntity implements Order {
    private _id!: number;
    private _dhVersion!: Date;
    private _company!: Company;
    private _location!: Location;
    private _store!: Store;
    private _dhOrder!: Date;
    private _pickupLocation!: string;
    private _pickupLatitude!: string;
    private _pickupLongitude!: string;
    private _deliveryLocation!: string;
    private _deliveryLatitude!: string;
    private _deliveryLongitude!: string;
    private _totalTime!: number;
    private _totalKm!: number;
    private _pickupPath!: any;
    private _deliveryPath!: any;
    private _description!: string;
    private _informationDriver!: any;
    private _vehicle!: Vehicle;
    private _driver!: Driver;
    private _amountProducts!: number;
    private _deliveryFee!: number;
    private _totalOrderAmount!: number;
    private _dhStatus!: Date;
    private _status!: OrderStatus;
    private _code!: string;
    private _createdAt!: Date;
    private _updatedAt!: Date;
    private _items!: OrderItem[];

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

    public get location(): Location {
        return this._location;
    }

    public set location(value: Location) {
        this._location = value;
    }

    public get store(): Store {
        return this._store;
    }

    public set store(value: Store) {
        this._store = value;
    }

    public get dhOrder(): Date {
        return this._dhOrder;
    }

    public set dhOrder(value: Date) {
        this._dhOrder = value;
    }

    public get pickupLocation(): string {
        return this._pickupLocation;
    }

    public set pickupLocation(value: string) {
        this._pickupLocation = value;
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

    public get deliveryLocation(): string {
        return this._deliveryLocation;
    }

    public set deliveryLocation(value: string) {
        this._deliveryLocation = value;
    }

    public get deliveryLatitude(): string {
        return this._deliveryLatitude;
    }

    public set deliveryLatitude(value: string) {
        this._deliveryLatitude = value;
    }

    public get deliveryLongitude(): string {
        return this._deliveryLongitude;
    }

    public set deliveryLongitude(value: string) {
        this._deliveryLongitude = value;
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

    public get pickupPath(): any {
        return this._pickupPath;
    }

    public set pickupPath(value: any) {
        this._pickupPath = value;
    }

    public get deliveryPath(): any {
        return this._deliveryPath;
    }

    public set deliveryPath(value: any) {
        this._deliveryPath = value;
    }

    public get description(): string {
        return this._description;
    }

    public set description(value: string) {
        this._description = value;
    }

    public get informationDriver(): any {
        return this._informationDriver;
    }

    public set informationDriver(value: any) {
        this._informationDriver = value;
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

    public get amountProducts(): number {
        return this._amountProducts;
    }

    public set amountProducts(value: number) {
        this._amountProducts = value;
    }

    public get deliveryFee(): number {
        return this._deliveryFee;
    }

    public set deliveryFee(value: number) {
        this._deliveryFee = value;
    }

    public get totalOrderAmount(): number {
        return this._totalOrderAmount;
    }

    public set totalOrderAmount(value: number) {
        this._totalOrderAmount = value;
    }

    public get dhStatus(): Date {
        return this._dhStatus;
    }

    public set dhStatus(value: Date) {
        this._dhStatus = value;
    }

    public get status(): OrderStatus {
        return this._status;
    }

    public set status(value: OrderStatus) {
        this._status = value;
    }

    public get code(): string {
        return this._code;
    }

    public set code(value: string) {
        this._code = value;
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

    public get items(): OrderItem[] {
        return this._items;
    }

    public set items(value: OrderItem[]) {
        this._items = value;
    }
}
