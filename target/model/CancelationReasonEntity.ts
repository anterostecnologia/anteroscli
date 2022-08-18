import {AnterosEntity} from "@anterostecnologia/anteros-react-mvc";
import {CancelationReason, Company} from "./types.ts";

export class CancelationReasonEntity extends AnterosEntity implements CancelationReason {
    private _id!: number;
    private _dhVersion!: Date;
    private _company!: Company;
    private _description!: string;
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

    public get description(): string {
        return this._description;
    }

    public set description(value: string) {
        this._description = value;
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
