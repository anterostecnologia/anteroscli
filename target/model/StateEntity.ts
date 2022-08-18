import {AnterosEntity} from "@anterostecnologia/anteros-react-mvc";
import {State, Company, Country} from "./types.ts";

export class StateEntity extends AnterosEntity implements State {
    private _id!: number;
    private _dhVersion!: Date;
    private _company!: Company;
    private _name!: string;
    private _initialsState!: string;
    private _country!: Country;
    private _cdState!: string;

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

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get initialsState(): string {
        return this._initialsState;
    }

    public set initialsState(value: string) {
        this._initialsState = value;
    }

    public get country(): Country {
        return this._country;
    }

    public set country(value: Country) {
        this._country = value;
    }

    public get cdState(): string {
        return this._cdState;
    }

    public set cdState(value: string) {
        this._cdState = value;
    }
}
