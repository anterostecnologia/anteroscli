import {AnterosEntity} from "@anterostecnologia/anteros-react-mvc";
import {Location, Company} from "./types.ts";

export class LocationEntity extends AnterosEntity implements Location {
    private _id!: number;
    private _company!: Company;
    private _dhVersion!: Date;
    private _name!: string;
    private _coordinates!: any;
    private _code!: string;
    private _createdAt!: Date;
    private _updatedAt!: Date;

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

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get coordinates(): any {
        return this._coordinates;
    }

    public set coordinates(value: any) {
        this._coordinates = value;
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
}
