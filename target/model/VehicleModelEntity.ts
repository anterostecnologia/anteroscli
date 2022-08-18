import {AnterosEntity} from "@anterostecnologia/anteros-react-mvc";
import {VehicleModel, Company, VehicleBrand, Status} from "./types.ts";

export class VehicleModelEntity extends AnterosEntity implements VehicleModel {
    private _id!: number;
    private _dhVersion!: Date;
    private _company!: Company;
    private _brand!: VehicleBrand;
    private _vehicleModel!: string;
    private _status!: Status;
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

    public get brand(): VehicleBrand {
        return this._brand;
    }

    public set brand(value: VehicleBrand) {
        this._brand = value;
    }

    public get vehicleModel(): string {
        return this._vehicleModel;
    }

    public set vehicleModel(value: string) {
        this._vehicleModel = value;
    }

    public get status(): Status {
        return this._status;
    }

    public set status(value: Status) {
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
