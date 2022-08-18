import {AnterosEntity} from "@anterostecnologia/anteros-react-mvc";
import {VehicleBrand, Company, Status} from "./types.ts";

export class VehicleBrandEntity extends AnterosEntity implements VehicleBrand {
    private _id!: number;
    private _dhVersion!: Date;
    private _company!: Company;
    private _vehicleBrand!: string;
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

    public get vehicleBrand(): string {
        return this._vehicleBrand;
    }

    public set vehicleBrand(value: string) {
        this._vehicleBrand = value;
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
