import {AnterosEntity} from "@anterostecnologia/anteros-react-mvc";
import {Vehicle, Company, VehicleModel, Driver, Status} from "./types.ts";

export class VehicleEntity extends AnterosEntity implements Vehicle {
    private _id!: number;
    private _dhVersion!: Date;
    private _company!: Company;
    private _vehicleName!: string;
    private _vehicleYear!: string;
    private _vehicleColor!: string;
    private _vehiclePlate!: string;
    private _vehicleModel!: VehicleModel;
    private _imageProfile!: any;
    private _driver!: Driver;
    private _status!: Status;
    private _code!: string;
    private _createdAt!: Date;
    private _updatedAt!: Date;
    private _documents!: VehicleDocument[];

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

    public get vehicleName(): string {
        return this._vehicleName;
    }

    public set vehicleName(value: string) {
        this._vehicleName = value;
    }

    public get vehicleYear(): string {
        return this._vehicleYear;
    }

    public set vehicleYear(value: string) {
        this._vehicleYear = value;
    }

    public get vehicleColor(): string {
        return this._vehicleColor;
    }

    public set vehicleColor(value: string) {
        this._vehicleColor = value;
    }

    public get vehiclePlate(): string {
        return this._vehiclePlate;
    }

    public set vehiclePlate(value: string) {
        this._vehiclePlate = value;
    }

    public get vehicleModel(): VehicleModel {
        return this._vehicleModel;
    }

    public set vehicleModel(value: VehicleModel) {
        this._vehicleModel = value;
    }

    public get imageProfile(): any {
        return this._imageProfile;
    }

    public set imageProfile(value: any) {
        this._imageProfile = value;
    }

    public get driver(): Driver {
        return this._driver;
    }

    public set driver(value: Driver) {
        this._driver = value;
    }

    public get status(): Status {
        return this._status;
    }

    public set status(value: Status) {
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

    public get documents(): VehicleDocument[] {
        return this._documents;
    }

    public set documents(value: VehicleDocument[]) {
        this._documents = value;
    }
}
